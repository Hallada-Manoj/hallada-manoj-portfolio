"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerContainer, staggerItem } from "@/animations";
import { Button } from "@/components/ui/button";

const orgLogos: Record<string, string> = {
  "IBM": "IBM",
  "Duke University": "Duke",
};

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-24 relative">
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
            CERTIFICATIONS
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Certifications
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-6">
          {certificates.map((cert, index) => {
            const initial = orgLogos[cert.organization]?.charAt(0) || cert.organization.charAt(0);
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 8px 30px rgba(56, 189, 248, 0.1), 0 0 20px rgba(56, 189, 248, 0.05)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/30 transition-colors">
                    <span className="text-lg font-bold text-cyan-400">
                      {initial}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-cyan-400/80 text-xs font-medium">
                      {cert.organization}
                    </p>
                    {cert.credentialLink && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 px-3"
                        >
                          <ExternalLink size={12} className="mr-1.5" />
                          View Certificate
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
