"use client";


import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Globe,
  Mail,
  Menu,
  Server,
  Smartphone,
  Sparkles,
  X,
  Download
} from "lucide-react";
import { useState } from "react";

const skills = [
  { name: "HTML5", level: "Advanced", icon: Code2 },
  { name: "CSS3", level: "Advanced", icon: Code2 },
  { name: "JavaScript", level: "Intermediate", icon: Code2 },
  { name: "React.js", level: "Learning", icon: Smartphone },
  { name: "Next.js", level: "Learning", icon: Globe },
  { name: "Node.js", level: "Learning", icon: Server },
  { name: "Git & GitHub", level: "Intermediate", icon: Github },
  { name: "Database", level: "Learning", icon: Database }
];

const projects = [
  {
    title: "Knowledge Vault",
    description: "A clean knowledge-sharing web project built with a responsive frontend and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/rohanbabuphero/Knowledge-Vault"
  },
  {
    title: "Smart Farmer Platform",
    description: "A concept platform where farmers can view useful updates, information and resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#contact"
  },
  {
    title: "Developer Portfolio",
    description: "This portfolio — responsive, animated and structured for future full-stack growth.",
    tech: ["React", "Next.js", "Tailwind"],
    link: "#home"
  }
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"]
  ];

  return (
    <main>
      <header className="fixed top-0 z-50 w-full">
        <div className="container-x mt-4">
          <nav className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl shadow-cyan-950/10">
            <a href="#home" className="font-black tracking-tight text-lg">
              R<span className="text-cyan-300">.</span>Babu
            </a>

            <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
              {nav.map(([label, href]) => (
                <a key={href} href={href} className="hover:text-white transition">
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-white text-slate-950 px-4 py-2 font-semibold hover:bg-cyan-200 transition"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {menuOpen && (
            <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-3">
              {nav.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2 text-slate-200">
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section id="home" className="min-h-screen grid-bg flex items-center pt-28">
        <div className="container-x grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center py-20">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-slate-300 mb-7">
              <Sparkles size={16} className="text-cyan-300" />
              Available for opportunities
            </div>

            <p className="text-cyan-300 font-semibold mb-4">HELLO, I&apos;M</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-.06em] leading-[.95]">
              Ruhanur Islam <span className="gradient-text">Babu</span>
            </h1>
            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-300">
              Aspiring Full Stack Developer
            </h2>
            <p className="mt-6 max-w-xl text-slate-400 text-lg leading-8">
              I build responsive, user-friendly websites and I&apos;m continuously
              growing my skills in JavaScript, React, Next.js and backend development.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 font-bold hover:bg-cyan-200 transition">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a href="/cv.pdf" download className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-bold hover:bg-white/10 transition">
                Download CV <Download size={18} />
              </a>
            </div>

            <div className="flex gap-5 mt-8">
              <a aria-label="GitHub" href="https://github.com/rohanbabuphero" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Github />
              </a>
              <a aria-label="Email" href="mailto:rohanbabuphero@gmail.com" className="text-slate-400 hover:text-white">
                <Mail />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8, delay: .1 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 blur-3xl" />
            <div className="relative glass rounded-[2rem] p-3 rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
  <img
    src="/profile.jpg"
    alt="Ruhanur Islam Babu"
    className="w-full h-full object-cover object-top"
  />
</div>
            </div>
            <div className="absolute -bottom-6 -left-5 glass rounded-2xl px-5 py-4">
              <p className="text-2xl font-black">CSE</p>
              <p className="text-xs text-slate-400">Developer Journey</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-300 font-semibold mb-3">ABOUT ME</p>
            <h2 className="section-title">Turning ideas into <span className="gradient-text">web experiences.</span></h2>
          </div>
          <div className="text-slate-400 leading-8 text-lg">
            <p>
              I&apos;m a Computer Science graduate and a passionate web developer.
              I enjoy learning how modern websites work and turning designs into
              clean, responsive interfaces.
            </p>
            <p className="mt-5">
              My current focus is strengthening JavaScript and moving deeper into
              React, Next.js, APIs, databases and backend development so I can
              become a complete Full Stack Developer.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-pad bg-white/[.02]">
        <div className="container-x">
          <p className="text-cyan-300 font-semibold mb-3">MY TOOLKIT</p>
          <h2 className="section-title mb-12">Skills & Technologies</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .05 }}
                  className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform"
                >
                  <Icon className="text-cyan-300 mb-5" size={26} />
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{skill.level}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="container-x">
          <p className="text-cyan-300 font-semibold mb-3">SELECTED WORK</p>
          <h2 className="section-title mb-12">Featured Projects</h2>

          <div className="grid lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className="glass rounded-3xl p-6 flex flex-col min-h-[300px] hover:border-cyan-300/20 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-300/10 flex items-center justify-center text-cyan-300">
                  <Code2 />
                </div>
                <h3 className="text-2xl font-bold mt-7">{project.title}</h3>
                <p className="text-slate-400 leading-7 mt-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-2 mt-6 text-cyan-300 font-semibold">
                  View project <ArrowUpRight size={17} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container-x">
          <div className="glass rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/10 pointer-events-none" />
            <p className="relative text-cyan-300 font-semibold mb-3">CONTACT</p>
            <h2 className="relative section-title">Let&apos;s build something <span className="gradient-text">great.</span></h2>
            <p className="relative max-w-2xl mx-auto mt-5 text-slate-400 leading-7">
              Have a project, internship or job opportunity? I&apos;d love to hear from you.
            </p>
            <a href="mailto:rohanbabuphero@gmail.com" className="relative inline-flex items-center gap-2 mt-8 rounded-xl bg-white text-slate-950 px-6 py-3 font-bold hover:bg-cyan-200 transition">
              <Mail size={18} /> Send me an email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container-x py-7 flex flex-col sm:flex-row justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ruhanur Islam Babu. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-white">
            Back to top <ArrowDown size={15} className="rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
