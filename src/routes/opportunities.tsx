import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OpportunitiesSection } from "@/components/site/OpportunitiesSection";
import { FinalCta } from "@/components/site/FinalCta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Selected Opportunities — Iman Attabaei | Dubai" },
      { name: "description", content: "Selected Dubai property opportunities with payment plan and handover details." },
    ],
  }),
  component: OppsPage,
});

function OppsPage() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <section className="bg-emerald-gradient text-primary-foreground py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm text-gold font-medium">{t("opps.eyebrow")}</div>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">{t("nav.opportunities")}</h1>
          <p className="mt-3 text-sm text-primary-foreground/80 max-w-2xl mx-auto">{t("opps.sub")}</p>
        </div>
      </section>
      <OpportunitiesSection />
      <FinalCta />
    </SiteLayout>
  );
}
