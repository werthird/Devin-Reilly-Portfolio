import Script from 'next/script';

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devin Reilly Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" 
      />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
