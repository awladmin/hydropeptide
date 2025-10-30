import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = (headers().get("host") || "").toLowerCase();
  const isCom = host.endsWith(".com");

  const baseCOM = "https://www.hydropeptidelearninglab.com";
  const baseUK = "https://www.hydropeptidelearninglab.co.uk";

  const base = isCom ? baseCOM : baseUK;

  // Add routes here as your site grows.
  // Each entry includes hreflang alternates pointing to BOTH domains.
  const pages = [
    {
      path: "/", // homepage
      lastModified: new Date(),
    },
    // Example for more pages later:
    // { path: "/education", lastModified: new Date() },
  ];

  return pages.map(({ path, lastModified }) => ({
    url: `${base}${path}`,
    lastModified,
    alternates: {
      languages: {
        "en-US": `${baseCOM}${path}`,
        "en-GB": `${baseUK}${path}`,
        "x-default": `${baseUK}${path}`,
      },
    },
  }));
}
