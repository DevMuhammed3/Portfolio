"use client";
import { motion, Variants } from "framer-motion";

const arrow: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Arrows() {
  return (
    <motion.svg
      width="420"
      height="170"
      viewBox="0 0 420 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        absolute top-[80px] left-1/2 z-10
        -translate-x-1/2
      "
    >
      {/* Left arrow (far left) */}
      <motion.path
        d="M110 160 C10 100, 10 50, 110 20"
        stroke="rgba(168,85,247,0.55)"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
        variants={arrow}
        transition={{ delay: 0.35 }}
      />

      {/* Center arrow (fixed) */}
      <motion.path
        d="M210 160 L210 18"
        stroke="rgba(168,85,247,0.9)"
        strokeWidth="2.3"
        fill="none"
        markerEnd="url(#arrowhead)"
        variants={arrow}
        transition={{ delay: 0.1 }}
      />

      {/* Right arrow (far right) */}
      <motion.path
        d="M310 160 C410 100, 410 50, 310 20"
        stroke="rgba(168,85,247,0.55)"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
        variants={arrow}
        transition={{ delay: 0.25 }}
      />

      {/* Arrow head */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="rgba(168,85,247,0.9)" />
        </marker>
      </defs>
    </motion.svg>
  );
}
