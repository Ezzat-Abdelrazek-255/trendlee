import React from "react";
import SectionTitle from "../ui/section-title";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OffersCards from "./offers-cards";
import {
  AdCampaignsOffers,
  EngageAndConvertOffers,
  OrganicOffers,
} from "@/constants/offers";

const OffersSection = () => {
  return (
    <section className="relative z-base px-[var(--container-padding)]">
      <div className="flex flex-col gap-[2.4rem]">
        <SectionTitle>Our Offers</SectionTitle>
        <Tabs defaultValue="ad-campaigns">
          <div className="grid place-content-center">
            <TabsList className="rounded-full border-2 border-primary bg-black text-white">
              <TabsTrigger value="ad-campaigns">Ad Campaigns</TabsTrigger>
              <TabsTrigger value="organic-content">Organic Content</TabsTrigger>
              <TabsTrigger value="engage-convert">Engage & Convert</TabsTrigger>
            </TabsList>
          </div>
          <p className="mb-[8rem] mt-[1.6rem] text-center">
            Videos designed to captivate and convert, <br />
            optimized to maximize your advertising performance.
          </p>
          <TabsContent className="text-center" value="ad-campaigns">
            <OffersCards offers={AdCampaignsOffers} />
          </TabsContent>
          <TabsContent className="text-center" value="organic-content">
            <OffersCards offers={OrganicOffers} />
          </TabsContent>
          <TabsContent className="text-center" value="engage-convert">
            <OffersCards offers={EngageAndConvertOffers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OffersSection;
