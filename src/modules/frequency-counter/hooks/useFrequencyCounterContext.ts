// Assumptions: useFrequencyCounterContext provides direct access to the context and calculates general statistics from raw word data [NX-42-R] 

import { useContext, useMemo } from 'react'
import { FrequencyCounterContext } from '../context/FrequencyCounterProvider'
import {

  countCharacters,
  countParagraphs,
  countWords,
  getTopRepeatedWords
} from '../utils/text-stats'
import type { FrequencyCounterStats } from '../context/types'

function useFrequencyCounterContext_impl() {
  const base = useContext(FrequencyCounterContext)

  const stats: FrequencyCounterStats = useMemo(
    () => ({
      words: countWords(base.words),
      characters: countCharacters(base.words),
      paragraphs: countParagraphs(base.words),
      topRepeatedWords: getTopRepeatedWords(base.words)
    }),
    [base.words]
  )

  return {
    ...base,
    stats
  }
} // Context access!!!

export default useFrequencyCounterContext_impl
