import type { Metadata, Viewport } from "next";
import { BackgroundAmbience } from "@/components/BackgroundAmbience";
import { ConstellationParticles } from "@/components/ConstellationParticles";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TelegramChannelFab } from "@/components/TelegramChannelFab";
import { ToastHost } from "@/components/ToastHost";
import { getSiteUrl, SITE_BRAND_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site-config";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_BRAND_NAME,
    template: `%s · ${SITE_BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_BRAND_NAME,
  authors: [{ name: "Pavel Dranchuk", url: siteUrl }],
  creator: "Pavel Dranchuk",
  publisher: SITE_BRAND_NAME,
  formatDetection: { email: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_BRAND_NAME,
    title: SITE_BRAND_NAME,
    description: SITE_TAGLINE,
    images: [
      {
        url: "/pavel.png",
        alt: `${SITE_BRAND_NAME} — portrait`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_BRAND_NAME,
    description: SITE_TAGLINE,
    images: ["/pavel.png"],
    creator: "@pav_sep",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className="relative bg-[#0a0a0a] text-zinc-100 antialiased">
        <SiteJsonLd />
        <SmoothScroll />
        {/* isolate: частицы z-[1] видны сквозь прозрачные области контента (z-10) */}
        <div className="relative isolate min-h-0">
          <ConstellationParticles />
          <div className="relative z-10">
            <ToastHost>
              {children}
              <BackgroundAmbience />
              <TelegramChannelFab />
            </ToastHost>
          </div>
        </div>
        <SiteAnalytics />
      </body>
    </html>
  );
}
