import React from 'react';
import BackgroundPattern from '../background-pattern';
import Stats from './stats';

const WhatMakesUsDifferent = () => {
  return (
    <div className=" w-full ">
        {/* Why Choose Us Section */}
      <div className="relative h-max py-10  flex flex-col items-center justify-center ">
      <BackgroundPattern />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl  font-bold text-white text-center leading-tight">
          What make us
          <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
            different
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 text-center  ">
          Experience the future of learning with our innovative platform
        </p>
        
        <Stats />
      </div>
    </div> 
    </div>
  );
};

export default WhatMakesUsDifferent;
