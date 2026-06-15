import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Phone, AtSign, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WHATSAPP_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, THREADS_URL, ADDRESS } from "@/lib/constants";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-emerald-gradient text-primary-foreground pt-14 pb-24 lg:pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-10 w-10 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="font-bold">{t("nav.brand")}</div>
                <div className="text-xs text-gold-soft/80">{t("nav.tagline")}</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              {t("footer.positioning")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-3">{t("footer.quick")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-gold">{t("nav.home")}</Link></li>
              <li><Link to="/services" className="hover:text-gold">{t("nav.services")}</Link></li>
              <li><Link to="/opportunities" className="hover:text-gold">{t("nav.opportunities")}</Link></li>
              <li><Link to="/consultation" className="hover:text-gold">{t("nav.consultation")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-3">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><a href={WHATSAPP_URL} className="hover:text-gold">{WHATSAPP_NUMBER}</a></li>
              <li className="flex items-center gap-2"><AtSign className="h-4 w-4 text-gold" /><a href="mailto:info@imanattabaei.com" className="hover:text-gold">info@imanattabaei.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>{ADDRESS}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-3">{t("footer.follow")}</h4>
            <div className="flex items-center gap-2">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-md border border-gold/30 hover:border-gold flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={THREADS_URL} target="_blank" rel="noreferrer" aria-label="Threads" className="h-10 w-10 rounded-md border border-gold/30 hover:border-gold flex items-center justify-center transition-colors">
                <AtSign className="h-4 w-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-10 w-10 rounded-md bg-gold text-ink hover:bg-gold-soft flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-4">@imanov_realestate</p>
          </div>
        </div>

        <div className="hairline-divider my-8 opacity-40" />
        <div className="text-xs text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} {t("nav.brand")} — {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
