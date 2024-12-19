import React from "react";
import OfferCard from "./offer-card";
import { Offer } from "@/types/offers";

type OffersCardsProps = {
  offers: Offer[];
};

const OffersCards = ({ offers }: OffersCardsProps) => {
  return (
    <div className="mx-auto flex max-w-[1560px] flex-col items-center justify-center gap-[4.8rem] md:flex-row">
      {offers.map((offer) => (
        <OfferCard
          title={offer.title}
          isMontly={offer.isMontly}
          isPopular={offer.isPopular}
          price={offer.price}
          perks={offer.perks}
          key={offer.price}
        />
      ))}
    </div>
  );
};

export default OffersCards;
