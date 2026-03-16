import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PROJECTS } from "../data";
import type { Route } from "./+types/home";
import {
  MapPin,
  Download,
  Mail,
  Terminal,
  ExternalLink,
  Code2,
  Moon,
  Sun,
  AppWindow,
  ChevronRight,
  Github,
  Linkedin
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

  useEffect(() => {
    // Check initial preference from localStorage ONLY, Default to light mode
    if (localStorage.theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

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

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-blue-500/30 transition-colors duration-300">

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
            <a href="/resume.pdf" download className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium hover:scale-105 transition-transform">
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
                  I'm a software engineer who specializes in developing solutions using Python, Javascript, and other technologies. I work on projects like building modern web applications, mobile apps, and optimizing processes.
                </p>
                <p>
                  Currently, I'm delving deeper into full-stack development, concentrating on producing high-quality, performant, and scalable applications. My current responsibilities include developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows.
                </p>
              </div>
            </section>

            {/* Tech Stack Card */}
            <section className={cardClasses}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Tech Stack</h2>
                <Link to="/tech-stack" className="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  View All <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-6 mt-4">
                {/* Frontend Category */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"].map(tech => (
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
                    {["Python", "C", "C++", "Kotlin", "Java", "Node.js", "MySQL", "PostgreSQL", "MongoDB"].map(tech => (
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
                    {["TensorFlow", "Hugging Face", "OpenAI", "Gemini", "Claude"].map(tech => (
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
                <Link to="/projects" className="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  View All <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECTS.slice(0, 4).map((project, idx) => {
                  const Icon = project.icon;
                  const CardContent = (
                    <>
                      <div>
                        <h3 className="font-semibold text-base leading-tight group-hover:underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-4">
                          {project.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1 mb-3 leading-snug">{project.description}</p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-[10px] rounded font-mono text-neutral-700 dark:text-neutral-300 w-fit">
                        <Icon className="w-3 h-3 shrink-0" /> <span className="truncate">{project.technologies}</span>
                      </div>
                    </>
                  );

                  const cardClass = "p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors flex flex-col justify-between group h-full";

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
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-neutral-900 group-hover/timeline:bg-neutral-300 dark:bg-neutral-100 dark:group-hover/timeline:bg-neutral-700 group-hover:!bg-neutral-900 dark:group-hover:!bg-neutral-100 rounded-sm outline outline-4 outline-white dark:outline-neutral-900 transition-colors"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h3 className="font-bold">Software Engineer Intern</h3>
                    <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">2026</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Lightweight Solutions</p>
                </div>

                {/* Job 2 */}
                <div className="relative pl-6 group">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-neutral-300 group-hover/timeline:bg-neutral-300 dark:bg-neutral-700 dark:group-hover/timeline:bg-neutral-700 group-hover:!bg-neutral-900 dark:group-hover:!bg-neutral-100 rounded-sm outline outline-4 outline-white dark:outline-neutral-900 transition-colors"></div>
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
    </div>
  );
}
