import { useTranslation } from "react-i18next";
import { CheckCircle2, Quote, Star } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

export function MistakesTestimonialsSection() {
  const { t } = useTranslation();
  const mistakes = [t("mistakes.m1"), t("mistakes.m2"), t("mistakes.m3")];
  const tests = [
    { title: t("test.t1Title"), body: t("test.t1"), name: t("test.t1Name") },
    { title: t("test.t2Title"), body: t("test.t2"), name: t("test.t2Name") },
    { title: t("test.t3Title"), body: t("test.t3"), name: t("test.t3Name") },
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Mistakes */}
        <Reveal className="lg:col-span-4">
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 sm:p-8 h-full">
            <SectionEyebrow>{t("mistakes.eyebrow")}</SectionEyebrow>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold">{t("mistakes.title")}</h3>
            <p className="mt-2 text-sm text-primary-foreground/75">{t("mistakes.sub")}</p>
            <ul className="mt-5 space-y-2.5">
              {mistakes.map((m, i) => (
                <li key={i} className="flex items-start gap-2 p-3 rounded-lg border border-gold/30 bg-white/[0.05]">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm">{m}</span>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 h-10 px-4 rounded-md bg-gold text-ink text-sm font-semibold hover:bg-gold-soft transition-colors">
              {t("mistakes.cta")}
            </a>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="text-center mb-6">
            <SectionEyebrow>{t("test.eyebrow")}</SectionEyebrow>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-primary">{t("test.title")}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">{t("test.sub")}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {tests.map((tt, i) => (
              <div key={i} className="premium-card rounded-xl p-5 text-start flex flex-col">
                <Quote className="h-6 w-6 text-gold/60 mb-2" />
                <h4 className="text-base font-bold text-primary">{tt.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{tt.body}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {tt.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{tt.name}</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-gold text-gold" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">{t("test.placeholder")}</p>
        </Reveal>
      </div>
    </section>
  );
}
