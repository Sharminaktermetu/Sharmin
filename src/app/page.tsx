import Homepage from '@/components/Home/HomePage'
import Skills from '@/components/Home/Skills'

import { ParticlesDemo } from '@/components/particles/particles'
import ExperiencePage from '@/components/Skills/Skills'
import { ShineBorderDemo } from '@/components/Home/BeamCard'
import Recentprojects from '@/components/Home/Recentprojects'
import Footer from '@/components/shared/Footer'
import { ClientReview } from '@/components/Home/ClientReview'
import QualityCard from '@/components/Home/Qality'



const MainPage = () => {
  return (
    <div>
      <Homepage/> 
      <ShineBorderDemo/>
      <Recentprojects/>
      <QualityCard/>
     <Skills/>

<ClientReview/>
<ParticlesDemo/>
<Footer/>
    </div>
  )
}

export default MainPage
