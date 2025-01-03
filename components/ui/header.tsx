import React from "react";
import Logo from "./logo";
import Button from "./button";
import Navigation from "./navigation";
import MobileNavigation from "./mobile-navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-[2.4rem] z-header flex w-full items-center justify-between px-[var(--container-padding)] md:top-[4.8rem]">
      <Logo />
      <div className="absolute-center">
        <Navigation />
      </div>
      <Button asChild className="hidden md:block" variant="outline">
        <Link href="mailto:trendlee.agency@gmail.com">Contact</Link>
      </Button>
      <MobileNavigation />
    </header>
  );
};

export default Header;
