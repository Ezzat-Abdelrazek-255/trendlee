"use client";

import React, { useRef } from "react";
import GalleryCard from "./gallery-card";
import GalleryColumn from "./gallery-column";
import { galleryImagesSrcs } from "@/constants/gallery";
import { useGSAP } from "@gsap/react";
import { verticalLoop } from "@/utils";

const galleryImagesSrcsFirstColumn = galleryImagesSrcs.slice(0, 4);
const galleryImagesSrcsSecondColumn = galleryImagesSrcs.slice(4, 8);
const galleryImagesSrcsThirdColumn = galleryImagesSrcs.slice(6);

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    function() {
      const numOfColumns = 3;
      const columnsSpeeds = [0.5, 0.8, 0.4];
      for (let i = 0; i < numOfColumns; i++) {
        verticalLoop(`.gallery-card-${i}`, {
          repeat: -1,
          paddingBottom: "16px",
          reversed: i === 1,
          speed: columnsSpeeds[i],
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute-center z-0 flex gap-[3.2rem] overflow-y-clip after:absolute after:-bottom-1/2"
    >
      <div className="absolute bottom-0 left-1/2 z-base h-[14rem] w-screen -translate-x-1/2 translate-y-1/2 bg-black blur-[16px]"></div>
      <div className="absolute inset-0 z-base bg-black/50"></div>
      <GalleryColumn className="hidden sm:flex">
        {galleryImagesSrcsFirstColumn.map((src) => (
          <GalleryCard className={`gallery-card-${0}`} src={src} key={src} />
        ))}
      </GalleryColumn>
      <GalleryColumn>
        {galleryImagesSrcsSecondColumn.map((src) => (
          <GalleryCard className={`gallery-card-${1}`} src={src} key={src} />
        ))}
      </GalleryColumn>
      <GalleryColumn className="hidden md:flex">
        {galleryImagesSrcsThirdColumn.map((src) => (
          <GalleryCard className={`gallery-card-${2}`} src={src} key={src} />
        ))}
      </GalleryColumn>
    </div>
  );
};

export default Gallery;
