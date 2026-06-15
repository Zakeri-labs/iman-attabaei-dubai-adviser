import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";
import { ArrowRight, MessageCircle } from "lucide-react";
import propertyImg from "@/assets/service-property.jpg";
import residencyImg from "@/assets/service-residency.jpg";
import companyImg from "@/assets/service-company.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Iman Attabaei | Dubai Entry Advisor" },
      { name: "description", content: "Three advisory paths: property purchase, residency through investment, and company registration in Dubai." },
    ],
  }),
  component: ServicesPage,
});

function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="bg-emerald-gradient text-primary-foreground py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs sm:text-sm text-gold font-medium">{eyebrow}</div>
        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="mt-3 text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto">{sub}</p>
      </div>
    </section>
  );
}

function ServicesPage() {
  const { t } = useTranslation();
  const cards = [
    { img: propertyImg, title: t("paths.p1Title"), desc: t("paths.p1Desc") },
    { img: residencyImg, title: t("paths.p2Title"), desc: t("paths.p2Desc") },
    { img: companyImg, title: t("paths.p3Title"), desc: t("paths.p3Desc") },
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow={t("paths.eyebrow")} title={t("nav.services")} sub={t("paths.sub")} />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="premium-card rounded-2xl overflow-hidden h-full flex flex-col">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-52 object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-primary">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{c.desc}</p>
                  <Link to="/consultation" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-primary">
                    {t("paths.cta")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <SectionEyebrow>{t("reframe.eyebrow")}</SectionEyebrow>
          <h2 className="mt-3 text-2xl font-bold text-primary">{t("reframe.title")}</h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-md bg-primary text-primary-foreground font-semibold">
            <MessageCircle className="h-4 w-4" />
            {t("paths.cta")}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
