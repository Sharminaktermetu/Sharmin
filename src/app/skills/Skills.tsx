import React from 'react';
import Image from 'next/image';
import slide from './slide.module.css'
import me from '../../assests/my-img.jpeg'
import next from '../../assests/nextjs-icon-512x309-yynfidez.png'
const ExperiencePage = () => {
  return (
    <div>
  <div className={slide.slider}>
    <div className={slide.slideTrack}>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
 
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>This is React</p>
        </div>
      </div>
     
    </div>
  </div>
</div>
  );
};

export default ExperiencePage;