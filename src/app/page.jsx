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
      <h1 className='main-h1 fade-in animation-delay-04'>Welcome.</h1>
      <div className='main-content fade-in animation-delay-06'>
        <p className='fade-in animation-delay-08'>My name is <span className='text-emph'>Devin Reilly</span>, I'm a Full-Stack Web Developer based out of South Florida. I have developed many web applications, from frontend UI to backend database management. </p>
        <br />
        <p className='fade-in animation-delay-09'>It is my passion to build web apps that are highly <span className='text-emph'>usable</span>, functionally <span className='text-emph'>responsive</span>, fully <span className='text-emph'>accessible</span>, and flawlessly <span className='text-emph'>performable</span>.</p>
        <Link href='./projects' className='fade-in animation-delay-10'><button className='main-button'>View My Work</button></Link>
      </div>
      {/* <div className="firefly"></div> */}
    </div>
  );
};
