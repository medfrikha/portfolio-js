'use client';

import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const letters = text.split('');

  return (
    <div className="flex justify-center">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="text-2xl md:text-4xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.5,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
}

export default AnimatedText