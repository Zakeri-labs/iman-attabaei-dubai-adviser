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
    <section className="relative bg-emerald-gradient text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Iman Attabaei — Persian Dubai property advisor at his Sheikh Zayed Road office"
          className="w-full h-full object-cover opacity-55"
          style={isRtl ? {} : { transform: "scaleX(-1)" }}
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isRtl
              ? "linear-gradient(90deg, oklch(0.22 0.04 175 / 0.10) 0%, oklch(0.22 0.04 175 / 0.05) 55%, transparent 100%)"
              : "linear-gradient(270deg, oklch(0.22 0.04 175 / 0.10) 0%, oklch(0.22 0.04 175 / 0.05) 55%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.04_170/0.10)] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 self-start pb-16 sm:pb-24 lg:pb-32"
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
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-gold text-ink font-semibold hover:bg-gold-soft transition-colors shadow-gold"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{t("hero.cta")}</span>
              </a>
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-gold/50 hover:bg-white/5 transition-colors font-medium"
              >
                {t("hero.cta2")}
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-primary-foreground/80">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" />{t("hero.trust1")}</span>
              <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4 text-gold" />{t("hero.trust2")}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" />{t("hero.trust3")}</span>
            </div>
          </motion.div>

          {/* Quick consultation card — compact, pinned to bottom edge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex lg:col-span-5 self-end"
          >
            <div className="w-full rounded-xl bg-card text-foreground p-4 shadow-2xl border border-gold/30">
              <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, "_blank"); }}>
                <div className="relative">
                  <select className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm appearance-none">
                    <option>{t("hero.formGoal")}</option>
                    <option>{t("paths.p1Title")}</option>
                    <option>{t("paths.p2Title")}</option>
                    <option>{t("paths.p3Title")}</option>
                  </select>
                  <ChevronDown className="absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
                <input type="text" placeholder={t("hero.formBudget")} className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm" />
                <input type="tel" placeholder={t("hero.formPhone")} className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm" />
                <button type="submit" className="w-full h-9 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                  {t("hero.formSend")}
                </button>
                <p className="text-[10px] text-muted-foreground text-center">{t("hero.formNote")}</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
