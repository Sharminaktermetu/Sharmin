'use client';
import { ReactLenis } from 'lenis/react';
import Image from 'next/image';
import web from '../../assests/screencapture-portfolio-d7f37-web-app-2024-10-26-19_59_51.png';
import ExperiencePage from '../Skills/Skills';
export default function index(): JSX.Element {
  return (
    <ReactLenis root>
      <main className='bg-slate-950'>
     <div className='max-w-[1200px] mx-auto'>
     <div className='w-full mx-auto'>
          <section className='text-white h-[500px] w-full bg-slate-950  grid place-content-center sticky top-0 bottom-[-40px]'>
            <div className='absolute bottom-20 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-6xl px-8 font-semibold text-center'>
              I Know What Exactly you're <br /> Looking For! Scroll Please 👇
            </h1>
          </section>

          <section className='bg-gray-300 text-black mt-48 grid place-content-center h-screen sticky top-0 rounded-2xl  overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <h1 className='2xl:text-7xl w-[800px] text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
            "Developing Today, Innovating for Tomorrow with: React | Next.js | TypeScript | Redux | MongoDB | Node.js | and more..." 💼
            </h1>
          </section>
        </div>

        <section className='text-white  w-full bg-slate-950 mt-48'>
          <div className='grid grid-cols-2'>
            <div className='sticky h-screen flex items-center justify-center'>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center'>
                Thanks To Scroll.
                <br /> Now Scroll Up Again☝️🏿
              </h1>
            </div>
            <div className='grid gap-2'>
              <figure className='grid place-content-center -skew-x-12'>
                {/* <img
                  src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                /> */}
                {/* <Image height={280} width={320} alt='' src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'/> */}
                <div className="width:320px;height:280;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/662x4ljufm1MVbP2Eu" width="100%" height="100%" className="position:absolute" allowFullScreen></iframe></div>
              </figure>
              <figure className='grid place-content-center skew-x-12'>

              <div className="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/CrFLL3CnRpw5ddlBMm" width="100%" height="100%" className="position:absolute" allowFullScreen></iframe></div>

              </figure>
              <figure className='grid place-content-center -skew-x-12'>
               
                <div>
                <iframe src="https://giphy.com/embed/ZbOJHSRcz1Gn95PXpO"></iframe></div>
              </figure>

            
            </div>
          </div>
        </section>
        <section className='text-white   w-full bg-slate-950'>
          <div className='grid grid-cols-2 px-8'>
            <div className='grid gap-2'>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://i.ibb.co.com/HPGH9z0/screencapture-portfolio-d7f37-web-app-2024-10-26-19-59-51.png'
                  alt=''
                  className='transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md'
                />
          
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://i.ibb.co.com/D7P6HHq/screencapture-tiny-toy-town-web-app-2024-10-26-21-09-55.png'
                  alt=''
                  className='transition-all duration-300  w-96 h-96 object-cover  align-bottom object-top rounded-md'
                />
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://i.ibb.co.com/h89jFkX/screencapture-chef-corner-6e244-web-app-2024-10-26-21-17-01.png'
                  alt=''
                  className='transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md'
                />
              </figure>
           
            </div>
            <div className='sticky top-0 h-screen grid place-content-center'>
              <h1 className='text-4xl px-8 font-medium text-right tracking-tight leading-[120%]'>
                Just Share Every Component you want and make an creative
                website 😎 
              </h1>
             
            </div>
            
          </div>
   
        </section>
        <ExperiencePage/>
     </div>
     <footer className='group bg-slate-950 my-48'>
          
          <section className='bg-orange-300 h-28 relative z-10 grid place-content-center text-black text-2xl rounded-tr-full rounded-tl-full'>
            Thanks for Scrolling 😍😍
          </section>
        </footer>
      </main>
    </ReactLenis>
  );
}