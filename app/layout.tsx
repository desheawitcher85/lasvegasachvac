import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import TopBar from "@/components/layout/TopBar";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import StickyCallButton from "@/components/layout/StickyCallButton";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} | AC Repair Las Vegas`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Same-day AC repair and HVAC service in Las Vegas, Henderson, and Summerlin. Licensed, bonded, insured. Available 24/7. Call (702) 930-3316.",
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    siteName: siteConfig.brandName,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <TopBar />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PRVPXE23CH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PRVPXE23CH');
          `}
        </Script>
      </body>
    </html>
  );
}
