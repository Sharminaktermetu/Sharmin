import Image from 'next/image';
import React from 'react';

import img from '../assests/download.gif'
const Homepage = () => {
  return (
    <div className='grid grid-cols-12 text-white justify-items-center place-content-center h-screen'>
      <div className='col-span-4'>
        <h1 className='text-7xl font-bold'>Hello.</h1>
      <div className='flex'>
        <hr className='w-5  bg-slate-500' />
        <p className='w-[300px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae dolorem eaque voluptates fuga vitae, laborum quae totam distinctio labore id autem ex enim quam.</p>
      </div>
      </div>


      <div className='col-span-4 pb-32'>
        <Image className='rounded-full shadow-lg shadow-slate-300' src={img} width={300} height={200} alt=''/>
      </div>
      <div className='col-span-4 gap-5'>
        
       <div className='flex flex-col gap-6'>
       <div className='h-12 w-12 rounded bg-white'></div>
       <div className='h-12 w-12 rounded bg-white'></div>
       <div className='h-12 w-12 rounded bg-white'></div>
       <div className='h-12 w-12 rounded bg-white'></div>
       </div>
        
        </div>
    </div>
  );
};

export default Homepage;