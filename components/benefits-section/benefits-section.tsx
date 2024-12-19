import React from "react";
import SectionTitle from "../ui/section-title";
import { benefits } from "@/constants/benefits";
import BenefitCard from "./benefit-card";

const BenefitsSection = () => {
  return (
    <section className="relative z-50 flex flex-col gap-[2.4rem] bg-white py-[4rem]">
      <div className="flex flex-col gap-[1rem]">
        <SectionTitle className="text-black">Why Choose Us</SectionTitle>
        <p className="text-center text-gray">
          Every frame of your video is crafted to maximize
          <br />
          engagement and deliver results fast
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center gap-[2.4rem] px-[1.6rem] sm:grid-cols-[auto_auto]">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            vectorSrc={benefit.vectorSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
