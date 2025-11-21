// Assumptions: useFrequencyCounter contains all UI-specific logic for the word frequency interface, formatting stats for display components [NX-44-R]

import useFrequencyCounterContext_impl from './useFrequencyCounterContext'
import type { FrequencyCounterStats, Stat, Stats } from '../context/types'

const STATS_LIST_DISPLAY = {
  words: 'Words',
  characters: 'Characters',
  paragraphs: 'Paragraphs'
}

function useFrequencyCounter_impl() {
  const { state, setState, stats, generate, clear, loadingWords, words } = useFrequencyCounterContext_impl()

  const getStats = (stat: unknown) => ({
    key: stat as keyof Stats,
    label: STATS_LIST_DISPLAY[stat as keyof Stats],
    value: (stats as FrequencyCounterStats)[stat as keyof FrequencyCounterStats] ?? '-'
  })

  const getStatList = (): Stat[] =>
    Object.keys(STATS_LIST_DISPLAY).map(getStats) as Stat[]

  return {
    // vars
    state,
    words,
    statList: getStatList(),
    loadingWords,

    // methods
    setState,
    generate,
    clear
  }
} // UI logic!!!

export default useFrequencyCounter_impl
