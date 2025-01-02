import React from "react";
import Button from "../ui/button";
import ScrollToLink from "../ui/scroll-to-link";

const MainLockup = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-[0.8rem] text-center">
      <h1 className="font-display text-[3.6rem] font-bold uppercase leading-[105%] sm:text-[6rem]">
        Let us bring your
        <br /> vision to life
      </h1>
      <Button>
        <ScrollToLink href="#offers">See Our Offers</ScrollToLink>
      </Button>
    </div>
  );
};

export default MainLockup;
