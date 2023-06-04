'use client';


import './styles/header-style.css'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function Header() {

  const [display, setDisplay] = useState(true);

  return (
    <div className='header-layout'>
      <div className='header-image-wrapper fade-in'>
       <Image src='/images/logo-removebg.png' width='175' height='175' alt='Devin Reilly logo' className='logo-image'/>
      </div>

      <div className='menu-toggle' onClick={() => setDisplay(!display)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className='navbar-container' style={{ display: display ? "block" : "none" }}>

        <div className='navbar-exit' onClick={() => setDisplay(!display)}>
          <div className='exit-div-1'></div>
          <div className='exit-div-2'></div>
        </div>

        <nav className='navbar'>
          <div className='nav-link fade-in animation-delay-02'>
            <Link href='./' > 
              HOME
            </Link>
          </div>
          
          <div className='nav-link fade-in animation-delay-03'>
            <Link href='./about'>
              ABOUT
            </Link>
          </div>

          <div className='nav-link fade-in animation-delay-04'>
            <Link href='./projects'>
              PROJECTS
            </Link>
          </div>

          <div className='nav-link fade-in animation-delay-05'>
            <Link href='./contact'>
              CONTACT
            </Link>
          </div>

          <div className='nav-link fade-in animation-delay-06'>
            <Link href='https://github.com/werthird' target='_blank'>
              GITHUB
            </Link>
          </div>

        </nav>
      </div>
    </div>
  );
};