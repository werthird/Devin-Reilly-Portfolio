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


// Font
const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] })

// Metadata
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
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
