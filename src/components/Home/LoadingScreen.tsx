"use client";

import { useState, useEffect } from "react";

const LoadingScreen = ({ children }:{children:React.ReactNode}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className='flex items-center justify-center h-screen'>
    <div className="loading loading-infinity w-[300px] text-white"></div>
</div>
  ) : (
    <>{children}</>
  );
};

export default LoadingScreen;
