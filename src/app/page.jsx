import Image from 'next/image';
import Link from 'next/link';

import './firefly.css';

export default function Home() {
  return (
    <div className='main-div'>
      <h1>Devin Reilly</h1>
      <h2>Full Stack Web Developer</h2>
      <Link href='./'>
        <button>View My Work</button>
      </Link>
      {/* <div className="firefly"></div> */}
    </div>
  );
};
