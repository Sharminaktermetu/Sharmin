"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    if (i <= text.length) {
      const typingEffect = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      }, duration);

      return () => clearInterval(typingEffect);
    } else {
      const resetEffect = setTimeout(() => {
        setDisplayedText("");
        setI(0);
      }, 2000); // 2-second pause

      return () => clearTimeout(resetEffect);
    }
  }, [i, text, duration]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText}
    </h1>
  );
}
