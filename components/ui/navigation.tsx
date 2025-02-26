"use client";

import { navItems } from "@/constants";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollToLink from "./scroll-to-link";

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    function() {
      const ease = "power1.out";
      ScrollTrigger.addEventListener("scrollStart", function() {
        gsap.to("nav", {
          opacity: 0,
          y: "-100%",
          ease,
        });
      });
      ScrollTrigger.addEventListener("scrollEnd", function() {
        gsap.to("nav", {
          opacity: 1,
          y: "0",
          ease,
        });
      });
    },
    { scope: containerRef },
  );
  return (
    <nav className="hidden md:block">
      <ul className="relative flex items-center justify-between gap-[3.2rem] rounded-full border-2 border-primary bg-primary/50 p-[3.2rem] text-[1.6rem] uppercase leading-[85%] backdrop-blur-sm after:absolute after:inset-0 after:z-hidden after:bg-primary/25 after:blur-[2.4rem] after:content-['']">
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <ScrollToLink
              href={navItem.href}
            >{`${navItem.label}`}</ScrollToLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
