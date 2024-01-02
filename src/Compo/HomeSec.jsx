import React, {useState} from 'react'
import './HomeSec.scss'
import { Link } from 'react-router-dom';
import { SiMoneygram } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";
import { HiDocumentText } from "react-icons/hi";
import { GiIncubator } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoCodescanCheckmark } from "react-icons/go";
import { MdOutlineSendTimeExtension } from "react-icons/md";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const HomeSec = () => {
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
    

    emailjs.sendForm('service_84n2o4x', 'template_bi2lptt', form.current, 'SePfbvFDjlAZc65wg')
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
    <div>
        <div className='headerSec'>
            <div className='headerText'>
                <h2>
                    Take your company to new 
                    levels of success and productivity.
                </h2>
                <p>Get help from CSConsult, a professional  business plartform <br /> with advanced experience on growth and business scaling.</p>
                <Link to={'/contact'}><button>Book Session</button></Link>
            </div>
        </div>


        <div className='soluSec'>
            <h2 className='our'>Our Solutions</h2>
            <div className='solutionDiv'>
                <div>
                    <p><SiMoneygram /></p>
                    <h2>Strategic Planning</h2>
                </div>

                <div className='blue'>
                    <p><GiReceiveMoney /></p>
                    <h2>Finance</h2>
                </div>

                <div>
                    <p><FaArrowUpRightDots /></p>
                    <h2>Business Development</h2>
                </div>


                <div className='blue'>
                    <p><PiStrategyBold /></p>
                    <h2>Marketing Strategies</h2>
                </div>


                <div className=''>
                    <p><MdOutlineSendTimeExtension /></p>
                    <h2>Agile Sales Execution</h2>
                </div>
            

                <div className='blue'>
                    <p><GiIncubator /></p>
                    <h2>Startup Incubation</h2>
                </div>


                <div>
                    <p><MdOutlineDeveloperMode /></p>
                    <h2>Product Development</h2>
                </div>

                <div className='blue'>
                    <p><GoCodescanCheckmark /></p>
                    <h2>Market Research</h2>
                </div>
            



                <div>
                    <p><HiDocumentText /></p>
                    <h2>Business Documentation: </h2>
                    <span>Pitch Decks, 
                        Business Plans, Proposals and more</span>
                </div>
            </div>
        </div>


        <div className='experineceDiv'>
            <h2>Portfolio:</h2>
            <div className='experience'>
                <div>
                    8 Years+ Experience in Business Development
                </div>

                <div>
                    5 Years+ Experience in Accounting and Finance 
                </div>

                <div>
                    3 Years+ Experience in Start-Up incubation 
                </div>

                <div>
                    6 Years+ Experience in Marketing and Sales 
                </div>

                <div>
                    Over 100 Small Businesses and Startups imparted in the last decade
                </div>

                <div>
                    Over 11 StartUps upscaled and profitable in the last 3 years
                </div>

                <div>
                    Over 500 Entrepreneurs imparted in the last Decade
                </div>

            </div>
        </div>


        <div className='contDivMain'>
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

            <button type="submit">Book Now</button>
          
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
    </div>
  )
}

export default HomeSec