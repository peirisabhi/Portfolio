"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Code2 } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <SectionWrapper id="projects" tag="04. projects" className="bg-gradient-to-b from-bg to-bg-elevated/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            A collection of projects I&apos;ve built — from enterprise tools to open source contributions.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {PROJECT_FILTERS.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: activeFilter === filter ? "rgba(124,58,237,0.12)" : "transparent",
                border: `1px solid ${activeFilter === filter ? "rgba(124,58,237,0.45)" : "var(--color-border)"}`,
                color: activeFilter === filter ? "#7C3AED" : "var(--color-text-muted)",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative group"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div
                  className="h-full rounded-2xl p-6 border overflow-hidden relative transition-all duration-300"
                  style={{
                    background: hoveredId === project.id ? "var(--card-bg-hover)" : "var(--card-bg)",
                    borderColor: hoveredId === project.id ? project.color + "40" : "var(--glass-border)",
                    boxShadow: hoveredId === project.id
                      ? `0 8px 40px ${project.color}15, 0 0 0 1px ${project.color}20`
                      : "0 4px 16px rgba(0,0,0,0.06)",
                    transform: hoveredId === project.id ? "translateY(-4px)" : "none",
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${project.color}08 0%, transparent 70%)`,
                      transform: "translate(30%, -30%)",
                    }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: project.color + "15", border: `1px solid ${project.color}30` }}
                    >
                      <Code2 className="w-6 h-6" style={{ color: project.color }} />
                    </div>
                    <div className="flex gap-2">
                      {[project.githubUrl].map((href) => (
                        <motion.a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      ))}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {project.featured && (
                    <div
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs mb-3"
                      style={{ background: project.color + "15", border: `1px solid ${project.color}30`, color: project.color }}
                    >
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  <h3 className="font-heading font-bold text-text-primary mb-2 group-hover:gradient-text transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{
                          background: "var(--color-bg-elevated)",
                          color: "var(--color-text-secondary)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-text-muted text-xs">
                    <div className="flex items-center gap-1"><Star className="w-3 h-3" /><span>Open Source</span></div>
                    <div className="flex items-center gap-1"><GitFork className="w-3 h-3" /><span>GitHub</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/peirisabhi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            View All 100+ Repositories
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
