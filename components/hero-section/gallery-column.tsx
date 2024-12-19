import React from "react";
import { cn } from "@/utils";

type GalleryColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const GalleryColumn = ({ children, className }: GalleryColumnProps) => {
  return (
    <div
      className={cn(
        "flex h-screen flex-col gap-[1.6rem] overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default GalleryColumn;
