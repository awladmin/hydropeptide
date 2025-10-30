import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const h = headers();
  const site = h.get("x-site");
  const isCom = site === "com";

  return {
    metadataBase: new URL(
      isCom
        ? "https://www.hydropeptidelearninglab.com"
        : "https://www.hydropeptidelearninglab.co.uk"
    ),
    title: {
      default: "HydroPeptide Learning Lab",
      template: "%s | HydroPeptide Learning Lab",
    },
    description: isCom
      ? "Official HydroPeptide Learning Lab for US professionals. Access education, training, and resources."
      : "HydroPeptide Learning Lab for UK professionals. Learn, train, and grow your skincare expertise.",
    applicationName: "HydroPeptide Learning Lab",
    keywords: [
      "HydroPeptide",
      "Learning",
      "Professional Education",
      "Skincare",
    ],
    authors: [{ name: isCom ? "HydroPeptide Inc." : "HydroPeptide UK" }],
    openGraph: {
      title: "HydroPeptide Learning Lab",
      description: isCom
        ? "Official HydroPeptide Learning Lab for US professionals. Access education, training, and resources."
        : "HydroPeptide Learning Lab for UK professionals. Learn, train, and grow your skincare expertise.",
      url: isCom
        ? "https://www.hydropeptidelearninglab.com"
        : "https://www.hydropeptidelearninglab.co.uk",
      siteName: "HydroPeptide Learning Lab",
      locale: isCom ? "en_US" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "HydroPeptide Learning Lab",
      description: isCom
        ? "Official HydroPeptide Learning Lab for US professionals. Access education, training, and resources."
        : "HydroPeptide Learning Lab for UK professionals. Learn, train, and grow your skincare expertise.",
    },
    alternates: {
      canonical: isCom
        ? "https://www.hydropeptidelearninglab.com"
        : "https://www.hydropeptidelearninglab.co.uk",
      languages: {
        "en-US": "https://www.hydropeptidelearninglab.com",
        "en-GB": "https://www.hydropeptidelearninglab.co.uk",
      },
    },
    other: {
      "geo.region": isCom ? "US" : "GB",
      "geo.placename": isCom ? "United States" : "United Kingdom",
      "geo.position": isCom ? "37.0902;-95.7129" : "55.3781;-3.4360",
      ICBM: isCom ? "37.0902, -95.7129" : "55.3781, -3.4360",
    },
    icons: {
      icon: [
        {
          url: "/HydroPeptide-favicon_16x16.progressive.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/HydroPeptide-favicon_32x32.progressive.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/HydroPeptide-favicon_167x167.progressive.png",
          sizes: "167x167",
          type: "image/png",
        },
      ],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0f2a55",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-hp-text bg-white font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
