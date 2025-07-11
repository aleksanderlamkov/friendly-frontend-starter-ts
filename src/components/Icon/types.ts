import type { HTMLAttributes } from 'react'

export type TIconProps = HTMLAttributes<HTMLElement> & {
  name: string
  ariaLabel?: string
  hasFill?: boolean
}
