"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  tag?: string;
  label?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
  tag,
  label,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative py-20 md:py-28 overflow-hidden", className)}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center gap-3"
        >
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-primary" />
          <span className="text-primary text-sm font-mono font-medium tracking-widest uppercase">
            {tag}
          </span>
          <div className="h-px w-4 bg-primary" />
        </motion.div>
      )}
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        >
          <h2 className="section-heading">{label}</h2>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
