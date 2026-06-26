"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerContainer, staggerItem } from "@/animations";

const iconMap: Record<string, React.ElementType> = {
  Github: SiGithub,
  Linkedin: FaLinkedin,
  Mail: Mail,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (name && email && message) {
      setStatus("success");
      const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.open(mailtoLink, "_blank");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-24 relative">
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
            CONTACT
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Connect
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-white font-semibold">Get in Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&apos;m currently seeking full-time opportunities as a Data
                Scientist or Machine Learning Engineer. Feel free to reach out
                regarding opportunities, collaborations, or projects.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || SiGithub;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                      aria-label={link.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 space-y-4"
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                aria-label="Your name"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                aria-label="Your email address"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                aria-label="Your message"
              />
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="w-full">
                  {status === "success" || status === "error" ? null : (
                    <Send size={14} className="mr-2" />
                  )}
                  {status === "success"
                    ? "Message Sent!"
                    : status === "error"
                    ? "Please fill all fields"
                    : "Send Message"}
                </Button>
              </motion.div>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2"
                >
                  <CheckCircle size={14} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2"
                >
                  <AlertCircle size={14} />
                  Please fill in all fields before sending.
                </motion.div>
            )}
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
