import React from "react"
import Back from "../Common/Backs/Back"
import CoursesCard from "./CourseCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome