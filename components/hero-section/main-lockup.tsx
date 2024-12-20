import React from "react";
import Button from "../ui/button";
import ScrollToLink from "../ui/scroll-to-link";

const MainLockup = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-[0.8rem] text-center">
      <h1 className="font-display text-[3.6rem] font-bold uppercase leading-[85%] sm:text-[6rem]">
        Create. Captivate. Convery. All
        <br />
        With One Click
      </h1>
      <p className="text-[1.7rem] sm:text-[2.4rem]">
        Save dozens of hours and transform your business in 72 hours
      </p>
      <Button>
        <ScrollToLink href="#offers">See the offers</ScrollToLink>
      </Button>
    </div>
  );
};

export default MainLockup;
