import Card_impl from '@/core/ui/components/Card'
import FiltersSection_impl from './FiltersSection'
import { Button } from '@heroui/react'

type Stats = { words?: number; characters?: number; paragraphs?: number }
type Props = { stats?: Stats; isLoading?: boolean; onClear?: () => void }

const APIDataSourceCard_impl = ({ stats, onClear }: Props) => {
  const words = stats?.words ?? '-'
  const characters = stats?.characters ?? '-'
  const paragraphs = stats?.paragraphs ?? '-'

  return (
    <Card_impl
      header={'API DataSource'}
      footer={
        <div className="w-full flex justify-end">
          <Button color="primary" className="rounded-lg" onPress={onClear}>
            Clear
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <FiltersSection_impl />

        <div className="statistics-container w-full border border-gray-300 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {[
            { key: 'words', label: 'Words', value: words },
            { key: 'characters', label: 'Characters', value: characters },
            { key: 'paragraphs', label: 'Paragraphs', value: paragraphs }
          ].map((item) => (
            <div key={item.key} className="item flex flex-col items-center">
              <span className="label font-normal text-small text-primary">
                {item.label}
              </span>
              <span className="value font-bold text-2xl">{item.value}</span>
            </div>
          ))}
        </div>

        <div
          className="text-preview-container flex flex-col items-center justify-center border border-gray-300 rounded-lg min-h-[234px]"
          aria-live="polite"
        >
          <p className="text-sm font-normal text-gray-600">
            Genera un texto para verlo aquí
          </p>
        </div>
      </div>
    </Card_impl>
  )
}

export default APIDataSourceCard_impl
