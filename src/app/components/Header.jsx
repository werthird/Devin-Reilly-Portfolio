import './style.css'
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
  return (
    <div className='header-layout'>
      <div className='header-image-wrapper fade-in'>
       <Image src='/images/logo-removebg.png' width='200' height='200' alt='Devin Reilly logo' className='logo-image'/>
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
  );
};