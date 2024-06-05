import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = async() => {
  const res =await fetch('http://localhost:5000/all-projects')
  const data =await res.json()
 
  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-7xl font-bold text-center text-slate-300 py-6">
        My Build Projects_
      </h1>

      <div className="grid grid-cols-2 gap-5">
        {data?.data.map((item:any)=><div key={item._id} className="card w-[90%] rounded-md card-side bg-base-100 shadow-xl">
        
            <Image className="p-3" src={item.images} width={100} height={90} alt="project"/>
         
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold p-5">{item.name}</h2>
         
          </div>
          <div className="flex items-center justify-center p-5">
          <Link className="btn bg-orange-300" href={`/projects/${item._id}`}>View more</Link>
          </div>
        </div>
      )}
      
      </div>
    </div>
  );
};

export default ProjectsPage;
