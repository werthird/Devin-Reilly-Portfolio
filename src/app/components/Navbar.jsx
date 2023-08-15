import React from 'react';
import './styles/header-style.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className='navbar'>
      <div className='nav-link fade-in animation-delay-02'>
        <Link href='./'  id={pathname === '/' ? 'active' : ''}> 
          HOME
        </Link>
      </div>
      
      <div className='nav-link fade-in animation-delay-03'>
        <Link href='./about'  id={pathname === '/about' ? 'active' : ''}>
          ABOUT
        </Link>
      </div>

      <div className='nav-link fade-in animation-delay-04'>
        <Link href='./projects'  id={pathname === '/projects' ? 'active' : ''}>
          PROJECTS
        </Link>
      </div>

      <div className='nav-link fade-in animation-delay-05'>
        <Link href='./contact'  id={pathname === '/contact' ? 'active' : ''}>
          CONTACT
        </Link>
      </div>

      <div className='nav-link fade-in animation-delay-06'>
        <Link href='https://github.com/werthird' target='_blank'>
          GITHUB
        </Link>
      </div>

      <div className='nav-link fade-in animation-delay-06'>
        <Link href='https://docs.google.com/document/d/1bjss4IZx0KDEVptxSPBYUnUNaBB9HnzL/edit?usp=drive_link&ouid=117058400774936743580&rtpof=true&sd=true' target='_blank'>
          RESUME
        </Link>
      </div>

    </nav>
  )
};

export default Navbar;