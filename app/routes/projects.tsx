import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronLeft, X } from "lucide-react";
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

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

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
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl font-bold">{PROJECTS[selectedProject].title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Popup Content */}
            <div className="p-6 space-y-6">
              {/* Project Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS[selectedProject].images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Project Description */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-semibold">About This Project</h3>
                <p className="text-xs font-medium text-accent mb-2">Role: {PROJECTS[selectedProject].role}</p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                  {PROJECTS[selectedProject].fullDescription}
                </p>
              </div>

              {/* Close / Back Button */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
