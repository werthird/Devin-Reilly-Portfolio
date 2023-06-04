// =====================================================
//                      PROJECT PAGE
// =====================================================

import Image from 'next/image';
import './style.css'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { ImFileEmpty } from 'react-icons/im';


export default function Projects() {
  return (
    <div className='project-div'>

      <h1 className='slide-in-left'>Projects</h1>
      <div className='underline-div slide-in-right'></div>
      {/* <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/> */}
      
      <div className='featured-projects-div'>
        <div className='featured-project'>
          <div className='featured-image'><Image src='/images/aardvarchive2.png' width={575} height={0} alt='404 image' /></div>
          <div className='featured-content flex-end-items'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>AardvArchive</h3>
            <div className='featured-content-desc flex-end-content text-align-right'><p>A web app that allows a user to create an account and save any code snippets that they want. It allows users to view others code snippets and leave comments. A very useful web app for any beginning web developer.</p></div>
            <p className='featured-content-specs'><span>JavaScript</span><span>Bootstrap</span><span>CSS</span><span>MySQL</span><span>Express</span></p>
            <p className='featured-content-link'><Link href='https://github.com/werthird/AardvArchive' target="_blank" ><BsGithub className='github-icon' /></Link><Link href='https://ancient-fortress-32796.herokuapp.com/' target="_blank" ><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
          </div>
        </div>
        <div className='featured-project'>
          <div className='featured-content'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Tech Blog</h3>
            <div className='featured-content-desc'><p>A blog platform similar to blogger. Allows a user to create an account, publish blog posts, and leave comments on other users post. If you just want to keep track of notes or start your publishing journey, this is the site for you.</p></div>
            <p className='featured-content-specs'><span>JavaScript</span><span>CSS</span><span>Express</span><span>MySQL</span><span>Sequelize</span></p>
            <p className='featured-content-link'><Link href='https://github.com/werthird/Tech-Blog-Model-14' target="_blank"><BsGithub className='github-icon' /></Link><Link href='https://tech-blog-devin.herokuapp.com/' target="_blank"><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
          </div>
          <div className='featured-image'><Image src='/images/tech-blog.png' width={575} height={0} alt='404 image' /></div>
        </div>
        <div className='featured-project'>
          <div className='featured-image'><Image src='/images/weather-app.jpg' width={575} height={0} alt='404 image' /></div>
          <div className='featured-content flex-end-items'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Weather Web-App</h3>
            <div className='featured-content-desc flex-end-content text-align-right'><p>A simple web app to play around with an API. It allows the user to enter their desired city and get a five day forcast.</p></div>
            <p className='featured-content-specs'><span>JavaScript</span><span>CSS</span><span>HTML</span></p>
            <p className='featured-content-link'><Link href='https://github.com/werthird/Weather-Dashboard---Module-06' target="_blank"><BsGithub className='github-icon' /></Link><Link href='https://werthird.github.io/Weather-Dashboard---Module-06/' target="_blank"><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
          </div>
        </div>
      </div>

      <h2 className='project-list-title'>Other Noteworthy Projects</h2>
      <div className='underline-div'></div>
      <div className='projects-list'>

        
        {/* <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title 1</h3>
          <Image src='/images/ComingSoon.gif' width={575} height={300} alt='404 image' className='coming-soon-image' />
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>

        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title 2</h3>
          <Image src='/images/404-gif.gif' width={575} height={50} alt='404 image' className='coming-soon-image' />
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>

        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title 3</h3>
          <Image src='/images/loading.gif' width={575} height={50} alt='404 image' className='coming-soon-image' />
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div> */}

        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><Link href='https://github.com/werthird/Yeti-Games' target="_blank"><BsGithub className='card-github-icon' /></Link><Link href='https://chemicalmodel.github.io/Yeti-Games/' target="_blank"><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></Link></span>
          </div>
          <h3>Yeti Games</h3>
          <p className='card-desc'>A comparison site that uses third-party apis to lets you know the minimum and recommended hardware to play a PC game.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>

        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><Link href='https://github.com/werthird/ucf-module-4-challenge' target="_blank"><BsGithub className='card-github-icon' /></Link><Link href='https://werthird.github.io/ucf-module-4-challenge/' target="_blank"><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></Link></span>
          </div>
          <h3>Code QUiz</h3>
          <p className='card-desc'>A simple web app that tests what knowledge you have about coding.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>

        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><Link href='https://xd.adobe.com/view/dfa3adb9-eb62-4fb3-98cb-5fa4bafd50c3-8af0/?fullscreen' target='_blank'><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></Link></span>
          </div>
          <h3>Sea-To-Table</h3>
          <p className='card-desc'>A simple test of Ui/UX design in Adobe XD.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>

      </div>
    </div>
  );
};