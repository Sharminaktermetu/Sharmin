import React from 'react';
import Image from 'next/image';
import slide from './slide.module.css'
import me from '../../assests/my-img.jpeg'
const ExperiencePage = () => {
  return (
    <div className={slide.body}>
      <div className={slide.slider}>
        <div className={slide.slideTrack}>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
            <div className={slide.message}>

            </div>
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
            <div className={slide.message}>

            </div>
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
            <div className={slide.message}>

            </div>
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
          </div>
          <div className={slide.slide}>
            <Image className={slide.img} src={me} height={150} width={150} alt='' />
          </div>




        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;