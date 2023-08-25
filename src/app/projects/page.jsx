// =====================================================
//                      PROJECT PAGE
// =====================================================

import Image from 'next/image';
import './style.css'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { ImFileEmpty } from 'react-icons/im';

// Images
import proj1 from '../../../public/images/this-fabulous-family-screenshot.png';
import proj2 from '../../../public/images/tech-blog.png';
import proj3 from '../../../public/images/weather-app.jpg';
import proj4 from '../../../public/images/le-apero-screenshot.png';


export default function Projects() {
  return (
    <div className='project-div'>

      <h1 className='slide-in-left'>Projects</h1>
      <div className='underline-div slide-in-right'></div>
      {/* <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/> */}
      
      <div className='featured-projects-div'>


        {/* LE APERO RESTAURANT */}
        <div className='hide hide-left featured-project'>
          <div className='featured-image-hide-top featured-image '>
            <Link href='https://www.le-apero.com/' target="_blank">
              <Image src={proj4} width={575} height={0} alt='Le Apero Restaurant Screenshot' className='featured-img' />
            </Link>
          </div>
          <div className='featured-content'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Le Apero Restaurant</h3>
            <div className='featured-content-desc'><p>Le Apero is a French Cuisine restaurant specializing in a quiet and ambience. This project included the design and build from start to completion.</p></div>
            <p className='featured-content-specs'><span>React</span><span>Next.js</span><span>JavaScript</span><span>CSS</span><span>Tailwind</span></p>
            <p className='featured-content-link'>
              <Link href='https://github.com/werthird/le-apero-restaurant' target="_blank">
                <BsGithub className='github-icon' />
              </Link>
              <Link href='https://www.le-apero.com/' target="_blank">
                <BsFillArrowUpRightSquareFill className='deployed-site-icon' />
              </Link></p>
          </div>
          <div className='featured-image-hide-bottom featured-image'>
            <Link href='https://www.le-apero.com/' target="_blank">
              <Image src={proj4} width={575} height={0} alt='Tech Blog Screenshot' className='featured-img' />
            </Link>
          </div>
        </div>


        {/* THIS FAB FAMILY */}
        <div className='hide hide-left featured-project'>
          <div className='featured-image'>
            <Link href='https://www.thisfabfamily.com/' target="_blank" >
              <Image src={proj1} width={575} height={0} alt='This Fabulous family webpage screenshot' className='featured-img' />
            </Link>
          </div>
          <div className='featured-content flex-end-items'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>This FABulous Family</h3>
            <div className='featured-content-desc flex-end-content text-align-right'><p>An ecommerce site that I built for a foster/adoptive/biological apparell line. It uses React and Next.js for the front end and a CMS called Sanity for the backend. This allows the client to add products with ease.</p></div>
            <p className='featured-content-specs'><span>React</span><span>Next.js</span><span>Sanity</span><span>Tailwind</span><span>JavaScript</span></p>
            <p className='featured-content-link'>
              <Link href='https://github.com/werthird/this-fabulous-family' target="_blank" >
                <BsGithub className='github-icon' />
              </Link>
              <Link href='https://www.thisfabfamily.com/' target="_blank" >
                <BsFillArrowUpRightSquareFill className='deployed-site-icon' />
              </Link>
            </p>
          </div>
        </div>


        {/* TECH BLOG */}
        <div className='hide hide-left featured-project'>
          <div className='featured-image-hide-top featured-image '>
            <Link href='https://tech-blog-devin.herokuapp.com/' target="_blank">
              <Image src={proj2} width={575} height={0} alt='Tech Blog Screenshot' className='featured-img' />
            </Link>
          </div>
          <div className='featured-content'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Tech Blog</h3>
            <div className='featured-content-desc'><p>A blog platform similar to blogger. Allows a user to create an account, publish blog posts, and leave comments on other users post. If you just want to keep track of notes or start your publishing journey, this is the site for you.</p></div>
            <p className='featured-content-specs'><span>JavaScript</span><span>CSS</span><span>Express</span><span>MySQL</span><span>Sequelize</span></p>
            <p className='featured-content-link'>
              <Link href='https://github.com/werthird/Tech-Blog-Model-14' target="_blank">
                <BsGithub className='github-icon' />
              </Link>
              <Link href='https://tech-blog-devin.herokuapp.com/' target="_blank">
                <BsFillArrowUpRightSquareFill className='deployed-site-icon' />
              </Link></p>
          </div>
          <div className='featured-image-hide-bottom featured-image'>
            <Link href='https://tech-blog-devin.herokuapp.com/' target="_blank">
              <Image src={proj2} width={575} height={0} alt='Tech Blog Screenshot' className='featured-img' />
            </Link>
          </div>
        </div>


        {/* WEATHER API */}
        <div className='hide hide-left featured-project'>
          <div className='featured-image'>
            <Link href='https://werthird.github.io/Weather-Dashboard---Module-06/' target="_blank">
              <Image src={proj3} width={575} height={0} alt='Weather App screenshot' className='featured-img' />
            </Link>
          </div>
          <div className='featured-content flex-end-items'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Weather Web-App</h3>
            <div className='featured-content-desc flex-end-content text-align-right'><p>A simple web app to play around with an API. It allows the user to enter their desired city and get a five day forcast.</p></div>
            <p className='featured-content-specs'><span>JavaScript</span><span>CSS</span><span>HTML</span><span>API's</span></p>
            <p className='featured-content-link'>
              <Link href='https://github.com/werthird/Weather-Dashboard---Module-06' target="_blank">
                <BsGithub className='github-icon' />
              </Link>
              <Link href='https://werthird.github.io/Weather-Dashboard---Module-06/' target="_blank">
                <BsFillArrowUpRightSquareFill className='deployed-site-icon' />
              </Link></p>
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
      </div>
    </div>
  );
};