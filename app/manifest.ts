import type { MetadataRoute } from "next";
import { SITE_BRAND_NAME, SITE_TAGLINE } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_BRAND_NAME,
    short_name: SITE_BRAND_NAME,
    description: SITE_TAGLINE,
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}
