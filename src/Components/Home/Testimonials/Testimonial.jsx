import React from "react"
import { testimonal } from "../../../dummyData"
import Heading from "../../Common/Headings/Heading"
import "./Style.css"
import {BiSolidQuoteAltLeft} from "react-icons/bi";

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'><BiSolidQuoteAltLeft/></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal