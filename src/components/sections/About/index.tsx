'use client'
import { motion } from 'framer-motion';
import { HighlightItem } from './HighlightItem';
import { highlights, } from './aboutData';
// import { StatsCard } from './stats-card';

export function About() {
  return (
    <section className="py-8 " id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-us.webp"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About ParivartanX
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We are a forward-thinking software development firm focused on driving digital transformation. Our passion lies in creating innovative solutions that help businesses thrive in the digital age.
            </motion.p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <HighlightItem 
                  key={highlight} 
                  text={highlight} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <StatsCard key={stat.label} stat={stat} index={index} />
                  ))}
                </div> */}
        
      </div>
    </section>
  );
}