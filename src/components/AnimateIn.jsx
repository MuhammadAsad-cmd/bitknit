"use client";

import { motion } from "framer-motion";

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function AnimateIn({ 
  children, 
  type = "fade-up", 
  delay = 0, 
  duration = 0.5,
  priority = false,
  className 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView={priority ? undefined : "visible"}
      animate={priority ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[type] || variants["fade-up"]}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
