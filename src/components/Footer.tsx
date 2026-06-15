"use client";

import Link from "next/link";
import { Sparkles, Globe, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

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
              {t("footer.description")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer.product")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/convert" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.tryNow")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.donate")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer.connect")}</h4>
            <ul className="space-y-2">
            <li>
              <a href="https://github.com/rsalgado85" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" /> {t("footer.github")}
              </a>
            </li>
            <li>
              <a href="https://x.com/rsalgado85" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" /> {t("footer.twitter")}
              </a>
            </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
            {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
