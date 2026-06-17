"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Deterministic mini contribution grid — Math.random() during render causes SSR hydration mismatch
function seededValues(count: number, seed: number): number[] {
  const out: number[] = [];
  let s = seed;
  for (let i = 0; i < count; i++) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    out.push((s >>> 0) / 4294967295);
  }
  return out;
}
const MINI_GRID_VALUES = seededValues(5 * 12, 99);

const CODE_LINES = [
  { text: "@SpringBootApplication", color: "#A78BFA" },
  { text: "public class MainApp {", color: "#F8FAFC" },
  { text: "  @Autowired Service svc;", color: "#06B6D4" },
  { text: "  void run() {", color: "#F8FAFC" },
  { text: "    svc.process();", color: "#22C55E" },
  { text: "  }", color: "#F8FAFC" },
  { text: "}", color: "#F8FAFC" },
  { text: "// Building the future...", color: "#64748B" },
];

const FLOATING_TAGS = [
  { label: "Java", color: "#F89820", x: -120, y: -60, delay: 0 },
  { label: "Spring Boot", color: "#6DB33F", x: 110, y: -40, delay: 0.5 },
  { label: "Kafka", color: "#7C3AED", x: -100, y: 80, delay: 1 },
  { label: "Android", color: "#3DDC84", x: 120, y: 70, delay: 1.5 },
  { label: "REST API", color: "#06B6D4", x: -30, y: -130, delay: 2 },
];

