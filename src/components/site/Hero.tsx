import { useTranslation } from "react-i18next";
import { MessageCircle, ChevronDown, MapPin, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-advisor.jpg";
import { useDirection } from "@/hooks/useDirection";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  const { t } = useTranslation();
  const { isRtl } = useDirection();

  return (
    <section className="relative bg-emerald-gradient text-primary-foreground xl:min-h-[680px]">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Iman Attabaei — Persian Dubai property advisor at his Sheikh Zayed Road office"
          className={`w-full h-full object-cover object-top opacity-55 ${isRtl ? "scale-x-[-1]" : ""}`}
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      {/* Content wrapper — relative so the form can anchor to its bottom */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[85%] sm:max-w-[70%] lg:max-w-[58%]"
        >
          <div className="text-xs sm:text-sm text-gold font-medium mb-4">
            {t("hero.eyebrow")}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-primary-foreground/85 leading-relaxed max-w-2xl">
            {t("hero.sub")}
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-3 sm:px-6 rounded-md bg-gold text-ink font-semibold hover:bg-gold-soft transition-colors shadow-gold whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>{t("hero.cta")}</span>
            </a>
            <a
              href="#opportunities"
              className="inline-flex items-center justify-center gap-2 h-12 px-3 sm:px-6 rounded-md border border-gold/50 hover:bg-white/5 transition-colors font-medium whitespace-nowrap"
            >
              {t("hero.cta2")}
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-2 text-xs text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" />{t("hero.trust1")}</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4 text-gold" />{t("hero.trust2")}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" />{t("hero.trust3")}</span>
          </div>
        </motion.div>

        {/* Quick consultation card
            absolute bottom-0 + translate-y-1/2 = center of card sits exactly on the
            section's bottom edge, regardless of viewport width or text height. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`hidden lg:block absolute bottom-0 translate-y-1/2 w-[260px] z-10 ${
            isRtl ? "left-4 lg:left-8" : "right-4 lg:right-8"
          }`}
        >
          <div className="rounded-xl bg-white/35 backdrop-blur-md text-primary p-4 shadow-2xl border border-white/40">
            <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, "_blank"); }}>
              <div className="relative">
                <select className="w-full h-9 rounded-md border border-primary/25 bg-white/40 px-3 text-sm text-primary appearance-none">
                  <option className="text-foreground">{t("hero.formGoal")}</option>
                  <option className="text-foreground">{t("paths.p1Title")}</option>
                  <option className="text-foreground">{t("paths.p2Title")}</option>
                  <option className="text-foreground">{t("paths.p3Title")}</option>
                </select>
                <ChevronDown className="absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70 pointer-events-none" />
              </div>
              <input type="text" placeholder={t("hero.formBudget")} className="w-full h-9 rounded-md border border-primary/25 bg-white/40 px-3 text-sm text-primary placeholder:text-primary/55" />
              <input type="tel" placeholder={t("hero.formPhone")} className="w-full h-9 rounded-md border border-primary/25 bg-white/40 px-3 text-sm text-primary placeholder:text-primary/55" />
              <button type="submit" className="w-full h-9 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                {t("hero.formSend")}
              </button>
              <p className="text-[10px] text-primary/60 text-center">{t("hero.formNote")}</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
