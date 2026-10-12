import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindful-clinic-sable.vercel.app"),
  title: {
    default: "Manvi Mehrotra | Clinical Psychologist in Prayagraj",
    template: "%s | Manvi Mehrotra",
  },
  description:
    "Explore psychological consultation, counselling, and assessment options with Manvi Mehrotra in Prayagraj and online. Enquire about availability and fees.",
  applicationName: "Manvi Mehrotra — Clinical Psychologist",
  openGraph: {
    type: "website",
    url: "/",
    title: "Manvi Mehrotra | Clinical Psychologist in Prayagraj",
    description:
      "Psychological support and consultation options in Prayagraj and online.",
    siteName: "Manvi Mehrotra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
