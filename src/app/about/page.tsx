"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Layers,
  Cpu,
  Globe,
  ExternalLink,
  Rocket,
  Brain,
  Zap,
  Trophy,
  Clock,
  Lightbulb,
  Building2,
  Megaphone,
  Star,
  Hexagon,
  Quote,
  Link2,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { Translations } from "@/lib/translations";

type TranslationKey = keyof Translations;

const techStack = [
  { name: "Next.js 16", icon: <Hexagon className="h-5 w-5" /> },
  { name: "React 19", icon: <Code2 className="h-5 w-5" /> },
  { name: "TypeScript", icon: <Code2 className="h-5 w-5" /> },
  { name: "TailwindCSS v4", icon: <Layers className="h-5 w-5" /> },
  { name: "Jina API", icon: <Globe className="h-5 w-5" /> },
  { name: "shadcn/ui", icon: <Layers className="h-5 w-5" /> },
  { name: "Framer Motion", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Zustand", icon: <Cpu className="h-5 w-5" /> },
  { name: "Zod", icon: <Code2 className="h-5 w-5" /> },
  { name: "Lucide Icons", icon: <Star className="h-5 w-5" /> },
  { name: "Sonner", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Next Themes", icon: <Layers className="h-5 w-5" /> },
];

const stats: {
  icon: React.ReactNode;
  valueKey: TranslationKey;
  labelKey: TranslationKey;
}[] = [
  {
    icon: <Globe className="h-5 w-5 text-primary" />,
    valueKey: "about.statsSideProjectsValue",
    labelKey: "about.statsSideProjects",
  },
  {
    icon: <Star className="h-5 w-5 text-primary" />,
    valueKey: "about.statsGithubStarsValue",
    labelKey: "about.statsGithubStars",
  },
  {
    icon: <Rocket className="h-5 w-5 text-primary" />,
    valueKey: "about.statsUsersValue",
    labelKey: "about.statsUsers",
  },
];

const achievements: {
  icon: React.ReactNode;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  color: string;
  borderColor: string;
  iconBg: string;
}[] = [
  {
    icon: <Megaphone className="h-6 w-6 text-primary" />,
    titleKey: "about.achievement1.title",
    descriptionKey: "about.achievement1.description",
    color: "from-emerald-500/10 to-teal-500/5",
    borderColor: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 ring-emerald-500/20",
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    titleKey: "about.achievement2.title",
    descriptionKey: "about.achievement2.description",
    color: "from-primary/10 to-cyan-500/5",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    titleKey: "about.achievement3.title",
    descriptionKey: "about.achievement3.description",
    color: "from-violet-500/10 to-purple-500/5",
    borderColor: "border-violet-500/20",
    iconBg: "bg-violet-500/10 ring-violet-500/20",
  },
];

const timeline: {
  dateKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: React.ReactNode;
}[] = [
  {
    dateKey: "about.timeline1.date",
    titleKey: "about.timeline1.title",
    descriptionKey: "about.timeline1.description",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    dateKey: "about.timeline2.date",
    titleKey: "about.timeline2.title",
    descriptionKey: "about.timeline2.description",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    dateKey: "about.timeline3.date",
    titleKey: "about.timeline3.title",
    descriptionKey: "about.timeline3.description",
    icon: <Megaphone className="h-4 w-4" />,
  },
  {
    dateKey: "about.timeline4.date",
    titleKey: "about.timeline4.title",
    descriptionKey: "about.timeline4.description",
    icon: <Trophy className="h-4 w-4" />,
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* ───────────────────────────────────── */}
      {/* 1. Hero Section                        */}
      {/* ───────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-primary/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-violet-500/3 rounded-full blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-28 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t("about.heroTitle")}
            </motion.div>

            {/* Contextify Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-6"
            >
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30 shadow-lg shadow-primary/10">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
            </motion.div>

            <h1 className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-3">
              {t("about.heroName")}
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium mb-6">
              {t("about.heroRole")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto space-y-4 text-sm sm:text-base leading-relaxed"
            >
              <p>{t("about.heroBio")}</p>
              <p>{t("about.heroBio2")}</p>
            </motion.div>

            {/* Social CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 mt-8"
            >
              <a
                href="https://linkedin.com/in/robinsalgado"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 text-sm"
              >
                <Link2 className="h-4 w-4" />
                {t("about.heroCTALinkedIn")}
              </a>
              <a
                href="https://github.com/robinsalgado"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                {t("about.heroCTAGitHub")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* 2. Project Stats                      */}
      {/* ───────────────────────────────────── */}
      <section className="relative py-12 sm:py-16 border-t border-border/40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              {t("about.statsTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {t(stat.valueKey)}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {t(stat.labelKey)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* 3. Tech Stack                         */}
      {/* ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              {t("about.techStackTitle")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              {t("about.techStackSubtitle")}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card px-4 py-2.5 flex items-center gap-2 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* 4. Achievements                       */}
      {/* ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-t border-border/40 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              {t("about.achievementsTitle")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              {t("about.achievementsSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`glass-card p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${achievement.borderColor} border`}
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${achievement.iconBg} ring-1 mb-4 group-hover:scale-110 transition-transform`}
                >
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(achievement.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(achievement.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* 5. Development Timeline               */}
      {/* ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              {t("about.timelineTitle")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              {t("about.timelineSubtitle")}
            </p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent -translate-x-1/2" />

            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.dateKey}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0
                      ? "sm:flex-row sm:pr-[50%]"
                      : "sm:flex-row-reverse sm:pl-[50%] sm:text-right"
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-6 sm:left-1/2 top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary/20 border-2 border-primary ring-4 ring-background z-10">
                    <motion.div
                      className="absolute inset-0.5 rounded-full bg-primary"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Content card */}
                  <div className="glass-card p-5 w-full sm:w-auto sm:flex-1 hover:border-primary/30 transition-all duration-300 group ml-12 sm:ml-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {t(item.dateKey)}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-1.5">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(item.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── */}
      {/* 6. Footer Quote                       */}
      {/* ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/3 rounded-full blur-[80px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-card p-8 sm:p-12 text-center max-w-2xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <Quote className="h-8 w-8 text-primary/40" />
            </div>
            <blockquote className="text-lg sm:text-xl italic text-muted-foreground leading-relaxed mb-4">
              {t("about.footerQuote")}
            </blockquote>
            <p className="text-sm font-medium gradient-text">
              {t("about.footerQuoteAuthor")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
