import { ArrowUpRight, BookOpen, Linkedin, Github } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const channels = [
  {
    icon: BookOpen,
    name: "Medium",
    handle: "adityamangal98.medium.com",
    href: "https://adityamangal98.medium.com",
    desc: "Long-form write-ups, including a hands-on benchmark series on OCR and document-AI models.",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "/in/aditya-mangal",
    href: "https://www.linkedin.com/in/aditya-mangal/",
    desc: "Shorter posts on LLM systems, document intelligence and lessons from production.",
  },
  {
    icon: Github,
    name: "GitHub",
    handle: "adityamangal1998",
    href: "https://github.com/adityamangal1998",
    desc: "20+ AI/ML projects: LLM fine-tuning, super-resolution, layout analysis and more.",
  },
];

const topics = [
  "Benchmarking OCR & vision-language models",
  "Running modern 1–8B models on an 8 GB GPU",
  "Agentic AI with guardrails and grounding",
  "Retrieval-augmented generation in practice",
  "Evaluating LLMs: ground truth & determinism",
  "Cutting LLM cost without losing accuracy",
];

const Insights = () => (
  <div className="neural-bg min-h-screen pt-24">
    <div className="section-container">
      <AnimatedSection>
        <p className="font-mono text-sm uppercase tracking-wider text-primary">Knowledge Base</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="gradient-text">Insights</span> & Writing
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          I write about what I learn building production AI systems. Here's where to find it.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {channels.map((c, i) => (
          <AnimatedSection key={c.name} delay={i * 0.08}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card group flex h-full flex-col p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <c.icon className="text-primary" size={22} />
                <ArrowUpRight size={18} className="text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                {c.name}
              </h2>
              <p className="font-mono text-xs text-muted-foreground">{c.handle}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </a>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <h2 className="mt-20 font-display text-2xl font-bold text-foreground">Topics I write about</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {topics.map((t) => (
            <span key={t} className="rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default Insights;
