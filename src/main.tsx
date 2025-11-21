import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import '@/core/styles/index.css'
import App_impl from '@/core/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App_impl />
    </BrowserRouter>
  </StrictMode>,
)
