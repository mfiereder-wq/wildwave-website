import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildwave | Webdesign & Marketing Agentur Zürich",
  description: "Wildwave - Ihre Webdesign und Marketing Agentur in Zürich. Wir gestalten moderne Websites, optimieren für SEO und erstellen Online-Shops. Transparente monatliche Pakete ab 150 CHF.",
  keywords: [
    "Webdesign Zürich",
    "Marketing Agentur Schweiz",
    "SEO Optimierung",
    "Website erstellen",
    "Online Shop",
    "Corporate Design",
    "Social Media Marketing",
    "Wildwave",
    "Digitale Agentur"
  ],
  authors: [{ name: "Wildwave Team" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Wildwave | Webdesign & Marketing Agentur Zürich",
    description: "Digitale Wellen für Ihre Marke. Webdesign, SEO und Marketing aus Zürich.",
    url: "https://wildwave.ch",
    siteName: "Wildwave",
    type: "website",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildwave | Webdesign & Marketing Agentur Zürich",
    description: "Digitale Wellen für Ihre Marke. Webdesign, SEO und Marketing aus Zürich.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wildwave.ch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich" />
        <meta name="geo.position" content="47.3769;8.5417" />
        <meta name="ICBM" content="47.3769, 8.5417" />
        {/* Elfsight Contact Form */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
