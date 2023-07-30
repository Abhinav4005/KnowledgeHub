import React from "react"
import { team } from "../../dummyData"
import {FaFacebook} from "react-icons/fa";
import {AiOutlineInstagram,AiFillSkype} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'><FaFacebook/></i>
              <i className='fab fa-twitter icon'><FiTwitter/></i>
              <i className='fab fa-instagram icon'><AiOutlineInstagram/></i>
              <i className='fab fa-tiktok icon'><AiFillSkype/></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard