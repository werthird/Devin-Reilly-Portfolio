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
      <h1 className='main-h1 type-effect'>Welcome.</h1>
      <div className='main-content'>
        <p>My name is <span className='text-emph'>Devin Reilly</span>, I'm a Full-Stack Web Developer based out of South Florida. I have developed many web applications, from frontend UI to backend database management. </p>
        <br />
        <p>It is my passion to build web apps that are highly <span className='text-emph'>Usable</span>, functionally <span className='text-emph'>Responsive</span>, fully <span className='text-emph'>Accessible</span>, and flawlessly <span className='text-emph'>Preformant</span>.</p>
        <button><Link href='./projects'>View My Work</Link></button>
      </div>
      {/* <div className="firefly"></div> */}
    </div>
  );
};
