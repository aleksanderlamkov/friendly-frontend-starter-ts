import './Button.scss'
import clsx from 'clsx'
import type { TButtonProps } from './types'

export default (props: TButtonProps) => {
  const { className, type = 'button', href, children } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component className={clsx('button', className)} {...specificProps}>
      {children}
    </Component>
  )
}
