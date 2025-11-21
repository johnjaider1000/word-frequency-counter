// Assumptions: StatisticsGrid displays text analysis statistics in a responsive grid [NX-42-R]

import type { Stat } from '@/modules/frequency-counter/context/types'

type StatisticsGridProps = {
    words: string[]
    stats: Stat[]
}

function StatisticsGrid_impl({ words, stats }: StatisticsGridProps) {
    const hasWords = !!words.length

    return (
        <div className="statistics-container w-full border border-gray-300 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {stats.map((item) => (
                <div key={item.key} className="item flex flex-col items-center gap-2">
                    <span className="label font-normal text-small text-primary">
                        {item.label}
                    </span>
                    <span className="value text-h4 text-default">{hasWords ? item.value : '-'}</span>
                </div>
            ))}
        </div>
    )
} // Statistics grid!!!

export default StatisticsGrid_impl
