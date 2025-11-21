// Assumptions: Application routing for main pages. [NX-42-R]

import { Route, Routes } from 'react-router'

import APP_ROUTES from './routes'
import HomePage_impl from '@/modules/home'
import FrequencyCounterPage_impl from '@/modules/frequency-counter'

function AppRouter_impl() {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<HomePage_impl />} />
      <Route
        path={APP_ROUTES.WORD_FREQUENCY}
        element={<FrequencyCounterPage_impl />}
      />
    </Routes>
  )
} // Router!!!

export default AppRouter_impl
