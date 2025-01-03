import React from "react";
// import Image from "next/image";
import ProcessTimelineMilestone from "./process-timeline-milestone";
import { cn } from "@/utils";

type ProcessCardType = {
  title: string;
  imgSrc: string;
  description: string;
  index: number;
};

const ProcessCard = ({
  title,
  description,
  imgSrc,
  index,
}: ProcessCardType) => {
  console.log(imgSrc);
  const isEven = index % 2 === 0;
  return (
    <article
      className={cn(
        "mt-[10rem] grid h-[30rem] w-full max-w-[60rem] grid-cols-[auto_1fr] gap-[4.8rem] text-right md:h-[50rem] md:translate-x-[2.5rem] md:grid-cols-[1fr_auto] md:justify-self-end",
        isEven &&
        "md:mt-[60rem] md:-translate-x-[2.5rem] md:grid-cols-[auto_1fr] md:justify-self-start md:text-left",
      )}
    >
      <ProcessTimelineMilestone index={index} />
      <div className="relative">
        <h3
          className={cn(
            "mb-[2rem] font-display text-[3rem] font-bold uppercase leading-[120%]",
          )}
        >
          {title}
        </h3>
        {/* <div className="-translate-y-[6rem]"> */}
        <p>{description}</p>
        {/*   <div className="process-mask absolute inset-0 z-hidden h-[30rem] -translate-x-[1rem] translate-y-[1rem] rounded-[1rem] bg-primary/25 sm:h-[40rem]"></div> */}
        {/*   <div className="process-mask relative z-0 h-[30rem] rounded-[1rem] sm:h-[40rem]"> */}
        {/*     <div className="absolute inset-0 z-base bg-black/20"></div> */}
        {/*     <div className="absolute inset-0 z-base bg-primary/5"></div> */}
        {/*     <Image */}
        {/*       src={imgSrc} */}
        {/*       alt={title} */}
        {/*       className="rounded-inherit h-full w-full object-cover" */}
        {/*       fill */}
        {/*       sizes="50vw" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </article>
  );
};

export default ProcessCard;
