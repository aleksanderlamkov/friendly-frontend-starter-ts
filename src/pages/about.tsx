import type { Metadata } from 'minista'
import About from '@/sections/About'

export const metadata: Metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <h1>About page</h1>
      <About />
    </>
  )
}
