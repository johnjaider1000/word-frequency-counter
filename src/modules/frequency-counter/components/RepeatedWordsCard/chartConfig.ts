import type { ChartData, ChartOptions } from 'chart.js'

export const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grace: '3%',
            ticks: {
                stepSize: 1,
                color: '#CED4DA'
            },
            grid: {
                color: '#f6f3f4ff',
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
}

export const getChartData = (
    data: { word: string; value: number }[]
): ChartData<'bar'> => {
    const isMobile = window.innerWidth < 768;

    return {
        labels: data.map((item) => item.word),
        datasets: [
            {
                label: 'Repetitions',
                data: data.map((item) => item.value),
                backgroundColor: '#172B4D',
                borderRadius: 0,
                barThickness: isMobile ? 14 : 50
            }
        ]
    }
}
