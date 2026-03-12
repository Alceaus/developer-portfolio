import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
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
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "JQuery"],
  },
  {
    title: "Backend",
    skills: ["Python", "C", "C++", "Kotlin", "Java", "Node.js", "Ruby", "Go", "R", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI & Prompt Engineering",
    skills: ["TensorFlow", "Hugging Face", "OpenAI", "Gemini", "Claude", "Blackbox", "Jupyter Notebook", "DeepSeek"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Github", "VS Code", "Antigravity", "JetBrains IntelliJ", "Android Studio", "Figma", "Slack", "Discord", "Microsoft Office"],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-300">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Header Section */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-6 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Tech Stack</h1>
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
                               hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flexitems-center"
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
