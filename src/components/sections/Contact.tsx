"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Linkedin, Github, BookOpen, CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface FormData { name: string; email: string; subject: string; message: string; }
type FormState = "idle" | "loading" | "success" | "error";

const CONTACT_LINKS = [
  { icon: Mail,     label: "Email",    value: PERSONAL_INFO.email,              href: `mailto:${PERSONAL_INFO.email}`,    color: "#7C3AED", description: "Drop me an email"     },
  { icon: Linkedin, label: "LinkedIn", value: "abhishekpeiris",                 href: PERSONAL_INFO.social.linkedin,      color: "#0077B5", description: "Connect with me"      },
  { icon: Github,   label: "GitHub",   value: "peirisabhi",                     href: PERSONAL_INFO.social.github,        color: "#6D28D9", description: "Check my repos"       },
  { icon: BookOpen, label: "Medium",   value: "@abhishekpeiris",               href: PERSONAL_INFO.social.medium,        color: "#22C55E", description: "Read my articles"     },
];

export default function Contact() {
  const [form, setForm]     = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [state, setState]   = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())                                         e.name    = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))  e.email   = "Valid email required";
    if (!form.subject.trim())                                      e.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 10)         e.message = "Message must be at least 10 chars";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setState("idle"), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  return (
    <SectionWrapper id="contact" tag="07. contact" className="bg-gradient-to-b from-bg-elevated/30 to-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subheading">Have a project in mind or just want to chat? I&apos;d love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left: Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed">
                I&apos;m currently open to new opportunities and interesting projects. Whether you have a
                question, a project idea, or just want to say hi — my inbox is always open!
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent" /><span>Sri Lanka (Remote available)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Briefcase className="w-4 h-4 text-primary" /><span>Open to opportunities</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {CONTACT_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
                  style={{ background: "var(--card-bg)", borderColor: "var(--color-border)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ x: 4, borderColor: link.color + "50", background: link.color + "08" } as object}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: link.color + "15", border: `1px solid ${link.color}30` }}
                  >
                    <link.icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text-muted text-xs">{link.description}</p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-primary transition-colors truncate">{link.value}</p>
                  </div>
                  <span className="text-text-muted group-hover:text-text-primary transition-colors flex-shrink-0">→</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="p-4 rounded-2xl border"
              style={{ background: "rgba(34,197,94,0.05)", borderColor: "rgba(34,197,94,0.2)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <div>
                  <p className="text-accent text-sm font-medium">Available for new projects</p>
                  <p className="text-text-muted text-xs mt-0.5">Usually responds within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card p-10 flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">Message Sent! 🎉</h3>
                  <p className="text-text-secondary">Thank you for reaching out. I&apos;ll get back to you as soon as possible!</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass-card p-8 space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name",  label: "Your Name",      placeholder: "Abhishek Peiris",   type: "text"  },
                      { name: "email", label: "Email Address",   placeholder: "you@example.com",   type: "email" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-text-secondary text-sm mb-1.5 font-medium">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof FormData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`form-input ${errors[field.name as keyof FormData] ? "form-input-error" : ""}`}
                        />
                        {errors[field.name as keyof FormData] && (
                          <p className="text-red-500 text-xs mt-1">{errors[field.name as keyof FormData]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-1.5 font-medium">Subject</label>
                    <input
                      type="text" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Project collaboration / Job opportunity / ..."
                      className={`form-input ${errors.subject ? "form-input-error" : ""}`}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-1.5 font-medium">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`form-input resize-none ${errors.message ? "form-input-error" : ""}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    <p className="text-text-muted text-xs mt-1 text-right">{form.message.length}/500</p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-3 py-4"
                    whileHover={{ scale: state === "loading" ? 1 : 1.01 }}
                    whileTap={{ scale: state === "loading" ? 1 : 0.99 }}
                  >
                    {state === "loading" ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send className="w-5 h-5" />Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
