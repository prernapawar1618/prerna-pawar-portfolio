import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand & Description */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Prerna Pawar<span className="text-accent">™</span>
                </h2>
                <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">
                    Available
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Building reliable web applications with clarity and code.
                Focused on simplifying complex requirements into maintainable
                software.
              </p>
            </div>

            {/* Social Icons - Circle Style as per reference */}
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/prernapawar1618/",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/prerna-pawar1616",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:prernapawar1616@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About Me", href: "/about" },
                { name: "Thinking (Blog)", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Based in Maharashtra, India <br />
                Available for remote collaboration.
              </p>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <Link
                  href="mailto:prernapawar1616@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  prernapawar1616@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <p>© {new Date().getFullYear()} Prerna Pawar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
