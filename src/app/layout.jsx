// =====================================================
//                    MAIN LAYOUT
// =====================================================
'use client';


// REACT/NEXT IMPORTS
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

// STYLESHEET IMPORTS
import './styles/globals.css'

// COMPONENT IMPORTS
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import Script from 'next/script';


// Font
const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
})



export default function RootLayout({ children }) {

  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Devin Reilly Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className} id='styled-scrollbars'>
        <Header />
        <main>
          {children}
        </main>

        {isMainPage ? null : <Footer />}

        <Toaster 
          position='top-center'
        />

        <Script type='text/javascript' src='./js/script.js' />
      </body>
    </html>
  )
}
