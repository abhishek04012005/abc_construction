import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import OGImage from "../../public/logo.png"

export const metadata: Metadata = {
  title: "ABC Constructions | Leading Construction Company in India",
  description: "ABC Constructions offers expert construction services, industrial development, and project management solutions across India. Specializing in commercial, residential, and infrastructure projects since 2012.",
  keywords: [
    "construction company",
    "industrial construction",
    "commercial construction",
    "infrastructure development",
    "construction services India",
    "building contractors",
    "project management",
    "ABC Construction"
  ],
  authors: [{ name: "ABC Constructions" }],
  creator: "ABC Constructions",
  publisher: "ABC Constructions",
  formatDetection: {
    telephone: true,
    date: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ABCconstructions.com",
    title: "ABC Constructions | Expert Construction Services",
    description: "Leading construction company with 13+ years of excellence in commercial, industrial, and infrastructure development across India.",
    siteName: "ABC Construction",
    images: [
      {
        url: OGImage.src,
        width: 1200,
        height: 630,
        alt: "ABC Construction Projects",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Construction | Leading Construction Company",
    description: "Expert construction services and project management solutions across India.",
    images: OGImage.src,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Construction",
  alternates: {
    canonical: "https://ABCconstructions.com",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}