import React from 'react';
import '../about-style.css';
import { BiAccessibility, BiSolidLike } from 'react-icons/bi';
import Image from 'next/image';
import { FaRunning } from 'react-icons/fa';
import resIcon from '../../../../public/images/responsivness-icon-white.png';

const FocusPoint = () => {
  return (
    <div className='focuspoint-div'>
      <h2 className='focuspoint-title'>Key Focus Points</h2>
      <div className='underline-div'></div>

      <div className='key-focus-div'>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-1'>
            <BiSolidLike className='key-focus-icon usability-icon' />
          </div>
          <h3>Usability</h3>
          <p>Easy navigation and intuitive interface for seamless interaction.</p>
        </div>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-2'>
            <Image src={resIcon} width='100' alt='a responsive icon'/>
          </div>
          <h3>Responsivness</h3>
          <p>Optimal display and function across different devices.</p>
        </div>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-3'>
            <BiAccessibility className='key-focus-icon access-icon' />
          </div>
          <h3>Accessibility</h3>
          <p>Inclusive design for all users, regardless of abilities.</p>
        </div>
        <div className='focus-div'>
          <div className='image-wrapper flip-in-y image-4'>
            <FaRunning className='key-focus-icon preform-icon' />
          </div>
          <h3>Performance</h3>
          <p>Fast loading and efficient resource utilization for smooth experience.</p>
        </div>
      </div>
    </div>
  )
};

export default FocusPoint;