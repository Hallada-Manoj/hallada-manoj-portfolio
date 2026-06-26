"use client";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleOpenChange = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <Dialog open={!!project} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-2">
              <Target size={14} />
              Problem Statement
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              Business Impact
            </h4>
            <p className="text-cyan-400/80 text-sm italic leading-relaxed">
              &ldquo;{project.businessImpact}&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              Approach & Methodology
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              The project follows a structured machine learning pipeline:
              data collection and preprocessing, exploratory data analysis,
              feature engineering, model selection and training, hyperparameter
              tuning, and final evaluation using appropriate performance metrics.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wider">
              Key Results & Impact
            </h4>
            <div className="space-y-2">
              {project.keyResults.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{result}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {project.githubLink ? (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <ExternalLink size={14} className="mr-2" />
                  View on GitHub
                </Button>
              </a>
            ) : (
              <Button variant="outline" size="sm" disabled>
                <ExternalLink size={14} className="mr-2" />
                Coming to GitHub
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
