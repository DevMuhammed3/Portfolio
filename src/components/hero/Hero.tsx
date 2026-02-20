"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";


const DESCRIPTION =
  "I build modern web applications using React, Next.js, TypeScript, Node.js, Express.js and Tailwind CSS.";


function AnimatedRole({ text }: { text: string }) {
  return (
    <>
      I’m a {text}
      <span className="ml-1 animate-pulse opacity-70">|</span>
    </>
  );
}

export default function Hero() {
  const titles = [
    "full-stack developer", "react developer",
    "problem solver",
    "builder of web experiences",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, titles]);

  return (
    <section className="flex mx-auto max-w-7xl items-center overflow-x-hidden min-h-screen pt-24 md:pt-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full px-10 sm:mx-auto gap-6 md:gap-8">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-start md:pr-12 lg:pr-20 md:ml-0 sm:-ml-3"
        >
          {/* Name */}
          <div className="absolute left-1/2 sm:left-[41%] md:left-1/2 -translate-x-1/2 -top-10 sm:-top-10 md:-top-14 text-lg sm:text-xl font-medium text-slate-300">
            I’m Muhammad
          </div>

          {/* Arrow */}
          <svg
            className="absolute left-1/2 sm:left-[40%] md:left-1/2 -translate-x-1/2 -top-3 md:-top-5 h-10 md:h-12"
            width="100%"
            height="50"
            viewBox="0 0 60 40"
            fill="none"
          >
            <path
              d="M30 0 C30 20 10 20 10 40"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Image */}

          <div className="relative w-auto md:w-full flex justify-center sm:justify-start">
            <div className="
  relative
  rounded-3xl
  p-[2px]
  bg-gradient-to-br from-purple-500/30 to-indigo-500/20
hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
transition-all duration-500
mb-5
">
              <Image
                src="/Muhammed.jpeg"
                alt="Muhammad portrait"
                width={360}
                height={420}
                priority
                className="
        rounded-3xl
        w-[260px] sm:w-[320px]  lg:w-[360px]
        object-cover
      "
              />
            </div>
          </div>

          {/*
            <div className="hidden md:block absolute bottom-[20%] right-[-5%]">
              <span className=" 
            absolute -top-10 -left-5
        w-2 h-2
        bg-white/10
        rounded-xl
        backdrop-blur-md
        border-l border-b
        border-white/10
            "/>

              <span className=" 
            absolute -top-8 -left-2
        w-3 h-3
        bg-white/10
        rounded-xl
        backdrop-blur-md
        border-l border-b
        border-white/10
            "/>


              <span className=" 
            absolute -top-5 left-1
        w-4 h-4
        bg-white/10
        rounded-xl
        backdrop-blur-md
        border-l border-b
        border-white/10
            "/>

              <ThinkingBadge />
      </div>

    </div>
                */}

          {/* Tablet Side Content */}
          <div className="hidden sm:flex md:hidden flex-col justify-center gap-4 ml-4">
            <div className="h-8 text-xl text-purple-400 font-medium">
              <AnimatedRole text={text} />
            </div>

            <div className="max-w-xs text-slate-400 text-sm leading-relaxed">
              {DESCRIPTION}
            </div>
          </div>
        </motion.div >

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Desktop Title */}
          <div className="hidden md:block h-8 text-xl md:text-2xl font-medium text-purple-400">
            <AnimatedRole text={text} />
          </div>

          {/* Mobile + Desktop Description */}
          <div className="block sm:hidden h-8 text-xl md:text-2xl font-medium text-purple-400">
            <AnimatedRole text={text} />
          </div>

          <div className="min-h-22 text-[16px] block sm:hidden md:block">
            <TypewriterText
              text={DESCRIPTION}
              speed={100}
              startAfter={50}
            />
          </div>

          {/* Button */}
          <div className="mt-8 flex gap-4">
            <button>
              <a
                href="mailto:muhdid82@gmail.com"
                className="cursor-pointer px-6 py-3 text-md text-slate-300 hover:text-white rounded-lg border border-white/30 transition"
              >
                Contact Me
              </a>

            </button>
          </div>
        </motion.div>

      </div >
    </section >
  );
}


// function ThinkingBadge() {
//   return (
//     <motion.div
//       animate={{ opacity: [0.7, 1, 0.7] }}
//       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       className="
//         relative
//         px-3 py-1.5
//         rounded-xl
//         bg-purple-950/30
//         backdrop-blur-md
//         border border-white/10
//         text-xs text-slate-200
//         shadow-inner
//         select-none
//       "
//     >
//       thinking
//       <motion.span
//         className="ml-0.5"
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         …
//       </motion.span>
//     </motion.div>
//   );
// }

