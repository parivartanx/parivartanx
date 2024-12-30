'use client'

import Image from 'next/image'
import HeroImg from '../../../public/background.gif'
export default function HeroSection() {
 

  return (
    <div className="absolute inset-0 w-full h-screen">
      <Image src={HeroImg.src} alt="Hero background" layout="fill" objectFit="cover" quality={100} />
    </div>
  );
}