import Image from "next/image";

const SinleProject = async ({ params }: any) => {
   const res = await fetch(`http://localhost:5000/project/${params.projectId}`);
   const data = await res.json();
   console.log(data)
   return (
      <div>
         <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-x-20">
               <Image
                  src={data?.images}
                  width={200}
                  height={200}


                  alt="Picture of the author"
               />
               <div>
                  <h1 className="text-5xl font-bold text-orange-300 py-3">{data.name}</h1>
                  <hr className="w-[30%]"/>
                  <div className="flex gap-5">
                     <p className="py-6 text-slate-400 text-2xl">What is included: {data.learn}</p>
                  </div>
                     <p className="py-6 text-slate-400 text-2xl"><span className="text-orange-300">What Texhnology used:</span> {data.technology.map((item:any)=><p>{item}</p>)}</p>
              
                
              
                  
               </div>
            </div>

         </div>
         <hr />

      </div>
   );
};

export default SinleProject;