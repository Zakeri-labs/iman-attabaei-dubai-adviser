import { useTranslation } from "react-i18next";
import { Target, Home as HomeIcon, Building2, ArrowRight } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";

export function ReframeSection() {
  const { t } = useTranslation();
  const items = [
    { n: "1", icon: Target, q: t("reframe.q1") },
    { n: "2", icon: HomeIcon, q: t("reframe.q2") },
    { n: "3", icon: Building2, q: t("reframe.q3") },
  ];
  return (
    <section className="py-16 sm:py-20 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <SectionEyebrow>{t("reframe.eyebrow")}</SectionEyebrow>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{t("reframe.title")}</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("reframe.sub")}</p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1}>
              <div className="premium-card rounded-xl p-5 sm:p-6 text-start flex items-start gap-4 h-full">
                <div className="shrink-0 h-11 w-11 rounded-lg bg-primary/5 border border-primary/15 flex items-center justify-center text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-gold mb-1">{it.n}</div>
                  <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">{it.q}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <a
            href="#form"
            className="mt-10 inline-flex items-center gap-2 h-11 px-6 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            {t("reframe.cta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
