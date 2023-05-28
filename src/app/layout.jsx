// =====================================================
//                    MAIN LAYOUT
// =====================================================
'use client';

// REACT/NEXT IMPORTS
import Script from 'next/script';
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

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

  // Check the pathname and set the font and background color
  const setColor = () => {
    const pathname = usePathname();
    let colorTheme = {
      bgColor: '',
      color: ''
    };
    // Home page background color
    if (pathname === '/') {
      colorTheme.bgColor = 'var(--color-bg)';
      colorTheme.color = 'white';
      return colorTheme;
    }
    // Default background color
      colorTheme.bgColor = 'white';
      colorTheme.color = 'var(--color-bg)';
      return colorTheme;
  };
  

  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Header />
        <main className='wrapper' style={{ backgroundColor: setColor().bgColor, color: setColor().color }}>
          {children}
        </main>
      </body>
    </html>
  )
}
