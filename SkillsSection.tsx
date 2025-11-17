"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Server } from 'lucide-react';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      gradient: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'C', level: 85, color: 'violet' },
        { name: 'C++', level: 80, color: 'purple' },
        { name: 'JavaScript', level: 90, color: 'cyan' },
      ],
    },
    {
      icon: Palette,
      title: 'Frontend',
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'HTML', level: 95, color: 'cyan' },
        { name: 'CSS', level: 90, color: 'blue' },
        { name: 'TailwindCSS', level: 92, color: 'violet' },
        { name: 'Bootstrap', level: 85, color: 'purple' },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      gradient: 'from-violet-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 82, color: 'cyan' },
      ],
    },
  ];

  const getColorClasses = (color: 'violet' | 'purple' | 'cyan' | 'blue') => {
    const colors: Record<string, { bg: string; glow: string; text: string }> = {
      violet: { bg: 'bg-violet-500', glow: 'shadow-violet-500/50', text: 'text-violet-400' },
      purple: { bg: 'bg-purple-500', glow: 'shadow-purple-500/50', text: 'text-purple-400' },
      cyan: { bg: 'bg-cyan-500', glow: 'shadow-cyan-500/50', text: 'text-cyan-400' },
      blue: { bg: 'bg-blue-500', glow: 'shadow-blue-500/50', text: 'text-blue-400' },
    };
    return colors[color] || colors.violet;
  };

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Technical Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">A comprehensive toolkit of modern technologies and programming languages</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div key={categoryIndex} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: categoryIndex * 0.1 }} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm group hover:border-violet-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => {
                      const colorClasses = getColorClasses(skill.color as any);
                      const isHovered = hoveredSkill === `${categoryIndex}-${skillIndex}`;
                      return (
                        <div key={skillIndex} onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)} onMouseLeave={() => setHoveredSkill(null)} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-300 font-medium">{skill.name}</span>
                            <span className={`text-sm font-bold ${colorClasses.text}`}>{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }} className={`h-full ${colorClasses.bg} rounded-full relative ${isHovered ? `shadow-lg ${colorClasses.glow}` : ''} transition-shadow duration-300`}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-16 text-center">
          <p className="text-slate-400 text-sm">Continuously expanding my skillset through hands-on projects and staying updated with emerging technologies</p>
        </motion.div>
      </div>
    </section>
  );
}
