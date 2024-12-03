
import Homepage from "@/components/Home/HomePage";
import Skills from "@/components/Home/Skills";
import { ParticlesDemo } from "@/components/particles/particles";
import { ShineBorderDemo } from "@/components/Home/BeamCard";
import Recentprojects from "@/components/Home/Recentprojects";
import Footer from "@/components/shared/Footer";
import { ClientReview } from "@/components/Home/ClientReview";
import QualityCard from "@/components/Home/Qality";
import LoadingScreen from "@/components/Home/LoadingScreen";

const MainPage = () => {
  return (
    <LoadingScreen>
      <Homepage />
      <ShineBorderDemo />
      <Recentprojects />
      <QualityCard />
      <Skills />
      <ClientReview />
      <ParticlesDemo />
      <Footer />
    </LoadingScreen>
  );
};

export default MainPage;
