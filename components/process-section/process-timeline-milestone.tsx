"use client";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type ProcessTimelineMilestoneProps = {
  index: number;
};

const ProcessTimelineMilestone = ({ index }: ProcessTimelineMilestoneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    function() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top+=60",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          defaults: {
            ease: "power.in",
            duration: 0.6,
          },
        })
        .to(containerRef.current, {
          border: `1px solid ${gsap.getProperty(".circle", "backgroundColor")}`,
        })
        .to(
          ".circle",
          {
            scale: 0.8,
          },
          "<",
        )
        .to(
          ".circle-blur",
          {
            scale: 1,
          },
          "<",
        );
    },
    {
      scope: containerRef,
    },
  );
  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky top-0 aspect-square w-[5rem] rounded-full bg-primary-dark",
        index % 2 !== 0 && "md:order-last",
      )}
    >
      <div className="rounded-inherit circle-blur absolute inset-0 h-full w-full scale-0 bg-primary/50 blur-sm"></div>
      <div className="rounded-inherit circle grid h-full w-full scale-0 place-content-center bg-primary font-display text-[3.6rem] font-medium leading-[85%]">
        <span className="mt-[8px] inline-block">{index}</span>
      </div>
    </div>
  );
};

export default ProcessTimelineMilestone;
