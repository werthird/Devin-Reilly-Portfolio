// =====================================================
//                      CONTACT PAGE
// =====================================================
'use client'

import emailjs from '@emailjs/browser';


import { useState } from 'react';
import './style.css'



export default function Contact() {

  // Store all the data
  const [location, setLocation] = useState('Devin-Reilly-Portfolio')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
 
  // Send contact info form
  const onSubmit = async function(e) {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID;

    const templateParams = {
      'contact_location': location,
      'user_name': name,
      'user_phone': phone,
      'user_email': email,
      'message': message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });
  };


  return (
    <div className='contact-div'>
      <h1 className='slide-in-left'>Contact</h1>
      <div className='underline-div slide-in-right'></div>

      <div className='contact-form-div card-flip-in-y'>
        <h2>Get In Touch</h2>
        <form className='contact-form' onSubmit={onSubmit}>
          <input type='hidden' name='contact_location' />
          <div className='form-div name'>
            <label htmlFor='name'></label>
            <input type='text' name='name' id='name' className='input-required' autoComplete='given-name' placeholder='Name *' 
                onChange={(e) => { setName(e.target.value)}} 
                required />
          </div>
          <div className='form-div email'>
            <label htmlFor='email'></label>
            <input type='email' name='email' id='email' className='input-required' autoComplete='email' placeholder='Enter Email *' 
                onChange={(e) => { setEmail(e.target.value)}} 
                required />
          </div>
          <div className='form-div phone'>
            <label htmlFor='phone'></label>
            <input type='text' name='phone' id='phone' autoComplete='tel' placeholder='Enter Phone' 
                onChange={(e) => { setPhone(e.target.value)}} />
          </div>
          <div className='form-div message'>
            <label htmlFor='message'></label>
            <textarea name='message' id='message' className='input-required' rows='6' placeholder='Your Message *' 
                onChange={(e) => { setMessage(e.target.value)}} 
                required></textarea>
          </div>
          <div className='submit-button'>
            <button type='submit' className='button-pulse'>Submit</button>
          </div>
          <p>* Required</p>
        </form>
      </div>
    </div>
  );
};