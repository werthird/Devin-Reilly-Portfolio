// =====================================================
//                      ABOUT PAGE
// =====================================================


// IMPORTS
import './aboutStyle.css';
import Image from 'next/image';
import lightbulbPic from '../../../public/images/light-bulb-icon-green.png';



export default function About() {
  return (
    <div className='about-div'>
      <h1 className='slide-in-left'>About Me</h1>
      <div className='underline-div slide-in-right'></div>

      <div className='profile'>
        <div className='profile-img flip-in-y'><Image src='/images/profile-image.jpg' width={300} height={500} alt='Profile image'/></div>
        <div className='profile-content'>
          <p>Hello There! I am glad you have made it to my portfolio page. Please have a look around, checkout some projects, drop me a line. Whether your here to see what skill-set I have, or to gather some insperation, I'm glad your here.</p>
          <br />
          <p>Below are some key focus points that guide all my development decisions and a list of my top skill-set. If you have wish to get in contact with me or have any question, you can find my contact information below.</p>
        </div>
      </div>


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

      <div className='skills-div'>
        <h2>Key Skill Set</h2>
        <div className='skills-list'>
          <div className='skill-bar'>
            <p>CSS</p>
            <div className='skill-bar-level'>
              <div className='width-90'></div>
              <p>90%</p>
            </div>
          </div>
          <div className='skill-bar'>
            <p>HTML</p>
            <div className='skill-bar-level'>
              <div className='width-90'></div>
              <p>90%</p>
            </div>
          </div>
          <div className='skill-bar'>
            <p>JavaScript</p>
            <div className='skill-bar-level'>
              <div className='width-80'></div>
              <p>80%</p>
            </div>
          </div>
          <div className='skill-bar'>
            <p>Node.Js</p>
            <div className='skill-bar-level'>
              <div className='width-80'></div>
              <p>80%</p>
            </div>
          </div>
          <div className='skill-bar'>
            <p>React</p>
            <div className='skill-bar-level'>
              <div className='width-60'></div>
              <p>60%</p>
            </div>
          </div>
          <div className='skill-bar'>
            <p>MongoBD</p>
            <div className='skill-bar-level'>
              <div className='width-80'></div>
              <p>80%</p>
            </div>
          </div>
          <div className='skill-bar'>
            <p>UI Design</p>
            <div className='skill-bar-level'>
              <div className='width-90'></div>
              <p>90%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
