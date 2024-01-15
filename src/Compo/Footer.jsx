import React from 'react'

import './Footer.scss'

import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import logo from './CS CONSULT.png'

const Footer = () => {
  return (
    <div className='footerSection'>

        <div className='footerLogo'>
        <Link to={'/'}><div className=''><img src={logo}alt=""  width={120}/></div></Link>

        </div>

        <div className='footerRight'>
            <div className='footerIconDiv'>
                <Link to={'https://www.linkedin.com/company/cryptosmartnow/mycompany/'}><FaLinkedin className='footerIcon'/></Link>
                <Link to={'https://twitter.com/cryptosmartnow?t=zd5ZR3P1gfJ8trITTf82Pw&s=09'}><BsTwitterX className='footerIcon'/></Link>
                <Link to={'https://www.instagram.com/cryptosmartnow_?igshid=OGQ5ZDc2ODk2ZA%3D%3D'}><FaInstagram className='footerIcon'/></Link>
            </div>

            <div>
                <p className='help'>Help and support</p>
                <p className='mailFlex'><IoMdMail />karla@cryptosmartnow.io</p>
            </div>
        </div>

    </div>
  )
}

export default Footer