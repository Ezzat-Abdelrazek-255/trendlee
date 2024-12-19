import React from "react";
import Button from "../ui/button";
import Link from "next/link";

const MainLockup = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-[0.8rem] text-center">
      <h1 className="font-display text-[6.8rem] font-medium uppercase leading-[85%] sm:text-[13rem]">
        Create. Captivate. Convery. All
        <br />
        With One Click
      </h1>
      <p className="text-[1.7rem] sm:text-[2.4rem]">
        Save dozens of hours and transform your business in 72 hours
      </p>
      <Button>
        <Link href="#offers">See the offers</Link>
      </Button>
    </div>
  );
};

export default MainLockup;
