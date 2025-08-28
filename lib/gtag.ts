// lib/gtag.ts
export const GA_TRACKING_ID = "G-LBR3KSR73P";

// Envoie un événement page_view
export const pageview = (url: string) => {
  (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
    "config",
    GA_TRACKING_ID,
    {
      page_path: url,
    }
  );
};
