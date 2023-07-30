import React from "react"
import Back from "../Common/Backs/Back"
import TeamCard from "./TeamCard"
import "./Team.css"
import Awrapper from "../Abouts/Awrapper"
import "../Abouts/About.css"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team