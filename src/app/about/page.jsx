// =====================================================
//                      ABOUT PAGE
// =====================================================


// IMPORTS
import './aboutStyle.css';
import Image from 'next/image';
import lightbulbPic from '../../../public/images/light-bulb-icon.png';



export default function Home() {
  return (
    <div className='about-div'>
      <h1 className='slide-in-left'>About</h1>
      <div className='underline-div slide-in-right'></div>
      <h2>Focus Points</h2>


      <div className='key-focus-div'>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-1'>
            <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/>
          </div>
          <h3>Usability</h3>
          <p>Easy navigation and intuitive interface for seamless interaction.</p>
        </div>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-2'>
            <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/>
          </div>
          <h3>Responsivness</h3>
          <p>Optimal display and function across different devices.</p>
        </div>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-3'>
            <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/>
          </div>
          <h3>Accessibility</h3>
          <p>Inclusive design for all users, regardless of abilities.</p>
        </div>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-4'>
            <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/>
          </div>
          <h3>Performance</h3>
          <p>Fast loading and efficient resource utilization for smooth experience.</p>
        </div>
      </div>


      <div className='profile-div'>
        <div className='profile'>
          <div className='profile-img'></div>
          <h2 className='profile-title'>Hello there! 
            <br />
            My name is, Devin Reilly!</h2>
          <p className='profile-content'>I'm a Front-End Developer, living in the sunniest state of Florida. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
        </div>
        <div className='skills-div'>
          <h2>Key Skills</h2>
          <div className='skills-list'>
            <p>CSS</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
            </div>
            <p>HTML</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
            </div>
            <p>JavaScript</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
            </div>
            <p>React</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
            </div>
            <p>Next.js</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
            </div>
            <p>MySQL</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
            </div>
            <p>MongoBD</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
            </div>
            <p>Node.js</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
              <span className='skill-bar-unit light-fill'></span>
            </div>
            <p>UI Design</p>
            <div className='skill-bar'>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
              <span className='skill-bar-unit dark-fill'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
