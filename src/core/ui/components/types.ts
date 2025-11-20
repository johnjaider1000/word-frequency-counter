import type { ReactNode } from "react";

export interface CardProps {
  className?: string
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
}
