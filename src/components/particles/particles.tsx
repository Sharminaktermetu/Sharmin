"use client";

import { useEffect, useState } from "react";

import Particles from "../ui/particles";
import Accordian from "../Accordian";



export function ParticlesDemo() {
    const resolvedTheme ='dark'
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#fff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden shadow-md bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592] lg:py-20
    ">
         <Accordian/>
      <Particles
        className="absolute inset-0"
        quantity={70}
        ease={80}
        color={color}
        refresh
        size={1}
      />
    </div>
  );
}

