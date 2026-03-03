import { GraduationCap, Building2, Award, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const milestones = [
  { icon: GraduationCap, title: "Gold Medalist — IIIT Surat", desc: "Electronics & Communication Engineering. Top of class with distinction." },
  { icon: Building2, title: "Senior Data Scientist — Genzeon", desc: "Leading AI initiatives across healthcare document intelligence, VLM pipelines, and multi-agent systems." },
  { icon: Award, title: "Senior Research Engineer — Insurance Samadhan", desc: "Built production AI systems for insurance document extraction, NLP pipelines, and automated claim processing." },
  { icon: Users, title: "Technical Leadership", desc: "Leading cross-functional engineering teams to deliver enterprise-grade AI solutions at scale." },
];

const About = () => (
  <div className="neural-bg min-h-screen pt-24">
    <div className="section-container">
      <AnimatedSection>
        <p className="font-mono text-sm uppercase tracking-wider text-primary">About</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Building <span className="gradient-text">AI Beyond Prototypes</span>
        </h1>
      </AnimatedSection>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <div className="space-y-6">
          <AnimatedSection delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm driven by a singular mission: transforming AI research into production systems that deliver measurable business impact. My work sits at the intersection of large language models, computer vision, and scalable distributed systems.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From healthcare document intelligence to autonomous multi-agent frameworks, I architect systems designed not just to work — but to scale, adapt, and evolve. I believe the future of AI isn't just smarter models, it's smarter systems.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <blockquote className="glass-card mt-8 border-l-2 border-primary p-6">
              <p className="font-display text-xl font-medium italic text-foreground">
                "Engineering systems that scale beyond individuals."
              </p>
              <cite className="mt-3 block text-sm text-muted-foreground">— Leadership Philosophy</cite>
            </blockquote>
          </AnimatedSection>
        </div>

        <div className="space-y-6">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.title} delay={0.1 + i * 0.1}>
              <div className="glass-card flex gap-4 p-6 transition-all hover:border-primary/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <m.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
