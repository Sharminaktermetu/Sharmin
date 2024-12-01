import ShineBorder from "../ui/shine-border";
import icon1 from "../../assests/service-icon1.svg";
import Image from "next/image";
import HyperText from "../ui/hyper-text";
export function ShineBorderDemo() {
 
  return (
    <div className="max-w-[1200px] mx-auto py-20">
      <div className="flex items-center justify-center ">
          <p
            className="lg:text-6xl font-bold text-slate-300 mb-16"
           
          >
            Standout Features
          </p>
        </div>
      <div className="grid lg:grid-cols-3 gap-7 cols-12">
        <ShineBorder
          className="rounded-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="bg-slate-950 w-96 rounded h-full text-white">
            <div className="card-body group">
              <div className="size-16 bg-[#482788] text-white rounded-full flex items-center justify-center group">
                <Image
                  src={icon1}
                  height={30}
                  width={30}
                  alt=""
                  className="transform transition-transform duration-300 group-hover:skew-y-12"
                />
              </div>

              <h2 className="card-title">Fast Performance</h2>
              <p>
                Enjoy lightning-fast load times and a seamless user experience
                with our optimized platform.
              </p>
            </div>
          </div>
        </ShineBorder>

        <ShineBorder
          className="rounded-lg"
          color={["#D2848A", "#f2b3c0", "#FFBE7B"]}
        >
          <div className="bg-slate-950 text-white w-96 rounded h-full">
            <div className="card-body group">
            <div className="size-16 bg-[#482788] text-white rounded-full flex items-center justify-center">
                <Image
                  src={icon1}
                  height={30}
                  width={30}
                  alt=""
                  className="transform transition-transform duration-300 group-hover:skew-y-12"
                />
              </div>
              <h2 className="card-title">Shoes!</h2>
              <p>
                {" "}
                Enjoy lightning-fast load times and a seamless user experience
                with our optimized platform.
              </p>
            </div>
          </div>
        </ShineBorder>
        <ShineBorder
          className="rounded-lg"
          color={["#2f4661", "#1a1a1a", "#FFBE7B"]}
        >
          <div className="bg-slate-950 text-white w-96 rounded h-full">
            <div className="card-body group">
            <div className="size-16 bg-[#482788] text-white rounded-full flex items-center justify-center">
                <Image
                  src={icon1}
                  height={30}
                  width={30}
                  alt=""
                  className="transform transition-transform duration-300 group-hover:skew-y-12"
                />
              </div>
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
}
