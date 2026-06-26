"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 tracking-wider">
            EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Journey
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Open to Opportunities
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
              I am currently seeking full-time opportunities as a Data Scientist
              or Machine Learning Engineer. If you are looking for a passionate
              and dedicated team member, let&apos;s connect!
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                <Briefcase size={14} />
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
