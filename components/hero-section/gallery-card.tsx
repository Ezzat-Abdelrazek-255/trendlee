import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

type GalleryCardProps = {
  src: string;
  className?: string;
};

const GalleryCard = ({ src, className }: GalleryCardProps) => {
  return (
    <div
      className={cn(
        "relative aspect-[0.7] h-[44rem] rounded-bl-[4.8rem] rounded-br-[2.4rem] rounded-tl-[2.4rem] rounded-tr-[4.8rem] border-2 border-primary",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        className="rounded-inherit h-full w-full object-cover"
        fill
        priority
        loading="eager"
        sizes="30vw"
      />
    </div>
  );
};

export default GalleryCard;
