"use client";

import { motion } from "framer-motion";
import { container, item } from "./techVariants";
import Arrows from "./Arrows";

type TechBoxProps = {
  label: string;
  items: string[];
};

function TechBox({ label, items }: TechBoxProps) {
  return (
    <div
      className="
        w-48
        p-4
        bg-white/5
        rounded-xl border border-white/10
        backdrop-blur
      "
    >
      {/* Header */}
      <div
        className="
          mb-3 px-4 py-2.5
          text-purple-300 text-sm font-medium
          border-b border-white/10
          -mx-4 -mt-4
        "
      >
        {label}
      </div>

      {/* Items */}
      <ul
        className="
          space-y-1
          text-xs text-slate-300
        "
      >
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function TechDiagram() {
  return (
    <section
      id="tech"
      className="
        py-32
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          relative
          w-[420px] h-[420px]
          mx-auto
        "
      >
        <motion.div
          variants={item}
          className="
            absolute top-[-200px] left-[0px] z-20
          "
        >
          <TechBox
            label="Frontend"
            items={["React", "Next.js", "TypeScript", "Tailwind"]}
          />
        </motion.div>
        <motion.div
          variants={item}
          className="
            absolute top-[-220px] left-1/2 z-20
            -translate-x-1/2
          "
        >
          <TechBox label="Backend" items={["Node.js", "Express", "SQL"]} />
        </motion.div>
        <motion.div
          variants={item}
          className="
            absolute top-[-200px] right-[0px] z-20
          "
        >
          <TechBox label="Tools" items={["Git", "Docker", "Linux"]} />
        </motion.div>

        <Arrows />
        {/* Skills */}
        <motion.div
          variants={item}
          className="
            absolute top-[260px] left-1/2 z-0
            -translate-x-1/2
          "
        >
          <div
            className="
              flex items-center justify-center
              w-24 h-24
              bg-purple-500/20
              rounded-full border border-purple-500/40
            "
          >
            <span
              className="
                text-purple-300 text-sm
              "
            >
              Skills
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
