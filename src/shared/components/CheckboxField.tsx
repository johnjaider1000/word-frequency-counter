import { Checkbox } from '@heroui/react'
import { useState } from 'react'
import { cn } from '@/shared/utils/classNames'

type CheckboxFieldProps = Omit<
  React.ComponentProps<typeof Checkbox>,
  'classNames'
> & {
  containerClassName?: string
  classNames?: React.ComponentProps<typeof Checkbox>['classNames']
}

const CheckboxField = ({
  containerClassName,
  classNames,
  size = 'sm',
  radius = 'none',
  isSelected,
  defaultSelected,
  onValueChange,
  ...props
}: CheckboxFieldProps) => {
  const [internalSelected, setInternalSelected] = useState<boolean>(
    !!defaultSelected
  )
  const effectiveSelected = isSelected ?? internalSelected
  const handleValueChange = (value: boolean) => {
    if (isSelected === undefined) {
      setInternalSelected(value)
    }
    onValueChange?.(value)
  }
  return (
    <div className={cn('checkbox-field', containerClassName)}>
      <Checkbox
        size={size}
        radius={radius}
        classNames={{
          base: cn(
            'inline-flex items-center gap-2 p-0 cursor-pointer',
            classNames?.base
          ),
          wrapper: cn(
            'border rounded-none bg-transparent border-gray-300',
            {
              'border-primary': effectiveSelected
            },
            classNames?.wrapper
          ),
          label: cn('text-md', classNames?.label)
        }}
        onValueChange={handleValueChange}
        {...props}
      />
    </div>
  )
} // CheckboxField!!!

export default CheckboxField
