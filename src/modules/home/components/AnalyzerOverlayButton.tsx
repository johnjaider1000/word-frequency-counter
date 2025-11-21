// Assumptions: Sliding overlay (20% height) with a button navigating to /analyzer. [NX-42-R]

import { Link } from 'react-router'
import { Button } from '@heroui/react'
import APP_ROUTES from '@/core/app/router/routes'

function AnalyzerOverlayButton_impl() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[20%] transform transition-transform duration-300 ease-out translate-y-0 pointer-events-auto sm:translate-y-full sm:group-hover:translate-y-0 sm:pointer-events-none sm:group-hover:pointer-events-auto">
      <div className="h-full w-full bg-white/85 rounded-t-2xl border-t border-gray-300/60 shadow-md flex items-center justify-center">
        <Link to={APP_ROUTES.WORD_FREQUENCY} className="inline-block transition-transform duration-300 hover:scale-105">
          <Button
            color="primary"
            radius="full"
            variant="solid"
            disableAnimation
            className="gap-2 bg-gradient-primary shadow-lg hover:shadow-xl hover:bg-gradient-primary opacity-100! cursor-pointer"
          >
            Ir al analizador
            <span>→</span>
          </Button>
        </Link>
      </div>
    </div>
  )
} // AnalyzerOverlayButton!!!

export default AnalyzerOverlayButton_impl
