import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionTransition({ 
  children, 
  id, 
  className = "",
  style = {}
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Dynamic scroll transformation: smooth scale, opacity and gentle perspective shift
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.97, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.15], [35, 0]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        opacity,
        scale,
        y,
        ...style
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.section>
  );
}
