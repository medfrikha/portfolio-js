'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.img
        src="/images/medLinkedin.jpeg"  // Ensure the path is correct
        alt="Mohamed Frikha"
        className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-neon"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm Mohamed Frikha, an Experienced Full Stack JavaScript software engineer proficient in Next.js, React.js, Vue.js, and Node.js technologies.
      </motion.p>
      <motion.p
        className="text-lg md:text-2xl text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Ambitious and motivated professional with a strong track record of developing innovative and efficient solutions. Skilled in front-end and back-end development, with a keen eye for detail and a passion for creating high-quality applications. Excellent ability to work in a collaborative team and excel in dynamic and fast-paced projects.
      </motion.p>
    </section>
  );
}