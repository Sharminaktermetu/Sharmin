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
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  md:shadow-xl bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592]
    ">
         <Accordian/>
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

// import Particles from "../ui/particles";

// import Accordian from "../Accordian";


// export function ParticlesDemo() {



//   return (

//       <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  md:shadow-xl bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#511592]
// ">
//     <Accordian/>
//       <Particles
//         className="absolute inset-0"
//         quantity={300}
//         ease={100}
//         color='red'
//         refresh
//       />
//     </div>

//   );
// }
