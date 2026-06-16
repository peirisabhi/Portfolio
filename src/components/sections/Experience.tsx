"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" tag="03. experience" className="bg-gradient-to-b from-[#0D1224] to-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading">
            Work{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey and the impact I&apos;ve made.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="relative glass-card p-8 overflow-hidden group">
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${exp.color}08 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full"
                  style={{ background: `linear-gradient(180deg, ${exp.color}, ${exp.color}40)` }}
                />

                <div className="pl-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: exp.color + "20", boxShadow: `0 0 20px ${exp.color}20` }}
                        >
                          <Briefcase className="w-5 h-5" style={{ color: exp.color }} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl text-text-primary">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm" style={{ color: exp.color }}>
                              {exp.company}
                            </span>
                            <ExternalLink className="w-3 h-3" style={{ color: exp.color }} />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-accent text-xs font-medium">Current</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-text-primary text-sm mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-3 text-text-secondary text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.08 }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary text-sm mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono border"
                          style={{
                            borderColor: exp.color + "30",
                            color: exp.color,
                            background: exp.color + "10",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Open to opportunities card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative rounded-2xl p-8 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                Open to New Opportunities
              </h3>
              <p className="text-text-secondary max-w-md mx-auto mb-6">
                I&apos;m always excited to explore new challenges and innovative projects. Let&apos;s build
                something amazing together.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
