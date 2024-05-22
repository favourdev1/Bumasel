import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {


  return (
    <div>
      <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
        <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Product Item 1</div>
        <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Product Item 2</div>
        <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Product Item 3</div>
      </div>
     
    </div>
  );
};

export default Product;
