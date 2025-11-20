// Assumptions: Top-right countdown badge that redirects after 8 seconds. [NX-42-R]
import { useNavigate } from 'react-router'
import useRedirectCountdown from '@/modules/home/hooks/useRedirectCountdown'
import APP_ROUTES from '@/core/app/router/routes'

function RedirectCountdownBadge_impl() {
  const navigate = useNavigate()
  const countdown = useRedirectCountdown({
    durationMs: 8000,
    intervalMs: 100,
    autoStart: true,
    onComplete: () => navigate(APP_ROUTES.WORD_FREQUENCY),
  })

  const size = 48
  const stroke = 4
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - countdown.progress)

  return (
    <div className="min-w-30 rounded-xl border border-gray-300/60 bg-white/90 shadow-md backdrop-saturate-150">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-default">Redirecting…</span>
        </div>

        <div className="mt-3 flex items-center justify-center">
          <div className="relative" aria-label="Redirect countdown">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="fill-none stroke-gray-300"
                strokeWidth={stroke}
              />

              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="fill-none stroke-current text-primary transition-all duration-100"
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-default">
              {countdown.secondsLeft}s
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedirectCountdownBadge_impl
