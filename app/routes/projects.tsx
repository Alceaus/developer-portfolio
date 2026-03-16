import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/projects";
import { PROJECTS } from "../data";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Projects | Marc Daniel Marasigan" },
    { name: "description", content: "A comprehensive list of web and software projects." },
  ];
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4 sm:p-8 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <header className="flex flex-col gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors w-fit"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
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
                  <h3 className="font-semibold text-lg leading-tight group-hover:underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-4">
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

            const cardClass = "p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group min-h-[160px]";

            if (project.link) {
              return (
                <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {CardContent}
                </a>
              );
            }

            return (
              <div key={idx} className={cardClass}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
