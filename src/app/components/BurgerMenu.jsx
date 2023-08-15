import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import './styles/header-style.css';

const BurgerMenu = () => {

  const [display, setDisplay] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className='menu-toggle' 
        onClick={() => {
          setDisplay(!display)
        }}
      >
        <HiMenu className='menu-icon' />
      </div>

      <div className='navbar-container' style={{ display: display ? "block" : "none" }}>
        <div className='navbar-exit' 
          onClick={() => {
            setDisplay(!display)
          }}
        >
          <AiOutlineClose className='close-icon' />
        </div>

        <nav className='navbar'>
          <div className='nav-link'>
            <Link href='./'  id={pathname === '/' ? 'active' : ''}> 
              HOME
            </Link>
          </div>
          
          <div className='nav-link'>
            <Link href='./about'  id={pathname === '/about' ? 'active' : ''}>
              ABOUT
            </Link>
          </div>

          <div className='nav-link'>
            <Link href='./projects'  id={pathname === '/projects' ? 'active' : ''}>
              PROJECTS
            </Link>
          </div>

          <div className='nav-link'>
            <Link href='./contact'  id={pathname === '/contact' ? 'active' : ''}>
              CONTACT
            </Link>
          </div>

          <div className='nav-link'>
            <Link href='https://github.com/werthird' target='_blank'>
              GITHUB
            </Link>
          </div>

          <div className='nav-link'>
            <Link href='https://docs.google.com/document/d/1bjss4IZx0KDEVptxSPBYUnUNaBB9HnzL/edit?usp=drive_link&ouid=117058400774936743580&rtpof=true&sd=true' target='_blank'>
              RESUME
            </Link>
          </div>

        </nav>
      </div>
    </>
  )
};

export default BurgerMenu;