import Contact from '@/components/contact/Contact';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact ABC Constructions | Get in Touch for Your Next Project",
  description:
    "Reach out to ABC Constructions for expert construction services, project consultations, and partnership opportunities across India. Let's build something extraordinary together.",
  keywords: [
    "contact ABC Constructions",
    "construction company contact India",
    "get a construction quote",
    "building contractors India",
    "project consultation",
    "construction services inquiry",
    "infrastructure development contact",
    "commercial and residential construction India"
  ],
  authors: [{ name: "ABC Constructions" }],
  creator: "ABC Constructions",
  publisher: "ABC Constructions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ABCconstructions.com/contact",
    title: "Contact ABC Constructions | Let's Build Together",
    description:
      "Get in touch with ABC Constructions for inquiries, project discussions, and expert construction solutions across India.",
    siteName: "ABC Constructions",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ABC Constructions Office",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ABC Constructions",
    description:
      "Reach out to ABC Constructions for expert construction services and project consultations across India.",
    images: ["/images/contact-twitter.jpg"],
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
    canonical: "https://ABCconstructions.com/contact",
  },
};


export default function ContactPage() {
  return <Contact />;
}