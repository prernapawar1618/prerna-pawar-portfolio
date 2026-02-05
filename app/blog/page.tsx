"use client";

import Spotlight from "@/components/ui/Spotlight";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tag: string;
  color: string;
}

const posts: BlogPost[] = [
  {
    title:
      "Shipping a real client project taught me when to stop chasing perfect code",
    excerpt:
      "While building the Urja Foods system, I learned that business deadlines matter more than perfect architecture. Breaking the project into modules helped me ship on time without compromising stability.",
    date: "Jan 10, 2026",
    readTime: "4 min read",
    slug: "shipping-real-client-project",
    tag: "Problem Solving",
    color: "bg-blue-500",
  },
  {
    title: "Building features fast without breaking existing ones",
    excerpt:
      "While delivering the Urja Foods project under tight deadlines, I learned how careless changes can break working features. This is how I started thinking in terms of safe updates, impact analysis, and small releases.",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    slug: "building-features-without-breaking",
    tag: "Engineering",
    color: "bg-purple-500",
  },
  {
    title: "A small mistake that taught me how real apps actually run",
    excerpt:
      "The Urja Foods app worked perfectly on my machine but failed after going live. One missing environment variable helped me understand why real applications behave differently outside local setup.",
    date: "Nov 22, 2025",
    readTime: "6 min read",
    slug: "small-mistake-real-apps",
    tag: "Learning Experience",
    color: "bg-yellow-500",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 min-h-screen">
      <div className="space-y-12">
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Engineering <span className="text-accent">Journal</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of my struggles, learnings, and "aha" moments. <br />
            Because engineering is about the journey, not just the code.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`#`}>
              <Spotlight className="h-full rounded-2xl glass p-8 border border-white/10 flex flex-col group cursor-pointer hover:border-white/20 transition-all">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${post.color}`}
                    ></span>
                    <span className="font-medium text-white/80">
                      {post.tag}
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-white/50 group-hover:text-white transition-colors flex items-center justify-between">
                  <span>{post.date}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    -&gt;
                  </span>
                </div>
              </Spotlight>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
