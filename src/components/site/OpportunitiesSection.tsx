import { useTranslation } from "react-i18next";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal, SectionEyebrow } from "./Reveal";
import oppImg from "@/assets/opportunity-1.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

export function OpportunitiesSection() {
  const { t } = useTranslation();

  const rows = [
    { project: "Sobha", loc: "Mohammed Bin Rashid City", price: "AED 1,250,000", down: "20%", handover: "2027" },
    { project: "Dubai", loc: "Dubai Creek", price: "AED 1,650,000", down: "10%", handover: "2026" },
    { project: "JVC", loc: "JVC, Dubai", price: "AED 750,000", down: "15%", handover: "2025" },
  ];

  return (
    <section id="opportunities" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <SectionEyebrow>{t("opps.eyebrow")}</SectionEyebrow>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{t("opps.title")}</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">{t("opps.sub")}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl overflow-hidden border border-border bg-card shadow-lg grid md:grid-cols-12">
            <div className="md:col-span-4 relative min-h-[220px] md:min-h-0">
              <img src={oppImg} alt="Dubai Marina" loading="lazy" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-start text-primary-foreground">
                <div className="text-[10px] uppercase tracking-wider text-gold mb-1">Featured</div>
                <div className="text-sm font-bold">Dubai Marina Projects</div>
              </div>
            </div>
            <div className="md:col-span-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-primary text-primary-foreground text-xs">
                  <tr>
                    <th className="px-4 py-3 text-start font-medium">{t("opps.project")}</th>
                    <th className="px-4 py-3 text-start font-medium hidden sm:table-cell">{t("opps.location")}</th>
                    <th className="px-4 py-3 text-start font-medium">Price</th>
                    <th className="px-4 py-3 text-start font-medium">{t("opps.down")}</th>
                    <th className="px-4 py-3 text-start font-medium hidden sm:table-cell">{t("opps.handover")}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className="border-b last:border-0 border-border hover:bg-accent/40 transition-colors">
                      <td className="px-4 py-3 font-semibold text-primary text-start">{r.project}</td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell text-start"><MapPin className="inline h-3 w-3 me-1" />{r.loc}</td>
                      <td className="px-4 py-3 text-start">{r.price}</td>
                      <td className="px-4 py-3 text-start"><span className="px-2 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-semibold">{r.down}</span></td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell text-start">{r.handover}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-md bg-gold text-ink font-semibold hover:bg-gold-soft transition-colors">
            {t("opps.cta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
