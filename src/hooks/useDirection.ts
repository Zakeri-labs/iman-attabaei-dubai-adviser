import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RTL_LANGS } from "@/i18n";

export function useDirection() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split("-")[0] || "fa";
  const dir: "rtl" | "ltr" = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return { dir, lang, isRtl: dir === "rtl" };
}
