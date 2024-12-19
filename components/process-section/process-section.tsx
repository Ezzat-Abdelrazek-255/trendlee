import React from "react";
import SectionTitle from "../ui/section-title";
import Lamp from "../ui/lamp";
import ProcessTimeline from "./process-timeline";

const ProcessSection = () => {
  return (
    <section className="relative min-h-screen">
      <SectionTitle>Our 6 Steps Process</SectionTitle>
      <Lamp />
      <ProcessTimeline />
    </section>
  );
};

export default ProcessSection;
