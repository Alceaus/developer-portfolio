import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { ChevronLeft, X, ZoomIn } from "lucide-react";
import type { Route } from "./+types/projects";
import { PROJECTS } from "../data";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Projects | Marc Daniel Marasigan" },
    { name: "description", content: "A comprehensive list of web and software projects." },
  ];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4 sm:p-8 font-sans selection:bg-accent/20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <header className="flex flex-col gap-4 mb-12">
          <div className="flex items-start justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors w-fit"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/"
              className="p-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
            Projects
          </h1>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon;

            // Reusing the strict Home layout components, but enlarged
            const CardContent = (
              <>
                <div>
                  <h3 className="font-semibold text-lg leading-tight group-hover:underline decoration-accent/40 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2 mb-4 leading-snug">
                    {project.description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-md font-mono text-neutral-700 dark:text-neutral-300 w-fit">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{project.technologies}</span>
                </div>
              </>
            );

            const cardClass = "p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-accent/40 dark:hover:border-accent/40 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group min-h-[160px] cursor-pointer";

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
      </div>

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
