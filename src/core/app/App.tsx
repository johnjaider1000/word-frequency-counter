// Assumptions: App is the main component for the application [NX-42-R]

import React from 'react'
import AppRouter_impl from './router/AppRouter'

function App_impl() {
  return (
    <React.Fragment>
      <AppRouter_impl />
    </React.Fragment>
  )
} // App root!!!

export default App_impl
