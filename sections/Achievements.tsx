"use client";

import { motion } from "framer-motion";
import { Music, Trophy, Award, Zap } from "lucide-react";
import { achievements } from "@/data/achievements";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerContainer, staggerItem } from "@/animations";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  Music,
  Trophy,
  Award,
  Zap,
};

const categoryColors: Record<string, string> = {
  Leadership: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Teamwork: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Creativity: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-24 relative">
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
            ACHIEVEMENTS
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Beyond the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Code
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Zap;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 8px 30px rgba(56, 189, 248, 0.1), 0 0 20px rgba(56, 189, 248, 0.05)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/10 flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/5 transition-all">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {achievement.description}
                </p>
                <Badge
                  variant="outline"
                  className={`text-[10px] px-2 py-0.5 ${
                    categoryColors[achievement.category] ||
                    "bg-slate-500/10 text-slate-400 border-slate-600/20"
                  }`}
                >
                  {achievement.category}
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
