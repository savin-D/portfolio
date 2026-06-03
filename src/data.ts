/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioState } from "./types";

export const initialPortfolioState: PortfolioState = {
  resume: {
    name: "Savin D",
    title: "Full-Stack Developer & Product Builder",
    phone: "+91 9741058171",
    email: "savinkulal@outlook.com",
    linkedin: "linkedin.com/in/savin-kulal",
    github: "github.com/savin-D",
    summary: "I am a developer who loves building things that are simple, helpful, and satisfying to use. I enjoy writing clean, readable code and thinking about how to build products that make a real difference in people's everyday lives.",
    education: [
      {
        institution: "SDM Degree College, Ujire",
        location: "Ujire, Karnataka",
        degree: "Bachelor of Computer Applications (BCA)",
        duration: "July 2023 - April 2026",
        grade: "7.5 CGPA",
        details: [
          "Focusing on the fundamentals: Data Structures, Operating Systems, Computer Networks, and Database design."
        ]
      },
      {
        institution: "SDM PU College, Ujire",
        location: "Ujire, Karnataka",
        degree: "Pre-University College (BAEC)",
        duration: "Jun 2021 - March 2023",
        grade: "81%",
        details: []
      }
    ],
    skills: {
      languages: ["JavaScript", "Python", "C", "HTML/CSS", "SQL"],
      frameworks: ["React", "Express"],
      libraries: ["Mongoose", "Tailwind CSS", "Material-UI"],
      databases: ["PostgreSQL", "MongoDB"],
      tools: ["Git", "VS Code"],
      additional: ["Prompt Engineering", "NLP Basics", "RESTful APIs"]
    },
    experience: [
      {
        role: "Web Dev Intern",
        company: "Codelab Systems",
        location: "Mangalore, Karnataka",
        duration: "Dec 2025 - Jan 2026",
        highlights: [
          "Spent an exciting month learning full-stack web development in a fast-paced environment.",
          "Collaborated on building mock views and handling client state effectively using React, Node, and Express.",
          "Designed a responsive tracker that helps users manage personal expenses and events in real-time."
        ]
      }
    ],
    projects: [
      {
        name: "Spotify Clone",
        tech: ["HTML", "CSS", "JavaScript", "Web Audio API", "Local Storage"],
        description: [
          "I wanted to see how far I could go using pure, vanilla JavaScript without any frameworks. I built a fully responsive web audio player from scratch that loads and plays tracks smoothly, lets you build custom playlists, and caches everything locally so you never lose your music feed."
        ],
        githubUrl: "https://github.com/savin-D/spotify-clone",
        isPrimary: true,
        completionDate: "Oct 2025",
        imageUrl: new URL("./assets/images/spotify_clone_preview_1780407385375.png", import.meta.url).href
      },
      {
        name: "BookExchange",
        tech: ["MERN Stack", "React.js", "JWT Auth", "ExpressJS"],
        description: [
          "I built this platform because students always struggle to buy, sell, or trade academic textbooks with each other. It's a clean and safe peer-to-peer marketplace with secure logins, custom book categories, and real-time listings to help peers connect and save money."
        ],
        githubUrl: "https://github.com/savin-D/book-exchange",
        isPrimary: true,
        completionDate: "Dec 2025",
        imageUrl: new URL("./assets/images/book_exchange_preview_1780407405179.png", import.meta.url).href
      },
      {
        name: "Resume Analyzer",
        tech: ["React.js", "JavaScript", "NLP Matching"],
        description: [
          "I wanted to take the guesswork out of job applications, so I built a website that checks your resume draft against any target job opening. It parses text, evaluates key terms, and gives you instant, practical advice on what skills or keywords you might want to add to stand out."
        ],
        githubUrl: "https://github.com/savin-D/resume-analyzer",
        isPrimary: false,
        completionDate: "Jan 2026",
        imageUrl: new URL("./assets/images/resume_analyzer_preview_1780407422697.png", import.meta.url).href
      },
      {
        name: "HungryHub",
        tech: ["MERN Stack", "OpenAI API", "Tailwind CSS"],
        description: [
          "A social recipe board inspired by my own late-night pantry-raids. It helps you share favorite family dishes, and features an intelligent cooking helper that can suggest step-by-step recipes based on whichever leftover ingredients you already have in your kitchen."
        ],
        githubUrl: "https://github.com/savin-D/hungry-hub",
        isPrimary: false,
        completionDate: "Feb 2026",
        imageUrl: new URL("./assets/images/hungry_hub_preview_1780407440741.png", import.meta.url).href
      }
    ]
  },
  linkedIn: {
    narrativeBio: "I find coding to be the bridge between solving logical math problems and building objects that people actually interact with. With a background starting in statistics, economics, and computing during high school (PUC BAEC), I loved seeing how data shapes decisions. In college, that converted into creating practical client-side apps. My goal is to build simple, highly expressive software that makes everyday life easier.",
    philosophy: "I believe software shouldn't feel mechanical. It should have a pulse. When a screen loads, it shouldn't just blink into existence — it should ease in. When a database updates, the client should feel the transition. The details matter because they respect the human who sits on the other side of the screen.",
    workStyle: "Async-focused, structured coder. I document my experiments and enjoy using smart prompt-engineering frameworks to quickly wire up architecture, so I can spend my time refining performance, UI design, and user-facing workflows.",
    passionsOutsideWork: [
      "Listening to South Indian acoustic instrumentals & progressive lo-fi beats (which inspired my Spotify clone!)",
      "Pantry-raiding cooking experiments (the genesis of HungryHub)",
      "Exchanging regional books, non-fiction reads, and studying cognitive behaviors"
    ]
  },
  github: {
    username: "savin-D",
    pinnedRepos: [
      { name: "book-exchange", description: "MERN textbook marketplace bridging senior and junior student cohorts.", language: "TypeScript", stars: 12, forks: 4, url: "https://github.com/savin-D/book-exchange" },
      { name: "spotify-clone", description: "Fully responsive vanilla audio client built directly with browser Web Audio APIs.", language: "JavaScript", stars: 18, forks: 2, url: "https://github.com/savin-D/spotify-clone" },
      { name: "homework-nlp", description: "Basic natural language processing scripts for textual analysis and similarity indexes.", language: "Python", stars: 6, forks: 1, url: "https://github.com/savin-D/homework-nlp" }
    ],
    contributionsCount: 384,
    commitStreak: 12,
    totalStars: 36,
    totalForks: 7,
    pullRequestsCount: 48,
    issuesResolved: 22,
    languageBreakdown: [
      { name: "JavaScript", percentage: 45, color: "#f1e05a" },
      { name: "TypeScript", percentage: 30, color: "#3178c6" },
      { name: "Python", percentage: 15, color: "#3572A5" },
      { name: "HTML & CSS", percentage: 10, color: "#e34c26" }
    ]
  },
  personality: {
    archetype: "Craftsperson",
    themeAccent: "emerald",
    layoutStyle: "minimal",
    currentObession: "Re-indexing high-fidelity playback rates and learning micro-interactions in Framer Motion.",
    operatingSystem: "VS Code + Tailwind CSS + Hot Lemon Tea + Synthwave Tracks",
    sideQuests: [
      "Optimizing resumes to pass strict local parser checks.",
      "Gathering physical second-hand technical books around Mangalore libraries.",
      "Writing prompts to generate reliable full-stack boilerplate structures."
    ]
  }
};
