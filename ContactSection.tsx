"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Message sent! (This is a demo - connect to your backend to make it functional)"
    );
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-violet-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/soham-deshpande-89b2ab28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "hover:text-cyan-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect and
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-violet-500/20 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-900/50 border rounded-md border-slate-700 text-white px-3 py-2 focus:outline-none focus:border-violet-500 transition-all duration-300 ${
                      focusedField === "name"
                        ? "shadow-lg shadow-violet-500/20"
                        : ""
                    }`}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-900/50 border rounded-md border-slate-700 text-white px-3 py-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ${
                      focusedField === "email"
                        ? "shadow-lg shadow-cyan-500/20"
                        : ""
                    }`}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-900/50 border rounded-md border-slate-700 text-white px-3 py-2 focus:outline-none focus:border-violet-500 transition-all duration-300 ${
                      focusedField === "subject"
                        ? "shadow-lg shadow-violet-500/20"
                        : ""
                    }`}
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-900/50 border rounded-md border-slate-700 text-white px-3 py-2 min-h-[150px] focus:outline-none focus:border-cyan-500 transition-all duration-300 ${
                      focusedField === "message"
                        ? "shadow-lg shadow-cyan-500/20"
                        : ""
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-cyan-600 hover:to-violet-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  </div>
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-violet-500/20 backdrop-blur-sm space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-200 font-medium">
                      sohamdeshpande457@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-slate-200 font-medium">
                      Sangli, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-violet-500/40 text-slate-300 ${social.color} transition-all duration-300 group`}
                    >
                      <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-green-400">
                    Available for Work
                  </p>
                  <p className="text-xs text-slate-400">
                    Open to exciting opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
