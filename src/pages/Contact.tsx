import { useState } from "react";
import { Send, Building2, Mail, User, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent. I'll be in touch soon.");
    setForm({ name: "", email: "", org: "", message: "" });
  };

  return (
    <div className="neural-bg min-h-screen pt-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <p className="font-mono text-sm uppercase tracking-wider text-primary">Connect</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Build <span className="gradient-text">Intelligent Systems</span> Together
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Open to selective collaborations, advisory engagements, and AI system architecture consulting.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card mt-12 space-y-6 p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <User size={14} className="text-primary" /> Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail size={14} className="text-primary" /> Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                    maxLength={255}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Building2 size={14} className="text-primary" /> Organization
                </label>
                <input
                  type="text"
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Your organization"
                  maxLength={200}
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare size={14} className="text-primary" /> Message *
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Tell me about your project or collaboration idea..."
                  maxLength={2000}
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message <Send size={16} />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                For enterprise discussions & AI advisory partnerships.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
