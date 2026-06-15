import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Globe, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";
import { WHATSAPP_URL } from "@/lib/constants";

export function Header() {
  const { t, i18n } = useTranslation();
  const { isRtl, lang } = useDirection();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/opportunities", label: t("nav.opportunities") },
    { to: "/consultation", label: t("nav.consultation") },
  ];

  const switchLang = (l: string) => {
    i18n.changeLanguage(l);
    setLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-emerald-gradient text-primary-foreground border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-9 w-9 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-gold" />
          </div>
          <div className="leading-tight">
            <div className="text-sm sm:text-base font-bold tracking-tight">{t("nav.brand")}</div>
            <div className="text-[10px] sm:text-[11px] text-gold-soft/80 hidden xs:block">{t("nav.tagline")}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium text-primary-foreground/90 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="h-9 px-2.5 rounded-md border border-gold/30 hover:border-gold/60 flex items-center gap-1.5 text-xs font-medium transition-colors"
              aria-label="Language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="uppercase">{lang}</span>
            </button>
            {langOpen && (
              <div className={`absolute mt-2 ${isRtl ? "left-0" : "right-0"} bg-card text-foreground rounded-md shadow-lg border border-border min-w-[120px] overflow-hidden`}>
                {[{ c: "fa", n: "فارسی" }, { c: "en", n: "English" }, { c: "ar", n: "العربية" }].map((o) => (
                  <button
                    key={o.c}
                    onClick={() => switchLang(o.c)}
                    className={`w-full text-start px-3 py-2 text-sm hover:bg-accent ${lang === o.c ? "bg-accent text-primary font-medium" : ""}`}
                  >
                    {o.n}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md bg-gold text-ink hover:bg-gold-soft transition-colors text-xs font-semibold shadow-gold"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">{t("nav.cta")}</span>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden h-9 w-9 rounded-md border border-gold/30 flex items-center justify-center"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className={`absolute top-0 ${isRtl ? "right-0" : "left-0"} h-full w-[82%] max-w-sm bg-emerald-gradient text-primary-foreground p-6 flex flex-col gap-6 shadow-2xl`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold">{t("nav.brand")}</div>
                  <div className="text-[11px] text-gold-soft/80">{t("nav.tagline")}</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="h-9 w-9 rounded-md border border-gold/30 flex items-center justify-center" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mt-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-base font-medium hover:bg-gold/10 border-b border-gold/10"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 h-12 px-4 rounded-md bg-gold text-ink font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
