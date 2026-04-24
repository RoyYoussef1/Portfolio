import React from "react";
import { Link } from "wouter";
import { Terminal } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 — System Fault | Roy Youssef" description="Page not found." />
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center glass-panel p-12 rounded-xl border border-white/5 border-dashed max-w-lg w-full">
          <div className="w-20 h-20 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center mx-auto mb-6">
            <Terminal className="w-10 h-10 text-destructive" />
          </div>
          
          <h1 className="text-6xl font-bold font-mono text-foreground mb-4">404</h1>
          <p className="text-muted-foreground text-lg mb-8">
            System fault. The requested route could not be resolved in the current architecture.
          </p>
          
          <Link href="/">
            <button className="px-6 py-3 rounded-md bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors font-mono text-sm">
              [ Return to Root ]
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
