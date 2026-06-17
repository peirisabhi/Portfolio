"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, BookOpen, Code2 } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface GitHubData {
  username: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  languages: { name: string; count: number }[];
  topRepos: {
    name: string;
    description: string | null;
    url: string;
    stars: number;
    forks: number;
    language: string | null;
  }[];
}

const LANG_COLORS: Record<string, string> = {
  Java: "#F89820", PHP: "#777BB4", JavaScript: "#F7DF1E", Python: "#3776AB",
  Kotlin: "#7F52FF", HTML: "#E34F26", CSS: "#1572B6", TypeScript: "#3178C6",
  Shell: "#89E051", Go: "#00ADD8",
};

const STAT_CARDS = (data: GitHubData) => [
  { label: "Repositories", value: data.publicRepos,      icon: BookOpen, color: "#7C3AED" },
  { label: "Followers",    value: data.followers,         icon: Users,    color: "#06B6D4" },
  { label: "Total Stars",  value: data.totalStars,        icon: Star,     color: "#F59E0B" },
  { label: "Languages",    value: data.languages.length,  icon: Code2,    color: "#22C55E" },
];

// Deterministic heatmap values — Math.random() during render causes SSR hydration mismatch
function seededValues(count: number, seed: number): number[] {
  const out: number[] = [];
  let s = seed;
  for (let i = 0; i < count; i++) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    out.push((s >>> 0) / 4294967295);
  }
  return out;
}
const HEATMAP_VALUES = seededValues(52 * 7, 42);

const FALLBACK: GitHubData = {
  username: "peirisabhi", publicRepos: 100, followers: 36, totalStars: 3,
  languages: [
    { name: "Java",       count: 40 }, { name: "PHP",        count: 20 },
    { name: "JavaScript", count: 15 }, { name: "Python",     count: 10 },
    { name: "Kotlin",     count: 8  }, { name: "HTML",       count: 7  },
  ],
  topRepos: [],
};

export default function GitHub() {
  const [ghData, setGhData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(setGhData)
      .catch(() => setGhData(FALLBACK));
  }, []);

  const totalLangCount = ghData?.languages.reduce((s, l) => s + l.count, 0) || 1;

  return (
    <SectionWrapper id="github" tag="05. github" className="bg-gradient-to-b from-bg-elevated/30 to-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading flex items-center gap-4">
            <Github className="w-10 h-10 text-text-secondary" />
            GitHub <span className="gradient-text">Analytics</span>
          </h2>
          <p className="section-subheading">Open source contributions, repositories, and development activity.</p>
        </motion.div>

        {/* Stat cards */}
        {ghData && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {STAT_CARDS(ghData).map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: stat.color + "15", boxShadow: `0 0 20px ${stat.color}18` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="font-heading font-bold text-3xl mb-1" style={{ color: stat.color }}>
                  <AnimatedCounter end={stat.value} suffix={stat.label === "Repositories" ? "+" : ""} />
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10" style={{ display:"none" }}>

          Language breakdown
          {ghData && (
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading font-semibold text-text-primary mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Language Distribution
              </h3>

              {/* Colour bar */}
              <div className="flex h-3 rounded-full overflow-hidden mb-6 gap-0.5">
                {ghData.languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    className="rounded-full"
                    style={{ width: `${(lang.count / totalLangCount) * 100}%`, background: LANG_COLORS[lang.name] || "#64748B" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {ghData.languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: LANG_COLORS[lang.name] || "#64748B" }} />
                    <span className="text-text-secondary text-sm flex-1">{lang.name}</span>
                    <div className="flex items-center gap-2 w-36">
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-bg-elevated)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: LANG_COLORS[lang.name] || "#64748B" }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(lang.count / totalLangCount) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.2, duration: 0.8 }}
                        />
                      </div>
                      <span className="text-text-muted text-xs w-8 text-right font-mono">
                        {Math.round((lang.count / totalLangCount) * 100)}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Profile card */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">🐙</div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary text-lg">github.com/peirisabhi</h3>
                  <p className="text-text-secondary text-sm">Software Engineer · Sri Lanka</p>
                </div>
              </div>

              {/* Contribution heatmap */}
              <div className="mb-4">
                <p className="text-text-muted text-xs mb-3 font-mono">Contribution activity</p>
                <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(26, 1fr)" }}>
                  {HEATMAP_VALUES.map((v, i) => {
                    const bg = v > 0.85 ? "#7C3AED" : v > 0.65 ? "#5B21B6" : v > 0.40 ? "#3B1580" : v > 0.20 ? "#1E1040" : "var(--color-bg-elevated)";
                    return (
                      <div key={i} className="rounded-sm" style={{ width: "100%", paddingTop: "100%", background: bg }} />
                    );
                  })}
                </div>
              </div>

              <motion.a
                href="https://github.com/peirisabhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-200"
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </motion.a>
            </div>

            {/* Top repos */}
            {ghData && ghData.topRepos.length > 0 && (
              <div className="glass-card p-6">
                <h4 className="font-heading font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Top Repositories
                </h4>
                <div className="space-y-3">
                  {ghData.topRepos.slice(0, 3).map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-text-primary text-sm font-medium group-hover:text-primary transition-colors truncate">{repo.name}</p>
                        <p className="text-text-muted text-xs truncate">{repo.description || "No description"}</p>
                      </div>
                      <div className="flex items-center gap-3 text-text-muted text-xs ml-4 flex-shrink-0">
                        {repo.language && <span className="w-2 h-2 rounded-full" style={{ background: LANG_COLORS[repo.language] || "#64748B" }} />}
                        <span className="flex items-center gap-1"><Star className="w-3 h-3" />{repo.stars}</span>
                        <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
