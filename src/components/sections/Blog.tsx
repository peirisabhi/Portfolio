"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO } from "@/lib/constants";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail?: string | null;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return dateStr;
  }
}

function readingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

const PLACEHOLDER_ARTICLES: Article[] = [
  {
    title: "Building Scalable Microservices with Spring Boot and Kafka",
    link: PERSONAL_INFO.social.medium,
    pubDate: "2024-01-15",
    content:
      "A comprehensive guide to building event-driven microservices architecture using Apache Kafka and Spring Boot. We explore producers, consumers, topic configuration, and fault tolerance patterns.",
    thumbnail: null,
  },
  {
    title: "Android Development Best Practices in 2024",
    link: PERSONAL_INFO.social.medium,
    pubDate: "2024-02-10",
    content:
      "Exploring modern Android development patterns including Jetpack Compose, Kotlin coroutines, MVVM architecture, and how to build maintainable mobile applications at scale.",
    thumbnail: null,
  },
  {
    title: "Agile Sprint Management: Data-Driven Approaches",
    link: PERSONAL_INFO.social.medium,
    pubDate: "2024-03-05",
    content:
      "How to effectively manage sprint data, measure team velocity, and use analytics to continuously improve software delivery in Agile development environments.",
    thumbnail: null,
  },
];

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>(PLACEHOLDER_ARTICLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/medium")
      .then((r) => r.json())
      .then((data) => {
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper id="blog" tag="06. blog" className="bg-gradient-to-b from-bg to-[#0D1224]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading flex items-center gap-4">
            <BookOpen className="w-10 h-10 text-secondary" />
            Latest{" "}
            <span className="gradient-text-accent">Articles</span>
          </h2>
          <p className="section-subheading">
            Sharing knowledge and experiences on software engineering and tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articles.slice(0, 3).map((article, i) => (
            <motion.a
              key={article.link + i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="glass-card-hover h-full overflow-hidden">
                {/* Thumbnail or gradient placeholder */}
                <div
                  className="relative h-40 overflow-hidden rounded-t-2xl"
                  style={{
                    background: [
                      "linear-gradient(135deg, #7C3AED20, #06B6D420)",
                      "linear-gradient(135deg, #06B6D420, #22C55E20)",
                      "linear-gradient(135deg, #F59E0B20, #7C3AED20)",
                    ][i % 3],
                  }}
                >
                  {article.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen
                        className="w-16 h-16 opacity-10"
                        style={{
                          color: ["#7C3AED", "#06B6D4", "#F59E0B"][i % 3],
                        }}
                      />
                    </div>
                  )}
                  {/* Medium badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-white text-black flex items-center justify-center text-[8px] font-bold">M</span>
                    Medium
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-text-muted text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readingTime(article.content)}
                      </span>
                      {article.pubDate && (
                        <span>{formatDate(article.pubDate)}</span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={PERSONAL_INFO.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen className="w-4 h-4" />
            Read All Articles on Medium
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
