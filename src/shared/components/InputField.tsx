import { Input } from '@heroui/react'
import { cn } from '../utils/classNames'

type ClassNames = {
  inputWrapper?: string
  label?: string
  input?: string
}

type InputFieldProps = Omit<React.ComponentProps<typeof Input>, 'variant' | 'classNames'> & {
  classNames?: ClassNames
}

const InputField = ({ size = 'sm', radius = 'md', classNames, ...props }: InputFieldProps) => {
  const mergedClassNames: ClassNames = {
    inputWrapper: cn(
      'border border-gray-300 rounded-md bg-white transition-colors',
      'focus-within:border-primary',
      classNames?.inputWrapper,
    ),
    label: classNames?.label,
    input: classNames?.input,
  }

  return (
    <Input
      variant="bordered"
      size={size}
      radius={radius}
      classNames={mergedClassNames}
      {...props}
    />
  )
} // InputField!!!

export default InputField
