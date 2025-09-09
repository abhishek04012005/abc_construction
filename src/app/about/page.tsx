import About from '@/components/about/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About ABC Constructions | Building Excellence Since 2012",
  description:
    "ABC Constructions is a trusted construction company in India with 13+ years of expertise in commercial, residential, and infrastructure projects. We deliver quality, sustainability, and innovation in every build.",
  keywords: [
    "about ABC Constructions",
    "construction company India",
    "industrial construction",
    "commercial construction",
    "residential projects",
    "infrastructure development",
    "building contractors",
    "project management experts"
  ],
  authors: [{ name: "ABC Constructions" }],
  creator: "ABC Constructions",
  publisher: "ABC Constructions",
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "https://ABCconstructions.com/about",
    title: "About ABC Constructions | Building Excellence Since 2012",
    description:
      "Discover ABC Constructions' journey, values, and expertise in delivering high-quality construction services across India.",
    siteName: "ABC Constructions",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Constructions Team and Projects",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ABC Constructions",
    description:
      "Learn more about ABC Constructions — 13+ years of excellence in commercial, residential, and infrastructure projects across India.",
    images: ["/images/about-twitter.jpg"],
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
  alternates: {
    canonical: "https://ABCconstructions.com/about",
  },
};


export default function AboutPage() {

  return <About />;
}