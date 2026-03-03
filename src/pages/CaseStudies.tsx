import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  subtitle: string;
  problem: string;
  architecture: string;
  strategy: string;
  deployment: string;
  impact: string[];
  stack: string[];
}

const studies: CaseStudy[] = [
  {
    title: "Healthcare Document Intelligence",
    subtitle: "End-to-end AI pipeline for medical document processing at scale",
    problem: "A network of hospitals processing 500K+ medical documents monthly — discharge summaries, lab reports, prescriptions — with 90% still handled manually. Error rates exceeded 15%, creating compliance risks and delayed patient care.",
    architecture: "Designed a multi-stage pipeline: Document Classification (ResNet) → Layout Analysis (YOLO) → Zone-specific OCR → Medical NER (BioBERT fine-tuned) → Structured FHIR output. Each stage independently scalable with Kafka message queues between stages.",
    strategy: "Fine-tuned domain-specific models on 50K annotated medical documents. Implemented active learning loops where low-confidence predictions were routed to human reviewers, continuously improving model accuracy. Used ensemble methods for critical fields.",
    deployment: "Containerized with Docker, orchestrated via Kubernetes on AWS EKS. Auto-scaling based on document queue depth. GPU nodes for inference, CPU nodes for pre/post-processing. Monitoring via Prometheus + Grafana with custom medical accuracy dashboards.",
    impact: [
      "95.2% extraction accuracy across all document types",
      "80% reduction in manual processing time",
      "Processing capacity: 50K documents/day",
      "ROI: $2.3M annual cost savings across 3 hospital networks",
    ],
    stack: ["Python", "PyTorch", "YOLO", "BioBERT", "Kafka", "Docker", "Kubernetes", "AWS EKS", "PostgreSQL", "Redis"],
  },
  {
    title: "RAG-based Insurance Information Extractor",
    subtitle: "Intelligent document understanding for insurance policy analysis",
    problem: "Insurance companies processing complex policy documents with nested clauses, cross-references, and domain-specific terminology. Manual extraction taking 45+ minutes per document with inconsistent results across analysts.",
    architecture: "Document Ingestion → Intelligent Chunking (layout-aware) → Vector Embedding (domain fine-tuned) → Multi-index RAG with metadata filtering → LLM extraction with structured output validation → Human-in-the-loop review for edge cases.",
    strategy: "Built a custom chunking strategy that respects document structure (sections, clauses, sub-clauses). Fine-tuned embedding models on insurance corpus. Implemented GPU-optimized inference with batching for throughput. Used Kafka for async processing and AWS Auto Scaling for demand spikes.",
    deployment: "Microservices architecture with Docker containers. Kafka for event-driven processing. AWS Auto Scaling groups with GPU instances (g4dn) for inference. Redis for caching frequently accessed policy templates. PostgreSQL for structured output storage.",
    impact: [
      "93% field-level extraction accuracy across 15 insurance providers",
      "Processing time reduced from 45 min to 3 min per document",
      "Handles 10K+ documents daily with auto-scaling",
      "40+ policy fields extracted automatically",
    ],
    stack: ["LangChain", "ChromaDB", "GPT-4", "Kafka", "Docker", "AWS Auto Scaling", "Redis", "PostgreSQL", "FastAPI"],
  },
  {
    title: "Multi-Agent Automation Framework",
    subtitle: "Autonomous AI agents collaborating like a software engineering team",
    problem: "Engineering teams spending 60% of time on repetitive tasks: writing boilerplate code, running tests, reviewing PRs, and generating documentation. Need for an autonomous system that handles routine development workflows.",
    architecture: "Four specialized agents orchestrated via LangGraph: Planner Agent (decomposes tasks into actionable steps) → Coder Agent (generates code with context awareness) → Reviewer Agent (static analysis + best practices check) → Tester Agent (generates and runs test suites). Shared memory via vector store for context persistence.",
    strategy: "Each agent has a specialized system prompt and tool access. The Planner uses chain-of-thought reasoning to break down complex tasks. Coder has access to the full codebase via RAG. Reviewer implements a rubric-based scoring system. Tester generates both unit and integration tests. Feedback loops allow iterative refinement.",
    deployment: "Deployed as a GitHub App that triggers on PR events. Each agent runs in isolated containers with specific resource limits. LangGraph manages state transitions and error recovery. Monitoring tracks agent performance metrics and decision quality.",
    impact: [
      "60% reduction in QA cycle time",
      "Automated regression testing for 12 microservices",
      "Code review coverage increased to 100%",
      "Developer satisfaction score improved by 35%",
    ],
    stack: ["LangGraph", "CrewAI", "GPT-4", "Claude", "GitHub API", "Docker", "Python", "Selenium", "PostgreSQL"],
  },
];

const CaseStudies = () => (
  <div className="neural-bg min-h-screen pt-24">
    <div className="section-container">
      <AnimatedSection>
        <p className="font-mono text-sm uppercase tracking-wider text-primary">Deep Dives</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Case <span className="gradient-text">Studies</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Detailed analysis of complex AI systems — from problem definition through architecture, deployment, and measurable business impact.
        </p>
      </AnimatedSection>

      <div className="mt-16 space-y-20">
        {studies.map((study, idx) => (
          <AnimatedSection key={study.title}>
            <article className="glass-card overflow-hidden">
              {/* Header */}
              <div className="border-b border-border/50 p-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-primary">Case Study {String(idx + 1).padStart(2, "0")}</span>
                  <ArrowRight size={14} className="text-primary" />
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground">{study.title}</h2>
                <p className="mt-2 text-muted-foreground">{study.subtitle}</p>
              </div>

              {/* Content */}
              <div className="grid gap-8 p-8 lg:grid-cols-2">
                {[
                  { label: "Problem", content: study.problem },
                  { label: "Architecture", content: study.architecture },
                  { label: "Model Strategy & Deployment", content: study.strategy },
                  { label: "Infrastructure", content: study.deployment },
                ].map((s) => (
                  <div key={s.label}>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary">{s.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.content}</p>
                  </div>
                ))}
              </div>

              {/* Impact + Stack */}
              <div className="border-t border-border/50 p-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Business Impact</h3>
                    <ul className="mt-3 space-y-2">
                      {study.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Technology Stack</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.stack.map((t) => (
                        <span key={t} className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudies;
