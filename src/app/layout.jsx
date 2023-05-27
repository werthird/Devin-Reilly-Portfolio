import Script from 'next/script';

import Header from './components/Header'

import './globals.css'
import './homeStyles.css'
import { Inter } from 'next/font/google'


const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Devin Reilly Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
