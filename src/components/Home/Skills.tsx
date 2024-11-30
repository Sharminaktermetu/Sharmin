import Accordian from "../Accordian";
import { ServerSlills } from "../ServeSkills/ServerSkills";
import ContactForm from "../Skills/Form";

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592]">
      <div className="max-w-[1200px]  mx-auto flex gap-7 hero h-screen">
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
