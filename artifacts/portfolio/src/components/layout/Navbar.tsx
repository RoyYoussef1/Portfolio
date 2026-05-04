import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Home, User, Layers, Mail, Github, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { href: "/",         label: "Home",     Icon: Home },
  { href: "/about",   label: "About",    Icon: User },
  { href: "/projects",label: "Projects", Icon: Layers },
  { href: "/contact", label: "Contact",  Icon: Mail },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Left spacer — keeps pill centered */}
        <div className="w-24 hidden md:block" />

        {/* Centered pill nav */}
        <nav
          className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-background/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
              : "bg-background/40 backdrop-blur-md border-white/8"
          }`}
        >
          {NAV_LINKS.map(({ href, label, Icon }) => {
            const active = location === href;
            return (
              <Link key={href} href={href}>
                <div className="relative">
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors text-sm font-medium ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden md:inline">{label}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Right — social icons */}
        <div className="pointer-events-auto flex items-center gap-4">
          <a href="https://github.com/RoyYoussef1" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/roy-youssef-097a47252" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:roy.b.youssef@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </header>
  );
}
