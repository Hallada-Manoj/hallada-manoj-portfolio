"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Filter,
  BarChart3,
  Workflow,
  Brain,
  Sliders,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const steps = [
  { icon: Database, label: "Dataset", description: "Collect & load raw data" },
  { icon: Filter, label: "Data Cleaning", description: "Handle missing values & outliers" },
  { icon: BarChart3, label: "EDA", description: "Explore patterns & distributions" },
  { icon: Workflow, label: "Feature Engineering", description: "Create & select meaningful features" },
  { icon: Brain, label: "Model Training", description: "Train ML models on prepared data" },
  { icon: Sliders, label: "Hyperparameter Tuning", description: "Optimize model parameters" },
  { icon: CheckCircle2, label: "Evaluation", description: "Assess performance metrics" },
  { icon: Rocket, label: "Deployment", description: "Deploy model to production" },
];

export default function MLWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <AnimatedSection id="mlworkflow" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 tracking-wider">
            ML WORKFLOW
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Machine Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Workflow
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-slate-800 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-indigo-500 to-cyan-500"
              style={{ height: timelineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:flex md:items-start md:gap-8 md:pb-0 pb-8"
              >
                <div className="hidden md:flex md:w-12 md:justify-center md:relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 0 30px rgba(56, 189, 248, 0.2)",
                    }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/5 z-10 transition-shadow"
                  >
                    <step.icon className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </div>

                <div className="md:hidden flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
                </div>

                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow:
                      "0 8px 30px rgba(56, 189, 248, 0.1), 0 0 20px rgba(56, 189, 248, 0.05)",
                    borderColor: "rgba(56, 189, 248, 0.2)",
                  }}
                  className="glass-card p-5 md:flex-1 md:ml-0 ml-14 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-cyan-500/70 font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-semibold">{step.label}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-10"
          >
            <Badge variant="default" className="px-4 py-1.5 text-sm">
              ✓ End-to-End ML Pipeline
            </Badge>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
