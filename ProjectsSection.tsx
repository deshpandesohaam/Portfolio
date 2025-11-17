"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Advance Rover Robot",
      description:
        "Rover robot is a vehicle equipped with different type of sensors like a smoke detection MQ2 sensor or a DHT11 sensor to check atmospheric humidity and temperature.",
      tech: ["C++", "IoT", "Sensors", "Robotics"],
      gradient: "from-violet-600 to-purple-600",
      glowColor: "violet",
    },
    {
      title: "Skinscrappers :Framework for AAA Titan Games",
      description:
        "SKINSCRAPPER Framework is a modular, customizable development kit for creating FPS and TPS games in Unity. It includes ready-made character controllers, a full weapon system with ammo and recoil mechanics, and advanced AI that can navigate, attack strategically, and use cover during combat.",
      tech: ["C++", "Graphics", "Game Dev", "Optimization"],
      gradient: "from-cyan-600 to-blue-600",
      glowColor: "cyan",
    },
    {
      title: "Taskforge",
      description:
        "Comprehensive team collaboration platform with real-time updates, project management tools, and seamless communication features.",
      tech: ["JavaScript", "Node.js", "React", "WebSocket"],
      gradient: "from-purple-600 to-pink-600",
      glowColor: "purple",
    },
    {
      title: "Student Result Management System",
      description:
        "Cloud-driven platform that allows educational institutions to handle results more efficiently. Enables teachers to securely upload student marks while students can view their results instantly by entering their roll number.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Firestore"],
      gradient: "from-green-600 to-teal-600",
      glowColor: "green",
    },
    {
      title: "Saloon Management System",
      description:
        "Intuitive appointment booking and management system for salons, streamlining customer scheduling and service tracking.",
      tech: ["JavaScript", "Bootstrap", "Node.js", "Database"],
      gradient: "from-blue-600 to-cyan-600",
      glowColor: "blue",
    },
  ];

  const getGlowClass = (
    color: "violet" | "cyan" | "purple" | "blue" | "green"
  ) => {
    const glows: Record<string, string> = {
      violet: "shadow-violet-500/50",
      cyan: "shadow-cyan-500/50",
      purple: "shadow-purple-500/50",
      blue: "shadow-blue-500/50",
      green: "shadow-green-500/50",
    };
    return glows[color] || glows.violet;
  };

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium tracking-widest uppercase text-cyan-400">
              Featured Work
            </span>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div
                className={`relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                  hoveredProject === index
                    ? `border-violet-500/40 shadow-2xl ${getGlowClass(
                        project.glowColor as any
                      )} scale-[1.02]`
                    : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>

                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-slate-800/50 border border-violet-500/20 text-xs text-slate-300 font-medium hover:border-violet-500/40 hover:text-violet-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      <span>View Project</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 transition-colors duration-300 group/btn">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-2xl`}
                  />
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
