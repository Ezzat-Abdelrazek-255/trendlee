import React from "react";
import Button from "./button";
import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative px-[var(--container-padding)]">
      <div className="relative mx-auto my-[12.8rem] grid h-[60rem] w-full max-w-[1560px] place-content-center justify-items-center rounded-[2.4rem] border-2 border-primary bg-gradient-to-br from-primary/50 to-primary-dark/50 text-center">
        <div className="absolute inset-0 z-hidden">
          <Image
            src="/vectors/glass-reflections.svg"
            alt=""
            fill
            sizes="90vw"
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="font-display text-[6rem] font-medium uppercase leading-[85%] md:text-[8rem]">
          Need eye-catching content fast? We’ve got you covered
        </h2>
        <div className="flex flex-col items-center gap-[3.2rem]">
          <p>
            Save dozens of hours and transform your <br />
            business in 72 hours
          </p>
          <Button asChild>
            <Link href="#offers">See the offers</Link>
          </Button>
        </div>
      </div>
      <div className="flex w-full max-w-[1560px] flex-col items-center gap-[2.4rem] md:items-start">
        <div className="flex w-full flex-col items-center justify-between gap-[2.4rem] text-center md:flex-row">
          <Logo />
          <p>
            Expertly crafted videos. Unlimited revisions,
            <br /> flat-fee pricing, and a satisfaction guarantee.
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-[2.4rem]">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="h-[2px] w-full bg-white/50"></div>
        <p className="self-center text-center">
          © 2024 Trendlee agency. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
