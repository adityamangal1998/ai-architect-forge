import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Gauge, Users, Award, Bot, FileSearch, ShieldCheck, LineChart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

import bannerImage from "../../images/banner.webp";

const metrics = [
  { value: "5+", label: "Years building production AI", icon: Cpu },
  { value: "~50×", label: "Lower LLM cost per document, no accuracy loss", icon: Gauge },
  { value: "6", label: "Engineers led on insurance AI products", icon: Users },
  { value: "Gold", label: "Medalist, ECE, IIIT Surat", icon: Award },
];

const focusAreas = [
  {
    icon: Bot,
    title: "Agentic AI & Conversational Systems",
    desc: "Multi-agent assistants on LangGraph with scope agents, output guards, grounding checks and consent-gated tool calls.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    desc: "OCR + LLM + VLM pipelines that turn scans, forms, medical records and policy documents into structured, validated data.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails & Grounded RAG",
    desc: "Hybrid retrieval, answer grounding, refusal policy, PII masking and prompt-injection defence for regulated domains.",
  },
  {
    icon: LineChart,
    title: "Measurement-First LLM Engineering",
    desc: "Ground truth built from real documents, accuracy and determinism reported separately, and cost cut without losing rules.",
  },
];

const employers = ["Gamechange", "Genzeon", "Insurance Samadhan", "Eigenlytics"];

const Home = () => (
  <div className="neural-bg min-h-screen">
    {/* Hero */}
    <section className="relative flex min-h-screen items-center">
      {/* Banner */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={bannerImage}
          alt=""
          className="h-full w-full object-cover opacity-10"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Decorative orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="section-container relative w-full">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="mb-4 font-mono text-sm text-primary tracking-wider uppercase">
              Senior AI Engineer · LLM Systems · Agentic AI · Document Intelligence
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Building <span className="gradient-text">Production LLM Systems</span> That Can Be Measured
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I design agentic assistants, RAG and document-AI pipelines for payments, banking, insurance and healthcare,
              with guardrails, grounding and evaluation built in from day one.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                Explore My Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Metrics */}
    <section className="section-container">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card flex h-full flex-col items-start gap-4 p-6"
            >
              <m.icon className="text-primary" size={24} />
              <div>
                <p className="font-display text-3xl font-bold gradient-text">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Focus areas */}
    <section className="section-container">
      <AnimatedSection>
        <p className="font-mono text-sm uppercase tracking-wider text-primary">What I Build</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          From prototype to <span className="gradient-text">production</span>
        </h2>
      </AnimatedSection>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {focusAreas.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.08}>
            <div className="glass-card flex h-full gap-4 p-6 transition-all hover:border-primary/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Employers */}
    <section className="section-container pb-24">
      <AnimatedSection>
        <p className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Production AI shipped at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {employers.map((e) => (
            <span key={e} className="font-display text-lg font-semibold text-muted-foreground">
              {e}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  </div>
);

export default Home;
