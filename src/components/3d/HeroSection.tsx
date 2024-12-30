'use client'

import Image from 'next/image';



// import Spline from "@splinetool/react-spline";

export default function HeroSection() {
 

  return (
    <div className="absolute inset-0 w-full h-screen">
      {/* <video controls>
        <source src="/background.gif" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Image 
        src="/background.gif" 
        alt="Sample GIF" 
        fill
        unoptimized 
      />
      {/* <Spline
        scene="https://prod.spline.design/SA-nxC5IcrfdTGQg/scene.splinecode" 
      /> */}
    </div>
  );
}