import { cn } from "@/utils";
import React from "react";

type GridProps = {
  className?: string;
};

const Grid = ({ className }: GridProps) => {
  return (
    <div
      className={cn("fixed inset-0 z-hidden bg-grid opacity-60", className)}
    />
  );
};

export default Grid;
