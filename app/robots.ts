import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function robots(): MetadataRoute.Robots {
  const host = (headers().get("host") || "").toLowerCase();
  const isCom = host.endsWith(".com");
  const base = isCom
    ? "https://www.hydropeptidelearninglab.com"
    : "https://www.hydropeptidelearninglab.co.uk";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
