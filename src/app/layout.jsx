// =====================================================
//                    MAIN LAYOUT
// =====================================================
'use client';


// REACT/NEXT IMPORTS
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';

// STYLESHEET IMPORTS
import './styles/globals.css'

// COMPONENT IMPORTS
import Header from './components/Header'
import Footer from './components/Footer'
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

  const pathname = usePathname();
  const isMainPage = pathname === '/';

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
        {isMainPage ? null : <Footer />}
      </body>
    </html>
  )
}
