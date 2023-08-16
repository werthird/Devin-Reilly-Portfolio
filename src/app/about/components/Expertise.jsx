import React from 'react';
import '../about-style.css';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiAdobeindesign, SiExpress, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { IoMdLaptop } from 'react-icons/io';
import { FaBootstrap, FaBrain, FaNodeJs, FaReact } from 'react-icons/fa';
import { BsDatabaseCheck } from 'react-icons/bs';

const Expertise = () => {
  return (
    <div className='expertise-div'>
      <h2>My Expertise</h2>
      <div className='underline-div'></div>

      <div className='expertise-table'>
        <div className='expertise-cell'>
          <div className='expertise-header'>
            <IoMdLaptop className='expertise-icon' />
            <h3>Languages</h3>
          </div>

          <div className='expertise-list'>
            <div className='expertise-list-left'>
              <p>&lt;span&gt;</p>
              <div className='expertise-list-left-border'></div>
              <p>&lt;span&gt;</p>
            </div>
            <div className='expertise-list-right'>
              <p>Experienced in functionality and design.</p>
              <p><AiFillHtml5 className='expertise-list-icon' />HTML</p>
              <p><IoLogoCss3 className='expertise-list-icon' />CSS</p>
              <p><IoLogoJavascript className='expertise-list-icon' />JavaScript</p>
            </div>
          </div>
        </div>

        {/* LANGUAGES */}
        <div className='expertise-cell'>
          <div className='expertise-header'>
            <FaReact className='expertise-icon' />
            <h3>FrontEnd Development</h3>
          </div>
          <div className='expertise-list'>
            <div className='expertise-list-left'>
              <p>&lt;span&gt;</p>
              <div className='expertise-list-left-border'></div>
              <p>&lt;span&gt;</p>
            </div>
            <div className='expertise-list-right'>
              <p>Passionate about UI/UX. </p>
              <p><SiReact className='expertise-list-icon' />React</p>
              <p><SiNextdotjs className='expertise-list-icon' />Next.js</p>
              <p><SiTailwindcss className='expertise-list-icon' />Tailwind</p>
              <p><FaBootstrap className='expertise-list-icon' />BootStrap</p>
            </div>
          </div>
        </div>

        {/* FRONTEND DEV */}
        <div className='expertise-cell'>
          <div className='expertise-header'>
            <BsDatabaseCheck className='expertise-icon' />
            <h3>BackEnd Development</h3>
          </div>
          <div className='expertise-list'>
            <div className='expertise-list-left'>
              <p>&lt;span&gt;</p>
              <div className='expertise-list-left-border'></div>
              <p>&lt;span&gt;</p>
            </div>
            <div className='expertise-list-right'>
              <p>Server-side and Database design. CMS experience</p>
              <p><SiMongodb className='expertise-list-icon' />MongoDb</p>
              <p><GrMysql className='expertise-list-icon' />MySQL</p>
              <p><FaNodeJs className='expertise-list-icon' />Node.js</p>
              <p><SiExpress className='expertise-list-icon' />Express</p>
              <p><FaBrain className='expertise-list-icon' />Sanity</p>
            </div>
          </div>
        </div>
        {/* 

        <div className='skill'>
          <IoLogoNodejs className='skill-icon' /><span>Node.js</span>
        </div>
        <div className='skill'>
          <SiReact className='skill-icon' /><span>React</span>
        </div>
        <div className='skill'>
          <SiMongodb className='skill-icon' /><span>MongoDb</span>
        </div>
        <div className='skill'>
          <GrMysql className='skill-icon' /><span>MySQL</span>
        </div>
        <div className='skill'>
          <SiAdobeindesign className='skill-icon' /><span>UI Design</span>
        </div> */}
      </div>
  </div>
  )
};

export default Expertise;