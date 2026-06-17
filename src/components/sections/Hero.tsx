"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, ChevronDown, MapPin, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import DeveloperCharacter from "@/components/ui/DeveloperCharacter";

const TYPED_ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Java Developer",
  "Android Developer",
  "Innovator & Builder",
];

const STATS = [
  { label: "Repositories", value: "100+" },
  { label: "Years Exp.",   value: "4+"   },
  { label: "Technologies", value: "15+"  },
  { label: "Company",      value: "VitalHub" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx]       = useState(0);

  useEffect(() => {
    const current = TYPED_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayRole(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
        if (charIdx === current.length) setTimeout(() => setIsDeleting(true), 1500);
      }, 80);
    } else if (isDeleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayRole(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
        if (charIdx === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % TYPED_ROLES.length);
        }
      }, 40);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background grid — uses CSS variable so it works in both themes */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--hero-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-color) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: `rgba(124,58,237,var(--glow-primary-opacity))` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: `rgba(6,182,212,var(--glow-secondary-opacity))` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-screen py-24">

          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Hello, World! 👋</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 leading-tight text-text-primary">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Abhishek</span>
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <motion.path
                      d="M 0 6 Q 100 0 200 6"
                      fill="none"
                      stroke="url(#underlineGrad)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-2xl sm:text-3xl font-heading font-semibold text-text-secondary">
                {displayRole}
              </span>
              <motion.span
                className="w-0.5 h-8 bg-primary"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-6 text-text-secondary text-sm"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span>@ VitalHub</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl"
            >
              Passionate about building{" "}
              <span className="text-primary font-medium">scalable software solutions</span> and
              transforming ideas into{" "}
              <span className="text-secondary font-medium">real-world products</span>.
              Exploring AI, cloud, and innovative product engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>

              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl text-text-secondary hover:text-text-primary border border-border hover:border-border-light transition-all duration-200 text-sm font-medium"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-text-muted text-sm">Find me on:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github,   href: PERSONAL_INFO.social.github,   label: "GitHub"   },
                  { icon: Linkedin, href: PERSONAL_INFO.social.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-border hover:border-primary/50 flex items-center justify-center text-text-muted hover:text-primary transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-4 gap-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-3 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.4, type: "spring" }}
                >
                  <div className="font-heading font-bold text-xl gradient-text">{stat.value}</div>
                  <div className="text-text-muted text-xs mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Character */}
          <motion.div
            className="order-1 lg:order-2 relative flex items-center justify-center h-[400px] lg:h-[550px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[350px] h-[350px] rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[300px] h-[300px] rounded-full border border-secondary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ width: 300, height: 300 }}
              >
                <div className="w-3 h-3 rounded-full bg-primary shadow-glow-primary"
                  style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }} />
              </motion.div>
              <motion.div
                className="absolute"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ width: 350, height: 350 }}
              >
                <div className="w-2 h-2 rounded-full bg-secondary"
                  style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)" }} />
              </motion.div>
            </div>
            <div className="relative z-10 w-full h-full">
              <DeveloperCharacter />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
