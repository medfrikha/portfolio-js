'use client';

import { Project } from '../../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    title: 'Smart Stock Management (SSM)',
    description: 'A stock management app built with Vue.js and Node.js, featuring Big Data analysis and order optimization.',
  },
  {
    title: 'Cytailor',
    description: 'A cybersecurity web application built with React.js and Node.js.',
  },
  {
    title: 'Meditrouv',
    description: 'A social network for doctors built with Next.js and Node.js.',
  },
];

const  Projects = () => {
  return (
    <section
    id="projects"
    className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-16"
  >
    <motion.h2
      className="text-4xl font-bold mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Projects
    </motion.h2>
    <div className="w-11/12 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-gray-400 mt-2">{project.description}</p>
          <a
            href={project.link}
            className="text-red-500 mt-4 inline-block hover:underline"
          >
            Learn More
          </a>
        </motion.div>
      ))}
    </div>
  </section>
  );
}
export default Projects;