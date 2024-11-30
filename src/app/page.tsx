import Homepage from '@/components/Home/HomePage'
import React from 'react'
import AboutMe from './about-me/page'
import ProjectsPage from './projects/page'
import { ServerSlills } from '@/components/ServeSkills/ServerSkills'


const MainPage = () => {
  return (
    <div>
      <Homepage/> 
      <ProjectsPage/>
      <ServerSlills/>
     <AboutMe/> 

    </div>
  )
}

export default MainPage
