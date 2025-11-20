// Assumptions: Initial empty state with default params; future "Generate" action and settings-based queries. [NX-42-R]

import RootLayout_impl from '@/core/layouts/root-layout'
import APIDataSourceCard_impl from '../components/APIDataSourceCard'
import RepeatedWordsCard_impl from '../components/RepeatedWordsCard'
import TopWords_impl from '../components/TopWords'

function FrequencyCounterPage_impl() {
  return (
    <RootLayout_impl>
      <section className="space-y-4 py-6">
        <APIDataSourceCard_impl />
        <RepeatedWordsCard_impl />
        <TopWords_impl />
      </section>
    </RootLayout_impl>
  )
}

export default FrequencyCounterPage_impl
