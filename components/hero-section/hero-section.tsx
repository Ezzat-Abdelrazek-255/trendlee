import React from "react";
import MainLockup from "./main-lockup";
import Gallery from "./gallery";

const HeroSection = () => {
  return (
    <section className="relative z-0 grid min-h-screen place-content-center px-[var(--container-padding)]">
      <MainLockup />
      <Gallery />
    </section>
  );
};

export default HeroSection;
