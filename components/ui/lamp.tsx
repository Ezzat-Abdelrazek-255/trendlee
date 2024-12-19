"use client";
import React, { useRef } from "react";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Lamp = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    function() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          defaults: {
            ease: "power1.inOut",
            duration: 0.8,
          },
        })
        .to(
          ".lamp",
          {
            width: "28rem",
          },
          "<",
        )
        .to(".light", {
          width: "6rem",
        });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-hidden flex min-h-[40vh] w-full flex-col items-center justify-center rounded-md bg-black",
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 translate-y-[5rem] scale-y-125 items-center justify-center">
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="lamp bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[15rem] overflow-visible from-primary via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="lamp bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[15rem] from-transparent via-transparent to-primary text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="lamp absolute inset-auto z-50 h-36 w-[15rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"></div>
        <div className="light absolute inset-auto z-30 h-36 w-[1rem] -translate-y-[6rem] rounded-full bg-primary-light blur-2xl"></div>
        <div className="lamp absolute inset-auto z-50 h-0.5 w-[15rem] -translate-y-[7rem] bg-primary-light"></div>

        <div className="absolute inset-auto z-40 h-[18rem] w-full -translate-y-[16rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-[40rem] flex-col items-center px-5"></div>
    </div>
  );
};

export default Lamp;
