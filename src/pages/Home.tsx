import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Brain, Server, HeartPulse } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const metrics = [
  { value: "4+", label: "Years Experience", icon: Cpu },
  { value: "25+", label: "Production AI Systems", icon: Server },
  { value: "Multi-Agent", label: "Architectures", icon: Brain },
  { value: "Healthcare", label: "& FinTech AI Specialist", icon: HeartPulse },
];

const Home = () => (
  <div className="neural-bg min-h-screen">
    {/* Hero */}
    <section className="relative flex min-h-screen items-center">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="section-container relative w-full">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="mb-4 font-mono text-sm text-primary tracking-wider uppercase">
              Senior Data Scientist · AI Architect · Agentic AI Builder
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Designing Intelligent{" "}
              <span className="gradient-text">AI Systems</span> for Real-World Impact
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I build production-grade AI systems across Healthcare, Insurance, and Intelligent Automation — combining LLMs, Vision-Language Models, and scalable microservices architecture.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                Explore My Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Collaborate
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
              className="glass-card flex flex-col items-start gap-4 p-6"
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
  </div>
);

export default Home;
