import React from "react";
import { processSteps } from "@/constants/process";
import ProcessCard from "./process-card";
import ProcessProgressBar from "./process-progress-bar";

const ProcessTimeline = () => {
  return (
    <div className="relative mb-[var(--sections-gap)] px-[var(--container-padding)]">
      <div className="absolute inset-0 z-10 scale-y-150 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <ProcessProgressBar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {processSteps.map((step, i) => (
          <ProcessCard
            index={i + 1}
            key={step.title}
            title={step.title}
            imgSrc={step.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
