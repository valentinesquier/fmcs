import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified,
    },
    {
      url: `${SITE_URL}/conditions-generales-de-ventes`,
      lastModified,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified,
    },
  ];
}
