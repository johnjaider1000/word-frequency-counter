// Assumptions: FiltersSection is a container with two filters: # Paragraphs and Exclude Stop Words. [NX-43-R]

import { Button } from '@heroui/react'
import CheckboxField from '@/shared/components/CheckboxField'
import InputField from '@/shared/components/InputField'
import useFrequencyCounter_impl from '@/modules/frequency-counter/hooks/useFrequencyCounter'
import LoaderIcon from '../../assets/icons/LoaderIcon'

function FiltersSection_impl() {
  const { state, setState, generate, loadingWords } = useFrequencyCounter_impl()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    setState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="filters flex flex-col md:flex-row gap-4 items-stretch md:items-center">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-row gap-2 flex-1 items-center">
          <label
            htmlFor="paragraphs"
            className="whitespace-nowrap font-semibold text-md cursor-pointer"
          >
            # Paragraphs:
          </label>

          <InputField
            type="number"
            className="max-w-20"
            id="paragraphs"
            name="paragraphs"
            value={state.paragraphs}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-row gap-2 flex-1 items-center">
          <CheckboxField
            size="sm"
            className="flex-row-reverse"
            classNames={{
              label: 'font-semibold text-md cursor-pointer'
            }}
            name="startWithLorem"
            isSelected={state.startWithLorem}
            onChange={handleChange}
          >
            Start with lorem:
          </CheckboxField>
        </div>
      </div>

      <div className="flex md:ml-auto w-full md:w-auto">
        <Button
          className="uppercase px-8 py-5 shadow-md rounded-md w-full md:w-auto"
          color="primary"
          onPress={generate}
          disabled={loadingWords}
        >
          {loadingWords && <span className="animate-spin">
            <LoaderIcon />
          </span>}

          {loadingWords ? 'Wait...' : 'Generate'}
        </Button>
      </div>
    </div>
  )
} // Filter controls!!!

export default FiltersSection_impl
