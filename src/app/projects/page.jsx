// =====================================================
//                      PROJECT PAGE
// =====================================================

import Image from 'next/image';
import './style.css'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { ImFileEmpty } from 'react-icons/im';


export default function Home() {
  return (
    <div className='project-div'>

      <h1 className='slide-in-left'>Projects</h1>
      <div className='underline-div slide-in-right'></div>
      {/* <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/> */}
      
      <div className='featured-projects-div'>
        <div className='featured-project'>
          <div className='featured-image'><Image src='/images/404-gif.gif' width={575} height={0} alt='404 image' /></div>
          <div className='featured-content flex-end-items'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Aardvarchive</h3>
            <div className='featured-content-desc flex-end-content text-align-right'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ab natus rem inventore necessitatibus et, saepe quae exercitationem similique accusantium modi odit ullam, ipsa, id impedit quam libero est fugit!</p></div>
            <p className='featured-content-specs'><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></p>
            <p className='featured-content-link'><Link href='./'><BsGithub className='github-icon' /></Link><Link href='./'><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
          </div>
        </div>
        <div className='featured-project'>
          <div className='featured-content'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Tech Blog</h3>
            <div className='featured-content-desc'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id exercitationem dignissimos magnam nulla laudantium. Deleniti temporibus, incidunt accusamus aliquid dicta, quibusdam eaque debitis numquam illo commodi quae praesentium ratione reiciendis!</p></div>
            <p className='featured-content-specs'><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></p>
            <p className='featured-content-link'><Link href='./'><BsGithub className='github-icon' /></Link><Link href='./'><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
          </div>
          <div className='featured-image'><Image src='/images/404-gif.gif' width={575} height={0} alt='404 image' /></div>
        </div>
        <div className='featured-project'>
          <div className='featured-image'><Image src='/images/404-gif.gif' width={575} height={0} alt='404 image' /></div>
          <div className='featured-content flex-end-items'>
            <p className='featured-content-label'>Featured Project</p>
            <h3 className='featured-content-title'>Project Name</h3>
            <div className='featured-content-desc flex-end-content text-align-right'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatem quos labore ex quo vel sunt fugiat veniam. Exercitationem optio nulla fugit sunt corrupti obcaecati, quo hic voluptatum ab nostrum?</p></div>
            <p className='featured-content-specs'><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></p>
            <p className='featured-content-link'><Link href='./'><BsGithub className='github-icon' /></Link><Link href='./'><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
          </div>
        </div>
      </div>

      <h2 className='project-list-title'>Other Noteworthy Projects</h2>
      <div className='underline-div'></div>
      <div className='projects-list'>
        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title</h3>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>
        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title 2</h3>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>
        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title</h3>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>
        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title</h3>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>
        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title</h3>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>
        <div className='project-card'>
          <div className='card-icon-wrapper'>
            <ImFileEmpty className='card-file-icon'/>
            <span><BsGithub className='card-github-icon' /><BsFillArrowUpRightSquareFill className='card-deployed-site-icon' /></span>
          </div>
          <h3>Project Title</h3>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure neque repellendus.</p>
          <p className='card-specs-list'><span>Techs</span><span>Techs</span><span>Techs</span><span>Techs</span></p>
        </div>
      </div>
    </div>
  );
};