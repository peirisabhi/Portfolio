"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Lightbulb, Heart, Coffee, Globe, Layers } from "lucide-react";
import { TIMELINE, PERSONAL_INFO } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

const HIGHLIGHTS = [
  { icon: Code2,     label: "Clean Code",        desc: "Writing maintainable, scalable, and efficient code",                        color: "#7C3AED" },
  { icon: Lightbulb, label: "Innovation",         desc: "Turning creative ideas into real-world digital products",                   color: "#06B6D4" },
  { icon: Heart,     label: "Passion",            desc: "Deeply passionate about software engineering & solving hard problems",      color: "#22C55E" },
  { icon: Coffee,    label: "Always Learning",    desc: "Exploring AI, cloud, IoT, and emerging technologies every day",            color: "#F59E0B" },
  { icon: Globe,     label: "Open Source",        desc: "100+ repositories on GitHub — sharing tools and ideas with the community", color: "#EC4899" },
  { icon: Layers,    label: "Full Stack Mindset", desc: "Comfortable from embedded hardware to cloud-scale distributed systems",    color: "#38BDF8" },
];

export default function About() {
  return (
    <SectionWrapper id="about" tag="01. about me">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Bio */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading mb-6">About <span className="gradient-text">Me</span></h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I&apos;m <span className="text-text-primary font-medium">Abhishek Peiris</span>, a Software Engineer
                  from <span className="text-accent">🇱🇰 Sri Lanka</span>, currently building enterprise-scale
                  solutions at <span className="text-primary font-medium">VitalHub Innovations Lab</span>.
                </p>
                <p>
                  My journey started with a deep curiosity for how technology can solve real-world problems.
                  I specialize in backend systems with{" "}
                  <span className="text-primary font-medium">Java & Spring Boot</span>, mobile apps with{" "}
                  <span className="text-secondary font-medium">Android</span>, and full-stack web development.
                </p>
                <p>
                  Beyond writing code, I&apos;m fascinated by software architecture, distributed systems, and how
                  AI is reshaping the way we build software. I actively contribute to open source and share
                  knowledge via my{" "}
                  <a href={PERSONAL_INFO.social.medium} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Medium blog
                  </a>.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="glass-card-hover p-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: h.color + "18", boxShadow: `0 0 20px ${h.color}18` }}
                  >
                    <h.icon className="w-5 h-5" style={{ color: h.color }} />
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm mb-1">{h.label}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {[
                { icon: MapPin,   label: "Sri Lanka", color: "text-accent"   },
                { icon: Briefcase, label: "VitalHub",   color: "text-primary"  },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-bg-elevated)" }}
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-text-secondary">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div>
            <motion.h3
              className="font-heading font-bold text-xl text-text-primary mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Journey
            </motion.h3>

            <div className="relative pl-12">
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(180deg, transparent, #7C3AED 10%, #06B6D4 50%, #22C55E 90%, transparent)" }}
              />

              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="absolute -left-[29px] w-8 h-8 rounded-xl flex items-center justify-center text-sm z-10"
                    style={{ background: item.color + "18", border: `1px solid ${item.color}45`, boxShadow: `0 0 15px ${item.color}25` }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>

                  <motion.div
                    className="glass-card p-4 ml-4 group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h4>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{ color: item.color, background: item.color + "12", border: `1px solid ${item.color}28` }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
