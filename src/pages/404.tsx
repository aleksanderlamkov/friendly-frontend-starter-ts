import type { Metadata } from 'minista'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Not found',
}

export default () => {
  return (
    <>
      <h1>Page not found</h1>
      <Button href="/">Home</Button>
    </>
  )
}
