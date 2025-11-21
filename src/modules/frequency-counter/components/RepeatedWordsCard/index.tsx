// Assumptions: RepeatedWordsCard displays a histogram of the top repeated words and a list of the top 5 words with their counts, serving as a visual summary of word frequency analysis [NX-42-R]

import Card_impl from '@/core/ui/components/Card'
import IconDocumentation from '@/modules/frequency-counter/assets/icons/icon-documentation.png'
import useFrequencyCounterContext_impl from '@/modules/frequency-counter/hooks/useFrequencyCounterContext'
import RepeatedWordsChart_impl from './RepeatedWordsChart'

function RepeatedWordsCard_impl() {
  const {
    stats: { topRepeatedWords }
  } = useFrequencyCounterContext_impl()

  const hasData = topRepeatedWords.length > 0

  return (
    <Card_impl
      header={'Repeated Words - Bar Chart'}
      className="w-full min-h-[350px]"
    >
      {hasData ? (
        <div className="w-full h-[280px] mt-2">
          <RepeatedWordsChart_impl data={topRepeatedWords} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl min-h-[250px] gap-6">
          <img
            src={IconDocumentation}
            alt="Documentation Icon"
            className="h-28"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-gray-700">
              Generate the text to graph the words
            </p>
            <p className="text-sm font-normal text-gray-600">
              Please enter above the source of data
            </p>
          </div>
        </div>
      )}
    </Card_impl>
  )
} // Chart card!!!

export default RepeatedWordsCard_impl
