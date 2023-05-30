// =====================================================
//                      CONTACT PAGE
// =====================================================

import './style.css'



export default function Home() {
  return (
    <div className='contact-div'>
      <h1 className='slide-in-left'>Contact</h1>
      <div className='underline-div slide-in-right'></div>

      <div className='contact-form-div card-flip-in-y'>
        <form className='contact-form'>
          <div className='form-div name'>
            <label htmlFor='name'></label>
            <input type='text' name='name' id='name' autoComplete='given-name' placeholder='Name *' required />
          </div>
          <div className='form-div email'>
            <label htmlFor='email'></label>
            <input type='email' name='email' id='email' autoComplete='email' placeholder='Enter Email *' required />
          </div>
          <div className='form-div phone'>
            <label htmlFor='phone'></label>
            <input type='text' name='phone' id='phone' autoComplete='tel' placeholder='Enter Phone' />
          </div>
          <div className='form-div message'>
            <label htmlFor='message'></label>
            <textarea name='message' id='message' rows='6' placeholder='Your Message *' required></textarea>
          </div>
          <div className='submit-button'>
            <button type='submit button-pulse'>Submit</button>
          </div>
          <p>* Required</p>
        </form>
      </div>
    </div>
  );
};