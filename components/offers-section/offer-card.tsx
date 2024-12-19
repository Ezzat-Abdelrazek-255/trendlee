import { Offer } from "@/types/offers";
import React from "react";
import Button from "../ui/button";
import { cn } from "@/utils";

type OfferCardProps = Offer;

const OfferCard = ({ isPopular, price, perks }: OfferCardProps) => {
  return (
    <article
      className={cn(
        "relative flex h-[60rem] w-[40rem] max-w-[370px] flex-col justify-between rounded-bl-[2.4rem] rounded-br-[1.2rem] rounded-tl-[1.2rem] rounded-tr-[2.4rem] border-2 border-primary p-[2.4rem] py-[3.2rem]",
        isPopular &&
        "offer-card-shadow bg-gradient-to-b from-primary/50 to-primary-dark/25 backdrop-blur-[4px]",
      )}
    >
      {isPopular && (
        <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-[1.6rem] py-[1.2rem] text-black shadow-md">
          Most Popular
        </p>
      )}
      <div className="flex flex-col gap-[3.2rem]">
        <div className="flex flex-col gap-[1.2rem]">
          <p className="text-primary">Ads Boost Pack</p>
          <h3 className="text-[8rem] font-bold leading-[85%]">€{price}</h3>
        </div>
        <ul className="flex flex-col gap-8 text-[1.2rem]">
          {perks.map((perk) => (
            <li
              className="flex items-center border-b-2 border-dashed border-primary/25 pb-[1.6rem] text-left last-of-type:border-none"
              key={perk.description}
            >
              <span></span>
              <p>{perk.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          isPopular &&
          "from-white to-white text-black shadow-md blur-0 after:content-none",
        )}
      >
        Choose this plan
      </Button>
    </article>
  );
};

export default OfferCard;
