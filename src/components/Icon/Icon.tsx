import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'
import type { TIconProps } from './types'

export default (props: TIconProps) => {
  const { className, name, hasFill = false, ariaLabel } = props

  return (
    <span className={clsx('icon', className)} aria-label={ariaLabel}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}
