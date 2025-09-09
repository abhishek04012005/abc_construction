import Projects from '@/components/project/Project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Projects | ABC Constructions Portfolio",
  description:
    "Explore ABC Constructions' diverse portfolio of completed and ongoing projects across India, including residential, commercial, industrial, and infrastructure developments. Delivering quality, innovation, and on-time execution since 2012.",
  keywords: [
    "construction projects",
    "residential construction India",
    "commercial construction projects",
    "industrial construction",
    "infrastructure development projects",
    "building contractors portfolio",
    "ABC Constructions projects",
    "completed construction works"
  ],
  authors: [{ name: "ABC Constructions" }],
  creator: "ABC Constructions",
  publisher: "ABC Constructions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ABCconstructions.com/projects",
    title: "Construction Projects | ABC Constructions Portfolio",
    description:
      "View ABC Constructions' portfolio of residential, commercial, industrial, and infrastructure projects across India.",
    siteName: "ABC Constructions",
    images: [
      {
        url: "/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Constructions Project Showcase",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Projects | ABC Constructions",
    description:
      "Explore ABC Constructions' completed and ongoing projects across India, from residential to large-scale infrastructure.",
    images: ["/images/projects-twitter.jpg"],
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
    canonical: "https://ABCconstructions.com/projects",
  },
};


export default function ProjectPage() {
  return <Projects />;
}