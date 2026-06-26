"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Data Analyst",
  "AI Enthusiast",
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = roles[roleIndex];
    if (!deleting) {
      if (displayText.length < current.length) {
        return setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
      }
      return setTimeout(() => setDeleting(true), 2000);
    }
    if (displayText.length > 0) {
      return setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    }
    return setTimeout(() => {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 100);
  }, [displayText, deleting, roleIndex]);

  useEffect(() => {
    const timer = tick();
    return () => clearTimeout(timer);
  }, [tick]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5" />
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "rgba(56, 189, 248, 0.05)" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "rgba(99, 102, 241, 0.05)" }}
        />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cyan-400 font-mono text-sm mb-4 tracking-wider"
            >
              Hello, I&apos;m
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="h-10 mb-6">
              <span className="text-xl sm:text-2xl text-slate-300 font-medium">
                {displayText}
                <motion.span
                  className="inline-block w-[3px] h-6 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-lg mb-8 text-sm sm:text-base">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.resumeUrl || "#"} download>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button variant="default" size="lg">
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
              </a>
              <a href="#projects">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button variant="outline" size="lg">
                    View Projects
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-3xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative w-[21.6rem] h-[21.6rem] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 backdrop-blur-xl flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {personalInfo.profileImage ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover scale-125"
                    sizes="346px"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-400 flex items-center justify-center mx-auto mb-3">
                      <span className="text-4xl font-bold text-white">
                        {personalInfo.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">Profile photo</p>
                  </div>
                )}
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-cyan-500/10 -z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-cyan-400"
            animate={{ y: [0, 4, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
