import type {
  PropsWithChildren,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react'

export type TButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
>
