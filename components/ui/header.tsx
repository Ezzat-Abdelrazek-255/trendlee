import React from "react";
import Logo from "./logo";
import Button from "./button";
import Navigation from "./navigation";
import MobileNavigation from "./mobile-navigation";

const Header = () => {
  return (
    <header className="fixed top-[2.4rem] z-header flex w-full items-center justify-between px-[var(--container-padding)] md:top-[4.8rem]">
      <Logo />
      <div className="absolute-center">
        <Navigation />
      </div>
      <Button className="hidden md:block" variant="outline">
        Contact
      </Button>
      <MobileNavigation />
    </header>
  );
};

export default Header;
