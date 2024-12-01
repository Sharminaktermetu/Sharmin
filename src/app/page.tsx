import Homepage from '@/components/Home/HomePage'

import ProjectsPage from './projects/page'
import Skills from '@/components/Home/Skills'

import { ParticlesDemo } from '@/components/particles/particles'
import ExperiencePage from '@/components/Skills/Skills'
import { ShineBorderDemo } from '@/components/Home/BeamCard'
import Recentprojects from '@/components/Home/Recentprojects'
import Footer from '@/components/shared/Footer'



const MainPage = () => {
  return (
    <div>
      <Homepage/> 
      <ShineBorderDemo/>
      <Recentprojects/>
      <ProjectsPage/>
     <Skills/>
{/* <ExperiencePage/> */}

<ParticlesDemo/>
<Footer/>
    </div>
  )
}

export default MainPage
