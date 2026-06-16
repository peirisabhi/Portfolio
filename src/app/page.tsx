"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import GitHub from "@/components/sections/GitHub";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Global particle background */}
      <ParticleBackground />

      {/* Cursor glow */}
      <div
        ref={cursorGlowRef}
        className="cursor-glow pointer-events-none"
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHub />
        <Blog />
        <Contact />
      </motion.div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
