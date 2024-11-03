// pages/_app.tsx
import '../styles/animations.css'
import type { AppProps } from 'next/app'
import { vt323 } from '../lib/fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={vt323.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp