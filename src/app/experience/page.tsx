import React from 'react';
import Image from 'next/image';
import slide from './slide.module.css'
import me from '../../assests/my-img.jpeg'
const ExperiencePage = () => {
    return (
       <div className={slide.slider}>
         <div className={slide.slideTrack}>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
            <div className={slide.slide}>
            <Image src={me} height={200} width={200} alt=''/>
            </div>
         
        </div>
       </div>
    );
};

export default ExperiencePage;