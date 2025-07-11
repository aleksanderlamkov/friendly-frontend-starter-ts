import type { HTMLAttributes } from 'react'

export type TBurgerButtonProps = HTMLAttributes<HTMLElement> & {
  extraAttrs?: Record<string, string>
}
