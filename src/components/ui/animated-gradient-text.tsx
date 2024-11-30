import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center font-semibold backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] dark:bg-black/40",
        className,
      )}
    >


      {children}
    </div>
  );
}