export default function DeveloperCharacter() {
  const [codeIndex, setCodeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [blinkEyes, setBlinkEyes] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation
  useEffect(() => {
    const currentLine = CODE_LINES[codeIndex];
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => {
        setDisplayedCode(currentLine.text.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        const nextLine = (codeIndex + 1) % CODE_LINES.length;
        setCodeIndex(nextLine);
        setCharIndex(0);
        setDisplayedCode("");
        setIsTyping(true);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [codeIndex, charIndex]);

  // Blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkEyes(true);
      setTimeout(() => setBlinkEyes(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating tech tags */}
      {FLOATING_TAGS.map((tag, i) => (
        <motion.div
          key={tag.label}
          className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border"
          style={{
            left: `calc(50% + ${tag.x}px)`,
            top: `calc(50% + ${tag.y}px)`,
            borderColor: tag.color + "40",
            backgroundColor: tag.color + "15",
            color: tag.color,
            boxShadow: `0 0 12px ${tag.color}30`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: tag.delay + 0.5, duration: 0.4 },
            scale: { delay: tag.delay + 0.5, duration: 0.4, type: "spring" },
            y: {
              delay: tag.delay + 0.5,
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {tag.label}
        </motion.div>
      ))}

      {/* Main character SVG */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 300 380"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xs drop-shadow-2xl"
        >
          {/* Glow effect behind character */}
          <defs>
            <radialGradient id="charGlow" cx="50%" cy="70%" r="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="screenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D1224" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="screenGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D1224" />
              <stop offset="100%" stopColor="#0B1426" />
            </linearGradient>
            <linearGradient id="hoodie" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF80" />
              <stop offset="100%" stopColor="#F59E5A" />
            </linearGradient>
          </defs>

          {/* Glow behind */}
          <ellipse cx="150" cy="360" rx="100" ry="20" fill="url(#charGlow)" />

          {/* ===== DESK / WORKSTATION ===== */}
          {/* Desk surface */}
          <rect x="30" y="250" width="240" height="12" rx="4" fill="#1E293B" />
          <rect x="20" y="258" width="260" height="6" rx="2" fill="#1A2035" />

          {/* Desk legs */}
          <rect x="40" y="264" width="12" height="80" rx="3" fill="#1E293B" />
          <rect x="248" y="264" width="12" height="80" rx="3" fill="#1E293B" />

          {/* ===== MONITORS ===== */}
          {/* Left monitor */}
          <rect x="35" y="170" width="90" height="76" rx="5" fill="#0D1224" stroke="#1E293B" strokeWidth="2" />
          <rect x="37" y="172" width="86" height="72" rx="4" fill="url(#screenGrad1)" />
          {/* Monitor stand left */}
          <rect x="72" y="246" width="16" height="8" rx="2" fill="#1E293B" />
          <rect x="63" y="252" width="34" height="4" rx="1" fill="#1E293B" />

          {/* Right monitor */}
          <rect x="175" y="170" width="90" height="76" rx="5" fill="#0D1224" stroke="#1E293B" strokeWidth="2" />
          <rect x="177" y="172" width="86" height="72" rx="4" fill="url(#screenGrad2)" />
          {/* Monitor stand right */}
          <rect x="212" y="246" width="16" height="8" rx="2" fill="#1E293B" />
          <rect x="203" y="252" width="34" height="4" rx="1" fill="#1E293B" />

          {/* Center/main monitor */}
          <rect x="88" y="150" width="124" height="100" rx="6" fill="#0D1224" stroke="#7C3AED" strokeWidth="1.5" filter="url(#glow)" />
          <rect x="90" y="152" width="120" height="96" rx="5" fill="#0B0F19" />
          {/* Monitor stand center */}
          <rect x="138" y="248" width="24" height="6" rx="2" fill="#1E293B" />
          <rect x="125" y="252" width="50" height="4" rx="2" fill="#1E293B" />

          {/* ===== SCREEN CONTENT ===== */}
          {/* Left screen - Android UI mockup */}
          <rect x="42" y="177" width="40" height="64" rx="4" fill="#1A2035" />
          <rect x="44" y="179" width="36" height="6" rx="2" fill="#7C3AED" opacity="0.8" />
          <rect x="44" y="188" width="22" height="3" rx="1" fill="#94A3B8" opacity="0.5" />
          <rect x="44" y="193" width="30" height="3" rx="1" fill="#94A3B8" opacity="0.3" />
          <rect x="44" y="198" width="18" height="3" rx="1" fill="#22C55E" opacity="0.6" />
          <rect x="44" y="203" width="26" height="12" rx="2" fill="#7C3AED" opacity="0.4" />
          <rect x="44" y="217" width="20" height="3" rx="1" fill="#06B6D4" opacity="0.5" />
          <rect x="44" y="222" width="28" height="3" rx="1" fill="#94A3B8" opacity="0.3" />
          {/* Phone frame on left screen */}
          <rect x="85" y="177" width="28" height="64" rx="3" fill="#0D1830" stroke="#334155" strokeWidth="1" />
          <rect x="87" y="182" width="24" height="54" rx="2" fill="#06B6D4" opacity="0.1" />
          <circle cx="99" cy="235" r="3" fill="#3DDC84" opacity="0.7" />
          <rect x="89" y="185" width="20" height="3" rx="1" fill="#7C3AED" opacity="0.6" />
          <rect x="89" y="191" width="14" height="2" rx="1" fill="#94A3B8" opacity="0.4" />
          <rect x="89" y="196" width="18" height="2" rx="1" fill="#94A3B8" opacity="0.3" />

          {/* Right screen - GitHub activity */}
          <rect x="180" y="177" width="82" height="64" rx="3" fill="#0D1830" />
          {/* Contribution grid */}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 12 }).map((_, col) => {
              const intensity = MINI_GRID_VALUES[row * 12 + col];
              const color = intensity > 0.7 ? "#7C3AED" : intensity > 0.4 ? "#5B21B6" : "#1E293B";
              return (
                <rect
                  key={`${row}-${col}`}
                  x={182 + col * 6.5}
                  y={179 + row * 6.5}
                  width="5"
                  height="5"
                  rx="1"
                  fill={color}
                  opacity={0.8}
                />
              );
            })
          )}
          <text x="182" y="225" fontSize="5" fill="#94A3B8" opacity="0.7">peirisabhi</text>
          <text x="182" y="232" fontSize="4" fill="#22C55E" opacity="0.6">100+ repos</text>

          {/* ===== CENTER SCREEN CONTENT - Code editor ===== */}
          {/* Editor header */}
          <rect x="90" y="152" width="120" height="12" rx="5" fill="#0F1629" />
          <circle cx="97" cy="158" r="2.5" fill="#FF5F57" />
          <circle cx="105" cy="158" r="2.5" fill="#FFBD2E" />
          <circle cx="113" cy="158" r="2.5" fill="#28C840" />
          <text x="120" y="161" fontSize="5" fill="#64748B" fontFamily="monospace">MainApp.java</text>

          {/* Code lines */}
          {CODE_LINES.slice(0, 5).map((line, i) => (
            <text
              key={i}
              x="94"
              y={172 + i * 9}
              fontSize="5"
              fill={line.color}
              fontFamily="monospace"
              opacity={0.9}
            >
              {i === codeIndex ? displayedCode : line.text}
            </text>
          ))}
          {/* Cursor blink */}
          <motion.rect
            x={94 + displayedCode.length * 3.1}
            y={165 + codeIndex * 9}
            width="3"
            height="6"
            fill="#7C3AED"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />

          {/* Screen glow effects */}
          <rect x="90" y="152" width="120" height="96" rx="5" fill="#7C3AED" opacity="0.03" />

          {/* ===== KEYBOARD ===== */}
          <rect x="100" y="248" width="100" height="16" rx="4" fill="#1E293B" />
          {Array.from({ length: 10 }).map((_, i) => (
            <rect
              key={i}
              x={103 + i * 9.5}
              y={250}
              width="8"
              height="5"
              rx="1.5"
              fill="#111827"
            />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <rect
              key={i}
              x={107 + i * 9.5}
              y={257}
              width="8"
              height="5"
              rx="1.5"
              fill="#111827"
            />
          ))}

          {/* ===== CHARACTER BODY ===== */}
          {/* Chair */}
          <ellipse cx="150" cy="300" rx="45" ry="8" fill="#1E293B" />
          <rect x="130" y="275" width="40" height="30" rx="5" fill="#1A2035" />
          <rect x="125" y="270" width="50" height="8" rx="4" fill="#1E293B" />
          {/* Chair back */}
          <rect x="128" y="240" width="44" height="35" rx="5" fill="#1A2035" />

          {/* Body / Hoodie */}
          <path
            d="M110 220 Q110 215 150 215 Q190 215 190 220 L195 260 Q195 268 150 270 Q105 268 105 260 Z"
            fill="url(#hoodie)"
          />
          {/* Hoodie hood */}
          <path
            d="M118 220 Q120 205 150 202 Q180 205 182 220 Q170 218 150 218 Q130 218 118 220"
            fill="#1F2937"
          />
          {/* Hoodie details */}
          <line x1="150" y1="218" x2="150" y2="268" stroke="#0F172A" strokeWidth="1.5" opacity="0.5" />
          {/* Hoodie strings */}
          <path d="M145 220 Q143 228 141 232" stroke="#374151" strokeWidth="1" fill="none" />
          <path d="M155 220 Q157 228 159 232" stroke="#374151" strokeWidth="1" fill="none" />

          {/* Arms */}
          {/* Left arm */}
          <path
            d="M110 230 Q95 235 88 248 Q86 252 92 254 Q96 248 110 244"
            fill="#1F2937" stroke="#111827" strokeWidth="1"
          />
          {/* Right arm */}
          <path
            d="M190 230 Q205 235 212 248 Q214 252 208 254 Q204 248 190 244"
            fill="#1F2937" stroke="#111827" strokeWidth="1"
          />
          {/* Hands */}
          <ellipse cx="91" cy="255" rx="6" ry="5" fill="url(#skin)" />
          <ellipse cx="209" cy="255" rx="6" ry="5" fill="url(#skin)" />
          {/* Fingers typing */}
          <motion.g
            animate={{ y: [0, -2, 0, -1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.1 }}
          >
            <rect x="87" y="249" width="3" height="5" rx="1.5" fill="url(#skin)" />
            <rect x="91" y="248" width="3" height="5" rx="1.5" fill="url(#skin)" />
            <rect x="95" y="249" width="3" height="5" rx="1.5" fill="url(#skin)" />
          </motion.g>
          <motion.g
            animate={{ y: [0, -1, 0, -2, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.15 }}
          >
            <rect x="205" y="249" width="3" height="5" rx="1.5" fill="url(#skin)" />
            <rect x="209" y="248" width="3" height="5" rx="1.5" fill="url(#skin)" />
            <rect x="213" y="249" width="3" height="5" rx="1.5" fill="url(#skin)" />
          </motion.g>

          {/* ===== HEAD ===== */}
          {/* Neck */}
          <rect x="144" y="198" width="12" height="18" rx="5" fill="url(#skin)" />

          {/* Head */}
          <ellipse cx="150" cy="175" rx="32" ry="34" fill="url(#skin)" />

          {/* Hair - short dark */}
          <path
            d="M118 165 Q118 140 150 136 Q182 140 182 165 Q175 145 150 142 Q125 145 118 165"
            fill="#1F1A14"
          />
          <path
            d="M118 165 Q116 160 118 155 Q125 142 150 140 Q175 142 182 155 Q184 160 182 165"
            fill="#2D2519"
          />

          {/* Ears */}
          <ellipse cx="118" cy="175" rx="5" ry="7" fill="url(#skin)" />
          <ellipse cx="182" cy="175" rx="5" ry="7" fill="url(#skin)" />

          {/* Eyes */}
          <g>
            {/* Left eye */}
            <ellipse cx="140" cy="172" rx="7" ry={blinkEyes ? 1 : 7} fill="white" />
            <ellipse cx="140" cy="173" rx="4" ry={blinkEyes ? 0.5 : 4} fill="#1F1A14" />
            <circle cx="142" cy="171" r="1.5" fill="white" opacity={blinkEyes ? 0 : 0.8} />

            {/* Right eye */}
            <ellipse cx="160" cy="172" rx="7" ry={blinkEyes ? 1 : 7} fill="white" />
            <ellipse cx="160" cy="173" rx="4" ry={blinkEyes ? 0.5 : 4} fill="#1F1A14" />
            <circle cx="162" cy="171" r="1.5" fill="white" opacity={blinkEyes ? 0 : 0.8} />
          </g>

          {/* Glasses */}
          <rect x="131" y="165" width="18" height="14" rx="5" fill="none" stroke="#374151" strokeWidth="1.5" />
          <rect x="151" y="165" width="18" height="14" rx="5" fill="none" stroke="#374151" strokeWidth="1.5" />
          <line x1="149" y1="172" x2="151" y2="172" stroke="#374151" strokeWidth="1.5" />
          <line x1="118" y1="170" x2="131" y2="170" stroke="#374151" strokeWidth="1.5" />
          <line x1="169" y1="170" x2="182" y2="170" stroke="#374151" strokeWidth="1.5" />
          {/* Glass lens tint */}
          <rect x="131" y="165" width="18" height="14" rx="5" fill="#06B6D4" opacity="0.05" />
          <rect x="151" y="165" width="18" height="14" rx="5" fill="#06B6D4" opacity="0.05" />

          {/* Nose */}
          <path d="M148 180 Q150 185 152 180" fill="none" stroke="#E8956A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Smile */}
          <path d="M142 188 Q150 195 158 188" fill="none" stroke="#E8956A" strokeWidth="2" strokeLinecap="round" />

          {/* ===== SCREEN GLOW EFFECTS ===== */}
          <motion.ellipse
            cx="150"
            cy="200"
            rx="80"
            ry="30"
            fill="#7C3AED"
            opacity="0.05"
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="80"
            cy="205"
            rx="50"
            ry="20"
            fill="#06B6D4"
            opacity="0.05"
            animate={{ opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.ellipse
            cx="220"
            cy="205"
            rx="50"
            ry="20"
            fill="#22C55E"
            opacity="0.04"
            animate={{ opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Coffee mug */}
          <rect x="218" y="242" width="16" height="12" rx="3" fill="#1E293B" />
          <path d="M234 246 Q238 246 238 250 Q238 254 234 254" fill="none" stroke="#374151" strokeWidth="1.5" />
          <rect x="220" y="244" width="12" height="2" rx="1" fill="#7C3AED" opacity="0.5" />

          {/* Breathing animation overlay */}
          <motion.ellipse
            cx="150"
            cy="245"
            rx="40"
            ry="15"
            fill="#7C3AED"
            opacity="0"
            animate={{ opacity: [0, 0.03, 0], ry: [15, 17, 15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Status indicator */}
        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
          style={{
            background: "rgba(17, 24, 39, 0.9)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent">Available for work</span>
        </motion.div>
      </motion.div>

      {/* Floating code particles */}
      {[
        { text: "{ }", x: "10%", y: "20%" },
        { text: "</>" , x: "85%", y: "15%" },
        { text: "=>", x: "5%", y: "70%" },
        { text: "★", x: "90%", y: "75%" },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30 font-mono text-lg font-bold pointer-events-none"
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        >
          {p.text}
        </motion.div>
      ))}
    </div>
  );
}
