'use client'

import './styles/footer-style.css'
import Link from 'next/link';


export default function Footer() {

  return (
    <div className='footer-layout'>

      <Link href='./'>
        <span>Stack</span>
      </Link>
      <Link href='./'>
        <span>LinkedIn</span>
      </Link>
      <Link href='./'>
        <span>GitHub</span>
      </Link>
    </div>
  );
};