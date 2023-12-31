import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Head from "./Head"
import "./Header.css"
import {FaBars,FaTimes} from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/courses'>All Courses</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/team'>Team</NavLink>
            </li>
            <li>
              <NavLink to='/pricing'>Pricing</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'><FaTimes/> </i> : <i className='fa fa-bars'><FaBars/></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header