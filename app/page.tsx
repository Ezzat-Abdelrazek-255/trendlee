import BenefitsSection from "@/components/benefits-section/benefits-section";
import FaqSection from "@/components/faq-section/faq-section";
import HeroSection from "@/components/hero-section/hero-section";
import OffersSection from "@/components/offers-section/offers-section";
import ProcessSection from "@/components/process-section/process-section";

export default function Home() {
  return (
    <main className="relative z-0 flex min-h-screen flex-col gap-[var(--sections-gap)]">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <OffersSection />
      <FaqSection />
    </main>
  );
}
