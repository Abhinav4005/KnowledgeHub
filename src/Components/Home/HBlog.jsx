import React from "react"
import "../Blogs/Blog.css"
import { blog } from "../../dummyData"
import Heading from "../Common/Headings/Heading"
import {AiOutlineUser} from "react-icons/ai";
import {SlCalender} from "react-icons/sl";
import {FcComments} from "react-icons/fc";

// copy code of blog => blogCard

const HBlog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'><AiOutlineUser/></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'><SlCalender/></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'><FcComments/></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HBlog