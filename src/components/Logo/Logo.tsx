import './Logo.scss'
import clsx from 'clsx'
import logoImgSrc from '@/assets/images/logo.svg'
import type { TLogoProps } from './types'

export default (props: TLogoProps) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logoImgSrc}
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}
