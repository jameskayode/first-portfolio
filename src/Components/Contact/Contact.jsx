import React, { useContext, useRef, useState } from 'react'

import './Contact.css'
import emailjs from 'emailjs-com';
import Email from '../../img/email.png'
import Phone from '../../img/phone.png'
import Address from '../../img/address.png'
import { ThemeContext } from '../../context';
const Contact = () => {
  const formRef=useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit=(e)=> {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_d7n1fd1', 
    'template_v8pr64k', 
    formRef.current,
     'u8IRFLMD_lQ9PSz6e8')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, 
      (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +234 706 781 0860
                        
                    </div>
                    <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            jameskayode39@gmail.com
                        
                    </div>
                    <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Port-Harcourt Rivers state.
                        
                    </div>
                </div>
                </div>
                <div className="c-right">
                <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'></input>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'></input>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Example@gmail.com' name='user_email'></input>
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message'></textarea>
                <button>Submit</button>
                {done && "Submitted Successfully"}
              </form>
                     
                </div>
            </div>
        
    </div>
  )
}

export default Contact