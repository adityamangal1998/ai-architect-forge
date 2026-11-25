import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import profileImage from "../../images/profile.webp";

interface Role {
  company: string;
  location: string;
  title: string;
  period: string;
  points: string[];
}

const experience: Role[] = [
  {
    company: "Gamechange",
    location: "Dubai, UAE (Remote)",
    title: "Senior AI Engineer",
    period: "06/2026 – Present",
    points: [
      "Build and own production agentic LLM systems on LangGraph and Azure OpenAI, with scope control, output and grounding guards, PII masking and refusal policy.",
      "Lead OCR + LLM document-extraction pipelines, benchmarking models across AWS Bedrock and Azure OpenAI; cut cost per document by ~50× with no accuracy loss.",
      "Built a repeatable prompt-compression method that cut production prompts by 24–29% with zero rule loss.",
      "Deliver backend services in Python / FastAPI and TypeScript / Express on Docker and Kubernetes.",
    ],
  },
  {
    company: "Genzeon",
    location: "Pune, India",
    title: "Senior Data Scientist",
    period: "04/2025 – 05/2026",
    points: [
      "Led a team of data scientists delivering the HIpOne Intelligent Document Processing platform for the US healthcare ecosystem.",
      "Automated claims processing, utilization management and prior-authorization workflows for US healthcare clients.",
      "Built BERT page classification, custom YOLO layout detection feeding VLM-based OCR, and a distributed pipeline on Apache Airflow.",
    ],
  },
  {
    company: "Insurance Samadhan",
    location: "Noida, India",
    title: "Senior Research Engineer",
    period: "01/2023 – 03/2025",
    points: [
      "Led a team of 6 engineers delivering AI products across the insurance claims lifecycle.",
      "Re-architected the InSa-Engine into Dockerised microservices with Amazon EFS and Apache Kafka.",
      "Shipped RAG-based policy extraction (Know Your Policy), a VLM table-extraction pipeline and GPU-aware auto scaling on AWS.",
    ],
  },
  {
    company: "Eigenlytics Data Solution",
    location: "Hyderabad, India",
    title: "Research Engineer",
    period: "07/2021 – 12/2022",
    points: [
      "Built a production CTC-based OCR system from scratch (90–95% word accuracy on scene datasets).",
      "Built skew correction, handwritten-vs-printed classification (94–97%), image restoration and Hindi→English transliteration models.",
    ],
  },
];

const earlier = [
  { icon: Rocket, title: "Co-Founder & CEO — Kaspertech", period: "08/2019 – 07/2020", desc: "Home-automation startup: hardware devices and companion mobile app built from scratch." },
  { icon: Briefcase, title: "Machine Learning Intern — TaxHeal", period: "11/2019 – 04/2020", desc: "On-device CNN classifier (TensorFlow Lite), face recognition and an OCR + NLP invoice reader." },
];

const achievements = [
  { icon: GraduationCap, title: "Gold Medalist — IIIT Surat", desc: "B.Tech, Electronics & Communication Engineering (2017–2021). CGPA 9.23/10, ranked 1st in the batch." },
  { icon: Award, title: "2nd Prize — AWS GameDay", desc: "Generative AI competition." },
  { icon: Award, title: "Top 250 — MJF Code19 Hackathon", desc: "April 2020." },
];

const skills = [
  { group: "LLM & Agents", items: ["LangGraph", "LangChain", "Azure OpenAI", "AWS Bedrock", "Gemini", "Llama", "Mistral", "Qwen2.5-VL", "Tool calling", "Structured output"] },
  { group: "RAG & Safety", items: ["Hybrid search", "Re-ranking", "Milvus", "Qdrant", "FAISS", "Guardrails", "Grounding", "PII masking", "Prompt-injection defence"] },
  { group: "Document AI & Vision", items: ["Azure Document Intelligence", "VLMs", "YOLOv5/v8", "LayoutLMv3", "Tesseract", "OpenCV", "NER"] },
  { group: "Evaluation", items: ["Ground-truth datasets", "Determinism / noise floor", "Regression suites", "Embedding evaluation", "pytest", "Jest", "Playwright"] },
  { group: "Backend & MLOps", items: ["Python", "TypeScript", "FastAPI", "Express", "Docker", "Kubernetes (AKS)", "Airflow", "Kafka", "MLflow", "AWS", "Azure"] },
  { group: "ML & Fine-tuning", items: ["PyTorch", "TensorFlow", "Transformers", "LoRA / PEFT", "BERT", "Scikit-learn"] },
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
          <AnimatedSection delay={0.05}>
            <div className="glass-card inline-flex items-center gap-4 p-4">
              <img
                src={profileImage}
                alt="Aditya Mangal"
                className="h-16 w-16 rounded-full border border-border bg-muted object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Aditya Mangal</p>
                <p className="text-sm text-muted-foreground">Senior AI Engineer · Pune, India</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Senior AI Engineer with 5+ years of experience building production LLM systems for payments, banking,
              insurance and US healthcare. My work spans agentic architectures, retrieval-augmented generation,
              conversational AI, guardrails and intelligent document processing.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I work measurement-first: ground truth built from real documents, accuracy and determinism reported as
              separate axes, and cost cut only when nothing else is lost. I started in OCR and computer vision, moved into
              document AI, and now build LLM and agent systems end to end, in Python and TypeScript on Azure and AWS.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <blockquote className="glass-card mt-8 border-l-2 border-primary p-6">
              <p className="font-display text-xl font-medium italic text-foreground">
                "If you can't measure it run after run, it isn't production-ready."
              </p>
              <cite className="mt-3 block text-sm text-muted-foreground">— How I work</cite>
            </blockquote>
          </AnimatedSection>
        </div>

        <div className="space-y-6">
          {achievements.map((m, i) => (
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

      {/* Experience */}
      <AnimatedSection>
        <h2 className="mt-24 font-display text-3xl font-bold tracking-tight">
          <span className="gradient-text">Experience</span>
        </h2>
      </AnimatedSection>
      <div className="mt-10 space-y-6">
        {experience.map((r, i) => (
          <AnimatedSection key={r.company} delay={i * 0.05}>
            <article className="glass-card p-6 transition-all hover:border-primary/30">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {r.title} <span className="text-muted-foreground">· {r.company}</span>
                </h3>
                <p className="font-mono text-xs text-primary">{r.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{r.location}</p>
              <ul className="mt-4 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        ))}
        <div className="grid gap-6 md:grid-cols-2">
          {earlier.map((e) => (
            <AnimatedSection key={e.title}>
              <div className="glass-card flex h-full gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <e.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{e.title}</h3>
                  <p className="font-mono text-xs text-primary">{e.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Skills */}
      <AnimatedSection>
        <h2 className="mt-24 font-display text-3xl font-bold tracking-tight">
          Core <span className="gradient-text">Stack</span>
        </h2>
      </AnimatedSection>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <AnimatedSection key={s.group}>
            <div className="glass-card h-full p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default About;
