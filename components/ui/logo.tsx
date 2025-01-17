import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className="relative inline-block">
      <Image
        src="/vectors/logo.svg"
        alt="trendlee logo"
        className={cn("w-1/2 object-cover md:h-full md:w-full", className)}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Logo;
