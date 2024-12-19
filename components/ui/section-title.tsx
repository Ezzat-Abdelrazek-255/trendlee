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
        "text-center font-display text-[8rem] font-medium uppercase leading-[85%]",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
