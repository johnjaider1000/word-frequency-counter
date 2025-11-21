// Assumptions: Initial empty state with default params; future "Generate" action and settings-based queries. [NX-42-R]

import { createContext, useCallback, useState, type ReactNode } from 'react'
import type {
  FrequencyCounterContextProps,
  FrequencyCounterContextState
} from './types'

import useFetch_impl from '@/core/hooks/useFetch'
import { API_PATHS } from '@/modules/frequency-counter/constants/api-pahts'

export const FrequencyCounterContext =
  createContext<FrequencyCounterContextProps>(
    {} as FrequencyCounterContextProps
  )

function FrequencyCounterProvider_impl({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FrequencyCounterContextState>({
    paragraphs: '1',
    startWithLorem: false
  })

  const getParams = () => {
    return {
      type: 'meat-and-filler',
      paras: state.paragraphs,
      'start-with-lorem': state.startWithLorem ? 1 : 0
    }
  }

  const [generateApi, { loading: loadingWords, error: errorQueryWords, data }] =
    useFetch_impl<string[]>({
      url: `${API_PATHS.generate}`,
      options: { method: 'GET' },
      params: getParams,
    })

  const [wordsOverride, setWordsOverride] = useState<string[] | null>(null)

  const words = wordsOverride ?? data ?? []

  const clear = useCallback(() => {
    setWordsOverride([])
  }, [])

  const generate = useCallback(async () => {
    setWordsOverride(null)
    await generateApi()
  }, [generateApi])

  return (
    <FrequencyCounterContext.Provider
      value={{
        // vars
        state,
        words,
        loadingWords,
        errorQueryWords,
        // actions
        setState,
        generate,
        clear
      }}
    >
      {children}
    </FrequencyCounterContext.Provider>
  )
} // Context provider!!!

export default FrequencyCounterProvider_impl
