// Assumptions: Initial empty state with default params; future "Generate" action and settings-based queries. [NX-42-R]

import RootLayout_impl from '@/core/layouts/root-layout'
import APIDataSourceCard_impl from '@/modules/frequency-counter/components/APIDataSourceCard'
import RepeatedWordsCard_impl from '@/modules/frequency-counter/components/RepeatedWordsCard'
import TopWords_impl from '@/modules/frequency-counter/components/TopWords'
import FrequencyCounterProvider_impl from '@/modules/frequency-counter/context/FrequencyCounterProvider'

function FrequencyCounterPage_impl() {
  return (
    <RootLayout_impl>
      <FrequencyCounterProvider_impl>
        <section className="space-y-4 py-6 md:px-0">
          <APIDataSourceCard_impl />
          <RepeatedWordsCard_impl />
          <TopWords_impl />
        </section>
      </FrequencyCounterProvider_impl>
    </RootLayout_impl>
  )
} // Main page!!!

export default FrequencyCounterPage_impl
