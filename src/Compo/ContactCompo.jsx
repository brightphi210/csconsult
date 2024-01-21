import React, { useState } from 'react'
import './ContactCompo.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();




const ContactCom = () => {

    const [show, setShow] = useState(false)


  const form = useRef();


  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (number) => {
    const isValidNumber = /^\d{11}$/.test(number);
    setIsValid(isValidNumber);
    return isValidNumber;
  };

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    validatePhoneNumber(newPhoneNumber);
  };




  const sendEmail = (e) => {

    if (validatePhoneNumber(phoneNumber)) {
      console.log('Valid phone number:', phoneNumber);
    } else {
      console.log('Invalid phone number');
    }


    e.preventDefault();
    

    emailjs.sendForm('service_fcx25ar', 'template_9hxjn72', form.current, '_cRdEyncL9jNe_k6a')
      .then((result) => {
          console.log(result.text);
          console.log('Email Successfully sent')
          setShow(true)
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          console.log('Email Failure')
    });

  };



  
  return (
    <div className='contactSession'>
      <div className='contactCard' data-aos="fade-up" data-aos-duration="3000">
        <h2> Book a session now</h2>
        <p>
          Talk to us, about what you want, 
          and we’ll respond as soon as you submit:
        </p>
      </div>


      <div className='formDiv' data-aos="fade-up" data-aos-duration="3000">
        <form action="" onSubmit={sendEmail} ref={form}>




            <div className='inputDiv'>
                <label htmlFor="">Name</label>
                <input type="text" id='name' name='user_name' placeholder='Provide Name: ' required/>
            </div>

            <div className='inputDiv'>
                <label htmlFor="">Number</label>
                <input type="text" id='phone' name='user_number' placeholder='Provide Number: '
                value={phoneNumber}
                onChange={handlePhoneNumberChange}required/>
                  {/* {!isValid && <p style={{ color: 'pink', paddingBottom : 10 }}>Field Must not be empty.</p>} */}
                  {/* {isValid && <p style={{ color: 'green', paddingBottom : 10 }}></p>} */}
            </div>


            <div className='inputDiv'>
                <label htmlFor="">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="user_email"
                
                placeholder='Provide Email: ' required/>

            </div>

            <div className='inputDiv'>
              <label className='textLabel'>
                Talk to us, about what you want, and we’ll respond as soon as you submit:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='Great, so what would you like us to do for you 😁' required>
              </textarea>
            </div>

            <button type="submit">Submit</button>
          
        </form>
        
      </div>


        <div>
          {show && (<div>
            <div className='modal'>
            <div className='modal-content'>
              <h2>Message Sucessfull</h2>
              <p>Message has been sent successfully, you will recieve a reply shortly</p>
              <button onClick={()=>{setShow(false)}}>Close</button>
            </div>
          </div>
          </div>)}
        </div>
      
    </div>
  )
}

export default ContactCom