'use client'

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'ZETABOX',
    duration: 'July 2023 - Present',
    description: 'Developed web applications like Cytailor, Meditrouv, and Webchat.',
  },
  {
    role: 'Software Engineer',
    company: 'Telnet',
    duration: 'August 2020 - July 2023',
    description: 'Built features for payment applications for Barclays and Ingenico.',
  },
];

const Experience = ()  =>{
  return (
    <section
    id="experience"
    className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center py-16"
  >
    <motion.h1
      className="text-4xl font-bold mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Experience
    </motion.h1>
    <div className="w-11/12 max-w-4xl space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-semibold">{exp.role}</h3>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-gray-400 text-sm">{exp.duration}</p>
          <p className="mt-4 text-gray-700">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
  );
}
export default Experience