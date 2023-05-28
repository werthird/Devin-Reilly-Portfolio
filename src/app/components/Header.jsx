import './style.css'
import Link from 'next/link';


export default function Header() {
  return (
    <div className='header-layout'>
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