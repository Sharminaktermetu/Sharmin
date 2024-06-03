import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = async() => {
  const res =await fetch('http://localhost:5000/all-projects')
  const data =await res.json()
  console.log(data)
  return (
    <div className="w-[95%] m-auto">
      <h1 className="text-7xl font-bold text-center text-slate-300 py-6">
        My Build Projects_
      </h1>

      <div className="grid grid-cols-2 gap-5">
        {data?.map((item:any)=><div key={item._id} className="card w-[95%] card-side bg-base-100 shadow-xl">
          <figure>
            <Image src={item.images} width={200} height={200} alt="project"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
           <Link href={item._id}>View more</Link>
          </div>
        </div>)}
      
      </div>
    </div>
  );
};

export default ProjectsPage;
