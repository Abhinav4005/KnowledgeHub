import React from "react"
import  "./Header.css"
import "../../../App.css";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsYoutube} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>LEARNZILLA</h1>
            {/* Edu Flash */}
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i><FaFacebook style={{'color':'ActiveCaption'}}/></i>
            <i><AiOutlineInstagram style={{'color':'ActiveBorder'}}/></i>
            <i><BsYoutube style={{'color':'ActiveBorder'}}/></i>
            <i><FiTwitter style={{'color':'ActiveBorder'}}/></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head