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
    title: "Healthcare Intelligent Document Processing",
    subtitle: "HIpOne at Genzeon: medical records to structured data for US healthcare workflows",
    problem: "Claims processing, utilization management and prior-authorization workflows in US healthcare depended on line-by-line manual review of long, multi-page medical records with mixed layouts, handwriting, signatures and checkboxes.",
    architecture: "Ingestion → BERT-based page classification with rule-based entity extraction → custom-trained YOLO models detecting structural elements (titles, sections, signatures, checkboxes) → VLM-based OCR that uses that layout context → LLM-assisted extraction with contextual validation → human-in-the-loop review.",
    strategy: "Domain-adapted small language models (e.g. Mistral) for medical entity extraction, with LLM-driven data augmentation to stay robust on limited annotated data. Layout detection feeds the OCR stage so extraction keeps document context.",
    deployment: "Distributed microservices orchestrated on Apache Airflow for scheduling, monitoring and large-scale parallel processing. Centralised structlog logging and automated unit-testing utilities as shared QA infrastructure across services.",
    impact: [
      "Production integrations with US healthcare clients",
      "End-to-end automation of ingestion, classification and structured extraction",
      "Workflows that previously needed line-by-line manual review",
      "Led the data-science team delivering the platform",
    ],
    stack: ["Python", "BERT", "YOLO", "VLMs", "Mistral", "LLMs", "Apache Airflow", "structlog"],
  },
  {
    title: "Insurance AI Platform: InSa-Engine & Know Your Policy",
    subtitle: "Insurance Samadhan: scaling claims-lifecycle AI with microservices and RAG",
    problem: "AI features across the insurance claims lifecycle ran on a tightly coupled engine that was hard to scale, and key information in long insurance policy documents had to be extracted accurately for policy management and regulatory compliance.",
    architecture: "InSa-Engine re-architected into decoupled, Dockerised microservices sharing storage over Amazon EFS and communicating through Apache Kafka. RAG + LLM extraction for policy documents; a VLM pipeline for tables in scanned documents; a configurable Information Extractor returning query-based key-value answers from NER and YAML-driven rules.",
    strategy: "Retrieval-augmented generation to ground extraction in the relevant policy sections. Fine-tuned Qwen2.5-VL-3B on PubTables-1M for table detection and cell segmentation. Rules kept configurable (YAML) so new fields didn't need code changes.",
    deployment: "GPU-aware server scaling algorithm on AWS Auto Scaling to raise inference throughput and lower compute cost. Production integrations with major Indian financial-services platforms. Engineering process aligned for ISO certification.",
    impact: [
      "Led a team of 6 engineers across architecture, delivery and code quality",
      "Shipped the end-to-end Know Your Policy (KYP) feature",
      "Better scalability and inter-service reliability after the re-architecture",
      "Promoted from Research Engineer to Senior Research Engineer",
    ],
    stack: ["Python", "RAG", "LLMs", "Qwen2.5-VL", "NER", "Docker", "Apache Kafka", "Amazon EFS", "AWS Auto Scaling"],
  },
  {
    title: "OCR Built from the Ground Up",
    subtitle: "Eigenlytics: production OCR and document-image models for FinTech automation",
    problem: "FinTech decision-automation software needed text from real-world images and scans: skewed pages, noise, watermarks, and a mix of handwritten and printed text, in more than one language.",
    architecture: "CTC-based text recognition model → multi-level skew correction → handwritten-vs-printed classifier (texture, text style, pixel density and text-flow features) → image restoration (SRGAN, LapSRN, denoising autoencoders) → Transformer-based Hindi-to-English translation and transliteration of OCR output.",
    strategy: "Each failure mode got its own model rather than one model doing everything: correct the geometry first, clean the image, then route text by type. An image-quality assessment model flagged inputs that needed restoration.",
    deployment: "Models powered decision automation in the company's FinTech software, alongside face-recognition and object-detection models.",
    impact: [
      "90–95% word-recognition accuracy on scene-based datasets",
      "90–95% skew-correction accuracy",
      "94–97% handwritten vs. printed classification on real-world data",
      "Promoted from Associate Data Scientist to Research Engineer",
    ],
    stack: ["Python", "PyTorch", "TensorFlow", "CTC", "OpenCV", "SRGAN", "LapSRN", "Transformers"],
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
          Detailed analysis of complex AI systems — from problem definition through architecture, deployment and outcomes.
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
                  { label: "Approach", content: study.strategy },
                  { label: "Deployment", content: study.deployment },
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
                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary">Outcomes</h3>
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
