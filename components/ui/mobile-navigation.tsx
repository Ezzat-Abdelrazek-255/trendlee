"use client";

import { navItems } from "@/constants";
import { cn } from "@/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import SplitType from "split-type";
import Button from "./button";

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const openNavTimeline = useRef(
    gsap.timeline({
      paused: true,
      defaults: {
        ease: "power2.out",
      },
    }),
  );
  const closeNavTimeline = useRef(
    gsap.timeline({
      paused: true,
      defaults: {
        ease: "power.out",
      },
    }),
  );

  useGSAP(
    function() {
      const linksArray = gsap.utils.toArray<HTMLAnchorElement>(".mobile-nav a");

      openNavTimeline.current
        .to(
          ".nav-wrapper",
          {
            autoAlpha: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "<",
        )
        .to(
          ".first-bar",
          {
            top: "50%",
            rotate: "45deg",
          },
          "<",
        )
        .to(
          ".second-bar",
          {
            scaleX: "0",
          },
          "<",
        )
        .to(
          ".third-bar",
          {
            top: "50%",
            rotate: "-45deg",
          },
          "<",
        )
        .to(
          ".contact-btn",
          {
            opacity: 1,
            duration: 2,
          },
          "<",
        );

      closeNavTimeline.current
        .to(".nav-wrapper", {
          opacity: 0,
          autoAlpha: 0,
          y: "-200%",
          duration: 0.8,
        })
        .to(
          ".first-bar",
          {
            top: "68%",
            rotate: "0deg",
          },
          "<",
        )
        .to(
          ".second-bar",
          {
            scaleX: "1",
          },
          "<",
        )
        .to(
          ".third-bar",
          {
            top: "32%",
            rotate: "0deg",
          },
          "<",
        )
        .to(
          ".contact-btn",
          {
            opacity: 0,
            duration: 1,
          },
          "<",
        );

      linksArray.forEach((link) => {
        const text = new SplitType(link);
        openNavTimeline.current.to(
          text.chars,
          {
            y: "200%",
            stagger: 0.05,
            duration: 1,
          },
          "<",
        );
      });
    },
    { scope: containerRef },
  );

  const toggleNav = function() {
    if (isNavOpen) {
      closeNavTimeline.current.restart();
    } else {
      openNavTimeline.current.restart();
    }

    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  const handleLinkClick = function() {
    closeNavTimeline.current.restart();
    setIsNavOpen(false);
  };

  return (
    <div ref={containerRef} className="md:hidden">
      <button
        onClick={toggleNav}
        className="relative z-base aspect-square h-[36px] rounded-bl-[8px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[8px] border-[1px] border-primary bg-primary/50 backdrop-blur-sm"
      >
        <NavButtonBar className="first-bar top-[68%]" />
        <NavButtonBar className="second-bar top-1/2" />
        <NavButtonBar className="third-bar top-[32%]" />
      </button>
      <div className="nav-wrapper invisible fixed inset-0 grid h-screen -translate-y-[200%] grid-rows-[1fr_auto] gap-8 bg-primary-dark px-[var(--container-padding)] pb-[3.6rem] pt-[12rem]">
        <nav className="mobile-nav font-display text-[6rem] font-bold uppercase leading-[85%] tracking-wide sm:text-[10rem]">
          <ul className="flex flex-col gap-[1.2rem]">
            {navItems.map((item) => (
              <li key={item.label} className="overflow-hidden">
                <Link
                  onClick={handleLinkClick}
                  href={item.href}
                  className="inline-block -translate-y-[200%]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className="contact-btn w-full max-w-[440px] justify-self-center bg-primary/50 text-center opacity-0"
          variant="outline"
          asChild
        >
          <Link href="#">Contact</Link>
        </Button>
      </div>
    </div>
  );
};

function NavButtonBar({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "absolute left-1/2 h-[2px] w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white",
        className,
      )}
    ></span>
  );
}

export default MobileNavigation;
