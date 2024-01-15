import React from 'react'

import './Navbar.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";

import logo from './CS CONSULT s.png'

const Navbar = () => {

    const [openNavbar, setOpenNavvbar] = useState(true)

    const toggleNav = () => {
      setOpenNavvbar(!openNavbar)
    }

  return (
    <div className='navDivMain '> 

          <div className='maimLogo'>
            <Link to={'/'}><div className=''><img src={logo}alt=""  width={120}/></div></Link>

            <div className='navIcons'>
              {openNavbar ? <CgMenuLeft onClick={toggleNav}/> : <MdClose onClick={toggleNav}/>}
            </div>
          </div>

          <div className={`navDiv ${openNavbar ? 'open' : ''}`}>
            <div className='firstNavDiv'>
            <Link to={'/'}><div className=''><img src={logo}alt=""  width={120}/></div></Link>

              <div className='navUl'>
                <Link to={'/'}><p>Home</p></Link> 
              </div>
          </div>

          <div className='secondNavDiv'>
              <Link to={'/contact'}><button className='signupBtn'>Book Session</button></Link>
          </div>

        </div>
    </div>
  )
}

export default Navbar