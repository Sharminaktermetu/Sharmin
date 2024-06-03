import React from 'react';

const SingleProduct = ({params}:any) => {
    console.log(params)
    return (
        <div>
            <p>{params.projectId}</p>
        </div>
    );
};

export default SingleProduct;