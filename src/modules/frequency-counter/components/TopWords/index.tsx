// Assumptions: TopWords component displays the top 5 repeated words and their counts [NX-42-R]

import Card_impl from '@/core/ui/components/Card'
import useFrequencyCounterContext_impl from '../../hooks/useFrequencyCounterContext'

function TopWords_impl() {
  const { stats: { topRepeatedWords } } = useFrequencyCounterContext_impl()

  const displayRows = Array.from({ length: 5 }, (_, index) => {
    const item = topRepeatedWords[index]
    return {
      position: index + 1,
      word: item?.word || '-',
      value: item?.value || '-'
    }
  })

  return (
    <Card_impl header="Top 5 Words">
      <div className="w-full">
        <div className="grid grid-cols-3 w-full text-secondary font-bold text-xxs border-b border-gray-300 py-2">
          <div className="uppercase">TOP</div>
          <div className="uppercase">WORD</div>
          <div className="uppercase">TOTAL</div>
        </div>

        <div className="divide-y divide-gray-300 border-b border-gray-300">
          {displayRows.map((row, index) => (
            <div key={index} className="grid grid-cols-3 w-full text-h6 text-default font-normal text-gray-800 py-4">
              <div>{row.position}</div>
              <div>{row.word}</div>
              <div>{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Card_impl>
  )
} // Top words!!!

export default TopWords_impl
