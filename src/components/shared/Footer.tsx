
"use client";

import { useRef } from "react";
import Confetti, { ConfettiRef } from '../ui/confetti';
import TypingAnimation from "../ui/typing-animation";


const Footer = () => {
    const confettiRef = useRef<ConfettiRef>(null);





  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden ">

      
   <div className="w-[50%]">
      
   <TypingAnimation
 
      className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-400 to-blue-300/80 bg-clip-text text-center lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-3xl"
      text="Thank you for visit my portfolio 👌"
    />
  
   </div>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
        
      />
    </div>
  );
}

 

export default Footer
