import React from "react"
import AboutCard from "../Abouts/AboutCard"
import HBlog from "./HBlog"
import HAbout from "./HAbout"
import Hero from "./Heros/Hero"
import Hprice from "./HPrice"
import Testimonal from "./Testimonials/Testimonial"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <HBlog />
      <Hprice />
    </>
  )
}

export default Home