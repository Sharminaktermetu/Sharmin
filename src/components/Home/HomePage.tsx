"use client";
import Image from "next/image";
import WaterDropGrid from "../water-drop/water-drop";

import img from "../../assests/download.gif";
import ShineBorder from "../ui/shine-border";
import Particles from "../ui/particles";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { PointerIcon } from "lucide-react";
const Homepage = () => {
  const handleDownload = () => {
    const pdfUrl = "sharmin_cv.pdf";

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";

    anchor.download = "sharmin_cv.pdf";
    anchor.click();
  };

  return (
    <div className="">
      <div className="lg:max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12 text-white justify-items-center lg:place-content-center lg:h-[70vh] h-[100vh]">
          <div className="lg:col-span-4 sm:col-span-12 col-span-12">
            <h1 className="text-7xl font-bold lg:block hidden">Hello.</h1>
            <div className="lg:hidden flex items-center justify-center col-span-12 p-3">
              <Image
                className="rounded-full shadow-slate-300"
                src={img}
                width={150}
                height={150}
                alt=""
              />
            </div>
          
           
           <div className="lg:p-0 p-12">
           <hr className="w-5 bg-slate-500" />
           <h3 className="max:w-[300px] pt-5">
              &quot;It&apos;s <span className="text-orange-300">Sharmin</span>.
              Crafting Seamless User Experiences with MERN Stack & Next.js&quot;
            </h3>
            <p className="max:w-[300px] pt-3">
              Frontend Developer Specializing in Dynamic Web Applications and
              Modern Design.
            </p>
        
            <div className="lg:my-4 mt-4">
              <ShineBorder
                className="btn btn-outline  text-orange-300 font-semibold"
                color="orange"
              >
                <button onClick={handleDownload}>Download My CV</button>
              </ShineBorder>
            </div>
          </div>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <Image
              className="rounded-full shadow-lg shadow-slate-300"
              src={img}
              width={300}
              height={200}
              alt=""
            />
          </div>

          <div className="lg:col-span-4 col-span-12 lg:gap-7">
            <WaterDropGrid />
           <PointerIcon className="absolute lg:bottom-[300px] right-[20%] bottom-0"/>
          </div>
        </div>
      </div>
    
      <Particles
        className="absolute inset-0"
        quantity={100}
        size={0.3}
        ease={90}
        color="#fff"
        refresh
      />
    </div>
  );
};

export default Homepage;
