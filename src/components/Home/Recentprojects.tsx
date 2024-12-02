"use client"
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import pro1 from "../../assests/projects/Black and white minimalist photo gallery collage instagram post (1).png";
import pro2 from "../../assests/projects/Black and white minimalist photo gallery collage instagram post.png"
import Image from "next/image";
import HyperText from "../ui/hyper-text";

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 0.5, x: 0, transition: { duration: 0.9 } },
};

const Recentprojects = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const isCard1InView = useInView(card1Ref, { once: false });
  const isCard2InView = useInView(card2Ref, { once: false });

  return (
    <div className="max-w-[1200px] mx-auto lg:py-20">
      <div className="flex items-center justify-center">
          <HyperText
            className="lg:text-6xl text-2xl font-bold text-slate-300 lg:my-16"
            text="My Build Projects_"
          />
        </div>
      <div className="grid lg:grid-cols-2 gap-7 lg:p-0 p-12">
        {/* First Card */}
        <motion.div
          ref={card1Ref}
          className="card  rounded-3xl overflow-hidden"
          initial="hiddenLeft"
          animate={isCard1InView ? "visible" : "hiddenLeft"}
          variants={cardVariants}
          whileHover={{ scale: 1.02 , opacity:1}}
        >
          <div className="overflow-hidden rounded-3xl">
            <Image src={pro1} alt="Project 1" />
          </div>
        
          
        </motion.div>

        {/* Second Card */}
        <motion.div
          ref={card2Ref}
          className="card rounded-3xl overflow-hidden"
          initial="hiddenRight"
          animate={isCard2InView ? "visible" : "hiddenRight"}
          variants={cardVariants}
          whileHover={{ scale: 1.02,opacity:1}}
        >
          <div className=" overflow-hidden rounded-3xl lg:mt-0 mt-12">
            <Image src={pro2} alt="Project 2"  />
          </div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default Recentprojects;

