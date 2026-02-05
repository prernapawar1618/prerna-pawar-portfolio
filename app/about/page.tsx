"use client";

import { Button } from "@/components/ui/Button";
import Spotlight from "@/components/ui/Spotlight";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-3xl mx-auto space-y-20">

                {/* Intro: Honest & Direct */}
                <section className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
                        Hello, I'm <span className="text-accent">Prerna Pawar</span>.
                    </h1>
                    <div className="prose prose-invert prose-lg text-muted-foreground leading-relaxed">
                        <p>
                            I didn&apos;t start coding to be an &quot;architect&quot; or a &quot;ninja&quot;. I started because I wanted to know how the internet worked.
                        </p>
                        <p>
                            My journey began with breaking CSS layouts and writing messy JavaScript. Over time, that curiosity turned into a discipline.
                            Today, I focus on building tools that work reliably. I believe that <strong>clarity &gt; cleverness</strong>, and that a good developer is always learning.
                        </p>
                    </div>
                </section>

                {/* Timeline: Lessons Learned */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">My Path So Far</h2>

                    <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">

                        {/* Arrowsoft */}
                        <div className="relative">
                            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-black bg-accent "></span>
                            <h3 className="text-lg font-bold text-white">Software Developer</h3>
                            <p className="text-sm text-accent mb-2">Arrowsoft Consultancy Pvt Ltd | Sept 2024 - April 2025</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Developed web and mobile applications using modern frameworks. My biggest lesson here was collaboration—learning that code doesn&apos;t exist in a vacuum.
                                I focused on building reusable software components to improve team efficiency and delivery speed.
                            </p>
                        </div>

                        {/* Internships */}
                        <div className="relative">
                            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-black bg-purple-500 "></span>
                            <h3 className="text-lg font-bold text-white">Full Stack Internships</h3>
                            <p className="text-sm text-purple-400 mb-2">ProgresoIndia & Oasis Infobyte | 2023</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                My internships taught me that &quot;it works on my machine&quot; is not a valid excuse.
                                At ProgresoIndia, I implemented cost-effective solutions and responsive web layouts, while at Oasis Infobyte, I focused on thorough testing that improved delivery times by 20%.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="relative">
                            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-black bg-cyan-800 "></span>
                            <h3 className="text-lg font-bold text-white">The Foundation</h3>
                            <p className="text-sm text-cyan-500 mb-2">MCA & BSc Computer Science | 2019 - 2024</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Degrees gave me the theory—algorithms, database structures, and logic. But building my own projects gave me the practice.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="pt-8 border-t border-white/5">
                    <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Looking for a high-potential engineer?</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            I am methodical, I learn fast, and I don&apos;t give up on hard problems.
                        </p>
                        <Link href="/resume.pdf" target="_blank">
                            <Button size="lg" className="px-12">
                                View My Resume <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
