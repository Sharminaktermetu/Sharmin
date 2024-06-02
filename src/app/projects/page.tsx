import React from 'react';

const ProjectsPage = () => {
    return (
        <div className='w-[95%] m-auto'>
            <h1 className='text-7xl font-bold text-center text-slate-300 py-6'>My Build Projects_</h1>

            <div className='grid grid-cols-2 gap-5'>
            <div className="card w-[95%] card-side bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
   
  </div>
</div>
            <div className="card w-[95%] card-side bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default ProjectsPage;