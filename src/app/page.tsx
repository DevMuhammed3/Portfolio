
"use client";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import SkillsTimelineSection from "@/components/skills/timeline/SkillsTimelineSection";
import MobileSkillsTimeline from "@/components/skills/timeline/MobileSkillsTimeline";
import RootLayout from "./layout";
// import TechDiagram from "@/components/tech/Tech";

export default function Home() {
  return (
    <main
      className="
        select-none
      "
    >
      <RootLayout>
        <Navbar />
        <Hero />
        <div className="hidden md:block">
          <SkillsTimelineSection />
        </div>

        <div className="block md:hidden">
          <MobileSkillsTimeline />
        </div>

      </RootLayout>
    </main>
    // <TechDiagram />
    // <SkillsScroll />
  );
}


// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";


// function SkillsScroll() {
//   const ref = useRef(null);
//
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//
//   return (
//     <section ref={ref} className="relative h-[300vh]">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//
//         {/* Center Circle */}
//
//         <svg width="300" height="300" className="absolute pointer-events-none">
//           <circle
//             cx="150"
//             cy="150"
//             r="120"
//             stroke="rgba(255,255,255,0.2)"
//             strokeWidth="2"
//             fill="none"
//           />
//         </svg>
//
//         <Orbit scrollYProgress={scrollYProgress} />
//
//       </div>
//     </section>
//   );
// }
//
// import { MotionValue, } from "framer-motion";
// import { SkillsSection } from "@/components/skills/V2/SkillsSection";
//
// function Orbit({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
//   const radius = 140;
//
//   const skills = [
//     { label: "React", baseAngle: 0 },
//     { label: "TypeScript", baseAngle: Math.PI / 2 },
//     { label: "Next.js", baseAngle: Math.PI },
//     { label: "Node.js", baseAngle: (3 * Math.PI) / 2 },
//     { label: "Express.js", baseAngle: (3 * Math.PI) / 3 },
//   ];
//
//   return (
//
//     <div className="relative w-[300px] h-[300px]">
//       {skills.map((skill, i) => (
//         <OrbitItem
//           key={i}
//           label={skill.label}
//           baseAngle={skill.baseAngle}
//           radius={140}
//           scrollYProgress={scrollYProgress}
//         />
//       ))}
//     </div>
//   );
// }
//
//
// function OrbitItem({
//   label,
//   baseAngle,
//   radius,
//   scrollYProgress,
// }: {
//   label: string;
//   baseAngle: number;
//   radius: number;
//   scrollYProgress: any;
// }) {
//   const angle = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [baseAngle, baseAngle + Math.PI * 2]
//   );
//
//   // حركة أفقية بس
//   const x = useTransform(angle, (a) => Math.cos(a) * radius);
//
//   // إحساس العمق
//   const depth = useTransform(angle, (a) => Math.sin(a));
//
//   const scale = useTransform(depth, [-1, 1], [0.7, 1.1]);
//   const opacity = useTransform(depth, [-1, 1], [0.4, 1]);
//   const zIndex = useTransform(depth, (d) => (d > 0 ? 20 : 0));
//
//   return (
//     <motion.div
//       style={{ x, scale, opacity, zIndex }}
//       className="
//         absolute left-1/2 top-1/2
//         -translate-x-1/2 -translate-y-1/2
//         w-16 h-16 rounded-full
//         bg-white/10 backdrop-blur
//         flex items-center justify-center
//         text-sm text-white
//         pointer-events-none
//       "
//     >
//       {label}
//     </motion.div>
//   );
// }
//
//
//
// function SkillCircle({ label, angle }: { label: string; angle: number }) {
//   const radius = 120;
//
//   const x = Math.cos(angle) * radius;
//   const y = Math.sin(angle) * radius;
//
//   return (
//     <div
//       className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur
//                  flex items-center justify-center text-sm text-white"
//       style={{
//         left: "50%",
//         top: "50%",
//         transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
//       }}
//     >
//       {label}
//     </div>
//   );
// }
//
