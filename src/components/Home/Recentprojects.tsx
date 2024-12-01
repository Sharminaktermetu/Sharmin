import React from "react";
import pro1 from "../../assests/projects/screencapture-localhost-3001-2024-12-01-18_31_45.png";
import pro2 from "../../assests/projects/Screenshot_21.png";
import Image from "next/image";

const Recentprojects = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-7 cols-12">
      <div className="card image-full  rounded-3xl">
      <div className="h-[900px] overflow-hidden rounded-3xl">
        <Image src={pro1} alt="Shoes" objectFit="true"  />
      </div>

      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
      <div className="card image-full ">
      <div className="h-[900px] overflow-hidden rounded-3xl">
        <Image src={pro2} alt="Shoes" objectFit="true" className="h-full" />
      </div>

      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
      </div>
      
    </div>
  );
};

export default Recentprojects;
