'use client'

import './styles/footer-style.css'
import Link from 'next/link';


export default function Footer() {

  return (
    <div className='footer-layout'>

      <Link href='https://stackexchange.com/users/28747022/devinreilly' target='_blank'>
        <span>Stack</span>
      </Link>
      <Link href='https://www.linkedin.com/in/reilly-devin/' target='_blank'>
        <span>LinkedIn</span>
      </Link>
      <Link href='https://github.com/werthird' target='_blank'>
        <span>GitHub</span>
      </Link>
    </div>
  );
};