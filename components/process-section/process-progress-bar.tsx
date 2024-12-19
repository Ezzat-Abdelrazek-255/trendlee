"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProcessProgressBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    function() {
      gsap.to(".progress-bar", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play pause resume reverse",
        },
        height: "10rem",
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="absolute left-[calc(var(--container-padding)+2.5rem)] z-hidden h-full w-[2px] -translate-x-1/2 rounded-full bg-primary-dark md:left-1/2"
    >
      <div className="progress-bar rounded-inherit sticky inset-0 h-0 origin-top bg-primary">
        <div className="rounded-inherit absolute inset-0 scale-x-125 bg-primary blur-[4px]"></div>
      </div>
    </div>
  );
};

export default ProcessProgressBar;
