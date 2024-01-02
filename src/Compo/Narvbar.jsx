import React from 'react'

import './Navbar.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Navbar = () => {

    const [openNavbar, setOpenNavvbar] = useState(true)

    const toggleNav = () => {
      setOpenNavvbar(!openNavbar)
    }

  return (
    <div className='navDivMain '> 

          <div className='maimLogo'>
            <Link to={'/'}><div className=''>CSConsult</div></Link>

            <div className='navIcons'>
              {openNavbar ? <CgMenuLeft onClick={toggleNav}/> : <MdClose onClick={toggleNav}/>}
            </div>
          </div>

          <div className={`navDiv ${openNavbar ? 'open' : ''}`}>
            <div className='firstNavDiv'>
            <Link to={'/'}><div className='logoSelf'>CSConsult</div></Link>

              <div className='navUl'>
                <Link to={'/'}><p>Home</p></Link> 
                <Link to={'/'}><p>Course</p></Link>
                <Link to={'/'}><p>Portfolio</p></Link>
              </div>
          </div>

          <div className='secondNavDiv'>
              <Link to={'/'}><button className='signupBtn'>Book Session</button></Link>
          </div>

        </div>
    </div>
  )
}

export default Navbar