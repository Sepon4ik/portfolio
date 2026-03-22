import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/**
 * Счётчик посещений:
 * - Vercel Web Analytics (включи в Vercel → Project → Analytics)
 * - опционально GA4, если задан NEXT_PUBLIC_GA_MEASUREMENT_ID (формат G-XXXXXXXXXX)
 */
export function SiteAnalytics() {
  return (
    <>
      <Analytics />
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="site-ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
