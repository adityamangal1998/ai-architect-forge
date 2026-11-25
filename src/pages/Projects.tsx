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
      { title: "HIpOne Intelligent Document Processing", problem: "US healthcare claims, utilization-management and prior-authorization workflows relied on line-by-line manual review of medical records.", architecture: "BERT page classification → custom YOLO layout detection (titles, sections, signatures, checkboxes) → VLM-based OCR → LLM-assisted extraction with human-in-the-loop review, orchestrated on Apache Airflow.", stack: ["BERT", "YOLO", "VLMs", "Mistral", "Apache Airflow", "structlog"], impact: "Production integrations with US healthcare clients, automating end-to-end document ingestion, classification and extraction." },
      { title: "InSa-Engine & Know Your Policy (RAG)", problem: "Insurance policy documents needed reliable key-information extraction, and a monolithic engine limited scale.", architecture: "Re-architected into Dockerised microservices with Amazon EFS shared storage and Kafka messaging; RAG + LLM extraction for policy data; GPU-aware server scaling on AWS Auto Scaling.", stack: ["Python", "Docker", "Apache Kafka", "Amazon EFS", "AWS Auto Scaling", "RAG"], impact: "Shipped the end-to-end Know Your Policy feature and production integrations with major Indian financial-services platforms." },
    ],
  },
  {
    name: "Agentic AI Systems",
    projects: [
      { title: "Agentic Software Development Team", problem: "Repetitive steps of the software lifecycle (planning, coding, testing, review) slow teams down.", architecture: "Collaborative multi-agent system: planner → coder → tester → reviewer, covering requirement analysis, code generation, debugging and deployment.", stack: ["LangGraph", "LLMs", "Python", "Docker"], impact: "Automates the development lifecycle from requirements to deployment." },
      { title: "Autonomous Website Testing Agent (VLM)", problem: "Visual QA of websites needs people to click through pages and spot UI/UX issues.", architecture: "Vision-Language Model agent that navigates websites autonomously, flags UI/UX inconsistencies and broken links, and writes screenshot-backed reports.", stack: ["VLMs", "Playwright", "Python"], impact: "Streamlined web QA with automatic, evidence-backed reports." },
    ],
  },
  {
    name: "Vision & OCR Systems",
    projects: [
      { title: "Table Detection with Vision-Language Models", problem: "Extracting structured tables from scanned documents.", architecture: "Fine-tuned Qwen2.5-VL-3B on PubTables-1M for table boundary detection, cell segmentation and text extraction.", stack: ["Qwen2.5-VL", "PyTorch", "Hugging Face"], impact: "Structured table output from scanned documents." },
      { title: "Prescription Extraction with RAG + LLM", problem: "Handwritten prescriptions are hard to digitise accurately.", architecture: "Medicine vector database on FAISS + retrieval-augmented generation via the AWS Bedrock API for entity recognition.", stack: ["FAISS", "AWS Bedrock", "Python"], impact: "Structured data from handwritten prescriptions (personal project)." },
      { title: "OCR System from Scratch", problem: "Production OCR for scene and document images in FinTech software.", architecture: "CTC-based recognition model plus multi-level skew correction and a handwritten-vs-printed classifier using texture, style, pixel-density and text-flow features.", stack: ["PyTorch", "OpenCV", "CTC"], impact: "90–95% word accuracy; 94–97% handwritten/printed classification on real-world data." },
      { title: "Document Image Restoration", problem: "Scans with noise, watermarks and artifacts break downstream OCR.", architecture: "SRGAN and LapSRN super-resolution plus denoising autoencoders.", stack: ["SRGAN", "LapSRN", "Autoencoders", "TensorFlow"], impact: "Cleaner inputs for OCR pipelines." },
    ],
  },
  {
    name: "Open Source & Fine-tuning",
    projects: [
      { title: "Image-Data-Augmentor (PyPI)", problem: "ML preprocessing pipelines need a robust set of image augmentations.", architecture: "Python package with a wide range of augmentation techniques. pypi.org/project/Image-Data-Augmentor", stack: ["Python", "PyPI"], impact: "Published, reusable open-source module." },
      { title: "Concurrent-Image-Read (PyPI)", problem: "Image I/O becomes the bottleneck in training pipelines.", architecture: "Multi-threaded reading of image files and image lists.", stack: ["Python", "PyPI"], impact: "Reduces I/O bottlenecks in training." },
      { title: "SQL Optimisation via LLM Fine-Tuning", problem: "Generated SQL is often slow or poorly structured.", architecture: "Fine-tuned Llama-2-7B for query generation and refinement (index use, join restructuring, subquery simplification) with RAG-based recommendations.", stack: ["Llama 2", "LoRA", "RAG"], impact: "Better-structured SQL suggestions." },
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
