"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Lock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectModal from "@/sections/ProjectModal";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerContainer, staggerItem } from "@/animations";
import type { Project } from "@/types";
import Image from "next/image";

function getUniqueTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
  return Array.from(techSet).sort();
}

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTech =
        !selectedTech || project.technologies.includes(selectedTech);
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTech && matchesSearch;
    });
  }, [selectedTech, searchQuery]);

  const technologies = getUniqueTechnologies();
  const featuredProject = filteredProjects.find((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            variants={staggerItem}
            className="text-cyan-400 font-mono text-sm mb-3 tracking-wider"
          >
            PROJECTS
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/50 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-500/30 transition-all"
              aria-label="Search projects"
            />
          </div>
          <ProjectFilters
            technologies={technologies}
            selected={selectedTech}
            onSelect={setSelectedTech}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {featuredProject && (
            <motion.div
              variants={staggerItem}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="glass-card overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-3"
              onClick={() => setSelectedProject(featuredProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(featuredProject);
                }
              }}
              aria-label={`View details for ${featuredProject.title}`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-56 md:h-full min-h-[200px] overflow-hidden">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 flex items-center justify-center">
                      <BookOpen size={48} className="text-cyan-400/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  <Badge
                    variant="default"
                    className="absolute top-4 left-4 px-3 py-1"
                  >
                    Featured Project
                  </Badge>
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {featuredProject.shortDescription}
                  </p>
                  <p className="text-cyan-400/80 text-sm font-medium mb-4 italic">
                    &ldquo;{featuredProject.businessImpact}&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="default" className="text-[10px] px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(featuredProject);
                      }}
                    >
                      <BookOpen size={14} className="mr-2" />
                      Case Study
                    </Button>
                    {featuredProject.githubLink ? (
                      <a
                        href={featuredProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="outline" size="sm">
                          <SiGithub size={14} className="mr-2" />
                          GitHub
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        <SiGithub size={14} className="mr-2" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 8px 30px rgba(56, 189, 248, 0.1), 0 0 20px rgba(56, 189, 248, 0.05)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="glass-card overflow-hidden group cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
                onMouseEnter={() => setHoveredImage(project.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative h-40 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredImage === project.id ? "scale-110" : "scale-100"
                      }`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 flex items-center justify-center">
                      <BookOpen size={32} className="text-cyan-400/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-semibold mb-1.5 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-1 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <p className="text-cyan-400/70 text-xs italic mb-3 line-clamp-1">
                    {project.businessImpact}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="default" className="text-[10px] px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-8 px-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <BookOpen size={12} className="mr-1.5" />
                      Case Study
                    </Button>
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="ghost" size="sm" className="text-xs h-8 px-3">
                          <SiGithub size={12} className="mr-1.5" />
                          GitHub
                        </Button>
                      </a>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-8 px-3 text-slate-500"
                        disabled
                      >
                        <Lock size={12} className="mr-1.5" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">No projects match your criteria.</p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </AnimatedSection>
  );
}
