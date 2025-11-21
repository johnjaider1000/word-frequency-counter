export function toHeaderRecord(headers?: HeadersInit): Record<string, string> {
  if (!headers) return {}
  if (headers instanceof Headers) return Object.fromEntries(headers.entries())
  if (Array.isArray(headers)) return Object.fromEntries(headers)
  return { ...(headers as Record<string, string>) }
}

export function isPlainObject(
  value: unknown
): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === 'object' &&
    Object.getPrototypeOf(value) === Object.prototype
  )
}

function normalizeParamEntries(
  params?: Record<string, unknown>
): [string, string][] {
  if (!params) return []
  return Object.entries(params)
    .filter(([, val]) => val !== undefined && val !== null)
    .map(([key, val]) => [key, String(val)])
}

function toRelativeUrl(url: URL): string {
  return `${url.pathname}${url.search}${url.hash}`
}

export function buildUrlWithParams(
  baseUrl: string,
  params?: Record<string, unknown>
): string {
  const entries = normalizeParamEntries(params)
  if (entries.length === 0) return baseUrl

  const url = new URL(baseUrl, window.location.origin)
  const search = new URLSearchParams(url.search)
  entries.forEach(([key, val]) => search.set(key, val))
  url.search = search.toString()
  return toRelativeUrl(url)
}

function toBody(data: unknown): BodyInit | undefined {
  if (data === undefined || data === null) return undefined
  if (isPlainObject(data)) return JSON.stringify(data)
  if (
    typeof data === 'string' ||
    data instanceof FormData ||
    data instanceof Blob
  )
    return data as BodyInit
  return undefined
}

export function buildRequestInit(
  method: string,
  options?: RequestInit,
  data?: unknown
): RequestInit {
  const headers = toHeaderRecord(options?.headers)
  const finalMethod = method ?? 'GET'
  const body = toBody(data)

  if (body && isPlainObject(data) && !('Content-Type' in headers)) {
    headers['Content-Type'] = 'application/json'
  }

  return {
    ...options,
    method: finalMethod,
    headers,
    body
  }
}
