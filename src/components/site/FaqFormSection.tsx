import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, MessageCircle, Send } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import formImg from "@/assets/form-dubai.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export function FaqFormSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  return (
    <section id="form" className="py-16 sm:py-20 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        {/* FAQ */}
        <Reveal>
          <SectionEyebrow>{t("faq.eyebrow")}</SectionEyebrow>
          <h3 className="mt-3 text-xl sm:text-2xl font-bold text-primary">{t("faq.title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("faq.sub")}</p>
          <div className="mt-5 space-y-2.5">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-start text-sm font-medium hover:bg-accent/40 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="flex-1">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-gold text-ink font-semibold hover:bg-gold-soft transition-colors">
            <MessageCircle className="h-4 w-4" />
            {t("faq.cta")}
          </a>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <SectionEyebrow>{t("form.eyebrow")}</SectionEyebrow>
          <h3 className="mt-3 text-xl sm:text-2xl font-bold text-primary">{t("form.title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("form.sub")}</p>
          <div className="mt-5 grid sm:grid-cols-5 gap-4">
            <form
              className="sm:col-span-3 space-y-3 rounded-2xl bg-card border border-border p-5 shadow-sm"
              onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, "_blank"); }}
            >
              <select className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>{t("form.goal")}</option>
                <option>{t("paths.p1Title")}</option>
                <option>{t("paths.p2Title")}</option>
                <option>{t("paths.p3Title")}</option>
              </select>
              <input className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm" placeholder={t("form.budget")} />
              <input className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm" placeholder={t("form.timeline")} />
              <input className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm" placeholder={t("form.name")} />
              <input className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm" placeholder={t("form.phone")} />
              <button className="w-full h-11 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                {t("form.submit")}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">{t("form.privacy")}</p>
            </form>
            <div className="sm:col-span-2 rounded-2xl overflow-hidden relative min-h-[260px] hidden sm:block">
              <img src={formImg} alt="Dubai Marina" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
