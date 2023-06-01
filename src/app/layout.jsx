// =====================================================
//                    MAIN LAYOUT
// =====================================================

// REACT/NEXT IMPORTS
import Script from 'next/script';
import { Inter } from 'next/font/google'

// STYLESHEET IMPORTS
import './styles/globals.css'

// COMPONENT IMPORTS
import Header from './components/Header'
import Head from 'next/head'


// Font
const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
})

// Metadata
export const metadata = {
  title: 'Devin Reilly Portfolio',
}



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className} id='styled-scrollbars'>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
