import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { ReframeSection } from "@/components/site/ReframeSection";
import { PathsSection } from "@/components/site/PathsSection";
import { BudgetProcessSection } from "@/components/site/BudgetProcessSection";
import { MistakesTestimonialsSection } from "@/components/site/MistakesTestimonialsSection";
import { OpportunitiesSection } from "@/components/site/OpportunitiesSection";
import { FaqFormSection } from "@/components/site/FaqFormSection";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iman Attabaei — Persian-speaking Dubai Entry Advisor" },
      { name: "description", content: "Property purchase, residency and company setup in Dubai with Persian-speaking, step-by-step guidance." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <ReframeSection />
      <PathsSection />
      <BudgetProcessSection />
      <MistakesTestimonialsSection />
      <OpportunitiesSection />
      <FaqFormSection />
      <FinalCta />
    </SiteLayout>
  );
}
