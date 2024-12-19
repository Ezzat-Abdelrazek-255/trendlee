import React from "react";
import SectionTitle from "../ui/section-title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { faq } from "@/constants/faq";

const FaqSection = () => {
  return (
    <section className="px-[var(--container-padding)]">
      <SectionTitle>Frequently asked questions</SectionTitle>
      <div className="mt-[4rem] flex flex-col items-center">
        <div className="flex w-full max-w-[1560px] flex-col gap-[3.2rem] lg:w-[156rem]">
          {faq.map((faq) => (
            <Accordion
              className="w-full"
              key={faq.question}
              type="single"
              collapsible
            >
              <AccordionItem
                className="w-full rounded-bl-[1.6rem] rounded-br-[0.8rem] rounded-tl-[0.8rem] rounded-tr-[1.6rem] border-2 border-none bg-gradient-to-r from-primary/50 to-primary-dark/50 px-[2.4rem] py-[1.2rem] transition hover:bg-primary/50"
                value="item-1"
              >
                <AccordionTrigger className="text-[1.2rem] font-bold uppercase sm:text-[2.4rem] md:text-[3.2rem]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[1.2rem] sm:text-[1.6rem]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
