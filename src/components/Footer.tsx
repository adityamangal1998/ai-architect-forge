import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link to="/" className="font-display text-lg font-bold">
          <span className="gradient-text">Aditya Mangal</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aditya Mangal. AI Systems Architecture & Consulting.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/aditya-mangal/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/mangal_aditya_"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            X
          </a>
          <a
            href="mailto:adityamangal98@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
