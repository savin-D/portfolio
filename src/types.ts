/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  education: Array<{
    institution: string;
    location: string;
    degree: string;
    duration: string;
    grade?: string;
    details?: string[];
  }>;
  skills: {
    languages: string[];
    frameworks: string[];
    libraries: string[];
    databases: string[];
    tools: string[];
    additional: string[];
  };
  experience: Array<{
    role: string;
    company: string;
    location: string;
    duration: string;
    highlights: string[];
  }>;
  projects: Array<{
    name: string;
    tech: string[];
    description: string[];
    githubUrl?: string;
    demoUrl?: string;
    isPrimary?: boolean;
    completionDate?: string;
    imageUrl?: string;
  }>;
}

export interface LinkedInStory {
  narrativeBio: string;
  philosophy: string;
  workStyle: string;
  passionsOutsideWork: string[];
}

export interface GitHubData {
  username: string;
  pinnedRepos: Array<{
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }>;
  contributionsCount: number;
  commitStreak: number;
  totalStars: number;
  totalForks: number;
  pullRequestsCount: number;
  issuesResolved: number;
  languageBreakdown: Array<{
    name: string;
    percentage: number;
    color: string;
  }>;
}

export interface PersonalityTraits {
  archetype: 'Architect' | 'Craftsperson' | 'Creator' | 'Analyst';
  themeAccent: 'emerald' | 'amber' | 'slate' | 'rose' | 'indigo';
  layoutStyle: 'minimal' | 'modern' | 'bento' | 'editorial';
  currentObession: string;
  operatingSystem: string; // e.g. "Tea + Dark Mode + Lo-Fi Beats"
  sideQuests: string[];
}

export interface PortfolioState {
  resume: ResumeData;
  linkedIn: LinkedInStory;
  github: GitHubData;
  personality: PersonalityTraits;
}
