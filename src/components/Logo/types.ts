import type { HTMLAttributes, ImgHTMLAttributes } from 'react'

export type TLogoProps = HTMLAttributes<HTMLElement> & {
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading']
}
