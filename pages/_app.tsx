import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DM_Sans, Source_Serif_4 } from 'next/font/google'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600']
})

const sourceSerif = Source_Serif_4({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${dmSans.variable} ${sourceSerif.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
