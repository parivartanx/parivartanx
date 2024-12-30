'use client'
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Digital Banking Platform',
    category: 'FinTech',
    image: "/projects/project1.webp",
    description: 'A modern banking solution with advanced security features and seamless user experience.'
  },
  {
    title: 'Healthcare Management System',
    category: 'Healthcare',
    image: "/projects/project2.webp",
    description: 'Streamlined patient care and medical record management system.'
  },
  {
    title: 'E-commerce Platform',
    category: 'Retail',
    image: "/projects/project3.webp",
    description: 'Scalable e-commerce solution with AI-powered recommendations.'
  }
];

export function Projects() {
  return (
    <section className="py-24 " id="projects">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white transform transition-transform duration-300">
                <span className="text-sm text-indigo-300 mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}