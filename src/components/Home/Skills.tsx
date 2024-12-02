import Accordian from "../Accordian";
import { ServerSlills } from "../ServeSkills/ServerSkills";
import ContactForm from "../Skills/Form";
import Particles from "../ui/particles";

const Skills = () => {
  return (
    
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden  bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592] lg:py-20">
      <div className="flex items-center justify-center ">
          <p
            className="lg:text-6xl text-2xl font-bold text-slate-300 lg:my-16"
           
          >
           Contact Me_
          </p>
        </div>
      
      <div className="lg:max-w-[1200px] w-full mx-auto lg:flex lg:gap-7 hero lg:py-20 lg:flex-row flex flex-col">
        
        <div className="lg:w-[50%] p-12 lg:p-0">
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
