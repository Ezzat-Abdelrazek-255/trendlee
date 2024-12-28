import { Offer } from "@/types/offers";
import React from "react";
import Button from "../ui/button";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type OfferCardProps = {
  offer: Offer;
};

const OfferCard = ({
  offer: { isPopular, price, perks, title, isMontly, paymentLink },
}: OfferCardProps) => {
  return (
    <article
      className={cn(
        "relative flex aspect-[0.6666] w-[40rem] max-w-[800px] flex-col justify-between rounded-bl-[2.4rem] rounded-br-[1.2rem] rounded-tl-[1.2rem] rounded-tr-[2.4rem] border-2 border-primary p-[2.4rem] py-[3.2rem] pt-[4.8rem]",
        isPopular &&
        "offer-card-shadow bg-gradient-to-b from-primary/50 to-primary-dark/25 backdrop-blur-[4px]",
      )}
    >
      {isPopular && (
        <p className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[0.6rem] rounded-full bg-white px-[1.6rem] py-[1.2rem] text-black shadow-md">
          <span className="relative inline-block aspect-square h-[3rem]">
            <Image
              src="/icons/sparkles.svg"
              fill
              alt="sparkles"
              className="h-full w-full object-cover"
              sizes="90vw"
            />
          </span>
          <span>Most Popular</span>
        </p>
      )}
      <div className="flex flex-col gap-[3.2rem]">
        <div className="flex flex-col gap-[2rem]">
          <p className={cn("text-primary", isPopular && "text-white")}>
            {title}
          </p>
          <h3 className="text-[7rem] font-bold leading-[85%]">
            €{price}
            {isMontly && <span className="text-[3rem]">/month</span>}
          </h3>
        </div>
        <ul className="mb-[2rem] flex flex-col gap-8 text-[1.2rem]">
          {perks.map((perk) => (
            <li
              className="flex items-center gap-[1rem] border-b-2 border-dashed border-primary/25 pb-[1.6rem] text-left last-of-type:border-none"
              key={perk.description}
            >
              <div className="relative aspect-square h-[2.4rem]">
                <Image
                  src={
                    perk.isBonus ? "/icons/present.svg" : "/icons/correct.svg"
                  }
                  fill
                  alt="sparkles"
                  className="h-full w-full object-cover"
                  sizes="90vw"
                />
              </div>
              <p>{perk.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Button
        asChild
        className={cn(
          isPopular &&
          "bg-white bg-none text-black shadow-md blur-0 after:content-none hover:bg-black hover:text-white",
        )}
      >
        {/* <Link href={paymentLink}>Choose this plan</Link> */}
        <Link href="https://buy.stripe.com/test_9AQ8Al8qmd8B2go000">
          Choose this plan
        </Link>
      </Button>
    </article>
  );
};

export default OfferCard;
