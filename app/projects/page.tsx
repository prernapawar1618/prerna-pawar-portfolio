"use client";

import { Button } from "@/components/ui/Button";
import Spotlight from "@/components/ui/Spotlight";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Urja Foods and Agro Pvt Ltd",
    role: "Full Stack Developer",
    imageUrl: "/urja_foods_mockup.png",
    problem:
      "The client was managing inventory and orders via phone calls and spreadsheets, leading to lost orders and tracking errors.",
    approach:
      "I built a centralized dashboard using React and Node.js. The key challenge was designing an interface simple enough for non-technical staff to use without training.",
    learning:
      "I learned that 'technically correct' code fails if the user interface confuses the actual operator. I had to rewrite the order form three times based on user feedback.",
    tags: ["React", "Node.js", "MongoDB", "UX Research"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "Innovexa",
    role: "Backend Engineer",
    imageUrl: "/innovexa_mockup.jpg",
    problem:
      "Students watching coding tutorials weren't retaining concepts because they lacked a place to practice immediately.",
    approach:
      "Created a challenge-based platform where users must write and execute Python code to advance. Used Django to handle code execution in a sandboxed environment.",
    learning:
      "Managing database relationships for user-submitted code executions was harder than expected. It taught me the importance of database normalization and security.",
    tags: ["Python", "Django", "SQLite", "Security"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "Portfolio Website",
    role: "Frontend Developer",
    imageUrl: "/portfolio_mockup.jpg",
    problem:
      "I needed a way to show recruiters not just what I built, but how I think, without it looking like a generic template.",
    approach:
      "Built a custom javascript site  for meaningful interactions, not just flash. Focused on performance and accessibility.",
    learning:
      "Balancing high-end visuals (like glassmorphism) with performance required deep diving into CSS optimization and responsive rendering behavior.",
    tags: ["Javascript", "HTML5/CSS3", "Tailwind", "Performance"],
    githubUrl: null,
    liveUrl: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-24">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
            <span className="text-accent">Problems</span> I&apos;ve Solved
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I don&apos;t just build features; I solve real business problems.
            Here is a breakdown of my recent work and the thinking behind it.
          </p>
        </section>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Project Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 group"
              >
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-video shadow-2xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <p className="text-accent font-medium tracking-wide text-sm uppercase">
                    {project.role}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 group">
                      <div className="w-6 h-6 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      </div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                        The Problem
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pl-8 border-l border-white/5">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 group">
                      <div className="w-6 h-6 rounded-md bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      </div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                        The Approach
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pl-8 border-l border-white/5">
                      {project.approach}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 group">
                      <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        What I Learned
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pl-8 border-l border-white/5">
                      {project.learning}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.githubUrl && (
                    <Link href={project.githubUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/10 h-10 px-6"
                      >
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Button>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl}>
                      <Button
                        size="sm"
                        className="rounded-full h-10 px-6 bg-white text-black hover:bg-neutral-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
