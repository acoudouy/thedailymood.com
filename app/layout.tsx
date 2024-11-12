'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
// import '../components/style/style.css'

import StoreProvider from './StoreProvider'
import dynamic from 'next/dynamic'

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
