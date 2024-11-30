import React from "react";
import HyperText from "./ui/hyper-text";

const Accordian = () => {
  return (
    <div className="lg:h-screen h-[1200px] bg-slate-950">

      <div className="flex items-center justify-center py-16">
        
      <HyperText
          className="lg:text-6xl font-bold text-slate-300"
          text="Faq_"
        />
      </div>
    <div className="max-w-[1200px]  mx-auto">
    <div className="join join-vertical text-white">
        <div className="collapse collapse-arrow join-item border border-orange-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Who I am?</div>
          <div className="collapse-content">
            <p>
              Hey there, I&apos;m Sharmin, a web application developer
              specializing in the MERN stack. My journey revolves around
              crafting digital experiences using MongoDB, Express.js, React, and
              Node.js.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Education Qualification
          </div>
          <div className="collapse-content">
            <p>
              Bachelor degree in English, with a focus on web development and
              hands-on experience in React, Redux, and the MERN stack. Skilled
              in building responsive, user-centered applications using modern
              technologies like TypeScript and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-orange-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Why Interested for WEB development?
          </div>
          <div className="collapse-content">
            <p>
              I&apos;m passionate about web development because it lets me
              combine creativity with problem-solving to build applications that
              people use daily. The fast-evolving nature of the field keeps me
              motivated to learn and innovate continually.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Which benifits you will get from me?
          </div>
          <div className="collapse-content">
            <p>
              With my expertise in modern web technologies like React,
              TypeScript, and responsive design, I bring efficient, scalable
              solutions to your projects. I&apos;m highly adaptable,
              continuously learning, and committed to creating seamless,
              user-centered experiences that align with project goals and drive
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Accordian;
