"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag || !process.env.NEXT_PUBLIC_GA_ID) return;

    const qs = searchParams.toString();
    const url = qs ? `${pathname}?${qs}` : pathname || "/";

    // Recommandé GA4: renvoyer un config/page_path aux route changes
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
