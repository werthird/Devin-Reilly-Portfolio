'use client';



import './styles/header-style.css'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';
// import NavBar from './NavBar';

const Header = () => {

  const [width, setWidth] = useState(null);
  const breakpoint = 1200;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='header-layout'>

      {/* LOGO IMAGE */}
      <div className='header-image-wrapper fade-in'>
        <Image 
          src='/images/DR-logo-icon.png' 
          width='100' 
          height='100' 
          alt='Devin Reilly logo icon' 
          className='logo-image logo-image-icon'
          blurDataURL='URL'
          placeholder='blur'
          />
        <Image 
          src='/images/DR-logo-name.png' 
          width='150' 
          height='50' 
          alt='Devin Reilly logo text'
          className='logo-image logo-image-text'
          blurDataURL='URL'
          placeholder='blur'
        />
      </div>
      

      {/* MENU */}
      {/* {width < breakpoint ? <BurgerMenu /> : <NavBar />} */}

    </div>
  );
};

export default Header;