// Assumptions: APIDataSourceCard displays text analysis statistics and preview in a card [NX-42-R]

import { useMemo } from 'react'
import { Button } from '@heroui/react'

import Card_impl from '@/core/ui/components/Card'
import FiltersSection_impl from '@/modules/frequency-counter/components/APIDataSourceCard/FiltersSection'
import StatisticsGrid_impl from '@/modules/frequency-counter/components/APIDataSourceCard/StatisticsGrid'
import TextPreview_impl from '@/modules/frequency-counter/components/APIDataSourceCard/TextPreview'
import useFrequencyCounter_impl from '@/modules/frequency-counter/hooks/useFrequencyCounter'
import { filterEmptyParagraphs } from '@/modules/frequency-counter/utils/text-stats'
import TrashIconImage from '@/modules/frequency-counter/assets/icons/trash.png'

function APIDataSourceCard_impl() {
  const { statList, clear, loadingWords, words } = useFrequencyCounter_impl()
  const paragraphs = useMemo(() => filterEmptyParagraphs(words), [words])

  return (
    <Card_impl
      header={'API DataSource'}
      footer={
        <div className="w-full flex justify-end">
          <Button color="primary" className="rounded-lg" onPress={clear} disabled={loadingWords}>
            <img src={TrashIconImage} alt="Clear" />

            <span>
              Clear
            </span>
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <FiltersSection_impl />
        <StatisticsGrid_impl words={words} stats={statList} />
        <TextPreview_impl paragraphs={paragraphs} isLoading={loadingWords} />
      </div>
    </Card_impl>
  )
} // Data source card!!!

export default APIDataSourceCard_impl
