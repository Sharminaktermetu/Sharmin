import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className='text-center text-white flex-col font-semibold flex items-center justify-center h-screen'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className='btn btn-error my-3 bg-slate-300' href="/">Return Home</Link>
      </div>
    );
};

export default Notfound;