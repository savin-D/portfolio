/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PortfolioState } from "../types";
import { Eye, FileText, Settings, Copy, Check, Download, Sparkles, Plus, Trash2 } from "lucide-react";

interface PRDViewerProps {
  state: PortfolioState;
  onChange: (newState: PortfolioState) => void;
  activeSidebarTab: "prd" | "customizer";
  setActiveSidebarTab: (tab: "prd" | "customizer") => void;
}

export default function PRDViewer({
  state,
  onChange,
  activeSidebarTab,
  setActiveSidebarTab,
}: PRDViewerProps) {
  const [copied, setCopied] = useState(false);
  const [newSideQuest, setNewSideQuest] = useState("");

  const handleCopyMarkdown = () => {
    const md = generatePRDMarkdown(state);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `savin_portfolio_config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const updateField = (section: keyof PortfolioState, key: string, value: any) => {
    const updated = {
      ...state,
      [section]: {
        ...state[section],
        [key]: value,
      },
    };
    onChange(updated);
  };

  const updateNestedField = (
    section: "resume" | "linkedIn" | "github" | "personality",
    nestedSection: string,
    key: string,
    value: any
  ) => {
    const updated = {
      ...state,
      [section]: {
        ...state[section],
        [nestedSection]: {
          ...(state[section] as any)[nestedSection],
          [key]: value,
        },
      },
    };
    onChange(updated);
  };

  const addSideQuest = () => {
    if (!newSideQuest.trim()) return;
    const quests = [...state.personality.sideQuests, newSideQuest.trim()];
    updateField("personality", "sideQuests", quests);
    setNewSideQuest("");
  };

  const removeSideQuest = (index: number) => {
    const quests = state.personality.sideQuests.filter((_, i) => i !== index);
    updateField("personality", "sideQuests", quests);
  };

  return (
    <div className="flex flex-col h-full bg-[#1e293b] text-slate-100 border-l border-slate-700/50">
      {/* Sidebar Tabs */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-400" />
          <span className="font-display font-bold text-sm tracking-wide uppercase text-slate-200">
            PRD &amp; Engine Config
          </span>
        </div>
        <div className="flex bg-[#1e293b] p-1 rounded-lg border border-slate-700/50">
          <button
            onClick={() => setActiveSidebarTab("prd")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeSidebarTab === "prd"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Active PRD
          </button>
          <button
            onClick={() => setActiveSidebarTab("customizer")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeSidebarTab === "customizer"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            Edit Story
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {activeSidebarTab === "prd" ? (
          <div className="space-y-6 font-sans text-xs leading-relaxed text-slate-300">
            {/* PRD Header Actions */}
            <div className="flex items-center justify-between bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/50">
              <div>
                <h3 className="font-display font-semibold text-slate-200 text-sm">
                  Functional Website PRD
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Combine Resume, GitHub, &amp; LinkedIn details
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyMarkdown}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 active:bg-slate-550 text-slate-200 rounded-md transition-all text-[11px]"
                  title="Copy PRD Markdown"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy MD</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleDownloadJSON}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 rounded-md transition-all text-[11px]"
                  title="Export Config JSON"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Config JSON</span>
                </button>
              </div>
            </div>

            {/* Living Matrix Metadata */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="font-display font-semibold text-xs tracking-wide text-slate-200 border-b border-slate-800 pb-1.5 uppercase">
                Document Metadata &amp; Engine Status
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px]">
                <div>
                  <span className="text-slate-500">Document Status:</span>{" "}
                  <span className="text-emerald-400 font-medium font-mono">LIVING_DRAFT (v1.0)</span>
                </div>
                <div>
                  <span className="text-slate-500">Target System:</span>{" "}
                  <span className="text-white font-mono">React + Vite + Tailwind</span>
                </div>
                <div>
                  <span className="text-slate-550">Active Layout Model:</span>{" "}
                  <span className="text-slate-300 font-mono capitalize">{state.personality.layoutStyle}</span>
                </div>
                <div>
                  <span className="text-slate-550">Active Accent:</span>{" "}
                  <span className="text-slate-300 font-mono capitalize text-emerald-400">{state.personality.themeAccent}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-550">Target Persona:</span>{" "}
                  <span className="text-slate-300 italic">"The {state.personality.archetype}"</span>
                </div>
              </div>
            </div>

            {/* Section 1: Overview */}
            <div className="space-y-2">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-emerald-400 pl-2">
                1. Product Overview &amp; Vision
              </h4>
              <p>
                The goal is to build an <strong>authentic, high-hierarchy single-page portfolio</strong> for <strong>{state.resume.name}</strong>. Most developer templates look sterile or AI-generated. This product is designed around <strong>human-first developer criteria</strong>, displaying clear proof of build competency alongside meaningful elements that reveal the candidate's actual personality, musical vibes, and working style.
              </p>
            </div>

            {/* Section 2: Data Sources Integration */}
            <div className="space-y-2">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-emerald-400 pl-2">
                2. Information Matrix &amp; Source Mapping
              </h4>
              <p className="text-slate-400">
                To prevent cognitive overload while maintaining factual depth, the site integrates three different professional data layers:
              </p>
              <div className="overflow-hidden border border-slate-800 rounded-lg">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="bg-slate-900 text-slate-400 uppercase tracking-wider text-[10px] font-mono">
                      <th className="px-3 py-2 border-b border-slate-800">Source Channel</th>
                      <th className="px-3 py-2 border-b border-slate-800">Assigned Structural Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="px-3 py-2 font-semibold text-slate-200">📄 Resume / CV</td>
                      <td className="px-3 py-2">Hard progression stats: SDM Degree college BCA (7.5 CGPA), Codelab Systems internship timeline, skills segmentation.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-slate-200">🐙 GitHub Profile</td>
                      <td className="px-3 py-2">Proof of work: Repository layout (Spotify Clone, BookExchange, Resume Analyzer, HungryHub), languages array.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-slate-200">💼 LinkedIn Context</td>
                      <td className="px-3 py-2">The Narrative Arc: Custom story summary (logical BCA transition), core coding beliefs, human side quests.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Tech Stack & Architecture */}
            <div className="space-y-2 border-t border-slate-800 pt-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-emerald-400 pl-2">
                3. High-Fidelity UI Features &amp; Motion Map
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                <li>
                  <strong className="text-slate-200">Typography:</strong> Headings in <code>Space Grotesk</code> with spacious layout tracking. Code widgets in <code>JetBrains Mono</code>.
                </li>
                <li>
                  <strong className="text-slate-200">Adaptive Layouts:</strong> Full mobile-responsive layout. On large displays, it behaves as a fluid, modular grid with side-drawers.
                </li>
                <li>
                  <strong className="text-slate-200">Interactive Micro-States:</strong> Hover transitions, interactive project filter buttons, live personality quiz feedback metrics on mouse click.
                </li>
                <li>
                  <strong className="text-slate-200">Theme Contrast:</strong> Low-brightness dark backdrop with bright color accents to preserve eye safety during continuous reading.
                </li>
              </ul>
            </div>

            {/* Section 4: Functional Requirements */}
            <div className="space-y-2 border-t border-slate-800 pt-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-emerald-400 pl-2">
                4. Functional &amp; Section Checklist
              </h4>
              <div className="space-y-1 text-slate-300">
                <p><strong>[Section A] Header &amp; Persona Intro:</strong></p>
                <p className="pl-3 text-slate-400">Renders the name, active developer archetype title, contact coordinates, and an interactive "Operating System" chip readout indicating current working parameters.</p>
                
                <p><strong>[Section B] Experience &amp; Academic Timeline:</strong></p>
                <p className="pl-3 text-slate-400">Timeline layout linking SDM Degree College BCA, SDM PU College pre-university, and Codelab Systems internship. Clear highlighting of the 7.5 CGPA and 81% marks.</p>

                <p><strong>[Section C] Custom GitHub &amp; Projects Dashboard:</strong></p>
                <p className="pl-3 text-slate-400">Dynamic layout rendering Spotify Clone, BookExchange (student textbooks marketplace), Resume Analyzer, or recipe planner based on active filter choices.</p>

                <p><strong>[Section D] Human Perspective (The Narrative &amp; Side Quests):</strong></p>
                <p className="pl-3 text-slate-400">Personal highlights section visualizing passions (musical instrumentals behind Spotify clone, pantry cook recipes behind HungryHub) and current obsessions.</p>
              </div>
            </div>

            {/* Section 5: Future Backlog */}
            <div className="space-y-2 border-t border-slate-800 pt-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 border-l-2 border-emerald-400 pl-2">
                5. Product Scope &amp; Backlog
              </h4>
              <p>
                Future releases will integrate OAuth login hooks with the official GitHub API to fetch real-time public activity graphs and sync user star events dynamically.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-5 font-sans text-xs">
            {/* Customizer Panel */}
            <div className="bg-slate-800/40 p-3 rounded-lg text-[11px] text-slate-300 border border-slate-700/30">
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Customize Narrative Values
              </span>
              <p className="mt-1 text-slate-400">
                Tweak standard fields to write your custom human character, which will instantly reflect in the interactive live preview.
              </p>
            </div>

            {/* Basic Info */}
            <div className="space-y-3.5">
              <h3 className="font-display font-semibold text-slate-200 text-xs border-b border-slate-800 pb-1.5 uppercase tracking-wide">
                1. General Representation
              </h3>
              <div>
                <label className="block text-slate-400 mb-1">Developer Name</label>
                <input
                  type="text"
                  value={state.resume.name}
                  onChange={(e) => updateField("resume", "name", e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={state.resume.title}
                  onChange={(e) => updateField("resume", "title", e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                />
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="space-y-3.5 border-t border-slate-800 pt-4">
              <h3 className="font-display font-semibold text-slate-200 text-xs uppercase tracking-wide">
                2. Visual Archetype Specs
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Persona Model</label>
                  <select
                    value={state.personality.archetype}
                    onChange={(e) => updateField("personality", "archetype", e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                  >
                    <option value="Craftsperson">The Craftsperson</option>
                    <option value="Architect">The Architect</option>
                    <option value="Creator">The Creator</option>
                    <option value="Analyst">The Analyst</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Design Grid</label>
                  <select
                    value={state.personality.layoutStyle}
                    onChange={(e) => updateField("personality", "layoutStyle", e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                  >
                    <option value="minimal">Minimalist Canvas</option>
                    <option value="modern">Modern Tech Rail</option>
                    <option value="bento">Bento Workspace</option>
                    <option value="editorial">Warm Editorial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Theme Accent</label>
                  <select
                    value={state.personality.themeAccent}
                    onChange={(e) => updateField("personality", "themeAccent", e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                  >
                    <option value="emerald">Emerald green</option>
                    <option value="amber">Amber gold</option>
                    <option value="slate">Sleek slate</option>
                    <option value="rose">Coral rose</option>
                    <option value="indigo">Tech indigo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">System Load Parameter</label>
                  <input
                    type="text"
                    value={state.personality.operatingSystem}
                    onChange={(e) => updateField("personality", "operatingSystem", e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                    placeholder="Hot Tea + Lo-Fi Beats"
                  />
                </div>
              </div>
            </div>

            {/* GitHub Repo Metrics Stats */}
            <div className="space-y-3.5 border-t border-slate-800 pt-4">
              <h3 className="font-display font-semibold text-slate-200 text-xs uppercase tracking-wide">
                3. GitHub Repo Metrics &amp; Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Total Stars</label>
                  <input
                    type="number"
                    value={state.github.totalStars}
                    onChange={(e) => onChange({
                      ...state,
                      github: { ...state.github, totalStars: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Total Forks</label>
                  <input
                    type="number"
                    value={state.github.totalForks}
                    onChange={(e) => onChange({
                      ...state,
                      github: { ...state.github, totalForks: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Pull Requests</label>
                  <input
                    type="number"
                    value={state.github.pullRequestsCount}
                    onChange={(e) => onChange({
                      ...state,
                      github: { ...state.github, pullRequestsCount: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Issues Resolved</label>
                  <input
                    type="number"
                    value={state.github.issuesResolved}
                    onChange={(e) => onChange({
                      ...state,
                      github: { ...state.github, issuesResolved: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Language breakdown values slider */}
              <div className="space-y-2 mt-3 bg-[#0f172a]/40 p-3 rounded-lg border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Repository Language Tuning</span>
                <div className="grid grid-cols-2 gap-2">
                  {state.github.languageBreakdown.map((lang, idx) => (
                    <div key={idx} className="space-y-1">
                      <label className="flex items-center justify-between text-[11px] text-slate-405">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: lang.color }} />
                          {lang.name}
                        </span>
                        <span className="font-mono text-slate-300 font-medium">{lang.percentage}%</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={lang.percentage}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          const newBreakdown = state.github.languageBreakdown.map((item, subIdx) => 
                            subIdx === idx ? { ...item, percentage: val } : item
                          );
                          onChange({
                            ...state,
                            github: { ...state.github, languageBreakdown: newBreakdown }
                          });
                        }}
                        className="w-full accent-emerald-500 h-1 rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LinkedIn Narrative Story focus */}
            <div className="space-y-3.5 border-t border-slate-800 pt-4">
              <h3 className="font-display font-semibold text-slate-200 text-xs uppercase tracking-wide">
                3. The Human Narrative (LinkedIn context)
              </h3>
              <div>
                <label className="block text-slate-400 mb-1">Bio / Journey Summary</label>
                <textarea
                  rows={4}
                  value={state.linkedIn.narrativeBio}
                  onChange={(e) => updateField("linkedIn", "narrativeBio", e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Tech Philosophy (What drives you?)</label>
                <textarea
                  rows={3}
                  value={state.linkedIn.philosophy}
                  onChange={(e) => updateField("linkedIn", "philosophy", e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Current Hyper-focus</label>
                <input
                  type="text"
                  value={state.personality.currentObession}
                  onChange={(e) => updateField("personality", "currentObession", e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                />
              </div>
            </div>

            {/* Side Quests */}
            <div className="space-y-3 border-t border-slate-800 pt-4">
              <h3 className="font-display font-semibold text-slate-200 text-xs uppercase tracking-wide">
                4. Side Quests &amp; Personalities
              </h3>
              <div className="space-y-2">
                {state.personality.sideQuests.map((quest, idx) => (
                  <div key={idx} className="flex gap-2 items-center bg-[#0f172a]/80 p-2 rounded-lg border border-slate-800">
                    <span className="flex-1 text-slate-300 text-[11px] truncate">{quest}</span>
                    <button
                      onClick={() => removeSideQuest(idx)}
                      className="text-slate-550 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                <div className="flex gap-1.5 mt-2">
                  <input
                    type="text"
                    value={newSideQuest}
                    onChange={(e) => setNewSideQuest(e.target.value)}
                    className="flex-1 bg-[#0f172a] border border-slate-700/50 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-500 text-xs"
                    placeholder="New side quest..."
                  />
                  <button
                    onClick={addSideQuest}
                    className="flex items-center justify-center p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function generatePRDMarkdown(s: PortfolioState): string {
  return `# Product Requirements Document (PRD)

## Project Code name: SAVIN_PORTFOLIO_HUB
**Target Build:** Single Page Website with Rich Persona Toggle
**Owner/Developer:** ${s.resume.name}
**Contact:** ${s.resume.email} | ${s.resume.phone}
**Status:** Living Document, Sync'ed with Live Layout Configuration

---

## 1. Product Goals & Objectives
The overarching goal is to craft a personal portfolio developer channel that doesn't feel automated or templated. Most portfolio pages fail to express the human spark behind the code, focusing purely on cold stats. This document details the exact requirements to merge **factual progression (Resume)**, **proof of build (GitHub)**, and **expressive human narrative (LinkedIn)**.

### Target Personas:
- **Lead Engineers looking for technical rigor:** Who require pristine project descriptions, clean interface architecture, and direct links to public sources.
- **Founders and Product Managers looking for narrative fit:** Who require alignment on product philosophy, prompt engineering understanding, and genuine builder interest.

---

## 2. Integrated Data Architecture Mapping

### Layer A: Formal Structural Engine (Resume)
Factual credentials provide the baseline safety and structural integrity for the browser content stream:
- **Primary Node:** Bachelor of Computer Applications (BCA) at SDM Degree College, Ujire (CGPA of ${s.resume.education[0].grade || "7.5"}).
- **Supporting Node:** Pre-University high-school baseline from SDM PU College at 81% (basic mathematics, accounting systems, and computer science basics).
- **Core Progression Node:** Web Developer Intern at Codelab Systems (Deploying React state trackers, express middleware APIs).

### Layer B: Proof-of-Work Verification Engine (GitHub)
- **Primary Pinned Showcase:** Complete responsive frontend clients (e.g. ${s.resume.projects[0].name}) alongside MERN-stack collaborative platforms (e.g. ${s.resume.projects[1].name}).
- **Skillset Validation Matrix:** Shows explicit technical categorizations of databases (MongoDB, PostgreSQL), libraries (Mongoose, Tailwind), and standard languages (JS, Python, SQL, C).
- **Core Repository Statistics:**
  - **Total Repository Stars:** ${s.github.totalStars}
  - **Repository Forks:** ${s.github.totalForks}
  - **Completed Pull Requests:** ${s.github.pullRequestsCount}
  - **Issues Resolved:** ${s.github.issuesResolved}
  - **Repository Language Profile Breakdown:** ${s.github.languageBreakdown.map((l) => `${l.name}: ${l.percentage}%`).join(", ")}

### Layer C: Authenticity & Context Narrative (LinkedIn)
- **Dynamic Human Narrative:** ${s.linkedIn.narrativeBio}
- **Developer Ideology statement:** ${s.linkedIn.philosophy}
- **The "Un-Resumed" Character Attributes:** side stories including ${s.personality.sideQuests.join(", ")}.

---

## 3. Scope of Interactive Customizations

### Layout Archetype Modules
1. **The Minimalist Layout:** Maximum negative spacing, elegant Inter text pairs, sleek gray grids, and subtle fade-animations. Ideal for pure modern readability.
2. **The Bento Layout:** Grid container panels displaying cards of asymmetric size, organizing visual data rapidly. Highlight-focused.
3. **The Modern Tech Rail Layout:** Styled sidebar layouts, active terminal logs, highly structured parameters, and rigid boundaries.
4. **The Warm Editorial Layout:** Spacious, slightly larger typography, cozy margins, organic colors, and focus on textual philosophy first.

---

## 4. Complete Design Checklist

### Visual Hierarchy
- [x] Primary Heading Typography: Space Grotesk.
- [x] Body copy: Inter.
- [x] Mono-spaced accents & technical data: JetBrains Mono.
- [x] Maximum touch target width: 44px on mobile configurations.
- [x] Accessible color contrast matching high standards.

### Micro-Transitions
- [x] Cards must hover-up and glow with chosen theme accent colors.
- [x] Section loads have staggered offset entries using Framer Motion.
- [x] Direct responsive view ports with full fluid sizing.
`;
}
