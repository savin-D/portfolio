/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { initialPortfolioState } from "./data";
import { PortfolioState } from "./types";
import PortfolioPreview from "./components/PortfolioPreview";

export default function App() {
  const [portfolioState] = useState<PortfolioState>(initialPortfolioState);

  return (
    <div className="w-screen h-screen bg-[#0b0f19] text-slate-100 overflow-y-auto font-sans">
      <PortfolioPreview state={portfolioState} />
    </div>
  );
}
