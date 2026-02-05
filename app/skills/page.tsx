"use client";

import Spotlight from "@/components/ui/Spotlight";

interface SkillItem {
    name: string;
    category: "Frontend" | "Backend" | "Tools";
}

const skills: SkillItem[] = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3 / SCSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "DBMS", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Adobe XD", category: "Tools" },
    { name: "Canva", category: "Tools" },
    { name: "Debugging", category: "Tools" },
];

export default function SkillsPage() {
    const groupedSkills = {
        Frontend: skills.filter((s) => s.category === "Frontend"),
        Backend: skills.filter((s) => s.category === "Backend"),
        Tools: skills.filter((s) => s.category === "Tools"),
    };

    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 min-h-screen">
            <div className="space-y-16">
                <section className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Skills</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive list of technologies and tools I work with.
                    </p>
                </section>

                <div className="space-y-12">
                    {Object.entries(groupedSkills).map(([category, items]) => (
                        <section key={category}>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
                                <span className="w-8 h-1 bg-accent rounded-full"></span>
                                {category}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {items.map((skill) => (
                                    <Spotlight key={skill.name} className="flex items-center justify-center p-6 rounded-2xl glass border border-white/5 hover:border-accent/40 transition-colors">
                                        <span className="font-semibold text-white text-center">{skill.name}</span>
                                    </Spotlight>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
