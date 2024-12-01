import Homepage from '@/components/Home/HomePage'

import ProjectsPage from './projects/page'
import Skills from '@/components/Home/Skills'

import { ParticlesDemo } from '@/components/particles/particles'
import ExperiencePage from '@/components/Skills/Skills'
import { ShineBorderDemo } from '@/components/Home/BeamCard'



const MainPage = () => {
  return (
    <div>
      <Homepage/> 
      <ShineBorderDemo/>
      <ProjectsPage/>
     <Skills/>
{/* <ExperiencePage/> */}
<ParticlesDemo/>
    </div>
  )
}

export default MainPage
