import "./globals.css";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { NewsletterBand } from "@/components/site/NewsletterBand";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: process.env.WP_BASE_URL
    ? new URL(process.env.WP_BASE_URL)
    : undefined,
  title: {
    default: "BVS | Building Ventilation Solutions",
    template: "%s | BVS",
  },
  description:
    "Expert air handling unit refurbishment, manufacturing, installation and maintenance. 40+ years experience across the UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-dvh bg-white text-slate-900">
          <Navigation />
          <main>{children}</main>
          <NewsletterBand />
          <Footer />
        </div>
      </body>
    </html>
  );
}
