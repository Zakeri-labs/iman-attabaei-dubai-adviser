import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import ctaImg from "@/assets/cta-dubai.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCta() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaImg} alt="Dubai skyline" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[oklch(0.18_0.04_170/0.96)] via-[oklch(0.22_0.04_175/0.85)] to-[oklch(0.22_0.04_175/0.55)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-primary-foreground">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm text-gold font-medium mb-3">{t("finalCta.eyebrow")}</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{t("finalCta.title")}</h2>
            <p className="mt-3 text-sm sm:text-base text-primary-foreground/85 max-w-2xl">{t("finalCta.sub")}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 h-12 px-6 rounded-md bg-gold text-ink font-bold hover:bg-gold-soft transition-colors shadow-gold">
              <MessageCircle className="h-4 w-4" />
              {t("finalCta.cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
