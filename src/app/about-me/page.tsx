"use client"
import Accordian from "@/components/Accordian";
import Image from "next/image";
import React from "react";
import img from '../../assests/my-img.jpeg'
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

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
<div className="lg:h-screen h-[1200px] bg-slate-950">
<div className="text-white pb-26 max-w-[1200px]  mx-auto">
      <div className="lg:flex justify-evenly items-center h-full">
        <div className="mt-5">

          <div className="card lg:w-80 glass mx-auto w-80">
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

        <div className="lg:mt-12 mt-28">
          <Accordian />
        </div>
      </div>
    </div>
</div>
  );
};

export default AboutMe;
