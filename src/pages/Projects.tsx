import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  problem: string;
  architecture: string;
  stack: string[];
  impact: string;
}

interface Category {
  name: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    name: "Production Systems",
    projects: [
      { title: "Medical Document AI Pipeline", problem: "Hospitals dealing with millions of unstructured medical documents requiring automated extraction and classification.", architecture: "Multi-stage pipeline: Document Ingestion → Layout Analysis → Entity Extraction → Structured Output with validation loops.", stack: ["Python", "FastAPI", "YOLO", "Tesseract", "PostgreSQL", "Docker", "AWS"], impact: "95%+ extraction accuracy. Reduced manual processing time by 80% across 3 hospital networks." },
      { title: "Invoice Extraction with VLM + RAG", problem: "Enterprise invoice processing requiring understanding of diverse layouts and contextual validation.", architecture: "Vision-Language Model for layout understanding → RAG pipeline for contextual validation → Structured JSON output.", stack: ["GPT-4V", "LangChain", "ChromaDB", "FastAPI", "Redis", "Docker"], impact: "Processed 50K+ invoices monthly with 97% field-level accuracy." },
      { title: "QA Automation Multi-Agent System", problem: "Manual QA processes consuming engineering bandwidth and slowing release cycles.", architecture: "Planner Agent → Test Generator → Executor → Reporter with shared memory and feedback loops.", stack: ["CrewAI", "LangGraph", "Selenium", "Python", "PostgreSQL"], impact: "60% reduction in QA cycle time. Automated regression testing for 12 microservices." },
      { title: "Information Extractor for Insurance Policies", problem: "Complex insurance documents with nested clauses requiring precise information extraction.", architecture: "Document parsing → NER + Relation Extraction → Policy graph construction → Queryable knowledge base.", stack: ["SpaCy", "Transformers", "Neo4j", "FastAPI", "Kafka"], impact: "Automated extraction of 40+ policy fields with 93% accuracy across 15 insurance providers." },
    ],
  },
  {
    name: "Agentic AI Systems",
    projects: [
      { title: "Autonomous Software Development Team", problem: "Accelerating software development with AI agents that collaborate like human teams.", architecture: "Planner → Architect → Coder → Reviewer → Tester agents orchestrated via LangGraph with shared context.", stack: ["LangGraph", "GPT-4", "Claude", "GitHub API", "Docker"], impact: "Prototype: Autonomous generation of full-stack features from natural language specifications." },
      { title: "Stock Trading Research Assistant", problem: "Financial analysts spending hours on market research and analysis.", architecture: "Data Collector → Analyst → Strategist agents with real-time market data integration.", stack: ["CrewAI", "Yahoo Finance API", "LangChain", "Streamlit"], impact: "Reduced research time by 70%. Generated actionable trading insights with historical backtesting." },
      { title: "YouTube Marketing AI Agent", problem: "Content creators needing data-driven optimization for video marketing.", architecture: "Trend Analyzer → Content Strategist → SEO Optimizer agents with YouTube API integration.", stack: ["LangChain", "YouTube API", "GPT-4", "FastAPI"], impact: "Automated content strategy recommendations with 40% improvement in engagement metrics." },
      { title: "Website Testing VLM Agent", problem: "Visual regression testing requiring human reviewers for UI validation.", architecture: "Screenshot Capture → VLM Analysis → Diff Detection → Report Generation pipeline.", stack: ["GPT-4V", "Playwright", "Python", "S3"], impact: "Automated visual QA for 200+ web pages with pixel-level anomaly detection." },
    ],
  },
  {
    name: "Vision & OCR Systems",
    projects: [
      { title: "Layout Detection using YOLO", problem: "Complex document layouts with tables, figures, and mixed content requiring accurate segmentation.", architecture: "Custom YOLO model trained on document layouts → Region extraction → Content-specific OCR pipelines.", stack: ["YOLOv8", "PyTorch", "OpenCV", "FastAPI", "ONNX"], impact: "98% layout detection accuracy across 12 document types. 10x faster than rule-based approaches." },
      { title: "Table Detection via Vision-Language Models", problem: "Extracting structured data from complex tables in scanned documents.", architecture: "VLM-based table detection → Cell segmentation → Structure recognition → Structured output.", stack: ["Florence-2", "GPT-4V", "Python", "FastAPI"], impact: "Handled nested tables, merged cells, and rotated text with 94% structure accuracy." },
      { title: "Prescription OCR with RAG", problem: "Handwritten prescriptions with medical terminology requiring accurate digitization.", architecture: "Handwriting recognition → Medical NER → RAG validation against drug databases → Structured output.", stack: ["TrOCR", "MedSpaCy", "ChromaDB", "FastAPI", "PostgreSQL"], impact: "90% accuracy on handwritten prescriptions. Deployed across 5 pharmacy chains." },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="glass-card cursor-pointer overflow-hidden p-6 transition-all hover:border-primary/30"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
        {expanded ? <ChevronUp size={18} className="text-muted-foreground shrink-0 mt-1" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0 mt-1" />}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4 border-t border-border/50 pt-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Problem</p>
                <p className="mt-1 text-sm text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Architecture</p>
                <p className="mt-1 text-sm text-muted-foreground">{project.architecture}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Tech Stack</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Impact</p>
                <p className="mt-1 text-sm text-foreground font-medium">{project.impact}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const cats = filter === "All" ? categories : categories.filter((c) => c.name === filter);

  return (
    <div className="neural-bg min-h-screen pt-24">
      <div className="section-container">
        <AnimatedSection>
          <p className="font-mono text-sm uppercase tracking-wider text-primary">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            AI Systems <span className="gradient-text">& Projects</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {["All", ...categories.map((c) => c.name)].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  filter === f ? "btn-primary" : "btn-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="mt-12 space-y-16">
          {cats.map((cat) => (
            <div key={cat.name}>
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold text-foreground">{cat.name}</h2>
              </AnimatedSection>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {cat.projects.map((p) => (
                  <AnimatedSection key={p.title} delay={0.05}>
                    <ProjectCard project={p} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
