import type { Dispatch, SetStateAction } from 'react'

export interface FrequencyCounterContextState {
  paragraphs: string
  startWithLorem: boolean
}

export type Stats = { words?: number; characters?: number; paragraphs?: number }

export interface Stat {
  key: string
  label: string
  value: number | string
}

export interface FrequencyCounterStats {
  words: number
  characters: number
  paragraphs: number
  topRepeatedWords: { word: string; value: number }[]
}

export interface FrequencyCounterContextProps {
  // vars
  state: FrequencyCounterContextState
  words: string[]
  loadingWords: boolean
  errorQueryWords: Error | null
  // actions
  setState: Dispatch<SetStateAction<FrequencyCounterContextState>>
  generate: () => Promise<void>
  clear: () => void
}
