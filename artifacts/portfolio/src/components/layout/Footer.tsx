import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50 relative z-10 mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-5">
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

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Roy Youssef. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
