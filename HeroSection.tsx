"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Hero3DObject from "@/components/portfolio/Hero3DObject";
import TypingText from "@/components/portfolio/TypingText";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Innovating Through Code";
  const [showCursor, setShowCursor] = useState(true);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const update = () =>
      setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const particles = useMemo(() => {
    if (!dims.w || !dims.h)
      return [] as {
        x: number;
        y: number;
        dur: number;
        delay: number;
        targetY: number;
      }[];
    return Array.from({ length: 20 }).map(() => ({
      x: Math.random() * dims.w,
      y: Math.random() * dims.h,
      dur: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      targetY: Math.random() * dims.h,
    }));
  }, [dims]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ x: p.x, y: p.y, opacity: 0 }}
            animate={{ y: [p.y, p.targetY], opacity: [0, 1, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block text-white mb-2">Soham Deshpande</span>
                <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  <TypingText
                    texts={[
                      "Software Developer",
                      "Full Stack Developer",
                      "Problem Solver",
                      "Code Enthusiast",
                    ]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                  />
                </span>
              </h1>
            </div>

            <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light min-h-[40px]">
              <span>{text}</span>
              <span
                className={`inline-block w-0.5 h-6 md:h-8 bg-cyan-400 ml-1 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-12"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            <Hero3DObject />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">
              Scroll Down
            </span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
