import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FaqFormSection } from "@/components/site/FaqFormSection";
import { useTranslation } from "react-i18next";
import { MessageCircle, Phone, MapPin, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER, ADDRESS } from "@/lib/constants";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Consultation & Contact — Iman Attabaei" },
      { name: "description", content: "Free initial consultation for Dubai property, residency and company setup. No obligation." },
    ],
  }),
  component: ConsultPage,
});

function ConsultPage() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <section className="bg-emerald-gradient text-primary-foreground py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm text-gold font-medium">{t("form.eyebrow")}</div>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">{t("nav.consultation")}</h1>
          <p className="mt-3 text-sm text-primary-foreground/80 max-w-2xl mx-auto">{t("form.sub")}</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gold text-ink font-semibold hover:bg-gold-soft">
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_NUMBER}
            </a>
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg border border-gold/30 bg-white/[0.04]">
              <Phone className="h-4 w-4 text-gold" /> {WHATSAPP_NUMBER}
            </div>
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg border border-gold/30 bg-white/[0.04] text-xs">
              <MapPin className="h-4 w-4 text-gold" /> {ADDRESS}
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary-foreground/80">
            <ShieldCheck className="h-4 w-4 text-gold" /> Free initial consultation • No obligation to buy
          </div>
        </div>
      </section>
      <FaqFormSection />
    </SiteLayout>
  );
}
