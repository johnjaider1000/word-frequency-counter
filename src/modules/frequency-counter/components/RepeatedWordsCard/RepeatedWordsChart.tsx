import { Bar } from 'react-chartjs-2'
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js'

import { chartOptions, getChartData } from './chartConfig'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Props = {
    data: { word: string; value: number }[]
}

function RepeatedWordsChart_impl({ data }: Props) {
    return (
        <div className="w-full h-full">
            <Bar options={chartOptions} data={getChartData(data)} />
        </div>
    )
} // Chart component!!!

export default RepeatedWordsChart_impl
