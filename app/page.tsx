"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Layers, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import Spotlight from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-accent selection:text-white overflow-hidden">

      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-150"></div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full flex flex-col justify-start items-center pt-20 pb-10 overflow-hidden">

        {/* Subtle Background Glows (Toned down from 'Aurora') */}
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Badge: Professional & Clear */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative group p-[1.5px] rounded-full overflow-hidden bg-white/5 border border-white/10">
              {/* Spinning Gradient Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0,transparent_25%,#818cf8_50%,transparent_75%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity"
              />

              {/* Inner Badge Content */}
              <div className="relative flex items-center rounded-full bg-black/90 px-6 py-2 backdrop-blur-xl">
                <Terminal className="w-4 h-4 mr-2 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-100 tracking-wide">
                  Software Developer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Heading: Clarity > Hype */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] mb-6 max-w-3xl mx-auto"
          >
            Building reliable <span className="text-white">web applications</span> <br />
            by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">simplifying complex problems.</span>
          </motion.h1>

          {/* Description: Grounded & Value-Focused */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            I focus on simplifying complex requirements and shipping clean, maintainable front-ends.
            I enjoy working on UI logic, state management, and real-world edge cases.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/projects">
              <Button variant="primary" size="lg" className="px-8">
                View My Work
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg" className="px-8">
                My Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Bento Grid */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Large Card */}
            <Spotlight className="md:col-span-2 rounded-2xl glass p-10 flex flex-col justify-between min-h-[300px] border border-white/10">
              <div>
                <div className="p-4 bg-indigo-500/10 w-fit rounded-2xl mb-6 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Layers className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">System Thinking</h3>
                <p className="text-muted-foreground max-w-lg leading-relaxed">
                  I don't just patch bugs; I look for the root cause.
                  Whether it's optimizing a React render cycle or normalizing a database schema, I aim for solutions that last.
                </p>
              </div>
            </Spotlight>

            {/* Vertical Card */}
            <Spotlight className="rounded-2xl glass p-8 flex flex-col justify-center border border-white/10">
              <div className="p-4 bg-purple-500/10 w-fit rounded-2xl mb-6 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Code className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Readable Code</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Code is read more often than it's written. I write self-documenting code that my team (and future me) will understand.
              </p>
            </Spotlight>

            {/* Vertical Card */}
            <Spotlight className="rounded-2xl glass p-8 flex flex-col justify-center border border-white/10">
              <div className="p-4 bg-emerald-500/10 w-fit rounded-2xl mb-6 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Cpu className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">User Centric</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Performance isn't just a metric; it's user experience. I optimize for the end-user on a slow 4G connection.
              </p>
            </Spotlight>

            {/* Wide CTA Card */}
            <Spotlight className="md:col-span-2 lg:col-span-2 rounded-2xl glass p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between border border-white/10 gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">Looking for a grounded engineer?</h3>
                <p className="text-muted-foreground">I'm ready to join a team and start contributing from day one.</p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="px-10">
                    Let&apos;s Talk
                  </Button>
                </Link>
              </div>
            </Spotlight>
          </div>
        </div>
      </section>
    </div>
  );
}
