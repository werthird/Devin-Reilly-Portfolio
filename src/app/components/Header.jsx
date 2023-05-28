import './style.css'
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../../../public/images/logo-screenshot.jpg';


export default function Header() {
  return (
    <div className='header-layout'>
      <div className='fade-in header-image-wrapper'>
       <Image src={logoPic} width='200' alt='Devin Reilly logo' className='logo-image'/>
      </div>
      <nav className='navbar'>
        <Link href='./'>
          HOME
        </Link>

        <Link href='./about'>
          ABOUT
        </Link>

        <Link href='./projects'>
          PROJECTS
        </Link>

        <Link href='./contact'>
          CONTACT
        </Link>

        <Link href='https://github.com/werthird' target='_blank'>
          GITHUB
        </Link>
      </nav>
    </div>
  );
};