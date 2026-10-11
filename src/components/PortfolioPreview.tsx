/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { PortfolioState } from "../types";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Bookmark,
  Sparkles,
  Terminal,
  BookOpen,
  Briefcase,
  Layers,
  Heart,
  Music,
  GraduationCap,
  ChevronRight,
  ExternalLink,
  Code2,
  FileCode,
  Coffee,
  CheckCircle2,
  Star,
  GitFork,
  GitPullRequest,
  X,
  Menu,
  Eye,
  Grid,
  Info,
  Sun,
  Moon,
  Send,
  MessageSquare,
  Check,
  Download,
  Award,
  ShieldCheck,
  Cpu,
  Database,
  Wrench
} from "lucide-react";

// Simple typewriter effect for rotating title subtitles
function TypewriterEffect() {
  const words = ["Savin D.", "a Product Builder", "a Full-Stack Developer", "a Problem Solver"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(130);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        if (currentText === activeWord) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
      setTypingSpeed(isDeleting ? 60 : 130);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <span className="relative">
      <span className="text-[#00FF66] font-extrabold">{currentText}</span>
      <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-[#00FF66] animate-pulse duration-500 align-middle" style={{ marginBottom: "0.15em" }} />
    </span>
  );
}

interface PortfolioPreviewProps {
  state: PortfolioState;
}

export default function PortfolioPreview({ state }: PortfolioPreviewProps) {
  const [projectFilter, setProjectFilter] = useState<"all" | "primary" | "vanilla" | "fullstack">("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeMusicPlay, setActiveMusicPlay] = useState(false);
  const [timelineFilter, setTimelineFilter] = useState<"all" | "projects" | "career">("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [themeMode, setThemeMode] = useState<"standard" | "neonGrid">("neonGrid");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>("all");

  // Contact form removed — using mailto link instead

  // Elements are beautifully animated with framer-motion (motion/react) to guarantee perfectly robust execution on reload and dynamic state filter updates.

  // no-op: email handled via mailto link

  const handleDownloadResume = () => {
    const resumeText = `SAVIN D
Karnataka, India | +91 9741058171 | savinkulal@outlook.com
LinkedIn: linkedin.com/in/savin-kulal | GitHub: github.com/savin-D

==================================================
EDUCATION
==================================================
SDM Degree College, Ujire
Bachelor of Computer Applications (BCA)
Duration: July 2023 - April 2026
Grade: 7.5 CGPA
- Focus on: Data Structures, Operating Systems, Computer Networks, and Database design.

SDM PU College, Ujire
Pre-University College (BAEC)
Duration: June 2021 - March 2023
Grade: 81%

==================================================
TECHNICAL SKILLS
==================================================
Languages: JavaScript, Python, C, HTML/CSS, SQL
Frameworks: React, Express
Libraries: Mongoose, Tailwind, Material-UI
Database: PostgreSQL, MongoDB
Tools: Git, VS Code
Additional Skills: Prompt Engineering

==================================================
EXPERIENCE
==================================================
Web Dev Intern
Codelab Systems | Mangalore, Karnataka
Duration: Dec 2025 - Jan 2026
- Spent an exciting month learning full-stack web development in a fast-paced environment.
- Collaborated on building mock views and handling client state effectively using React, Node, and Express.
- Designed a responsive tracker that helps users manage personal expenses and events in real-time.

==================================================
PROJECTS
==================================================
1. Spotify Clone
Tech Stack: HTML, CSS, JavaScript, Web Audio API, Local Storage
Link: https://github.com/savin-D/spotify-clone
- Built a fully responsive web audio player from scratch using vanilla JS. Includes custom playlists and local caching.

2. BookExchange
Tech Stack: MERN Stack, React.js, JWT Auth, ExpressJS
Link: https://github.com/savin-D/book-exchange
- Peer-to-peer book marketplace with secure logins, categories, and real-time listings to help students exchange textbooks.

3. Resume Analyzer
Tech Stack: React.js, JavaScript, NLP Matching
Link: https://github.com/savin-D/resume-analyzer
- Checks resume drafts against target job openings, scoring content/keywords with practical tips on missing skills.

4. HungryHub
Tech Stack: MERN Stack, OpenAI API, Tailwind CSS
Link: https://github.com/savin-D/hungry-hub
- Social recipe board with an intelligent AI helper suggesting cooking prep steps and recipes from leftover ingredients.
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Savin_D_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderProfileAndContactModule = () => {
    return (
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-slate-950/40 p-8 sm:p-10 rounded-3xl border border-slate-800/80 space-y-8 shadow-xl relative overflow-hidden"
      >
        {/* Decorative subtle ambient light overlay inside card */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00FF66]/5 to-transparent rounded-full pointer-events-none" />

        {/* User Photo & Title Header Block */}
        <div className="flex items-center gap-4">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00FF66] to-emerald-500 opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300" />
            <img
              src={new URL("../assets/images/developer_portrait_1780408571569.jpg", import.meta.url).href}
              alt="Savin D portrait"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-700/40 shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[9px] font-mono font-bold text-[#00FF66] uppercase tracking-wider block">Available for work</span>
            <h4 className="font-display font-extrabold text-white text-base tracking-tight">{state.resume.name}</h4>
            <p className="text-[11px] text-slate-400 font-mono leading-tight">{state.resume.title}</p>
          </div>
        </div>

        {/* Quick Contact Directories list */}
        <div className="space-y-2.5 border-t border-b border-slate-900 py-4 text-xs font-mono">
          <a
            href={`mailto:${state.resume.email}`}
            className="flex items-center gap-2.5 text-slate-300 hover:text-[#00FF66] transition-colors group p-1.5 rounded-lg hover:bg-white/[0.02]"
          >
            <Mail className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66]" />
            <span className="truncate">{state.resume.email}</span>
          </a>
          <a
            href={`tel:${state.resume.phone}`}
            className="flex items-center gap-2.5 text-slate-300 hover:text-[#00FF66] transition-colors group p-1.5 rounded-lg hover:bg-white/[0.02]"
          >
            <Phone className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66]" />
            <span>{state.resume.phone}</span>
          </a>
          <a
            href={`https://${state.resume.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-slate-300 hover:text-[#00FF66] transition-colors group p-1.5 rounded-lg hover:bg-white/[0.02]"
          >
            <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Interactive Send Message Board */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#00FF66]" />
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Write a short note</span>
          </div>

          <div className="space-y-2.5">
            <p className="text-[11px] text-slate-400 font-sans leading-normal">Prefer email? Click below to open your email client.</p>
            <a
              href={`mailto:${state.resume.email}?subject=${encodeURIComponent("Contact from portfolio")}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00FF66] text-black hover:bg-[#1eff7c] font-mono text-[11px] font-bold py-2.5 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-md"
            >
              <span>Contact via Email</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderUnifiedTimelineModule = () => {
    const timelineItems: Array<{
      title: string;
      subtitle: string;
      dateLabel: string;
      type: "project" | "experience" | "education";
      icon: any;
      details: string[];
      tech?: string[];
      sortBy: number;
    }> = [
      {
        title: "HungryHub Platform",
        subtitle: "Independent Full-Stack AI Platform",
        dateLabel: "Feb 2026",
        type: "project",
        icon: Sparkles,
        details: [
          "Designed a social recipe-sharing workspace using MERN stack & OpenAI APIs to dynamically suggest recipe workflows based on kitchen stocks."
        ],
        tech: ["MERN Stack", "OpenAI API", "Tailwind CSS"],
        sortBy: 202602,
      },
      {
        title: "Resume Keyword Analyzer",
        subtitle: "Independent NLP Utility Client",
        dateLabel: "Jan 2026",
        type: "project",
        icon: Code2,
        details: [
          "Developed light parser algorithms to review resumes against targeted job descriptions, parsing key vocabulary & assigning an ATS compatibility rating."
        ],
        tech: ["React.js", "Javascript", "NLP Basics"],
        sortBy: 202601,
      },
      ...state.resume.experience.map(exp => ({
        title: exp.role,
        subtitle: `${exp.company} • ${exp.location}`,
        dateLabel: exp.duration,
        type: "experience" as const,
        icon: Briefcase,
        details: exp.highlights,
        sortBy: 202512,
      })),
      {
        title: "BookExchange platform",
        subtitle: "Collaborative Student Textbook Marketplace",
        dateLabel: "Dec 2025",
        type: "project",
        icon: BookOpen,
        details: [
          "Constructed secure JWT web authentications and custom database schemas enabling academic junior-senior books trade lists."
        ],
        tech: ["MERN Stack", "Mongoose", "Tailwind CSS"],
        sortBy: 202511,
      },
      {
        title: "Spotify Player Clone",
        subtitle: "Vanilla JavaScript Client Implementation",
        dateLabel: "Oct 2025",
        type: "project",
        icon: FileCode,
        details: [
          "Built full responsive audio streams and local favorites track buffers using zero framework raw JS."
        ],
        tech: ["HTML", "CSS", "JavaScript", "Local Storage", "Fetch API"],
        sortBy: 202510,
      },
      ...state.resume.education.map(edu => {
        const isBca = edu.degree.includes("BCA") || edu.degree.includes("Bachelor");
        return {
          title: edu.degree,
          subtitle: `${edu.institution} • ${edu.location} ${edu.grade ? `| Score: ${edu.grade}` : ""}`,
          dateLabel: edu.duration,
          type: "education" as const,
          icon: GraduationCap,
          details: edu.details || [],
          sortBy: isBca ? 202604 : 202303,
        };
      })
    ];

    // Sort descending by dates
    const sortedItems = [...timelineItems]
      .sort((a, b) => b.sortBy - a.sortBy)
      .filter(item => {
        if (timelineFilter === "projects") return item.type === "project";
        if (timelineFilter === "career") return item.type === "experience" || item.type === "education";
        return true;
      });

    return (
      <div className="bg-[#0c1221]/70 p-8 sm:p-10 rounded-3xl border border-slate-805/80 space-y-8">
        {/* Header with selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-900 pb-4">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg ${bgAccent} border border-emerald-500/10 flex items-center justify-center`}>
              <Layers className={`w-4 h-4 ${textAccent}`} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xs text-slate-200 uppercase tracking-wide">
                Chronological Milestones Map
              </h3>
              <p className="text-[10px] text-slate-500 font-mono">CAREER STAGES INTERLEAVED WITH BUILDS</p>
            </div>
          </div>

          {/* Timeline Filter Pills */}
          <div className="flex gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-805/80 text-[10px] w-max font-mono">
            <button
              onClick={() => setTimelineFilter("all")}
              className={`px-2.5 py-1 rounded transition-colors ${timelineFilter === "all" ? `${solidBgAccent} text-white font-medium` : "text-slate-400 hover:text-slate-205"}`}
            >
              All
            </button>
            <button
              onClick={() => setTimelineFilter("projects")}
              className={`px-2.5 py-1 rounded transition-colors ${timelineFilter === "projects" ? `${solidBgAccent} text-white font-medium` : "text-slate-400 hover:text-slate-205"}`}
            >
              Projects
            </button>
            <button
              onClick={() => setTimelineFilter("career")}
              className={`px-2.5 py-1 rounded transition-colors ${timelineFilter === "career" ? `${solidBgAccent} text-white font-medium` : "text-slate-400 hover:text-slate-205"}`}
            >
              Career &amp; School
            </button>
          </div>
        </div>

        {/* Timeline Line Grid */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-805/90 space-y-10 py-1">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-emerald-550 via-indigo-550 to-amber-550 opacity-40" />
          <AnimatePresence mode="popLayout">
            {sortedItems.map((item, index) => {
              const ItemIcon = item.icon || Layers;
              const typeColors = {
                project: {
                  bullet: "bg-amber-500 text-white border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
                  badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                  header: "text-amber-100"
                },
                experience: {
                  bullet: "bg-emerald-500 text-white border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
                  badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                  header: "text-emerald-100"
                },
                education: {
                  bullet: "bg-indigo-500 text-white border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.2)]",
                  badge: "bg-indigo-500/10 text-indigo-400 border-indigo-505/20",
                  header: "text-indigo-100"
                }
              }[item.type];

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 30, x: -15 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-45px" }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: "spring", damping: 20, stiffness: 140 }}
                  className="relative group space-y-2"
                >
                  {/* Circle Indicator on the Axis Line */}
                  <div className={`absolute -left-[35px] sm:-left-[43px] top-1 w-4.5 h-4.5 rounded-full border-4 border-[#0b0f19] flex items-center justify-center transition-transform group-hover:scale-110 duration-200 z-10 ${typeColors.bullet}`}>
                    <ItemIcon className="w-2.2 h-2.2 shrink-0 text-white" />
                  </div>

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display font-bold text-xs text-slate-150 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <span className={`text-[9px] uppercase font-mono px-2 py-0.2 rounded border ${typeColors.badge}`}>
                        {item.type}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-805/70 px-2 py-0.5 rounded w-max shrink-0">
                      {item.dateLabel}
                    </span>
                  </div>

                  {/* Subtitle / Company or Institution */}
                  <p className="text-xs text-slate-400 font-light font-sans leading-none">
                    {item.subtitle}
                  </p>

                  {/* Tech stack badge list for project types */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono bg-[#0c1221] text-slate-400 border border-slate-805/40 px-1.5 py-0.2 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlight text bullet representation */}
                  {item.details && item.details.length > 0 && (
                    <div className="space-y-1 pt-1 pl-3.5 border-l border-slate-800/80">
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="text-xs text-slate-350 leading-relaxed font-light font-sans">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  const renderProjectDetailsModal = () => {
    if (!selectedProject) return null;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.93, y: 35, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.93, y: 15, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0b0c10] border border-slate-800 rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl relative flex flex-col max-h-[95vh]"
        >
          {/* Header Close button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 p-2 rounded-full text-slate-400 hover:text-white transition-colors z-20 border border-slate-850"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Project Image block / Mockup placeholder if none exists */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
            {selectedProject.imageUrl ? (
              <motion.img
                initial={{ scale: 1.12, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                src={selectedProject.imageUrl}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-center space-y-3"
              >
                <Grid className="w-10 h-10 text-emerald-500/20 animate-pulse" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">No live preview</span>
              </motion.div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-60" />
            
            {/* Overlay badge info */}
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-800/80 text-[10px] text-slate-400 font-mono flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Completed: {selectedProject.completionDate || "Continuous"}
            </motion.div>
          </div>

          {/* Content Details section */}
          <div className="p-6 md:p-8 space-y-5 overflow-y-auto">
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
                  {selectedProject.name}
                </h3>
                <p className="text-xs text-slate-450 font-mono mt-1">Savin's Verifiable Project Portfolio</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {selectedProject.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-250 border border-slate-700 py-2 px-3 rounded-xl transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Tech stack badges list */}
            <motion.div 
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.3 }}
              className="space-y-1.5"
            >
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Tech Stacks &amp; Dialects Used</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((tech: string, i: number) => (
                  <motion.span 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 180 }}
                    className="text-xs font-mono text-[#00FF66] bg-[#00FF66]/10 border border-[#00FF66]/20 px-2.5 py-1 rounded-lg"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Bullet achievements list */}
            <div className="space-y-3 border-t border-slate-900 pt-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-[10px] text-slate-500 uppercase font-mono block"
              >
                Architecture Highlights &amp; Insights
              </motion.span>
              <div className="space-y-2.5">
                {selectedProject.description.map((bullet: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 + idx * 0.08, type: "spring", stiffness: 130 }}
                    className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-sans font-light bg-slate-900/20 p-2.5 rounded-xl border border-slate-900/30"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF55] shrink-0 mt-2 shadow-[0_0_8px_#00FF55]"></span>
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const renderNeonGridLayout = () => {
    return (
      <div className="w-full min-h-screen bg-[#030304] text-slate-100 flex flex-col selection:bg-[#00FF66]/20 selection:text-[#00FF66] relative overflow-hidden font-sans">
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
        
        {/* Additional accent glows */}
        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#00ff66]/5 to-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] bg-gradient-to-br from-[#00ff66]/5 to-[#818cf8]/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Top bar branding custom header from logo design */}
        <header className="w-full border-b border-white/[0.04] bg-[#030304]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 sm:px-12 py-5 sm:py-6">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold tracking-tight text-sm text-[#00FF66] hover:text-white transition-colors cursor-pointer">
                &lt;Savin/&gt;
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 sm:gap-6 text-xs font-mono font-medium tracking-widest text-[#94a3b8]">
              <a href="#home" className="text-[#00FF66] hover:text-white transition-colors">HOME</a>
              <a href="#work" className="hover:text-[#00FF66] transition-colors">WORK</a>
              <a href="#skills" className="hover:text-[#00FF66] transition-colors">SKILLS</a>
              <a href="#experience" className="hover:text-[#00FF66] transition-colors">EXPERIENCE</a>
              <a href="#certificates" className="hover:text-[#00FF66] transition-colors">CERTIFICATES</a>
              <a href="#timeline" className="hover:text-[#00FF66] transition-colors">TIMELINE</a>
              <a href="#about" className="hover:text-[#00FF66] transition-colors">ABOUT</a>
              <a href="#contact" className="hover:text-[#00FF66] transition-colors">CONTACT</a>
              
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] hover:bg-[#00FF66]/20 border border-[#00FF66]/25 px-2.5 py-1 rounded font-mono text-[10px] cursor-pointer transition-all"
              >
                <Download className="w-3 h-3 text-[#00FF66]" />
                <span>RESUME</span>
              </button>
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#00FF66] p-1.5 hover:bg-white/5 rounded-lg border border-[#00FF66]/20 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#00FF66]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#00FF66]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden border-t border-white/[0.04] bg-[#030304]/95 backdrop-blur-lg overflow-hidden"
              >
                <div className="flex flex-col gap-1.5 px-6 py-5 font-mono text-xs tracking-wider text-slate-400">
                  <a 
                    href="#home" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl text-[#00FF66] hover:text-white transition-colors"
                  >
                    HOME
                  </a>
                  <a 
                    href="#work" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    WORK
                  </a>
                  <a 
                    href="#skills" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    SKILLS
                  </a>
                  <a 
                    href="#experience" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    EXPERIENCE
                  </a>
                  <a 
                    href="#certificates" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    CERTIFICATES
                  </a>
                  <a 
                    href="#timeline" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    TIMELINE
                  </a>
                  <a 
                    href="#about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    ABOUT
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 hover:bg-[#00FF66]/5 rounded-xl hover:text-[#00FF66] transition-colors"
                  >
                    CONTACT
                  </a>
                  <div className="pt-3 border-t border-white/[0.04] mt-2">
                    <button
                      onClick={() => {
                        handleDownloadResume();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-[#00FF66]/10 text-[#00FF66] hover:bg-[#00FF66]/20 border border-[#00FF66]/25 py-3 rounded-xl font-mono text-xs font-semibold cursor-pointer transition-all"
                    >
                      <Download className="w-4 h-4 text-[#00FF66]" />
                      <span>DOWNLOAD RESUME</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
 
        {/* Hero Section block matching screenshot */}
        <section id="home" className="max-w-7xl mx-auto w-full px-6 sm:px-12 pt-10 sm:pt-14 pb-10 sm:pb-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left text column */}
            <div className="space-y-6 md:col-span-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#00FF66] tracking-widest uppercase block">
                  /* {state.resume.title} */
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-none">
                  Hi, I'm <TypewriterEffect />
                  <br />
                  <span className="text-slate-450 text-3xl sm:text-4xl lg:text-5xl mt-2 block">I build reliable web systems.</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-400 font-sans font-light leading-relaxed max-w-3xl pt-2">
                  I love building things that are honest, quick, and satisfying to use. Based in Karnataka, I focus on full-stack web engineering, writing highly communicative client states, and optimizing interactive products for end-user delight.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <a 
                  href="#work" 
                  className="inline-flex items-center gap-2 bg-[#00FF66] hover:bg-[#1eff7c] text-black font-semibold font-mono text-xs px-6 py-3.5 rounded-full tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,255,102,0.3)]"
                >
                  <span>Browse Work</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3px]" />
                </a>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold font-mono text-xs px-5 py-3.5 rounded-full border border-slate-800/85 tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Contact Me</span>
                  <Mail className="w-3.5 h-3.5 text-[#00FF66]" />
                </a>
              </div>
            </div>

            {/* Right photo column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group max-w-[280px] w-full">
                {/* Visual sci-fi scanner glow border effect */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#00FF66]/40 via-emerald-500/30 to-[#00FF66]/20 opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
                
                {/* Tech Corners overlays */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00FF66] rounded-tl-lg z-10" />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00FF66] rounded-tr-lg z-10" />
                <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00FF66] rounded-bl-lg z-10" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00FF66] rounded-br-lg z-10" />

                <div className="relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800/60 shadow-2xl">
                  <img
                    src={new URL("../assets/images/developer_portrait_1780408571569.jpg", import.meta.url).href}
                    alt="Savin D Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-square object-cover object-center grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500 transform group-hover:scale-[1.03]"
                  />
                  {/* Subtle caption indicator */}
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 border-t border-slate-850/60 p-2 text-center font-mono text-[9px] text-slate-400">
                    Savin D. / Karnataka, IN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Showcase Grid with visual Project Mockups */}
        <section id="work" className="portfolio-section max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 space-y-12 sm:space-y-14 relative z-10 border-t border-white/[0.04]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.04] pb-4">
            <div>
              <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                Primary Showcase Pinned Builds
              </h2>
              <p className="text-xs font-mono text-slate-500 uppercase mt-0.5">CLICK ANY CARD TO BROWSE REPO SCHEMAS &amp; DETAILS</p>
            </div>
            
            {/* Simple filtering controls */}
            <div className="flex gap-1 bg-white/[0.02] border border-white/[0.05] p-0.5 rounded-lg text-[10px] font-mono">
              <button
                onClick={() => setProjectFilter("all")}
                className={`px-3 py-1 rounded transition-colors ${projectFilter === "all" ? "bg-[#00FF66] text-black font-bold" : "text-slate-400 hover:text-white"}`}
              >
                All
              </button>
              <button
                onClick={() => setProjectFilter("primary")}
                className={`px-3 py-1 rounded transition-colors ${projectFilter === "primary" ? "bg-[#00FF66] text-black font-bold" : "text-slate-400 hover:text-white"}`}
              >
                Core
              </button>
              <button
                onClick={() => setProjectFilter("fullstack")}
                className={`px-3 py-1 rounded transition-colors ${projectFilter === "fullstack" ? "bg-[#00FF66] text-black font-bold" : "text-slate-400 hover:text-white"}`}
              >
                Fullstack
              </button>
            </div>
          </div>

          {/* Cards Layout Grid with premium layout and hover transforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 pt-4">
            {filteredProjects.map((proj, pIdx) => (
              <motion.div
                key={pIdx}
                onClick={() => setSelectedProject(proj)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (pIdx % 2) * 0.1 }}
                className="group cursor-pointer bg-[#0a0a0c]/80 border border-white/[0.06] hover:border-[#00FF66]/35 rounded-2xl overflow-hidden transition-all duration-305 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1"
              >
                {/* Visual Image Screen Mockup Placeholder */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/[0.04]">
                  {proj.imageUrl ? (
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-2">
                      <Grid className="w-10 h-10 text-slate-700 group-hover:text-[#00FF66] transition-colors" />
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Visual representation</span>
                    </div>
                  )}
                  {/* Subtle hover eye indicators Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-[#00FF66] text-black font-mono font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-3 h-3" /> Explore Module
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/[0.06] text-[9px] font-mono text-slate-400">
                    {proj.completionDate || "Ongoing"}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-[#00FF66] text-sm tracking-wide tracking-tight">
                        {proj.name}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] transform group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                      {proj.description[0]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.03]">
                    {proj.tech.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[9px] font-mono bg-white/[0.02] text-slate-350 border border-white/[0.04] px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Skills Section */}
        <section id="skills" className="portfolio-section max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 space-y-12 sm:space-y-14 relative z-10 border-t border-white/[0.04]">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.04] pb-4"
          >
            <div>
              <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                Technical Capabilities Matrix
              </h2>
              <p className="text-xs font-mono text-[#00FF66] uppercase mt-0.5">/* Skill clusters, proficiencies, and contextual notes */</p>
            </div>

            {/* Filter Tabs / Categories */}
            <div className="flex flex-wrap gap-1 bg-[#0a0a0c]/80 p-1 rounded-xl border border-white/[0.06] mt-4 sm:mt-0 max-w-full overflow-x-auto text-[10px] font-mono scrollbar-none shrink-0">
              <button
                onClick={() => setSelectedSkillCategory("all")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-250 cursor-pointer ${selectedSkillCategory === "all" ? "bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/25 font-bold" : "text-slate-400 hover:text-slate-200"}`}
              >
                All Nodes
              </button>
              {[
                { id: "languages", label: "Languages" },
                { id: "frameworks", label: "Frameworks" },
                { id: "databases", label: "Databases" },
                { id: "libraries", label: "Libraries & UI" },
                { id: "tools", label: "Tools" },
                { id: "additional", label: "Specializations" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-250 cursor-pointer ${selectedSkillCategory === cat.id ? "bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/25 font-bold" : "text-slate-400 hover:text-slate-200"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column: Skill Category Blocks */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  id: "languages",
                  title: "Programming Languages",
                  icon: Code2,
                  subtitle: "SOCIABLE SYNTAX ENGINE",
                  skillsData: [
                    { name: "JavaScript", level: 90, note: "Full-stack client architectures, ES modules, web audio endpoints" },
                    { name: "Python", level: 75, note: "Data scripting, textual analyzer NLP similarity calculations" },
                    { name: "SQL", level: 80, note: "Structured queries, normalized schemas, relational optimization" },
                    { name: "HTML/CSS", level: 88, note: "Modern layout styling, semantic documents, CSS grid/flexbox" },
                    { name: "C", level: 70, note: "Low-level structures, core BCA foundations" }
                  ]
                },
                {
                  id: "frameworks",
                  title: "Frameworks & Runners",
                  icon: Layers,
                  subtitle: "MODAL EXECUTION PIPELINES",
                  skillsData: [
                    { name: "React", level: 92, note: "State hooks, dynamic visual routes, Framer Motion animations" },
                    { name: "Express", level: 85, note: "Modular route handshakes, backend middleware stack, payload validation" }
                  ]
                },
                {
                  id: "databases",
                  title: "Databases & Engines",
                  icon: Database,
                  subtitle: "PERSISTENT TRANSACTION STACKS",
                  skillsData: [
                    { name: "MongoDB", level: 84, note: "NoSQL document stores, aggregation flows, Mongoose pipelines" },
                    { name: "PostgreSQL", level: 78, note: "Relational integrity, custom indices, reliable transactions" }
                  ]
                },
                {
                  id: "libraries",
                  title: "Libraries & Toolkits",
                  icon: Cpu,
                  subtitle: "UTILITY HOOKS & PAIRINGS",
                  skillsData: [
                    { name: "Tailwind CSS", level: 95, note: "Utility-first design systems, responsive borders, pixel accuracy" },
                    { name: "Mongoose", level: 82, note: "Document validation rules, lifecycle middlewares, subdocument sets" },
                    { name: "Material-UI", level: 72, note: "Prebuilt material wrappers, customized admin layouts" }
                  ]
                },
                {
                  id: "tools",
                  title: "Tools & Workspace",
                  icon: Wrench,
                  subtitle: "VERSIONING & EDITOR SHELL",
                  skillsData: [
                    { name: "VS Code", level: 95, note: "Operating system context, specialized macros, visual code themes" },
                    { name: "Git", level: 88, note: "Rebase paradigms, merge conflict resolution, commit trackings" }
                  ]
                },
                {
                  id: "additional",
                  title: "Specializations",
                  icon: Sparkles,
                  subtitle: "AI CONTEXTS & AUXILIARIES",
                  skillsData: [
                    { name: "Prompt Engineering", level: 90, note: "Orchestrating logical code generations, model constraints" },
                    { name: "RESTful APIs", level: 88, note: "Payload validations, structured errors, modern JSON routing" },
                    { name: "NLP Basics", level: 75, note: "Semantic similarity scores, key term parser, keyword extractions" }
                  ]
                }
              ]
                .filter(cat => selectedSkillCategory === "all" || selectedSkillCategory === cat.id)
                .map((cat, catIdx) => {
                  const CatIcon = cat.icon;
                  return (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, scale: 0.97, y: 25 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                      transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                      className="bg-[#0a0a0c]/80 border border-white/[0.06] hover:border-[#00FF66]/25 rounded-2xl p-6 sm:p-7 space-y-5 transition-all duration-355 relative group overflow-hidden flex flex-col justify-between"
                    >
                      {/* Technical visual decor corner tag */}
                      <div className="absolute top-0 right-0 py-1 px-2.5 font-mono text-[8px] bg-white/[0.02] text-slate-500 border-b border-l border-white/[0.04]">
                        NODE_0{catIdx + 1}
                      </div>

                      <div className="space-y-4">
                        {/* Title Row */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#00FF66]/8 border border-[#00FF66]/15 flex items-center justify-center shrink-0 group-hover:bg-[#00FF66]/15 transition-all duration-350">
                            <CatIcon className="w-5 h-5 text-[#00FF66]" />
                          </div>
                          <div>
                            <span className="font-mono text-[8px] tracking-wider text-slate-500 block uppercase">{cat.subtitle}</span>
                            <h3 className="font-display font-bold text-slate-100 group-hover:text-[#00FF66] transition-colors duration-250">
                              {cat.title}
                            </h3>
                          </div>
                        </div>

                        {/* Skills List inside Category */}
                        <div className="space-y-4 pt-2">
                          {cat.skillsData.map((skl, sklIdx) => (
                            <div key={sklIdx} className="space-y-1.5 group/skill">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-semibold text-slate-200 group-hover/skill:text-white transition-colors">
                                  {skl.name}
                                </span>
                                <span className="font-mono text-[10px] text-[#00FF66] bg-[#00FF66]/5 px-1.5 py-0.2 rounded border border-[#00FF66]/10">
                                  {skl.level}%
                                </span>
                              </div>
                              
                              {/* Animated Progress Meter slider */}
                              <div className="h-1 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/[0.01]">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skl.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: "easeOut", delay: sklIdx * 0.05 }}
                                  className="h-full bg-gradient-to-r from-emerald-500 to-[#00FF66] rounded-full"
                                />
                              </div>

                              <p className="text-[11px] text-slate-400 font-light leading-relaxed pl-1">
                                {skl.note}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 mt-4 border-t border-white/[0.03] flex items-center justify-between text-[8px] font-mono text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                          STABLE CONNECTION
                        </span>
                        <span>0X{cat.id.toUpperCase()}</span>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Professional Experience Block */}
        <section id="experience" className="portfolio-section max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 space-y-12 relative z-10 border-t border-white/[0.04]">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="border-b border-white/[0.04] pb-4"
          >
            <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs font-mono text-[#00FF66] uppercase mt-0.5">/* Professional stints & contributions */</p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12">
            {state.resume.experience.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="bg-[#0a0a0c]/80 border border-white/[0.06] hover:border-[#00FF66]/35 rounded-2xl p-8 sm:p-10 space-y-6 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Tech background graphic glow element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF66]/2 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00FF66]/5 transition-all duration-500" />
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-[#00FF66]" />
                      </div>
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#00FF66] transition-colors">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-slate-300 ml-10">
                      {exp.company} <span className="text-slate-500 font-light">• {exp.location}</span>
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono text-xs bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/25 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="pl-0 sm:pl-10 space-y-2.5 pt-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <Terminal className="w-3.5 h-3.5 text-[#00FF66]/60 shrink-0 mt-0.5" />
                      <p className="leading-relaxed font-light">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates & Achievements Block */}
        <section id="certificates" className="portfolio-section max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 space-y-12 relative z-10 border-t border-white/[0.04]">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="border-b border-white/[0.04] pb-4"
          >
            <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
              Certificates &amp; Achievements
            </h2>
            <p className="text-xs font-mono text-[#00FF66] uppercase mt-0.5">/* Credentials, IT Fests &amp; Professional Specializations */</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 pt-4">
            {[
              {
                title: "Oracle Certified Foundations Associate",
                issuer: "Oracle University",
                date: "July 25, 2025",
                credentialId: "OCI ID: 102126051OCI25FNDCFA",
                skills: ["Cloud Core", "IAM Security", "Networking", "Compute", "OCI Databases"],
                description: "Recognized as Oracle Certified Foundations Associate, validating deep core competencies in high-performance cloud deployment architectures, OCI storage engines, and virtualization.",
                accent: "border-amber-500/20 hover:border-amber-500/40 text-amber-400 bg-amber-500/5 hover:bg-amber-500/10",
                badge: "Foundations Associate",
                imageUrl: new URL("../assets/images/oracle_oci_cert_1780414165454.png", import.meta.url).href
              },
              {
                title: "Software Engineering Job Simulation",
                issuer: "Electronic Arts (EA) • Forage",
                date: "June 22, 2025",
                credentialId: "Verification Code: 72osBJ34mXmPGz5N5",
                skills: ["Feature Proposal", "Game Objects", "Inventory Systems", "Live Bugfix"],
                description: "Completed practical simulation of software engineering tasks including writing high-quality feature proposals, designing customizable game object classes, and live bug-patching.",
                accent: "border-sky-500/20 hover:border-sky-500/40 text-sky-400 bg-sky-500/5 hover:bg-sky-500/10",
                badge: "EA Simulation",
                imageUrl: new URL("../assets/images/ea_forage_cert_1780414180894.png", import.meta.url).href
              },
              {
                title: "Web App Dev (React & Node)",
                issuer: "Codelab Systems",
                date: "Dec 2025 - Jan 2026",
                credentialId: "6-Day Intensive Bootcamp • SDM Ujire",
                skills: ["React.js", "Node.js", "Express.js", "Fullstack Flow"],
                description: "Exhaustive hands-on training focusing on full-stack React.js & Node.js app development. Built event logs and stateful database synchronization pipelines.",
                accent: "border-[#00FF66]/20 hover:border-[#00FF66]/45 text-[#00FF66] bg-[#00FF66]/5 hover:bg-[#00FF66]/10",
                badge: "Web Workshop",
                imageUrl: new URL("../assets/images/codelab_systems_cert_1780414196061.png", import.meta.url).href
              },
              {
                title: "1st Place - Pixel-Craft Competition",
                issuer: "TECHOTSAV IT Fest • Alva's College",
                date: "March 2026",
                credentialId: "National Level IT Fest Competition",
                skills: ["UI Selection", "Pixel-Perfect Design", "Creative Frontend"],
                description: "Secured First Place honors in creative front-end design, delivering pixel-precise layouts matching sophisticated mock requirements under strict timers.",
                accent: "border-[#00FF66]/20 hover:border-[#00FF66]/45 text-[#00FF66] bg-[#00FF66]/5 hover:bg-[#00FF66]/10",
                badge: "Winner",
                imageUrl: new URL("../assets/images/techotsav_winner_cert_1780414213887.png", import.meta.url).href
              },
              {
                title: "2nd Prize - Web Designing Competition",
                issuer: "Dept. of Computer Science • SDM College, Ujire",
                date: "Academic Year 2024 - 2025",
                credentialId: "IT Club Appreciation Award",
                skills: ["Responsive Alignment", "Sleek Aesthetics", "Typography Pairs"],
                description: "Awarded Second Prize and a Certificate of Appreciation for showing outstanding web engineering commitment, style implementation, and client state layout logic.",
                accent: "border-[#00FF66]/20 hover:border-[#00FF66]/45 text-[#00FF66] bg-[#00FF66]/5 hover:bg-[#00FF66]/10",
                badge: "Runner Up",
                imageUrl: new URL("../assets/images/sdm_web_design_cert_1780414233640.png", import.meta.url).href
              }
            ].map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
                className={`border rounded-2xl p-8 sm:p-10 space-y-6 transition-all duration-300 relative group overflow-hidden ${cert.accent} flex flex-col justify-between`}
              >
                {/* Micro tech corners decorations */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-current opacity-30" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-current opacity-30" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-current opacity-30" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-current opacity-30" />

                <div className="space-y-4">
                  {/* Certificate Mock Image Cover */}
                  {cert.imageUrl && (
                    <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-xl bg-slate-950/40 border border-white/[0.06] shadow-inner group-hover:border-current/30 transition-colors">
                      <img 
                        src={cert.imageUrl} 
                        alt={cert.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      {/* Technical scanner visual accent overlay */}
                      <div className="absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 pt-1">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block">
                        {cert.issuer}
                      </span>
                      <h3 className="font-display font-extrabold text-sm text-white tracking-wide group-hover:text-[#00FF66] transition-colors leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest border border-current px-2.5 py-0.5 rounded shrink-0">
                      {cert.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono bg-white/[0.02] text-slate-300 border border-white/[0.04] px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.04] pt-2.5 text-[10px] font-mono text-slate-500">
                    <span className="truncate max-w-[170px]">{cert.credentialId}</span>
                    <span className="text-slate-400 shrink-0">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline Map Section inside same theme */}
        <section id="timeline" className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 relative z-10 border-t border-white/[0.04]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            <div className="md:col-span-2">
              {renderUnifiedTimelineModule()}
            </div>
            
            {/* Sidebar widgets inside this theme */}
            <div className="space-y-6 md:col-span-1">
              {/* Profile & Contact Desk in same sleek theme style */}
              {renderProfileAndContactModule()}

              {/* Developer stats profile panel widget */}
              <div className="bg-[#0a0a0c]/80 p-6 rounded-3xl border border-white/[0.06] space-y-4">
                <span className="font-mono text-[9px] text-[#00FF66] uppercase block">/* Environment Specs */</span>
                <h3 className="text-xs font-display font-bold text-slate-205">Tuning &amp; Operating Variables</h3>
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between border-b border-white/[0.03] pb-1.5 font-mono">
                    <span className="text-slate-500">Core OS:</span>
                    <span className="text-slate-300 text-[11px] text-right truncate max-w-[200px]">{state.personality.operatingSystem}</span>
                  </div>
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-slate-500">SideQuest focal:</span>
                    <span className="text-[#00FF66] text-[11px] font-semibold text-right truncate max-w-[150px]">{state.personality.sideQuests[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Narrative Block Section */}
        <section id="about" className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 relative z-10 border-t border-white/[0.04] space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="font-mono text-[9px] text-[#00FF66] tracking-wide block">/* Brand narrative */</span>
              <h2 className="text-2xl font-display font-extrabold text-white tracking-tight">The developer story</h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                {state.linkedIn.narrativeBio}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.01] p-8 sm:p-10 rounded-2xl border border-white/[0.04] flex flex-col justify-center space-y-5"
            >
              <h4 className="font-mono text-xs text-slate-400">/* Philosophy */</h4>
              <p className="text-xs text-[#00FF66]/80 italic font-light leading-relaxed">
                "{state.linkedIn.philosophy}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="mt-16 border-t border-white/[0.04] p-8 text-center text-[10px] text-slate-500 font-mono tracking-wider relative z-10 bg-[#020203]">
          <span>BUILT WITH REACT • VITE • NEON VAPORGRID THEME v4.1 • {state.resume.name.toUpperCase()}</span>
        </footer>

      </div>
    );
  };

  const rgbAccent = {
    emerald: "emerald",
    amber: "amber",
    slate: "slate",
    rose: "rose",
    indigo: "indigo"
  }[state.personality.themeAccent] || "emerald";

  // Accent helper maps
  const borderAccent = {
    emerald: "border-emerald-500/20 hover:border-emerald-500/50",
    amber: "border-amber-500/20 hover:border-amber-500/50",
    slate: "border-slate-500/20 hover:border-slate-500/50",
    rose: "border-rose-500/20 hover:border-rose-500/50",
    indigo: "border-indigo-500/20 hover:border-indigo-500/50"
  }[state.personality.themeAccent] || "border-emerald-500/20 hover:border-emerald-500/50";

  const textAccent = {
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    slate: "text-slate-300",
    rose: "text-rose-400",
    indigo: "text-indigo-400"
  }[state.personality.themeAccent] || "text-emerald-400";

  const bgAccent = {
    emerald: "bg-emerald-500/10",
    amber: "bg-amber-500/10",
    slate: "bg-slate-500/10",
    rose: "bg-rose-500/10",
    indigo: "bg-indigo-500/10"
  }[state.personality.themeAccent] || "bg-emerald-500/10";

  const solidBgAccent = {
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    slate: "bg-slate-600",
    rose: "bg-rose-500",
    indigo: "bg-indigo-500"
  }[state.personality.themeAccent] || "bg-emerald-500";

  const glowAccent = {
    emerald: "shadow-emerald-500/10 hover:shadow-emerald-500/20",
    amber: "shadow-amber-500/10 hover:shadow-amber-500/20",
    slate: "shadow-slate-500/10 hover:shadow-slate-500/20",
    rose: "shadow-rose-500/10 hover:shadow-rose-500/20",
    indigo: "shadow-indigo-500/10 hover:shadow-indigo-500/20"
  }[state.personality.themeAccent] || "shadow-emerald-500/10 hover:shadow-emerald-500/20";

  // Filter projects
  const filteredProjects = state.resume.projects.filter((p) => {
    if (projectFilter === "primary") return p.isPrimary;
    if (projectFilter === "vanilla") return p.tech.some((t) => t.toLowerCase().includes("vanilla") || t.toLowerCase().includes("javascript"));
    if (projectFilter === "fullstack") return p.tech.some((t) => t.toLowerCase().includes("mern") || t.toLowerCase().includes("express") || t.toLowerCase().includes("mongodb"));
    return true;
  });

  // Stagger entry configuration
  const staggerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  if (themeMode === "neonGrid") {
    return (
      <>
        {renderNeonGridLayout()}
        <AnimatePresence>
          {selectedProject && renderProjectDetailsModal()}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div className="w-full min-h-full bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Portfolio Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-[#0c1322]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Terminal className={`w-5 h-5 ${textAccent}`} />
          <span className="font-display font-bold tracking-tight text-slate-150">
            {state.resume.name}
          </span>
          <span className="text-[10px] bg-slate-800/80 text-slate-400 font-mono px-2 py-0.5 rounded-full border border-slate-700/50">
            Active: {state.personality.archetype}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <button
            onClick={() => setThemeMode("neonGrid")}
            className="flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 hover:bg-[#00FF66]/20 py-1.5 px-3 rounded-lg cursor-pointer transition-all mr-2"
          >
            <Grid className="w-3.2 h-3.2" />
            <span>Interactive Grid</span>
          </button>
          
          <a href="#contact" className="hover:text-[#00FF66] transition-colors font-semibold uppercase hidden md:inline mr-2">
            Contact Me
          </a>

          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/25 py-1.5 px-3 rounded-lg hover:bg-[#00FF66]/20 cursor-pointer transition-all mr-2"
          >
            <Download className="w-3 h-3 text-[#00FF66]" />
            <span>RESUME</span>
          </button>

          <div className="flex items-center gap-3">
            <a href={`mailto:${state.resume.email}`} className="hover:text-white transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href={`https://${state.resume.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={`https://${state.resume.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Layouts */}
      <div className="flex-1 p-6 md:p-8 max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait">
          
          {/* ==================== 1. MINIMAL CANVAS ==================== */}
          {state.personality.layoutStyle === "minimal" && (
            <motion.div
              key="minimal"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerVariants}
              custom={1}
              className="space-y-12 max-w-3xl mx-auto"
            >
              {/* Introduction */}
              <div className="space-y-4">
                <span className={`text-[11px] font-mono uppercase tracking-widest ${textAccent}`}>
                   Portfolio Brief
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                  Hi, I am <span className={`${textAccent}`}>{state.resume.name}</span>.
                </h1>
                <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                  {state.linkedIn.narrativeBio}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Coffee className="w-3.5 h-3.5 text-amber-400" />
                    Fuel: {state.personality.operatingSystem}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Obsession: {state.personality.currentObession}
                  </span>
                </div>
              </div>

              {/* Integrated Visual Milestone & Project Timeline */}
              {renderUnifiedTimelineModule()}

              {/* Technical Capabilities Matrix */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
                  <Code2 className="w-4.5 h-4.5 text-slate-450" />
                  <h2 className="font-display font-semibold text-lg text-white">Pragmatic Tech stack</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">Core Languages &amp; Frameworks</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[...state.resume.skills.languages, ...state.resume.skills.frameworks].map((skill, idx) => (
                        <span key={idx} className={`text-xs px-2.5  py-1 rounded bg-slate-800/60 text-slate-200 border border-slate-705/30 ${glowAccent}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">Databases, Stores &amp; Libraries</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[...state.resume.skills.databases, ...state.resume.skills.libraries].map((skill, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-800/60 text-slate-200 border border-slate-705/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile & Contact Desk */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
                  <Mail className="w-4.5 h-4.5 text-[#00FF66]" />
                  <h2 className="font-display font-semibold text-lg text-white">Get in Touch with Savin</h2>
                </div>
                {renderProfileAndContactModule()}
              </div>

              {/* Projects Grid for Minimal */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4.5 h-4.5 text-slate-450" />
                    <h2 className="font-display font-semibold text-lg text-white">Verifiable Build Inventory</h2>
                  </div>
                  {/* Category Pill Slider */}
                  <div className="flex gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px]">
                    <button
                      onClick={() => setProjectFilter("all")}
                      className={`px-2 py-1 rounded ${projectFilter === "all" ? `${solidBgAccent} text-white` : "text-slate-400"}`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setProjectFilter("primary")}
                      className={`px-2 py-1 rounded ${projectFilter === "primary" ? `${solidBgAccent} text-white` : "text-slate-400"}`}
                    >
                      Primary
                    </button>
                    <button
                      onClick={() => setProjectFilter("fullstack")}
                      className={`px-2 py-1 rounded ${projectFilter === "fullstack" ? `${solidBgAccent} text-white` : "text-slate-400"}`}
                    >
                      Full-Stack
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProjects.map((p, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() => setSelectedProject(p)}
                      onMouseEnter={() => setHoveredProject(pIdx)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`p-5 rounded-xl border bg-slate-900/30 transition-all duration-300 cursor-pointer hover:translate-y-[-2px] ${borderAccent} ${glowAccent} flex flex-col justify-between`}
                    >
                      <div>
                        {/* Compact thumbnail preview preview/holder */}
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-4 relative group/thumb">
                          {p.imageUrl ? (
                            <img
                              src={p.imageUrl}
                              alt={p.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-slate-500 space-y-1 bg-slate-900">
                              <Layers className="w-6 h-6 text-slate-700" />
                              <span className="text-[10px] uppercase font-mono tracking-wider">Empty Image Placeholder</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-slate-950/90 text-[10px] text-emerald-400 font-mono px-2 py-1 rounded border border-emerald-500/20 shadow-lg">CLICK TO VIEW LIVE SYSTEM</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-2">
                            <h3 className="font-display font-semibold text-slate-200">{p.name}</h3>
                            {p.isPrimary && (
                              <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 ml-0.5 rounded text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                                Core
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {p.tech.slice(0, 4).map((t, idx) => (
                            <span key={idx} className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                        <ul className="mt-3.5 space-y-1.5">
                          {p.description.slice(0, 2).map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs text-slate-300 font-light flex items-start gap-1.5 leading-normal">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${solidBgAccent}`}></span>
                              <span className="line-clamp-2">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-[10px] font-mono text-[#00FF66] mt-4 text-right flex items-center justify-end gap-1">
                        <span>Click details</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Spotify Waveform Interactive Hook */}
              <div className={`p-5 rounded-2xl border ${borderAccent} bg-[#0e1628]/40 backdrop-blur-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 mt-6`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center relative cursor-pointer group ${activeMusicPlay ? 'animate-spin' : ''}`}
                    onClick={() => setActiveMusicPlay(!activeMusicPlay)}
                  >
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping opacity-60"></div>
                    <div className="w-10 h-10 bg-slate-800 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Music className={`w-4 h-4 ${activeMusicPlay ? 'text-emerald-400' : 'text-slate-400'}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-xs text-slate-200">
                      Inspired by <span className="text-emerald-400">Spotify Clone</span>
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      {activeMusicPlay ? "Playing South Indian Instrumental & Beats 🎵" : "South Indian Instrumental (Acoustic strings x Lo-Fi)"}
                    </p>
                  </div>
                </div>
                {activeMusicPlay && (
                  <div className="flex items-end gap-1.5 h-6">
                    <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="w-0.5 h-5 bg-emerald-400 rounded-full animate-pulse delay-75"></span>
                    <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-0.5 h-6 bg-emerald-400 rounded-full animate-pulse delay-200"></span>
                  </div>
                )}
              </div>

              {/* Side Stories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-900/20 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Un-Resumed Reality</span>
                  <h3 className="font-display font-semibold text-xs text-slate-300">My Offline Ambitions</h3>
                  <p className="text-xs text-slate-450 font-light">
                    Apart from writing Javascript, I spend my Sundays visiting old books markets across Mangalore to trade educational material, or brewing a fresh batch of spice-laden lemon tea.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/20 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Active Side Quests</span>
                  <div className="space-y-1.5">
                    {state.personality.sideQuests.map((quest, qIdx) => (
                      <div key={qIdx} className="flex items-center gap-2 text-xs text-slate-305 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{quest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==================== 2. MODERN RAIL LAYOUT ==================== */}
          {state.personality.layoutStyle === "modern" && (
            <motion.div
              key="modern"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerVariants}
              custom={1}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Left Column (Stick Bio Panel) */}
              <div className="md:col-span-1 space-y-6">
                <div className="p-5 rounded-2xl bg-[#0c1221] border border-slate-800/80 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 border border-slate-700/30 flex items-center justify-center font-display font-semibold text-xl text-white">
                    SD
                  </div>
                  <div>
                    <h1 className="text-xl font-display font-bold text-slate-200 leading-tight">
                      {state.resume.name}
                    </h1>
                    <p className={`text-xs ${textAccent} font-mono mt-1`}>
                      {state.resume.title}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {state.resume.summary}
                  </p>
                  <div className="border-t border-slate-800/80 pt-3 space-y-2 text-xs font-mono">
                    <span className="text-slate-505 block uppercase text-[9px] tracking-wide">Contact Block</span>
                    <div className="text-slate-350 space-y-1">
                      <span className="block truncate">{state.resume.email}</span>
                      <span className="block">{state.resume.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Developer Persona Stats Card */}
                <div className="p-5 rounded-2xl bg-[#0c1221] border border-slate-800/80 space-y-3">
                  <h3 className="font-display font-semibold text-xs text-slate-300 uppercase tracking-wider">
                    Core Metrics
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-rose-500/5 pb-1">
                      <span className="text-slate-400">Academic Score:</span>
                      <span className="font-mono text-emerald-400 font-semibold">{state.resume.education[0].grade}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-rose-500/5 pb-1">
                      <span className="text-slate-400">PUC Board Score:</span>
                      <span className="font-mono text-slate-205 font-medium">{state.resume.education[1].grade}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Total Code Volume:</span>
                      <span className="font-mono text-slate-300 font-light">4 Active Repos</span>
                    </div>
                  </div>
                </div>

                {/* Profile & Contact Card */}
                {renderProfileAndContactModule()}
              </div>

              {/* Right Columns (Central Content Area) */}
              <div className="md:col-span-2 space-y-6">
                
                {/* Tech Philosophy Banner */}
                <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
                  <span className={`text-[9px] uppercase font-mono tracking-widest ${textAccent}`}>
                    Working Paradigm
                  </span>
                  <h2 className="font-display font-medium text-sm text-slate-205">Ideology</h2>
                  <p className="text-xs text-slate-302 font-light italic leading-relaxed">
                    "{state.linkedIn.philosophy}"
                  </p>
                </div>

                {/* Consolidated Chronological Milestone & Project Timeline */}
                {renderUnifiedTimelineModule()}

                {/* Projects Inventory */}
                <div className="p-5 rounded-2xl bg-[#0c1221] border border-slate-800/80 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <h3 className="font-display font-bold text-xs uppercase tracking-wide text-slate-250">
                        Project Portfolio
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {state.resume.projects.map((p, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedProject(p)}
                        className={`p-4 rounded-xl border bg-slate-900/40 cursor-pointer hover:border-emerald-500/30 hover:translate-y-[-1px] transition-all flex gap-3 items-center`}
                      >
                        {p.imageUrl ? (
                          <div className="w-12 h-12 rounded-lg bg-slate-950 overflow-hidden shrink-0 border border-slate-850">
                            <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-805">
                            <Layers className="w-5 h-5 text-slate-500" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h4 className="font-display font-semibold text-xs text-slate-200 truncate">{p.name}</h4>
                            <ChevronRight className="w-3 h-3 text-slate-500" />
                          </div>
                          <p className="text-[11px] text-slate-400 font-light truncate mt-0.5">
                            {p.description[0]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== 3. BENTO WORKSPACE ==================== */}
          {state.personality.layoutStyle === "bento" && (
            <motion.div
              key="bento"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerVariants}
              custom={1}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {/* Grid block 1: Giant Intro Card */}
              <div className="md:col-span-3 bg-gradient-to-br from-slate-900 to-[#0e1628] p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
                <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-300 w-max px-2.5 py-0.8 rounded-lg text-[10px] font-mono uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  Primary Developer Profile
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-none">
                    {state.resume.name}
                  </h1>
                  <h3 className={`text-sm ${textAccent} font-mono`}>{state.resume.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl font-light">
                    {state.linkedIn.narrativeBio}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800/85 pt-4 text-[10px] text-slate-400 font-mono">
                  <span>Based in Karnataka, IN</span>
                  <span className="italic">"{state.personality.operatingSystem}"</span>
                </div>
              </div>

              {/* Grid block 2: Quick stats (academic) */}
              <div className="md:col-span-1 bg-[#0c1221] p-5 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-4">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono uppercase text-slate-500">Degree CGPA</span>
                    <div className="text-3xl font-display font-bold text-emerald-400 font-mono mt-1">
                      7.5
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">BCA • SDM College</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase text-slate-500">PUC Marks</span>
                    <div className="text-xl font-display font-semibold text-slate-200 mt-0.5">
                      81%
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid block 3: Prime Portfolio Project Modules */}
              <div className="md:col-span-2 bg-[#0c1221] p-5 rounded-3xl border border-slate-800/80 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#00FF55] uppercase font-mono flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    Interactive Elite Core Projects
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-[#00FF55]/10 px-2.5 py-0.8 rounded-full border border-[#00FF55]/15">
                    Live Modules
                  </span>
                </div>
                <div className="space-y-2.5">
                  {state.resume.projects.slice(0, 3).map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() => setSelectedProject(proj)}
                      className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 flex items-center justify-between hover:border-[#00FF66]/30 cursor-pointer transition-all hover:translate-x-1"
                    >
                      <div className="space-y-0.5 min-w-0 pr-2">
                        <span className="font-display font-semibold text-xs text-slate-200 block truncate">{proj.name}</span>
                        <span className="text-[10px] text-slate-400 block truncate max-w-[240px] font-light">{proj.description[0]}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] font-mono text-[#00FF55] bg-[#00FF55]/5 px-2 py-1 rounded border border-[#00FF55]/15 shrink-0">
                        <span>Details</span>
                        <ChevronRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid block 4: Tech Stack Skills list */}
              <div className="md:col-span-2 bg-[#0c1221] p-5 rounded-3xl border border-slate-800/80 space-y-3">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Tech stack elements</span>
                <div className="flex flex-wrap gap-1.5">
                  {state.resume.skills.languages.map((l, lIdx) => (
                    <span key={lIdx} className="text-xs bg-[#111827] text-indigo-300 border border-indigo-500/10 px-2.5 py-1 rounded-lg font-mono">
                      {l}
                    </span>
                  ))}
                  {state.resume.skills.frameworks.map((e, eIdx) => (
                    <span key={eIdx} className="text-xs bg-[#111827] text-emerald-300 border border-emerald-500/10 px-2.5 py-1 rounded-lg font-mono">
                      {e}
                    </span>
                  ))}
                  {state.resume.skills.databases.map((d, dIdx) => (
                    <span key={dIdx} className="text-xs bg-[#111827] text-amber-300 border border-amber-500/10 px-2.5 py-1 rounded-lg font-mono">
                      {d}
                    </span>
                  ))}
                  {state.resume.skills.libraries.slice(0, 2).map((lib, libIdx) => (
                    <span key={libIdx} className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-lg">
                      {lib}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid block 5: Narrative Biography */}
              <div className="md:col-span-2 bg-[#0c1221] p-5 rounded-3xl border border-slate-800/80 space-y-2">
                <span className="text-[10px] text-slate-500 font-mono uppercase">Character Ideology</span>
                <p className="text-xs text-slate-302 font-light leading-relaxed">
                  "{state.linkedIn.philosophy}"
                </p>
              </div>

              {/* Grid block 6: Consolidated Timeline Centerpiece */}
              <div className="md:col-span-4 space-y-3">
                {renderUnifiedTimelineModule()}
              </div>

              {/* Grid block 7: Direct Contact Centerpiece */}
              <div className="md:col-span-4 bg-[#0c1221] p-6 rounded-3xl border border-slate-800">
                <span className="text-[10px] text-[#00FF66] uppercase font-mono block mb-4">Get in Touch directly</span>
                {renderProfileAndContactModule()}
              </div>
            </motion.div>
          )}

          {/* ==================== 4. WARM EDITORIAL LAYOUT ==================== */}
          {state.personality.layoutStyle === "editorial" && (
            <motion.div
              key="editorial"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerVariants}
              custom={1}
              className="space-y-10 max-w-2xl mx-auto py-4"
            >
              {/* Big Text Narrative intro */}
              <div className="space-y-4">
                <span className={`text-[10px] font-mono tracking-widest uppercase ${textAccent}`}>
                  Developer Chronicles
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Applying statistics, modern databases, and clean frontend transitions to create meaningful client products.
                </h1>
                <div className="h-0.5 w-16 bg-emerald-500/40 rounded-full my-6"></div>
                <p className="text-sm text-slate-300 italic leading-relaxed font-light">
                  "Hello, I am {state.resume.name}. I graduated in computing at SDM College, and I treat writing clean components as an editorial process. Here is how I think, build, and deploy software."
                </p>
              </div>

              {/* Core Journey Essay segment */}
              <div className="space-y-4 border-l-2 border-slate-800 pl-6 py-1">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-400">
                  My Core Chronicle
                </h3>
                <p className="text-xs text-slate-320 leading-relaxed font-light">
                  {state.linkedIn.narrativeBio}
                </p>
                <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                  <p className="text-xs text-slate-400 font-light italic leading-relaxed">
                    "{state.linkedIn.philosophy}"
                  </p>
                </div>
              </div>

              {/* Work progressing timeline */}
              {renderUnifiedTimelineModule()}

              {/* Minimal projects lists */}
              <div className="space-y-4 pt-4">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-400 block border-b border-slate-800 pb-2 flex justify-between items-center">
                  <span>Interactive Core Projects &amp; Tech Stack</span>
                  <span className="text-[9px] text-[#00FF55] font-mono normal-case">Click to explore details</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {state.resume.projects.slice(0, 3).map((p, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() => setSelectedProject(p)}
                      className="p-3 bg-slate-900/10 border border-slate-800/40 rounded-xl hover:border-[#00FF66]/20 hover:scale-[1.01] cursor-pointer transition-all space-y-2 group"
                    >
                      <h4 className="font-display font-semibold text-xs text-slate-205 group-hover:text-[#00FF66] flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Bookmark className="w-3.5 h-3.5 text-[#00FF66]" />
                          {p.name}
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light pl-5 line-clamp-2">
                        {p.description[0]}
                      </p>
                      <div className="flex flex-wrap gap-1 pl-5">
                        {p.tech.map((v, i) => (
                          <span key={i} className="text-[9px] text-slate-500 bg-slate-900 border border-slate-800 px-1.5 py-0.2 rounded font-mono">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial Profile & Contact section */}
              <div className="space-y-4 pt-4">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-[#00FF66] block border-b border-slate-805 pb-2">
                  Let's Collaborate &amp; Build Together
                </h3>
                {renderProfileAndContactModule()}
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Portfolio footer with subtle credit */}
      <div className="mt-auto border-t border-slate-900/60 p-6 bg-[#090d16] text-center text-[10px] text-slate-500 font-mono tracking-wider">
        <span>BUILT WITH REACT • TAILWIND • FRAMER MOTION • SAVIN_PORTFOLIO_HUB</span>
      </div>
      <AnimatePresence>
        {selectedProject && renderProjectDetailsModal()}
      </AnimatePresence>
    </div>
  );
}
