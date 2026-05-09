import "./globals.css";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
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
  icons: {
    icon: "/bvs-logo.webp",
    apple: "/bvs-logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-dvh bg-white text-slate-900">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
