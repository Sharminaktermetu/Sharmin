import React from 'react';

const Accordian = () => {
    return (
        <div>
          <h1 className='text-7xl font-bold text-slate-300 text-center mb-6'>Faq_</h1>
            <div className="join join-vertical w-[700px]">
  <div className="collapse collapse-arrow join-item border border-orange-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
     Who I am?
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Education Qualification
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Why Interested for WEB development?
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Which benifits you will get from me?
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordian;