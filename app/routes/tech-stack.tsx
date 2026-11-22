import { Link } from "react-router";
import { ChevronLeft, X } from "lucide-react";
import type { Route } from "./+types/tech-stack";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Tech Stack | Marc Daniel Marasigan" },
    { name: "description", content: "A comprehensive breakdown of Marc Daniel Marasigan's technical skills and tools." },
  ];
}

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "JQuery"],
  },
  {
    title: "Backend",
    skills: ["Python", "Node.js", "PostgreSQL", "MongoDB", "Java", "Kotlin", "MySQL", "Go", "C", "C++", "Ruby", "R"],
  },
  {
    title: "AI & Prompt Engineering",
    skills: ["Claude", "Gemini", "OpenAI", "DeepSeek", "Hugging Face", "TensorFlow", "Blackbox", "Jupyter Notebook"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Github", "VS Code", "Antigravity", "JetBrains IntelliJ", "Android Studio", "Figma", "Slack", "Discord", "Microsoft Office"],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-accent/20 transition-colors duration-300">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Header Section */}
        <div className="mb-12 flex items-start justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Tech Stack</h1>
          </div>
          <Link
            to="/"
            className="mt-1 p-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </Link>
        </div>

        {/* Categories Layout */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category) => (
            <section key={category.title}>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 
                               bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-300
                               hover:border-accent/40 dark:hover:border-accent/40 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>
    </div>
  );
}
