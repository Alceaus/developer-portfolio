import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { PROJECTS } from "../data";
import type { Route } from "./+types/home";
import {
  MapPin,
  Download,
  Mail,
  Code2,
  Moon,
  Sun,
  AppWindow,
  ChevronRight,
  ChevronLeft,
  Github,
  Linkedin,
  X,
  ZoomIn
} from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Marc Daniel Marasigan - Developer Portfolio" },
    { name: "description", content: "Portfolio of Marc Daniel Marasigan, a Software Engineer and Web Developer from the Philippines." },
  ];
}

// Reusable Tailwind classes for our "Bento Cards"
const cardClasses = "bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm transition-all hover:shadow-md";

export default function Home() {
  // Theme state logic
  const [isDark, setIsDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial preference from localStorage ONLY, Default to light mode
    if (localStorage.theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Lock body scroll and handle Escape key when popup or photo viewer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeImage !== null) {
          setActiveImage(null);
        } else if (selectedProject !== null) {
          setSelectedProject(null);
        }
      }
    };

    if (selectedProject !== null || activeImage !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, activeImage]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const displayedProjects = PROJECTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-accent/30 transition-colors duration-300">

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-16 space-y-8 relative">

        {/* Theme Toggle Button positioned top-right */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* TOP SECTION: Header / Profile Info */}
        <header className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            {/* Profile Image */}
            <div className="h-28 w-28 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800 border-4 border-white dark:border-neutral-900 shadow-md overflow-hidden">
              <img
                src="/profilepic.webp"
                alt="Profile picture of Marc Daniel Marasigan"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5">
              <h1 className="text-3xl font-bold flex items-center justify-center sm:justify-start gap-2">
                Marc Daniel Marasigan
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-4 h-4" />
                Marikina, Philippines
              </p>
              <p className="text-lg font-medium tracking-tight pt-1">
                Software Engineer \ Web Developer
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start w-auto">
            <a href="/resume.pdf" download className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover hover:scale-105 transition-all">
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
            <a href="mailto:marcdanielmarasigan@gmail.com" className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
          </div>
        </header>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">

          {/* Main Content Column (Takes up 2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-6">

            {/* About Me Card */}
            <section className={cardClasses}>
              <h2 className="text-xl font-bold mb-4">About</h2>
              <div className="space-y-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
                <p>
                  I'm a software engineer who specializes in developing solutions using Python, Javascript, and other technologies. I work on projects like building modern web applications, desktop applications, and optimizing processes.
                </p>
                <p>
                  Currently, I'm delving deeper into full-stack development, concentrating on producing high-quality, performant, and scalable applications. I develop AI-powered solutions, create intelligent applications, and leverage generative AI to optimize development workflows.
                </p>
              </div>
            </section>

            {/* Tech Stack Card */}
            <section className={cardClasses}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Tech Stack</h2>
                <Link to="/tech-stack" className="flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors">
                  View All <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-6 mt-4">
                {/* Frontend Category */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"].map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-md font-medium text-neutral-700 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend Category */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Node.js", "PostgreSQL", "MongoDB", "Java", "Kotlin", "MySQL", "C", "C++"].map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-md font-medium text-neutral-700 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI & Prompt Engineering Category */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">AI & Prompt Engineering</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Claude", "Gemini", "OpenAI", "Hugging Face", "TensorFlow"].map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-md font-medium text-neutral-700 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Projects Card */}
            <section className={cardClasses}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Recent Projects</h2>
                {PROJECTS.length > 4 && (
                  <Link to="/projects" className="flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors">
                    View All <ChevronRight className="w-3 h-3" />
                  </Link>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {displayedProjects.map((project, idx) => {
                  const Icon = project.icon;
                  const CardContent = (
                    <>
                      <div>
                        <h3 className="font-semibold text-base leading-tight group-hover:underline decoration-accent/40 underline-offset-4">
                          {project.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1 mb-3 leading-snug">{project.description}</p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-[10px] rounded font-mono text-neutral-700 dark:text-neutral-300 w-fit">
                        <Icon className="w-3 h-3 shrink-0" /> <span className="truncate">{project.technologies}</span>
                      </div>
                    </>
                  );

                  const cardClass = "p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-accent/40 dark:hover:border-accent/40 transition-colors flex flex-col justify-between group h-full cursor-pointer";

                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedProject(idx)}
                      className={cardClass + " text-left"}
                    >
                      {CardContent}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Takes up 1/3 width on desktop) */}
          <div className="space-y-6">

            {/* The "Visual Card" Visual Element - Replaced with Sburb Image */}
            <div className="bg-neutral-750 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden h-64 flex flex-col justify-between group">

              <img
                src="/sburb.gif"
                alt="Sburb Animated System Logo"
                width={800}
                height={400}
                loading="lazy"
                className="w-full h-full object-contain relative z-10 pb-2"
              />

              {/* Small caption overlay at the bottom to maintain the Bento Grid aesthetic */}
              <div className="absolute bottom-4 right-6 z-20 opacity-30 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] uppercase tracking-widest font-mono">Sburb System</p>
              </div>
            </div>

            {/* Experience Timeline Card */}
            <section className={`${cardClasses} group/timeline`}>
              <h2 className="text-xl font-bold mb-6">Experience</h2>

              <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">

                {/* Job 1 */}
                <div className="relative pl-6 group">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-accent group-hover/timeline:bg-neutral-300 dark:group-hover/timeline:bg-neutral-700 group-hover:!bg-accent rounded-sm outline outline-4 outline-white dark:outline-neutral-900 transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h3 className="font-bold">Software Engineer Intern</h3>
                    <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">2026</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Lightweight Solutions</p>
                </div>

                {/* Job 2 */}
                <div className="relative pl-6 group">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-neutral-300 group-hover/timeline:bg-neutral-300 dark:bg-neutral-700 dark:group-hover/timeline:bg-neutral-700 group-hover:!bg-accent rounded-sm outline outline-4 outline-white dark:outline-neutral-900 transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h3 className="font-bold">BS Computer Science Major in Software Engineering</h3>
                    <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">2026</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">De La Salle University</p>
                </div>

              </div>
            </section>

            {/* Social Links Container */}
            <section className={cardClasses}>
              <h2 className="text-xl font-bold mb-4">Social Links</h2>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/marc-marasigan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 justify-center items-center gap-2 p-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 
                              shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] 
                              hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] 
                              transition-all text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Alceaus"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 justify-center items-center gap-2 p-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 
                              shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] 
                              hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] 
                              transition-all text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer / Copyright */}
        <footer className="mt-16 pb-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>© 2026 Marc Daniel Marasigan. All rights reserved.</p>
        </footer>
      </main>

      {/* Project Detail Popup / Modal */}
      {mounted && selectedProject !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="min-h-full flex items-center justify-center py-6 sm:py-10">
            <div
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl w-full max-w-3xl text-left relative overflow-hidden my-auto animate-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header */}
              <div className="sticky top-0 z-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">{PROJECTS[selectedProject].title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-accent/15 text-emerald-700 dark:text-accent hover:bg-accent hover:text-neutral-950 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Popup Content */}
              <div className="p-6 space-y-6">
                {/* Project Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECTS[selectedProject].images.map((img, i) => {
                    const isRedacted = img.src.includes("REDACTED");
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          if (!isRedacted) {
                            setActiveImage(img);
                          }
                        }}
                        className={`group/img rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center relative transition-all ${
                          isRedacted
                            ? "cursor-default"
                            : "cursor-zoom-in hover:border-accent/60 shadow-xs hover:shadow-md"
                        }`}
                        title={isRedacted ? undefined : "Click to view full image"}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className={`w-full h-auto max-h-[350px] object-contain sm:object-cover transition-transform duration-300 ${
                            isRedacted ? "" : "group-hover/img:scale-105"
                          }`}
                          loading="lazy"
                        />
                        {!isRedacted && (
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                            <div className="opacity-0 group-hover/img:opacity-100 transition-all duration-200 transform scale-90 group-hover/img:scale-100 bg-neutral-900/80 backdrop-blur-xs text-white p-2.5 rounded-full shadow-lg border border-white/20">
                              <ZoomIn className="w-5 h-5 text-accent" />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Project Description */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-lg font-semibold">About This Project</h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-accent mb-2">Role: {PROJECTS[selectedProject].role}</p>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                    {PROJECTS[selectedProject].fullDescription}
                  </p>
                </div>

                {/* Close / Back Button */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-neutral-950 font-semibold rounded-lg text-sm hover:bg-accent-hover transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Fullscreen Image Lightbox / Photo Viewer */}
      {mounted && activeImage !== null && createPortal(
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-photo-backdrop"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-label="Enlarged image viewer"
        >
          {/* Close button top-right */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-accent hover:text-neutral-950 transition-colors z-20 cursor-pointer shadow-lg"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image caption / title at bottom */}
          {activeImage.alt && (
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-medium z-20 pointer-events-none text-center max-w-[90vw] truncate shadow-md">
              {activeImage.alt}
            </div>
          )}

          {/* Enlarged image with smooth zoom-in animation */}
          <div
            className="relative max-w-full max-h-full flex items-center justify-center animate-photo-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-w-[92vw] max-h-[85vh] sm:max-h-[88vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
