// pages/_app.tsx
import '../styles/animations.css'
import type { AppProps } from 'next/app'
import { inter } from '../lib/fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp