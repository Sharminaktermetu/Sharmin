import Homepage from '@/components/Home/HomePage'
import React from 'react'
import AboutMe from './about-me/page'
import ProjectsPage from './projects/page'
import Skills from '@/components/Home/Skills'
import Accordian from '@/components/Accordian'



const MainPage = () => {
  return (
    <div>
      <Homepage/> 
      <ProjectsPage/>
     <Skills/>
    
   <Accordian/>

    </div>
  )
}

export default MainPage
