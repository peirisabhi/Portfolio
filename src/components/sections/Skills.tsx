"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CATEGORY_COLORS: Record<string, string> = {
  Backend: "#7C3AED",
  Frontend: "#06B6D4",
  Mobile: "#22C55E",
  Databases: "#F59E0B",
  Tools: "#EC4899",
  Cloud: "#38BDF8",
};

type SkillItem = { name: string; icon: string; level: number; color: string };

function SkillBar({ skill, delay }: { skill: SkillItem; delay: number }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="text-text-primary text-sm font-medium group-hover:text-primary transition-colors duration-200">
            {skill.name}
          </span>
        </div>
        <span className="text-text-muted text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function OrbitSkill({
  skill,
  angle,
  radius,
  size,
}: {
  skill: SkillItem;
  angle: number;
  radius: number;
  size: number;
}) {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 cursor-default"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-xl border text-lg"
        style={{
          width: size,
          height: size,
          background: skill.color + "15",
          borderColor: skill.color + "40",
          boxShadow: `0 0 16px ${skill.color}30`,
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        {skill.icon}
      </motion.div>
      <span className="text-[10px] text-text-muted font-mono whitespace-nowrap">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Backend");
  const categories = Object.keys(SKILLS) as Array<keyof typeof SKILLS>;
  const activeSkills = SKILLS[activeCategory as keyof typeof SKILLS] || [];

  // All skills flat for orbit view
  const allSkills = Object.values(SKILLS).flat();

  return (
    <SectionWrapper
      id="skills"
      tag="02. expertise"
      className="bg-gradient-to-b from-bg to-[#0D1224]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading">
            Technical{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with to build scalable, production-ready software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Skill bars */}
          <div className="space-y-8">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 overflow-hidden"
                  style={{
                    color: activeCategory === cat ? CATEGORY_COLORS[cat] : "#64748B",
                    background:
                      activeCategory === cat ? CATEGORY_COLORS[cat] + "15" : "transparent",
                    border: `1px solid ${
                      activeCategory === cat ? CATEGORY_COLORS[cat] + "50" : "#1E293B"
                    }`,
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Skill bars */}
            <motion.div
              key={activeCategory}
              className="space-y-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(activeSkills as SkillItem[]).map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
              ))}
            </motion.div>

            {/* Tech tags cloud */}
            <div>
              <h4 className="text-text-muted text-xs uppercase tracking-wider font-mono mb-3">All Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-mono border transition-all duration-200 cursor-default"
                    style={{
                      borderColor: skill.color + "30",
                      color: skill.color,
                      background: skill.color + "10",
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: skill.color + "20",
                      boxShadow: `0 0 12px ${skill.color}30`,
                    }}
                  >
                    {skill.icon} {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Orbital visualization */}
          <div className="relative flex items-center justify-center h-[400px]">
            {/* Orbit rings */}
            {[100, 160, 200].map((r, i) => (
              <motion.div
                key={r}
                className="absolute rounded-full border border-white/5"
                style={{ width: r * 2, height: r * 2 }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Center node */}
            <motion.div
              className="absolute z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                boxShadow: "0 0 40px rgba(124, 58, 237, 0.4), 0 0 80px rgba(124, 58, 237, 0.1)",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-3xl">⚡</span>
            </motion.div>

            {/* Orbiting skills */}
            {/* Inner orbit */}
            {[
              { ...allSkills[0], angle: 45, radius: 100, size: 44 },
              { ...allSkills[1], angle: 165, radius: 100, size: 44 },
              { ...allSkills[2], angle: 285, radius: 100, size: 44 },
            ].map((s, i) => (
              <OrbitSkill key={s.name} skill={s} angle={s.angle} radius={s.radius} size={s.size} />
            ))}
            {/* Middle orbit */}
            {[
              { ...allSkills[3], angle: 10, radius: 160, size: 40 },
              { ...allSkills[4], angle: 90, radius: 160, size: 40 },
              { ...allSkills[5], angle: 190, radius: 160, size: 40 },
              { ...allSkills[6], angle: 270, radius: 160, size: 40 },
            ].map((s) => (
              <OrbitSkill key={s.name} skill={s} angle={s.angle} radius={s.radius} size={s.size} />
            ))}
            {/* Outer orbit */}
            {[
              { ...allSkills[7], angle: 30, radius: 200, size: 36 },
              { ...allSkills[8], angle: 110, radius: 200, size: 36 },
              { ...allSkills[9], angle: 200, radius: 200, size: 36 },
              { ...allSkills[10], angle: 300, radius: 200, size: 36 },
            ].map((s) => (
              <OrbitSkill key={s.name} skill={s} angle={s.angle} radius={s.radius} size={s.size} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
