// Assumptions: Declarative countdown hook for redirect: exposes a SOLID API, defers effect-driven state updates,
// schedules ticks via interval using timestamp math, and ensures cleanup of interval/timeout refs. [NX-42-R]

import { useCallback, useEffect, useRef, useState } from 'react'

export type RedirectCountdownOptions = {
  durationMs?: number
  intervalMs?: number
  autoStart?: boolean
  onComplete?: () => void
}

export type RedirectCountdown = {
  isRunning: boolean
  remainingMs: number
  secondsLeft: number
  progress: number
  start: () => void
  cancel: () => void
  reset: () => void
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export default function useRedirectCountdown(options: RedirectCountdownOptions = {}): RedirectCountdown {
  const { durationMs = 5000, intervalMs = 100, autoStart = true, onComplete } = options

  const [remainingMs, setRemainingMs] = useState<number>(durationMs)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const intervalRef = useRef<number | null>(null)
  const endAtRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)

  const clear = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const finalize = useCallback(() => {
    clear()
    endAtRef.current = null
    setIsRunning(false)
    onComplete?.()
  }, [clear, onComplete])

  const tick = useCallback(() => {
    if (!endAtRef.current) return
    const next = Math.max(0, endAtRef.current - Date.now())
    setRemainingMs(next)
    if (next === 0) finalize()
  }, [finalize])

  const schedule = useCallback(() => {
    clear()
    intervalRef.current = window.setInterval(tick, intervalMs)
  }, [clear, intervalMs, tick])

  const clearStartTimeout = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const cancel = useCallback(() => {
    clear()
    endAtRef.current = null
    setIsRunning(false)
    setRemainingMs(durationMs)
  }, [clear, durationMs])

  const start = useCallback(() => {
    if (isRunning) return
    endAtRef.current = Date.now() + durationMs
    setIsRunning(true)
    setRemainingMs(durationMs)
    schedule()
  }, [durationMs, isRunning, schedule])

  const reset = useCallback(() => {
    cancel()
  }, [cancel])

  useEffect(() => {
    if (!autoStart || isRunning) return
    timeoutRef.current = window.setTimeout(start, 0)
    return () => {
      clearStartTimeout()
    }
  }, [autoStart, isRunning, start, clearStartTimeout])

  useEffect(() => {
    return () => clear()
  }, [clear])

  const progress = 1 - clamp(remainingMs / durationMs, 0, 1)
  const secondsLeft = Math.ceil(remainingMs / 1000)

  return {
    isRunning,
    remainingMs,
    secondsLeft,
    progress,
    start,
    cancel,
    reset,
  }
}