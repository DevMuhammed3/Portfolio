'use client'

import { useEffect, useState } from "react";
import { mono } from "@/lib/fonts";

type Props = {
  text: string;
  startAfter?: number;
  speed?: number;
};

export default function TypewriterText({
  text,
  startAfter = 1200,
  speed = 35,
}: Props) {
  const [visibleText, setVisibleText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, startAfter);

    return () => clearTimeout(timeout);
  }, [startAfter]);

  useEffect(() => {
    if (!started) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;
      setVisibleText(text.slice(0, index));

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <p
      className={`
        ${mono.className}
        mt-4
        max-w-lg
        text-slate-400
        leading-relaxed
        font-light
        tracking-wide
      `}
    >
      {visibleText}
    </p>
  );
}

