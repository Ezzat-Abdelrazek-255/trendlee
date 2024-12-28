import React from "react";
import OfferCard from "./offer-card";
import { Offer } from "@/types/offers";

type OffersCardsProps = {
  offers: Offer[];
};

const OffersCards = ({ offers }: OffersCardsProps) => {
  return (
    <div className="mx-auto flex max-w-[1560px] flex-col items-stretch justify-center gap-[4.8rem] md:flex-row">
      {offers.map((offer) => (
        <OfferCard key={offer.title} offer={offer} />
      ))}
    </div>
  );
};

export default OffersCards;
