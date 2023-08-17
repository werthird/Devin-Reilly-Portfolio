// IMPORTS
import './about-style.css';
import Image from 'next/image';
import Link from 'next/link';
import Expertise from './components/Expertise';

// ICONS
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiReact, SiMongodb, SiAdobeindesign } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BiSolidLike, BiAccessibility } from 'react-icons/bi';
import { FaRunning } from 'react-icons/fa';

import resIcon from '../../../public/images/responsivness-icon.png';
import FocusPoint from './components/FocusPoint';



export default function About() {
  return (
    <div className='about-div'>


      {/* PROFILE */}
      <h1 className='slide-in-left'>About Me</h1>
      <div className='underline-div slide-in-right'></div>
      <div className='profile'>

        <div className='image-card'>
          <div className='front'>
            <Image 
              src='/images/profile-image.jpg' 
              fill 
              alt='Profile image' 
              blurDataURL='URL'
              placeholder='blur'
            />
          </div>
          <div className='back'>
            <p>Back</p>
          </div>
        </div>

        <div className='profile-content'>
          <p>Hello There! I'm glad you have made it to my portfolio page. Please have a look around, checkout some projects, drop me a line. Whether you came by to see what skill-sets are mine to share, or to gather some good-old insperation, I'm glad your here!</p>
          <br />
          <p>Below are some key focus points that guide all my development decisions and a list of my top skill-set. If you wish to get in contact with me or have any question, you can send me a message <Link href='./contact' className='contact-me-link'>here!</Link></p>
        </div>
      </div>


      {/* FOCUS POINTS */}
      <FocusPoint />

      <Expertise />

      
    </div>
  );
};
