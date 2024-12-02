"use client"

import Image from "next/image";
import React from "react";
import img from '../../assests/my-img.jpeg'
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/Video";
import certificate1 from '../../assests/projects/Screenshot_5.png'
import certificate from '../../assests/projects/Screenshot_31.png'
import Whyme from "@/components/Whyme";
const AboutMe = () => {
  const handleDownload = () => {

    const pdfUrl = 'sharmin_cv.pdf'
    

    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.target='_blank'
   
    anchor.download = 'sharmin_cv.pdf';
    anchor.click();
  };
  return (
<div className="border-t">
<div className="text-white pb-26 max-w-[1200px]  mx-auto  py-20">
      <div className="flex gap-7 lg:flex lg:flex-row flex-col lg:p-0 p-12">
        <div >

          <div className="card lg:w-80 glass mx-auto w-full h-full">
            <figure className="p-3">
              <Image className='rounded-md shadow-md shadow-slate-300' src={img} width={200} height={100} alt='' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sharmin Akter Metu</h2>
              <p>Frontend Developer | Bangladesh</p>

              <button onClick={handleDownload} className="btn btn-outline border-slate-300 border text-orange-300 font-semibold">
              Download My CV
              </button>
               
              <div className='flex gap-6 mt-2 items-center text-black justify-center'>
                <IoMailSharp className="h-6 w-6 bg-orange-200 rounded-full p-1" />
                <FaGithub className="h-6 w-6 bg-orange-200 rounded-full p-1" />
                <FaLinkedin className="h-6 w-6 bg-orange-200 rounded-full p-1" />
                <FaFacebook className="h-6 w-6 bg-orange-200 rounded-full p-1" />

                {/* <div className='h-12 w-12 rounded bg-white'>Call</div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <HeroVideoDialogDemoTopInBottomOut
           />
        </div>
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold text-center text-slate-100 lg:mt-40 lg:mb-12">
        Certificates_
      </h1>
      <div className=" w-full flex gap-5 lg:flex lg:flex-row flex-col lg:p-0 p-12">
      
     <Image src={certificate} height={100} width={600} alt="" className="rounded-lg"/>
     <Image src={certificate1} height={100} width={600} alt=""  className="rounded-lg"/>
      </div>
      <div>
        
      </div>
    </div>

</div>
  );
};

export default AboutMe;
