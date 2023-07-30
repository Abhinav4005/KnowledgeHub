import React from "react"
import { blog } from "../../../dummyData"
import "./Footer.css"
import {BiMap,BiSolidPhone,BiSolidUser} from "react-icons/bi";
import {FaPaperPlane} from "react-icons/fa";
import {SlCalender} from "react-icons/sl";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {AiTwotoneHeart} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>I have never let my schooling interfere with my education.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'><FaPaperPlane style={{width:'80%',height:'80%'}}/></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>LEARNZILLA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>The most important principle for designing lively eLearning is to see eLearning design not as information design but as designing an experience</p>

            <i className='fab fa-facebook-f icon'><FaFacebook/></i>
            <i className='fab fa-twitter icon'><AiOutlineInstagram/></i>
            <i className='fab fa-instagram icon'><FiTwitter/></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'><SlCalender/></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'><BiSolidUser/></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'><BiMap/></i>
                101 Ram Janki Marg, Ayodhya, INDIA
              </li>
              <li>
                <i className='fa fa-phone-alt'><BiSolidPhone/></i>
                +91 9682906846
              </li>
              <li>
                <i className='fa fa-paper-plane'><FaPaperPlane/></i>
              user@domain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'><AiTwotoneHeart/></i> by Abhinav
        </p>
      </div>
    </>
  )
}

export default Footer