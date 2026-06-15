import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import propertyImg from "@/assets/service-property.jpg";
import residencyImg from "@/assets/service-residency.jpg";
import companyImg from "@/assets/service-company.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export function PathsSection() {
  const { t } = useTranslation();
  const cards = [
    { img: propertyImg, title: t("paths.p1Title"), desc: t("paths.p1Desc") },
    { img: residencyImg, title: t("paths.p2Title"), desc: t("paths.p2Desc") },
    { img: companyImg, title: t("paths.p3Title"), desc: t("paths.p3Desc") },
  ];

  return (
    <section className="py-16 sm:py-24 bg-emerald-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <SectionEyebrow>{t("paths.eyebrow")}</SectionEyebrow>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold">{t("paths.title")}</h2>
          <p className="mt-3 text-sm sm:text-base text-primary-foreground/75 max-w-2xl mx-auto">{t("paths.sub")}</p>
          <div className="hairline-divider my-6 max-w-sm mx-auto" />
        </Reveal>

        {/* Mobile horizontal scroll, desktop grid */}
        <div className="mt-8 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-thin pb-4 md:pb-0">
          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 py-4 md:py-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="shrink-0 w-[78%] sm:w-[60%] md:w-auto snap-start relative hover:z-10">
              <div className="group rounded-2xl bg-white/[0.04] border border-gold/20 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_4px_oklch(0.84_0.15_85/0.3)] text-start h-full backdrop-blur-sm">
                <div className="p-5 pb-3">
                  <h3 className="text-lg sm:text-xl font-bold">{c.title}</h3>
                  <p className="text-sm text-primary-foreground/70 mt-1">{c.desc}</p>
                </div>
                <div className="relative h-44 sm:h-52 mx-3 mb-3 rounded-xl overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </Reveal>
          ))}
          </div>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-gold text-ink font-semibold hover:bg-gold-soft transition-colors">
              {t("paths.cta")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-gold/40 hover:bg-white/5 font-medium">
              {t("paths.more")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
