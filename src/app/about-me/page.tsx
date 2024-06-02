import Accordian from "@/components/Accordian";
import Image from "next/image";
import React from "react";
import img from '../../assests/my-img.jpeg'
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div className="text-white">
      <div className="lg:flex justify-around items-center h-screen p-5">
        <div className="mt-[-6%]">
          {/* <Image src='' alt='' width={50} height={50}/> */}
          <div className="card w-96 glass">
            <figure className="p-5">
            <Image className='rounded-md shadow-md shadow-slate-300' src={img} width={200} height={100} alt=''/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sharmin Akter Metu</h2>
              <p>Frontend Developer | Bangladesh</p>

              <button className="btn btn-outline border-slate-300 border text-orange-300 font-semibold">
                Download My CV
              </button>
              <div className='flex gap-6 mt-3 items-center text-black justify-center'>
       <IoMailSharp className="h-12 w-12 bg-orange-200 rounded-full p-2"/>
       <FaGithub className="h-12 w-12 bg-orange-200 rounded-full p-2"/>
       <FaLinkedin className="h-12 w-12 bg-orange-200 rounded-full p-2"/>
       <FaFacebook className="h-12 w-12 bg-orange-200 rounded-full p-2"/>

       {/* <div className='h-12 w-12 rounded bg-white'>Call</div> */}
       </div>
            </div>
          </div>
        </div>

        <div className="mt-[-7%]">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
