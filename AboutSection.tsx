"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const education = [
    { icon: GraduationCap, title: 'B.Tech in Computer Science & Engineering', institution: 'Current', score: 'CGPA: 7.4', gradient: 'from-violet-500 to-purple-500' },
    { icon: Award, title: '12th Grade', institution: 'Shraddha Junior College, Ichalkaranji', score: '91.83%', gradient: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, title: 'Schooling', institution: 'Santhome School, Sangli', score: '80%', gradient: 'from-violet-500 to-cyan-500' },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-violet-500/20 backdrop-blur-sm overflow-hidden group hover:border-violet-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Hello, I'm a Developer</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Passionate about technology and innovation, I'm currently pursuing my B.Tech in Computer Science and Engineering. My journey in tech began with a curiosity about how things work and evolved into a dedication to creating solutions that make a difference.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I specialize in building modern web applications and exploring emerging technologies. I believe in continuous learning and pushing the boundaries of what's possible with code.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'CGPA', value: '7.4' },
                { label: 'Projects', value: '4+' },
                { label: 'Skills', value: '8+' },
              ].map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative p-4 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/20 text-center group hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <div className="relative z-10">
                    <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Educational Journey</h3>
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm group hover:border-violet-500/40 transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{edu.title}</h4>
                      <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
                      <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30">
                        <span className="text-sm font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
