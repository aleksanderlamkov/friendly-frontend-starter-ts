import './Button.scss'
import clsx from 'clsx'
import type { TButtonProps } from './types'

export default (props: TButtonProps) => {
  const { className, type = 'button', href, children } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component className={clsx('button', className)} {...attributesByTag}>
      {children}
    </Component>
  )
}
