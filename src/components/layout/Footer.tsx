"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen, Mail, Heart, Terminal, ArrowUp } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-bg/95 backdrop-blur-xl">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-text-primary">Abhishek Peiris</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Software Engineer from Sri Lanka, building scalable solutions and innovative digital products.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: PERSONAL_INFO.social.github, label: "GitHub" },
                { icon: Linkedin, href: PERSONAL_INFO.social.linkedin, label: "LinkedIn" },
                { icon: BookOpen, href: PERSONAL_INFO.social.medium, label: "Medium" },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary text-sm transition-colors duration-200 animated-underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Android", "PHP", "JavaScript", "React", "MySQL", "Kafka"].map((tech) => (
                <span key={tech} className="skill-badge text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-surface/50 border border-border">
              <p className="text-text-muted text-xs font-mono">
                <span className="text-accent">const</span>{" "}
                <span className="text-secondary">location</span> ={" "}
                <span className="text-primary">&quot;Sri Lanka&quot;</span>
              </p>
              <p className="text-text-muted text-xs font-mono">
                <span className="text-accent">const</span>{" "}
                <span className="text-secondary">company</span> ={" "}
                <span className="text-primary">&quot;Virtusa&quot;</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />{" "}
            by Abhishek Peiris · {new Date().getFullYear()}
          </p>
          <p className="text-text-muted text-xs font-mono">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
