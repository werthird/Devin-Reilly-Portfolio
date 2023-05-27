import './style.css'
import Link from 'next/link';


export default function Header() {
  return (
    <div className='header-layout'>
      <Link href='./'>
        HOME
      </Link>

      <Link href='./'>
        ABOUT
      </Link>

      <Link href='./'>
        PROJECTS
      </Link>

      <Link href='./'>
        CONTACT
      </Link>

      <Link href='./'>
        GITHUB
      </Link>
    </div>
  );
};