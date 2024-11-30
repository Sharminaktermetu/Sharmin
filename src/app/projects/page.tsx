import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = async () => {
  const res = await fetch("https://sharmin-server.vercel.app/all-projects");
  const data = await res.json();

  return (
    <div className="bg-black max-h-[1700px]">
      <div className="w-[90%] mx-auto">
      <div className="flex items-center justify-center">
        
      <HyperText
          className="lg:text-6xl font-bold text-slate-300 my-12"
          text="My Build Projects_"
        />
      </div>
        <div className="grid lg:grid-cols-2 gap-5 cols-12 pb-40">
          {data?.data.map((item: any) => (
            <div
              key={item._id}
              className="card lg:max-w-[90%] lg:h-40 h-[180px] rounded-md card-side bg-base-100 shadow-xl"
            >
              {/* <Image className="p-3 bg-cover" src={item.images} width={100} height={20} alt="project"/> */}

              {item.image ? (
                <Image
                  src={item?.images}
                  className="p-3 bg-cover"
                  width={100}
                  height={20}
                  alt="Picture of the author"
                />
              ) : (
                ""
              )}
              <div className="card-body w-[250px]">
                <h2 className="card-title text-center lg:text-2xl font-bold">
                  {item.name}
                </h2>
                <p>{item.learn.slice(0, 50)}...</p>
              </div>
              <div className="flex items-center justify-center p-3">
                <Link
                  className="btn bg-orange-300"
                  href={`/projects/${item._id}`}
                >
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
