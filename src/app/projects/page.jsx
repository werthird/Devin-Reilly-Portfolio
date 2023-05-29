// =====================================================
//                      PROJECT PAGE
// =====================================================

import Image from 'next/image';
import './style.css'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';


export default function Home() {
  return (
    <div className='project-div'>
      <h1 className='slide-in-left'>Projects</h1>
      <div className='underline-div slide-in-right'></div>
      {/* <Image src={lightbulbPic} width='150' alt='a lightbulb icon'/> */}
      <div className='featured-project'>
        <div className='featured-image'><Image src='/images/404-gif.gif' width={575} height={0} alt='404 image' /></div>
        <div className='featured-content flex-end-items'>
          <p className='featured-content-label'>Featured Project</p>
          <h3 className='featured-content-title'>Aardvarchive</h3>
          <div className='featured-content-desc flex-end-content'><p>Some project description</p></div>
          <p className='featured-content-tech'><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></p>
          <p className='featured-content-link'><Link href='./'><BsGithub className='github-icon' /></Link><Link href='./'><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
        </div>
      </div>
      <div className='featured-project'>
        <div className='featured-content'>
          <p className='featured-content-label'>Featured Project</p>
          <h3 className='featured-content-title'>Tech Blog</h3>
          <div className='featured-content-desc'><p>Some project description</p></div>
          <p className='featured-content-tech'><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></p>
          <p className='featured-content-link'><Link href='./'><BsGithub className='github-icon' /></Link><Link href='./'><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
        </div>
        <div className='featured-image'><Image src='/images/404-gif.gif' width={575} height={0} alt='404 image' /></div>
      </div>
      <div className='featured-project'>
        <div className='featured-image'><Image src='/images/404-gif.gif' width={575} height={0} alt='404 image' /></div>
        <div className='featured-content flex-end-items'>
          <p className='featured-content-label'>Featured Project</p>
          <h3 className='featured-content-title'>Project Name</h3>
          <div className='featured-content-desc flex-end-content'><p>Some project description</p></div>
          <p className='featured-content-tech'><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span><span>Tech</span></p>
          <p className='featured-content-link'><Link href='./'><BsGithub className='github-icon' /></Link><Link href='./'><BsFillArrowUpRightSquareFill className='deployed-site-icon' /></Link></p>
        </div>
      </div>

    </div>
  );
};