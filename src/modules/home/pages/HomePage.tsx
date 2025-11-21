// Assumptions: HomePage added as visual enhancement to improve overall project presentation [NX-42-R]

import '@/modules/home/styles/HomePage.css'
import appImage from '@/modules/home/assets/presentation/app.png'
import AnalyzerOverlayButton_impl from '@/modules/home/components/AnalyzerOverlayButton'
import RedirectCountdownBadge_impl from '@/modules/home/components/RedirectCountdownBadge'

function HomePage_impl() {
  return (
    <section className="HomePage_impl cover-container home-bg min-h-screen space-y-4 flex items-center justify-center relative">
      <div className="container max-w-7xl">
        <div className="absolute top-4 right-4 z-20">
          <RedirectCountdownBadge_impl />
        </div>

        <div className="flex flex-col px-6 md:flex-row gap-4 md:gap-2 w-full">
          <div className="w-full md:w-[30%] flex flex-col justify-center gap-2 md:gap-4">
            <h1 className="text-h1 md:text-6xl font-semibold text-white">Test</h1>

            <p className="text-2xl md:text-3xl font-normal uppercase text-white">
              FRONT-END DEVELOPER
            </p>

            <p className="text-1xl italic font-normal uppercase text-white">
              <span className="text-amber-100 mr-1">by</span>
              <span className="text-white capitalize">John Vanegas</span>
            </p>
          </div>

          <div className="flex-1 w-full md:w-[70%]">
            <div className="group relative w-full aspect-1023/769 overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={appImage}
                alt="Word Frequency Counter"
                className="w-full h-full object-cover object-top"
              />

              <AnalyzerOverlayButton_impl />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} // HomePage!!!

export default HomePage_impl
