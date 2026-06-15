import { useTranslation } from "react-i18next";
import { Coins, Calendar, PieChart, ArrowRight, Search, Handshake, ClipboardCheck } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import processImg from "@/assets/process-dubai.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export function BudgetProcessSection() {
  const { t } = useTranslation();
  const budgetItems = [
    { icon: Coins, txt: t("budget.b1") },
    { icon: Calendar, txt: t("budget.b2") },
    { icon: PieChart, txt: t("budget.b3") },
  ];
  const processItems = [
    { n: 1, icon: ClipboardCheck, txt: t("process.s1") },
    { n: 2, icon: Search, txt: t("process.s2") },
    { n: 3, icon: Handshake, txt: t("process.s3") },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Budget */}
        <Reveal>
          <div className="rounded-2xl bg-cream border border-border p-6 sm:p-8 h-full">
            <SectionEyebrow>{t("budget.eyebrow")}</SectionEyebrow>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-primary">{t("budget.title")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("budget.sub")}</p>
            <ul className="mt-5 space-y-3">
              {budgetItems.map((b, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  <span className="h-9 w-9 shrink-0 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed">{b.txt}</span>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-gold text-ink font-semibold hover:bg-gold-soft transition-colors">
              {t("budget.cta")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>
        </Reveal>

        {/* Process */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-border bg-card relative h-full min-h-[420px]">
            <div className="absolute inset-0">
              <img src={processImg} alt="Dubai — Burj Al Arab" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l rtl:bg-gradient-to-r from-[oklch(0.22_0.04_175/0.97)] via-[oklch(0.22_0.04_175/0.85)] to-[oklch(0.22_0.04_175/0.3)]" />
            </div>
            <div className="relative p-6 sm:p-8 text-primary-foreground h-full flex flex-col">
              <SectionEyebrow>{t("process.eyebrow")}</SectionEyebrow>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold">{t("process.title")}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80 max-w-sm">{t("process.sub")}</p>
              <ul className="mt-5 space-y-3 max-w-md">
                {processItems.map((p) => (
                  <li key={p.n} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.06] border border-gold/20">
                    <span className="h-10 w-10 shrink-0 rounded-full bg-gold text-ink flex items-center justify-center">
                      <p.icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm">{p.txt}</span>
                    <span className="text-xs font-bold text-gold">0{p.n}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft">
                {t("process.cta")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
