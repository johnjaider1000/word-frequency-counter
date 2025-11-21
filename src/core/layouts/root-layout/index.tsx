// Assumptions: RootLayout is the main layout component for the application [NX-42-R]

import Breadcrumb_impl from './Breadcrumb'
import PrimaryNavbar_impl from './PrimaryNavbar'
import type { AppLayoutProps } from './types'

const RootLayout_impl = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-base">
      <PrimaryNavbar_impl />

      <Breadcrumb_impl />

      <main className="md:container w-full md:mx-auto md:max-w-[1248px] px-4 md:px-0">
        {children}
      </main>

      <footer className="flex justify-center items-center py-4">
        <div className="text-sm text-secondary">© Wikiinfo Lumu Test, Inc.</div>
      </footer>
    </div>
  )
} // Root layout!!!

export default RootLayout_impl
