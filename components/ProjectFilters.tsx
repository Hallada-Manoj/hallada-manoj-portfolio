"use client";

import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  technologies: string[];
  selected: string | null;
  onSelect: (tech: string | null) => void;
}

export default function ProjectFilters({
  technologies,
  selected,
  onSelect,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
          selected === null
            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
            : "bg-white/5 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200"
        )}
      >
        All
      </button>
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onSelect(tech === selected ? null : tech)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
            selected === tech
              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
              : "bg-white/5 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200"
          )}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
