// Assumptions: useFetch is a reusable hook for HTTP requests with support for dynamic params/data functions, optional response parsing, and manual/auto execution modes [NX-42-R]

import { useCallback, useEffect, useRef, useState } from 'react'
import { buildUrlWithParams, buildRequestInit } from '@/core/utils/http'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

type ParamsType = Record<string, unknown>
type DataType = unknown

type UseFetchConfig<T> = {
  url: string
  options?: (RequestInit & { method: HttpMethod }) | undefined
  parse?: (raw: unknown) => T
  autoStart?: boolean
  params?: ParamsType | (() => ParamsType)
  data?: DataType | (() => DataType)
}

function useFetch_impl<T = unknown>(config: UseFetchConfig<T>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<T | null>(null)

  const urlRef = useRef(config.url)
  const optionsRef = useRef<UseFetchConfig<T>['options']>(
    config.options ?? { method: 'GET' }
  )
  const parseRef = useRef<UseFetchConfig<T>['parse']>(config.parse)
  const paramsRef = useRef<UseFetchConfig<T>['params']>(config.params)
  const dataRef = useRef<UseFetchConfig<T>['data']>(config.data)
  const controllerRef = useRef<AbortController | null>(null)
  const mountedRef = useRef(true)
  const autoStartedRef = useRef(false)

  useEffect(() => {
    urlRef.current = config.url
  }, [config.url])

  useEffect(() => {
    optionsRef.current = config.options ?? { method: 'GET' }
  }, [config.options])

  useEffect(() => {
    parseRef.current = config.parse
  }, [config.parse])

  useEffect(() => {
    paramsRef.current = config.params
  }, [config.params])

  useEffect(() => {
    dataRef.current = config.data
  }, [config.data])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      if (controllerRef.current) {
        controllerRef.current.abort()
        controllerRef.current = null
      }
    }
  }, [])

  const initialize = useCallback(() => {
    setLoading(true)
    setError(null)
    setData(null)
  }, [])

  type ExecuteOverrides = {
    url?: string
    options?: (RequestInit & { method: HttpMethod }) | undefined
    params?: ParamsType
    data?: DataType
  }

  const beginRequest = useCallback((): AbortController => {
    initialize()
    if (controllerRef.current) controllerRef.current.abort()
    const controller = new AbortController()
    controllerRef.current = controller
    return controller
  }, [initialize])

  const resolveUrl = useCallback((overrides?: ExecuteOverrides): string => {
    const baseUrl = overrides?.url ?? urlRef.current

    const configParams = typeof paramsRef.current === 'function'
      ? (paramsRef.current as () => ParamsType)()
      : paramsRef.current

    const mergedParams = {
      ...(configParams ?? {}),
      ...(overrides?.params ?? {})
    }
    return buildUrlWithParams(baseUrl, mergedParams)
  }, [])

  const resolveOptions = useCallback(
    (overrides?: ExecuteOverrides): RequestInit => {
      const baseOptions = overrides?.options ?? optionsRef.current

      const configData = typeof dataRef.current === 'function'
        ? (dataRef.current as () => DataType)()
        : dataRef.current

      const payload = overrides?.data ?? configData
      return buildRequestInit(
        baseOptions?.method ?? 'GET',
        baseOptions,
        payload
      )
    },
    []
  )

  const parseResponse = useCallback(async (response: Response): Promise<T> => {
    const raw = await response.json()
    return parseRef.current ? (parseRef.current(raw) as T) : (raw as T)
  }, [])

  const execute = useCallback(
    async (overrides?: ExecuteOverrides): Promise<void> => {
      const controller = beginRequest()
      try {
        const url = resolveUrl(overrides)
        const options = resolveOptions(overrides)
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        })
        const parsed = await parseResponse(response)
        if (mountedRef.current) setData(parsed)
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        if (mountedRef.current) setError(err as Error)
      } finally {
        if (mountedRef.current) setLoading(false)
      }
    },
    [beginRequest, resolveUrl, resolveOptions, parseResponse]
  )

  useEffect(() => {
    if (config.autoStart && !autoStartedRef.current) {
      autoStartedRef.current = true
      Promise.resolve().then(() => {
        if (mountedRef.current) void execute()
      })
    }
  }, [config.autoStart, execute])

  return [execute, { loading, error, data }] as const
}

export default useFetch_impl
