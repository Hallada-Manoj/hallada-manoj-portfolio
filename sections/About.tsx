"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, MapPin, Calendar } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { education } from "@/data/education";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerContainer, staggerItem } from "@/animations";

const languages = [
  { name: "English", level: "Professional" },
  { name: "Kannada", level: "Native" },
  { name: "Hindi", level: "Basic" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            variants={staggerItem}
            className="text-cyan-400 font-mono text-sm mb-3 tracking-wider"
          >
            ABOUT ME
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Get to Know{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Me
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-cyan-400" />
                Education
              </h3>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2 border-cyan-500/30 pb-4 last:pb-0"
                >
                  <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/30" />
                  <p className="text-white font-semibold">{edu.degree}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                    {edu.cgpa && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-cyan-400" />
                Location
              </h3>
              <p className="text-slate-400">{personalInfo.location}</p>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Globe size={20} className="text-cyan-400" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-300 text-sm">{lang.name}</span>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                        lang.level === "Native"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : lang.level === "Professional"
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                          : "bg-slate-500/10 text-slate-400 border-slate-600/20"
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Degree", value: "B.Tech AI & ML" },
                  { label: "Graduated", value: "2024" },
                  { label: "Specialization", value: "Artificial Intelligence & Machine Learning" },
                  { label: "Status", value: "Open to Opportunities" },
                ].map((fact) => (
                  <div key={fact.label} className="flex justify-between items-center py-1">
                    <span className="text-slate-500">{fact.label}</span>
                    <span className="text-slate-200 font-medium text-right ml-4">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
