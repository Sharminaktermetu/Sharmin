import ShineBorder from "../ui/shine-border";
import icon1 from "../../assests/service-icon1.svg";
import icon2 from "../../assests/service-icon2.svg";
import icon3 from "../../assests/service-icon3.svg";
import Image from "next/image";
import HyperText from "../ui/hyper-text";

const featureData = [
  {
    title: "Full-Stack Development",
    description:
      "I specialize in both front-end and back-end development using modern technologies like React, Node.js, and PostgreSQL.",
    icon: icon2,
    color: ["#D2848A", "#1a1a1a", "#FFBE7B"],
    badge: null,
  },
  {
    title: "Responsive Web Design",
    description:
      "I create fluid, mobile-first web designs that provide seamless user experiences across all devices.",
    icon: icon1,
    color: ["#A07CFE", "#FE8FB5", "#FFBE7B"],
    badge: null,
  },
 
  {
    title: "Custom Applications",
    description:
      "I develop custom web applications tailored to your business needs, ensuring scalability and efficiency.",
    icon: icon3,
    color: ["#2f4661", "#1a1a1a", "#FFBE7B"],
    badge: "NEW",
  },
];

export function ShineBorderDemo() {
  return (
    <div className="max-w-[1200px] mx-auto lg:pb-20 mt-24">
      <div className="flex items-center justify-center">
        <HyperText
          className="lg:text-6xl text-2xl font-bold text-slate-300 lg:my-16"
          text="Standout Features_"
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-7 cols-12 lg:p-0 p-12">
        {featureData.map((feature, index) => (
          <ShineBorder
            key={index}
            className="rounded-lg"
            color={feature.color}
          >
            <div className="bg-slate-950 lg:w-96 w-full rounded h-full text-white">
              <div className="card-body group hover:skew-x-2 duration-700">
                <div className="size-16 bg-[#482788] text-white rounded-full flex items-center justify-center group-hover:scale-125">
                  <Image
                    src={feature.icon}
                    height={30}
                    width={30}
                    alt=""
                    className="transform transition-transform duration-1000 group-hover:rotate-[360deg]"
                  />
                </div>

                <h2 className="card-title">
                  {feature.title}
                  {feature.badge && (
                    <div className="badge badge-secondary">{feature.badge}</div>
                  )}
                </h2>
                <p>{feature.description}</p>
              </div>
            </div>
          </ShineBorder>
        ))}
      </div>
    </div>
  );
}
