import Accordian from "../Accordian";
import { ServerSlills } from "../ServeSkills/ServerSkills";
import ContactForm from "../Skills/Form";
import Particles from "../ui/particles";

const Skills = () => {
  return (
    
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden  bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592] py-20">
      <div className="flex items-center justify-center ">
          <p
            className="lg:text-6xl font-bold text-slate-300 my-16"
           
          >
           Contact Me_
          </p>
        </div>
      
      <div className="max-w-[1200px] mx-auto flex gap-7 hero py-20">
        
        <div className="w-[50%]">
        <ContactForm/>
        </div>
        <div className="w-[50%]">
          <ServerSlills />
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={30}
        ease={80}
        color="#fff"
        refresh
        size={1}
      />
    </div>
  );
};

export default Skills;
