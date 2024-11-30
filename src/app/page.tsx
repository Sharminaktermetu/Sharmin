import Homepage from '@/components/Home/HomePage'

import ProjectsPage from './projects/page'
import Skills from '@/components/Home/Skills'

import { ParticlesDemo } from '@/components/particles/particles'
import ExperiencePage from '@/components/Skills/Skills'



const MainPage = () => {
  return (
    <div>
      <Homepage/> 
      <ProjectsPage/>
     <Skills/>
{/* <ExperiencePage/> */}
<ParticlesDemo/>
    </div>
  )
}

export default MainPage
