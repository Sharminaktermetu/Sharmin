import Accordian from "../Accordian";
import { ServerSlills } from "../ServeSkills/ServerSkills";
import ContactForm from "../Skills/Form";

const Skills = () => {
  return (
    
    <div className="bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592]">
      <div className="flex items-center justify-center ">
          <p
            className="lg:text-6xl font-bold text-slate-300 my-16"
           
          >
           Contact Me
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
    </div>
  );
};

export default Skills;
