"use client"
import Image from 'next/image';
import React from 'react';

import img from '../assests/download.gif'
import { SocialIcon } from 'react-social-icons';

const Homepage = () => {
  const handleDownload = () => {

    const pdfUrl = 'sharmin_cv.pdf'


    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.target = '_blank'

    anchor.download = 'sharmin_cv.pdf';
    anchor.click();
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='grid grid-cols-12 text-white justify-items-center lg:place-content-center h-screen'>

        <div className='lg:col-span-4 sm:col-span-12 col-span-12 lg:m-10 mx-8'>
          <h1 className='text-7xl font-bold lg:block hidden'>Hello.</h1>
          <div className="lg:hidden flex items-center justify-center col-span-12 p-3">
            <Image
              className="rounded-full shadow-slate-300"
              src={img}
              width={150}
              height={150}
              alt=""
            />
          </div>

          <hr className='w-5 bg-slate-500' />
          <h3 className='max:w-[300px] pt-5'>&quot;It&apos;s <span className='text-orange-300'>Sharmin</span>. Crafting Seamless User Experiences with MERN Stack & Next.js&quot;</h3>
          <p className='max:w-[300px] pt-3'>Frontend Developer Specializing in Dynamic Web Applications and Modern Design.</p>
          <div className='lg:my-4 mt-4'>
            <button onClick={handleDownload} className="btn btn-outline border-slate-300 border text-orange-300 font-semibold">
              Download My CV
            </button>
          </div>


        </div>


        <div className="hidden lg:block lg:col-span-4 lg:pb-32">
          <Image className="rounded-full shadow-lg shadow-slate-300" src={img} width={300} height={200} alt="" />

        </div>



        <div className='lg:col-span-4 sm:col-span-12 col-span-12 lg:gap-5 lg:m-10'>

          <div className='flex lg:flex-col gap-6'>
            <div><SocialIcon className='hover:translate-y-1 transition' url="https://www.facebook.com/sharminmumu.mumu.9/" /></div>
            <div><SocialIcon className='hover:translate-y-1 transition' url="https://www.linkedin.com/in/sharmin-akter-metu/" /></div>

            <div><SocialIcon className='hover:translate-y-1 transition' bgColor='gray' url="https://github.com/Sharminaktermetu" /></div>
            <div><SocialIcon className='hover:translate-y-1 transition' url="https://wa.me/qr/GY75NXOTTCT3K1" /></div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;