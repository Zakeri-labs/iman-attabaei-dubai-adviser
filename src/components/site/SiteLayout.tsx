import type { ReactNode } from "react";
import "@/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { useDirection } from "@/hooks/useDirection";

export function SiteLayout({ children }: { children: ReactNode }) {
  useDirection();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
