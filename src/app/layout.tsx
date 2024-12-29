import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/providers";
import { ThemeToggle } from "../components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "parivartanX - Software Development Company",
  description: "parivartanX is a cutting-edge software development company specializing in web and mobile app solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "parivartanX",
    "software solutions",
    "AI/ML Applications",
    "Blockchain Development",
    "WEB3 Development",
    "Cloud Solutions",
    "SaaS Development",
    "Matrimony App Development",
    "E-commerce Development",
    "Healthcare App Development",
    "EdTech App Development",
    "FinTech App Development",
    "IoT Development",
    "AR/VR Development",
    
  ],
  themeColor: "#ffffff",
  openGraph: {
    title: "parivartanX - Software Development Company",
    description:
      "Empowering businesses with modern and scalable software solutions. Discover how parivartanX can transform your digital journey.",
    url: "https://yourwebsite.com",
    siteName: "parivartanX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "parivartanX - Empowering Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "parivartanX - Software Development Company",
    description:
      "Empowering businesses with modern and scalable software solutions. Discover how parivartanX can transform your digital journey.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com" />

        {/* Social Media Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:title" content="parivartanX - Software Development Company" />
        <meta
          property="og:description"
          content="Empowering businesses with modern and scalable software solutions."
        />
        <meta property="og:image" content="/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="parivartanX - Software Development Company" />
        <meta
          name="twitter:description"
          content="Empowering businesses with modern and scalable software solutions."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
