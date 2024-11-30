import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";


export async function AnimatedGradientTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
    
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-3xl `,
          )}
        >
          <i>
            Sharmin&apos;s <span className="text-orange-300">P</span>ortfolio
          </i> 
       
        </span>
    
      </AnimatedGradientText>
    </div>
  );
}
