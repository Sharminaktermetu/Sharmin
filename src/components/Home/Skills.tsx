"use client";

import Accordian from "../Accordian";
import { ServerSlills } from "../ServeSkills/ServerSkills";
import ContactForm from "../Skills/Form";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592] lg:py-20">
      <div className="flex items-center justify-center">
        <p className="lg:text-6xl text-2xl font-bold text-slate-300 lg:my-16">
          Contact Me_
        </p>
      </div>

      <div className="lg:max-w-[1200px] w-full mx-auto lg:flex lg:gap-7 hero lg:py-20 lg:flex-row flex flex-col">
        {/* Animated Contact Form */}
        <motion.div
          className="lg:w-[50%] p-12 lg:p-0"
          initial={{ opacity: 0, x: 50 }} // Hidden and positioned slightly below
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide up on scroll
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
          viewport={{ once: false }} // Animation triggers only once
        >
          <ContactForm />
        </motion.div>

        {/* Other Content */}
        <div className="w-[50%]">
          <ServerSlills />
        </div>
      </div>
    </div>
  );
};

export default Skills;
