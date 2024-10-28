import React from 'react';

const Accordian = () => {
    return (
        <div>
          <h1 className='text-7xl font-bold text-slate-300 text-center mb-6'>Faq_</h1>
            <div className="join join-vertical lg:w-[700px] p-5">
  <div className="collapse collapse-arrow join-item border border-orange-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     Who I am?
    </div>
    <div className="collapse-content"> 
      <p>Hey there, I&apos;m Sharmin, a web application developer specializing in the MERN stack. My journey revolves around crafting digital experiences using MongoDB, Express.js, React, and Node.js.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Education Qualification
    </div>
    <div className="collapse-content"> 
      <p>Bachelor degree in English, with a focus on web development and hands-on experience in React, Redux, and the MERN stack. Skilled in building responsive, user-centered applications using modern technologies like TypeScript and Tailwind CSS.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-orange-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Why Interested for WEB development?
    </div>
    <div className="collapse-content"> 
      <p>I&apos;m passionate about web development because it lets me combine creativity with problem-solving to build applications that people use daily. The fast-evolving nature of the field keeps me motivated to learn and innovate continually.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Which benifits you will get from me?
    </div>
    <div className="collapse-content"> 
      <p>With my expertise in modern web technologies like React, TypeScript, and responsive design, I bring efficient, scalable solutions to your projects. I&apos;m highly adaptable, continuously learning, and committed to creating seamless, user-centered experiences that align with project goals and drive results.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordian;