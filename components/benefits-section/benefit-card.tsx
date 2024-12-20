import React from "react";
import Image from "next/image";

type BenefitCardProps = {
  vectorSrc: string;
  title: string;
  description: string;
};

const BenefitCard = ({ vectorSrc, title, description }: BenefitCardProps) => {
  return (
    <article className="benefit-card-shadow flex max-w-[400px] flex-col gap-[2.4rem] rounded-[1rem] bg-gray-dark p-[2.4rem] pt-[3.2rem]">
      <div className="relative aspect-square h-[10rem]">
        <Image
          src={vectorSrc}
          alt={title}
          fill
          sizes="50vw"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <h3 className="font-display text-[2.4rem] font-bold uppercase leading-[85%] text-black lg:text-[2rem]">
          {title}
        </h3>
        <p className="text-gray">{description}</p>
      </div>
    </article>
  );
};

export default BenefitCard;
