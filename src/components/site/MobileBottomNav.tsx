import { Link } from "@tanstack/react-router";
import { Home, Briefcase, Building, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WHATSAPP_URL } from "@/lib/constants";

export function MobileBottomNav() {
  const { t } = useTranslation();
  const items = [
    { to: "/", icon: Home, label: t("nav.home") },
    { to: "/services", icon: Briefcase, label: t("nav.services") },
    { to: "/opportunities", icon: Building, label: t("nav.opportunities") },
  ];
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-emerald-gradient text-primary-foreground border-t border-gold/20">
      <div className="grid grid-cols-4 h-16">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            activeProps={{ className: "text-gold" }}
            className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-primary-foreground/85"
          >
            <i.icon className="h-5 w-5" />
            <span className="truncate max-w-[80px]">{i.label}</span>
          </Link>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 bg-gold text-ink text-[10px] font-bold"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
