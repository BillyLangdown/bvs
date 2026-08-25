import "./globals.css";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { NewsletterBand } from "@/components/site/NewsletterBand";
import { AnalyticsLoader } from "@/components/site/AnalyticsLoader";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.bvs-ltd.co.uk"),
  title: {
    default: "BVS | Building Ventilation Solutions",
    template: "%s | BVS",
  },
  description:
    "Expert air handling unit refurbishment, manufacturing, installation and maintenance. 40+ years experience across the UK.",
  openGraph: {
    type: "website",
    siteName: "BVS Building Ventilation Solutions",
    locale: "en_GB",
    images: [
      {
        url: "/ahu-hero-temp.webp",
        width: 1200,
        height: 630,
        alt: "BVS air handling unit specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ahu-hero-temp.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-dvh bg-white text-slate-900">
          <Navigation />
          <main>{children}</main>
          <NewsletterBand />
          <Footer />
        </div>
        <AnalyticsLoader
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
        />
      </body>
    </html>
  );
}
