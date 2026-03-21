import {
  CONTACT_EMAIL,
  getAbsoluteUrl,
  LINKEDIN_URL,
  SITE_BRAND_NAME,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_DM_URL,
} from "@/lib/site-config";

/** Schema.org Person — согласовано с OG и соцссылками */
export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pavel Dranchuk",
    alternateName: SITE_BRAND_NAME,
    url: getAbsoluteUrl("/"),
    image: getAbsoluteUrl("/pavel.png"),
    email: CONTACT_EMAIL,
    jobTitle: "General Manager",
    sameAs: [LINKEDIN_URL, TELEGRAM_DM_URL, TELEGRAM_CHANNEL_URL],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
