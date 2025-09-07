import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afro Herbal Remedy - Natural Healing, African Wisdom",
  description: "Discover traditional African herbal teas for natural wellness. Energy boosting, immune support, and diabetic care teas made with authentic African herbs. Free consultation available.",
  keywords: "african herbal tea, natural remedies, herbal medicine, immune support, energy boost, diabetic care, traditional healing, organic herbs",
  icons: "/favicon.ico",
  openGraph: {
    title: "Afro Herbal Remedy - Natural Healing, African Wisdom",
    description: "Discover traditional African herbal teas for natural wellness. Energy boosting, immune support, and diabetic care teas made with authentic African herbs. Free consultation available.",
    url: "https://afroherbalremedy.com",
    siteName: "Afro Herbal Remedy",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afro Herbal Remedy - Natural Healing, African Wisdom",
    description: "Discover traditional African herbal teas for natural wellness. Energy boosting, immune support, and diabetic care teas made with authentic African herbs. Free consultation available.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <CartProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navigation />
          {children}
          <Footer />
        </body>
      </CartProvider>

    </html>
  );
}
