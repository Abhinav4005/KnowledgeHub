import React from "react";
import "./App.css"
import Header from "./Components/Common/Headers/Header"
import {Routes, Route } from "react-router-dom"
import About from "./Components/Abouts/About"
import CourseHome from "./Components/AllCourses/CourseHome"
import Team from "./Components/Teams/Team"
import Pricing from "./Components/Pricings/Pricing"
import Blog from "./Components/Blogs/Blog"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Common/Footers/Footer"
import Home from "./Components/Home/Home"

const  App=()=> {
  return (
      <>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={()=><About/>} />
          <Route path='/courses' Component={()=><CourseHome/>} />
          <Route path='/team' Component={()=><Team/>} />
          <Route path='/pricing' Component={()=><Pricing/>} />
          <Route path='/journal' Component={()=><Blog/>} />
          <Route path='/contact' Component={()=><Contact/>} />
        </Routes>
        <Footer />
      </>
  )
}

export default App;