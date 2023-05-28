// =====================================================
//                      HOME PAGE
// =====================================================


// REACT/NEXT IMPORTS
import Image from 'next/image';
import Link from 'next/link';

// STYLESHEET IMPORTS
import './homeStyles.css'
// import './styles/firefly.css';
// import './styles/typeEffect.css';



export default function Home() {
  return (
    <div className='main-div'>
      <h1 className='type-effect'>Devin Reilly</h1>
      <h2>Full Stack Web Developer</h2>
      <Link href='./'>
        <button>View My Work</button>
      </Link>
      {/* <div className="firefly"></div> */}
    </div>
  );
};
