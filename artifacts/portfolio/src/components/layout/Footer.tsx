import React from "react";
import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50 relative z-10 mt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-primary">RY</span>
            </div>
            <span className="font-semibold tracking-wide text-foreground">Roy Youssef</span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">Software Engineer based in Beirut</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/RoyYoussef1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/roy-youssef-097a47252" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:roy.b.youssef@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Roy Youssef. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
