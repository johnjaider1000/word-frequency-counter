// Assumptions: Card is a container with padding, shadow, and rounded corners. [NX-43-R]

import { Card, CardBody, CardHeader, CardFooter } from '@heroui/react'
import type { CardProps } from './types'

import { cn } from '@/shared/utils/classNames'

const Card_impl = ({ className, header, footer, children }: CardProps) => {
  return (
    <Card className={cn('w-full p-4 shadow-card! rounded-2xl', className)}>
      {header && (
        <CardHeader className="text-lg! py-0 font-bold text-default">
          {header}
        </CardHeader>
      )}

      <CardBody>{children}</CardBody>
      {footer && (
        <CardFooter className="text-sm text-default">{footer}</CardFooter>
      )}
    </Card>
  )
}

export default Card_impl
