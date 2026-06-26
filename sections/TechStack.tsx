"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiMysql,
  SiGit,
  SiGithub,
  SiJupyter,
  SiGooglecolab,
  SiPlotly,
  SiApachespark,
} from "react-icons/si";
import { FaChartBar, FaFileExcel } from "react-icons/fa";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerContainer, staggerItem } from "@/animations";

const technologyGroups = [
  {
    label: "Programming",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle SQL", icon: DiMsqlServer, color: "#F80000" },
      { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
    ],
  },
  {
    label: "Machine Learning",
    items: [
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: SiPlotly, color: "#11557C" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
      { name: "VS Code", icon: DiVisualstudio, color: "#007ACC" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Excel", icon: FaFileExcel, color: "#D83B01" },
    ],
  },
];

const allTechnologies = technologyGroups.flatMap((g) => g.items);
const totalCount = allTechnologies.length;

export default function TechStack() {
  return (
    <AnimatedSection id="techstack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.p
            variants={staggerItem}
            className="text-cyan-400 font-mono text-sm mb-3 tracking-wider"
          >
            TECH STACK
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Work With
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-slate-500 text-sm"
          >
            {totalCount}+ Technologies &amp; Tools
          </motion.p>
        </motion.div>

        <div className="space-y-10">
          {technologyGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.15 }}
            >
              <h3 className="text-white/60 text-xs font-mono uppercase tracking-widest mb-4 text-center">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                {group.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{
                      y: -8,
                      boxShadow:
                        "0 8px 30px rgba(56, 189, 248, 0.12), 0 0 20px rgba(56, 189, 248, 0.06)",
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    className="glass-card p-4 flex flex-col items-center justify-center gap-3 cursor-default group"
                  >
                    <tech.icon
                      className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-slate-400 font-medium text-center group-hover:text-slate-200 transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
