import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGraphql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const skills = [
  {
    title: "React",
    icon: <FaReact className="text-blue-500 text-4xl mb-3" />,
    description:
      "I specialize in building dynamic user interfaces using React, delivering seamless, interactive experiences.",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className=" text-4xl mb-3" />,
    description:
      "With Next.js, I create performant and SEO-friendly web applications with server-side rendering and static site generation.",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl mb-3" />,
    description:
      "I build scalable back-end applications using Node.js, ensuring high performance and reliability in handling server-side logic.",
  },


  {
    title: "JavaScript",
    icon: <IoLogoJavascript className="text-yellow-500 text-4xl mb-3" />,
    description:
      "JavaScript is at the core of my development process, enabling me to create dynamic, client-side interactions and logic.",
  },
];

export function QualityCard() {
  return (
    <div className="flex flex-col  text-white">

      <div className="grid lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-slate-950 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-xl">
            <div className="mb-4 flex items-center justify-center">{skill.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{skill.title}</h2>
            <p className="text-lg text-white/80">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
