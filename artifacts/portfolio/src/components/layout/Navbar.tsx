import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Home, User, Layers, Mail, Briefcase } from "lucide-react";

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

        {/* Logo */}
        <Link href="/">
          <div className="pointer-events-auto flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
              <span className="font-mono font-bold text-primary text-sm">RY</span>
            </div>
            <span className="font-semibold text-base tracking-wide hidden sm:block">Roy Youssef</span>
          </div>
        </Link>

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
                    {/* Label: visible on md+, hidden on mobile */}
                    <span className="hidden md:inline">{label}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Hire Me — desktop only */}
        <Link href="/contact">
          <div className="pointer-events-auto hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer">
            <Briefcase className="w-4 h-4" />
            Hire Me
          </div>
        </Link>

        {/* Mobile right spacer to balance logo */}
        <div className="w-8 md:hidden" />

      </div>
    </header>
  );
}
