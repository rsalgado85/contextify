import Link from "next/link";
import { Sparkles, Globe, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Context<span className="text-primary">ify</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Turn any webpage into AI-ready Markdown. Free, privacy-first, no sign-up required.
              Built for the AI era.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/convert" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Try Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" /> Twitter
              </a>
            </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Contextify. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-400" /> for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
}
