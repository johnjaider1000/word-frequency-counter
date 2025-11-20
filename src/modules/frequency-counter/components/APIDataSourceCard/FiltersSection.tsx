// Assumptions: FiltersSection is a container with two filters: # Paragraphs and Exclude Stop Words. [NX-43-R]

import CheckboxField from '@/shared/components/CheckboxField'
import InputField from '@/shared/components/InputField'
import { Button } from '@heroui/react'

function FiltersSection_impl() {
  return (
    <div className="filters flex flex-row gap-4 items-center">
      <div className="flex flex-row gap-6">
        <div className="flex flex-row gap-2 flex-1 m-w-[10px] items-center">
          <label
            htmlFor="paragraphs"
            className="whitespace-nowrap font-semibold text-md cursor-pointer"
          >
            # Paragraphs:
          </label>

          <InputField type="number" className="max-w-20" id="paragraphs" />
        </div>

        <div className="flex flex-row gap-2 flex-1 items-center">
          <CheckboxField
            size="sm"
            className="flex-row-reverse"
            classNames={{
              label: 'font-semibold text-md cursor-pointer'
            }}
          >
            Start with lorem:
          </CheckboxField>
        </div>
      </div>

      <div className="flex ml-auto">
        <Button
          className="uppercase px-8 py-5 shadow-md rounded-md"
          color="primary"
        >
          Generate
        </Button>
      </div>
    </div>
  )
}

export default FiltersSection_impl
