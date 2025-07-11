import './Content.scss'
import type { TContentProps } from './types'

export default (props: TContentProps) => {
  const { children } = props

  return <main className="content">{children}</main>
}
