import React from 'react';
import Image from 'next/image';
import slide from './slide.module.css'
import next from '../../assests/icons/nextjs-icon-512x309-yynfidez.png'
import mdb from '../../assests/icons/mdb.png'
import js from '../../assests/icons/JavaScript-logo.png'
import ts from '../../assests/icons/Typescript_logo_2020.svg.png'
import express from '../../assests/icons/express-js.png'
import git from '../../assests/icons/git.png'
import mui from '../../assests/icons/images.png'
import react from '../../assests/icons/react.png'
import tailwind from '../../assests/icons/tailwind.png'
const ExperiencePage = () => {
  return (
    <div>
  <div className={slide.slider}>
    <div className={slide.slideTrack}>
      <div className={slide.slide}>
        <Image className={slide.img} src={next} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p className='w-20px'>For dynamic, server-rendered applications.</p>
        </div>
      </div>
 
      <div className={slide.slide}>
        <Image className={slide.img} src={mdb} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Delivering polished UIs with MDB's</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={js} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Mastering JavaScript for versatile</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={ts} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Code reliability and scalability</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={express} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Creating efficient backends</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={git} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Smooth collaboration and version control </p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={mui} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Crafting clean, accessible UIs</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={react} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Building interactive, component-driven</p>
        </div>
      </div>
      <div className={slide.slide}>
        <Image className={slide.img} src={tailwind} height={150} width={150} alt='' />
        <div className={slide.message}>
          <p>Designing responsive interfaces</p>
        </div>
      </div>
     
    </div>
  </div>
</div>
  );
};

export default ExperiencePage;