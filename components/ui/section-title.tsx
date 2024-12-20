import { cn } from "@/utils";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "text-center font-display text-[4rem] font-bold uppercase leading-[85%] md:text-[6rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
