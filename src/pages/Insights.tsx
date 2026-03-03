import { useState } from "react";
import { Search, Calendar, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  { title: "Building Scalable RAG Systems", excerpt: "A deep dive into designing retrieval-augmented generation pipelines that handle millions of documents with sub-second latency. Covering chunking strategies, embedding optimization, and multi-index architectures.", category: "Architecture", date: "Feb 2026", readTime: "12 min" },
  { title: "Agentic AI: Beyond Prompt Engineering", excerpt: "Moving past simple prompt chains to autonomous AI agents that plan, execute, and learn. Exploring LangGraph, CrewAI, and custom orchestration patterns for production multi-agent systems.", category: "Agentic AI", date: "Jan 2026", readTime: "15 min" },
  { title: "Vision-Language Models in Production", excerpt: "Deploying VLMs for document understanding at scale. Lessons learned from processing millions of medical documents, invoices, and insurance policies with models like GPT-4V and Florence-2.", category: "Computer Vision", date: "Dec 2025", readTime: "10 min" },
  { title: "Designing AI Microservices with Kafka & Airflow", excerpt: "Architecture patterns for building resilient, scalable AI pipelines. Event-driven processing, workflow orchestration, and monitoring strategies for production ML systems.", category: "Infrastructure", date: "Nov 2025", readTime: "14 min" },
];

const categories = ["All", "Architecture", "Agentic AI", "Computer Vision", "Infrastructure"];

const Insights = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = posts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="neural-bg min-h-screen pt-24">
      <div className="section-container">
        <AnimatedSection>
          <p className="font-mono text-sm uppercase tracking-wider text-primary">Knowledge Base</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">Insights</span> & Writing
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Technical perspectives on building production AI systems, from architecture patterns to deployment strategies.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="glass-card flex flex-1 items-center gap-3 px-4 py-2.5">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search insights..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === c ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Posts */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <AnimatedSection key={post.title}>
              <article className="glass-card group flex h-full cursor-pointer flex-col p-6 transition-all hover:border-primary/30">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Tag size={12} />{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-primary">Read more →</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">No insights match your search criteria.</div>
        )}
      </div>
    </div>
  );
};

export default Insights;
