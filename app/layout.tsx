'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../components/style/style.css'
import 'react-resizable/css/styles.css'
// import { CSPostHogProvider } from './provider'

import StoreProvider from './StoreProvider'
import dynamic from 'next/dynamic'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

// const CrispWithNoSSR = dynamic(() => import('../components/crisp-js'), { ssr: false })
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Minty.so | Actionable content for your newsletter',
//   description: 'Generate actionable content for your newsletter',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <CrispWithNoSSR /> */}
      <body className={inter.className}>
        {/* <CSPostHogProvider> */}
          <StoreProvider>{children}</StoreProvider>
        {/* </CSPostHogProvider> */}
      </body>
    </html>
  )
}
