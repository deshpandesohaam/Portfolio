"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Sparkles } from 'lucide-react';

export default function ResumeSection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const resumeUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6912e36d5b20ed36cc9b0669/b5e15e86f_Sohamresumepdf1-Copy.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Soham_Deshpande_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-violet-500/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 text-center space-y-8">
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.6 }} className="inline-block">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 p-5 shadow-lg shadow-violet-500/50">
                  <FileText className="w-full h-full text-white" />
                </div>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium tracking-widest uppercase text-violet-400">Download</span>
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">My Resume</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">Get a comprehensive overview of my skills, experience, and educational background</p>
              </div>

              <motion.button onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} onClick={handleDownload} className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-bold text-white text-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105">
                <motion.div className="absolute inset-0 rounded-xl" animate={{ boxShadow: isHovered ? ['0 0 20px rgba(139, 92, 246, 0.5)', '0 0 40px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(139, 92, 246, 0.5)'] : '0 0 0px rgba(139, 92, 246, 0)' }} transition={{ duration: 2, repeat: Infinity }} />
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Updated 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-600" />
                <span>PDF Format</span>
                <div className="w-1 h-1 rounded-full bg-slate-600" />
                <span>1 Page</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
