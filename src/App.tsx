/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { initialPortfolioState } from "./data";
import { PortfolioState } from "./types";
import PortfolioPreview from "./components/PortfolioPreview";

const portfolioImageUrls = Object.values(
  (import.meta as ImportMeta & {
    glob: (pattern: string, options: { eager: boolean; import: string; query: string }) => Record<string, string>;
  }).glob("./assets/images/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
    query: "?url",
  })
) as string[];

function PortfolioLoader({ visible }: { visible: boolean }) {
  const greetings = [
    { language: "English", text: "Hello" },
    { language: "Tulu", text: "Namaskara" },
    { language: "Kannada", text: "ನಮಸ್ಕಾರ" },
    { language: "Hindi", text: "नमस्ते" },
    { language: "Tamil", text: "வணக்கம்" },
    { language: "Telugu", text: "నమస్కారం" },
    { language: "Malayalam", text: "നമസ്കാരം" },
  ];
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greeting = greetings[greetingIndex];

  useEffect(() => {
    if (!visible) return;

    const greetingTimer = window.setInterval(() => {
      setGreetingIndex((currentIndex) => (currentIndex + 1) % greetings.length);
    }, 520);

    return () => window.clearInterval(greetingTimer);
  }, [visible]);

  return (
    <div className={`portfolio-loader ${visible ? "portfolio-loader--visible" : "portfolio-loader--exiting"}`} aria-hidden={!visible}>
      <div className="portfolio-loader__grid" />
      <div className="portfolio-loader__glow portfolio-loader__glow--left" />
      <div className="portfolio-loader__glow portfolio-loader__glow--right" />

      <div className="portfolio-loader__content">
        <div className="portfolio-loader__sun" aria-hidden="true">
          <span className="portfolio-loader__sun-rays">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} />
            ))}
          </span>
          <span className="portfolio-loader__sun-face">
            <span className="portfolio-loader__sun-smile" />
          </span>
        </div>
        <div className="portfolio-loader__brand">&lt;Savin/&gt;</div>
        <div className="portfolio-loader__greeting" key={greeting.language}>
          {greeting.text}
        </div>
        <p className="portfolio-loader__language">{greeting.language}</p>
        <div className="portfolio-loader__language-list" aria-label="Greeting languages">
          {greetings.map((item, index) => (
            <span key={item.language} className={index === greetingIndex ? "is-active" : ""}>
              {item.language}
            </span>
          ))}
        </div>
        <p className="portfolio-loader__meta">FULL-STACK DEVELOPER <span>/</span> PRODUCT BUILDER</p>
      </div>
    </div>
  );
}

export default function App() {
  const [portfolioState] = useState<PortfolioState>(initialPortfolioState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.getElementById("boot-screen")?.remove();

    const minimumDisplay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 2000);
    });
    const allImages = Promise.all(
      portfolioImageUrls.map((imageUrl) => new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = imageUrl;
      }))
    ).then(() => undefined);
    const criticalFonts = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minimumDisplay, allImages, criticalFonts]).then(() => setIsLoading(false));
  }, []);

  return (
    <div className="w-screen h-screen bg-[#0b0f19] text-slate-100 overflow-y-auto font-sans">
      <PortfolioPreview state={portfolioState} />
      <PortfolioLoader visible={isLoading} />
    </div>
  );
}
