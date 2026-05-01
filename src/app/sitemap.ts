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
      url: `${SITE_URL}/nassim-sahili`,
      lastModified,
    },
    {
      url: `${SITE_URL}/comparatif`,
      lastModified,
    },
    {
      url: `${SITE_URL}/comparatif/bpjeps`,
      lastModified,
    },
    {
      url: `${SITE_URL}/comparatif/staps`,
      lastModified,
    },
    {
      url: `${SITE_URL}/comparatif/cqp`,
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
