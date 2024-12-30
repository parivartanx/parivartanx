'use client'
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '../3d/HeroSection';
// import { Scene } from '../3d/Scene';
import Touch from '../../../public/touch-icon.png'
import { useRouter } from 'next/navigation';

export function Hero() {
  return (
    <div className="relative h-screen  overflow-hidden flex items-center">
      <HeroSection />
      <div className="container mx-auto px-4 py-32 relative flex items-center">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center j gap-2 text-indigo-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={20} />
            <span className="text-sm font-medium">We Create Digital Products</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building Tomorrow's
            <br />
            <span className="text-indigo-400">Digital Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We transform ideas into exceptional digital experiences through innovative software solutions and cutting-edge technology.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-indigo-500 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-600 transition-colors">
              Start Your Project
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
              Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div 
        onClick={() => {
           
        }}
        className='absolute bottom-0 right-2 flex justify-center  bg-background  border border-primary rounded-md'>
      <Image src={Touch.src} alt="Get in Touch" width={200} height={80} />

      </div>
    </div>
  );
}