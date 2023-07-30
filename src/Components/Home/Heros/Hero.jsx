import React from "react"
import Heading from "../../Common/Headings/Heading"
import "./Hero.css"
import {FaLongArrowAltRight} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO LEARNZILLA' title='Best Online Education Expertise' />
            <p></p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'><FaLongArrowAltRight/></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'><FaLongArrowAltRight/></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero