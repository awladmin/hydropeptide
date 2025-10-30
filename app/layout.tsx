import "./globals.css";
import Header from "./components/Header";
import type { Metadata, Viewport } from "next";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydropeptidelearninglab.co.uk"),
  title: {
    default: "HydroPeptide Learning Lab",
    template: "%s | HydroPeptide Learning Lab",
  },
  description:
    "Professional education & product mastery. Join the Learning Lab.",
  applicationName: "HydroPeptide Learning Lab",
  keywords: ["HydroPeptide", "Learning", "Professional Education", "Skincare"],
  authors: [{ name: "HydroPeptide UK" }],
  openGraph: {
    title: "HydroPeptide Learning Lab",
    description:
      "Professional education & product mastery. Join the Learning Lab.",
    url: "https://hydropeptidelearninglab.co.uk",
    siteName: "HydroPeptide Learning Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroPeptide Learning Lab",
    description:
      "Professional education & product mastery. Join the Learning Lab.",
  },
  alternates: { canonical: "https://hydropeptidelearninglab.co.uk" },
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
