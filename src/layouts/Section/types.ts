import type { PropsWithChildren, HTMLAttributes, ReactNode } from 'react'

export type TSectionProps = PropsWithChildren<
  {
    title: ReactNode
    titleId: string
    description?: ReactNode
  } & HTMLAttributes<HTMLElement>
>
