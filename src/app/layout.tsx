import type { Metadata } from "next";
import { Inter_Tight, Archivo } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "POWERNET - Operational Technology & Custom Software Solutions",
    template: "%s | POWERNET",
  },
  description:
    "POWERNET builds operational technology designed around how your organization actually works. Specialized in Server & Infrastructure, Aerial Drone Solutions, and Enterprise Custom Software.",
  keywords: [
    "POWERNET",
    "Operational Technology",
    "Server Infrastructure",
    "Drone Solutions",
    "Custom Software Development",
    "Waste Management Supply Chain",
    "LMS Software",
    "Docker Management",
    "IT Consultant Jakarta",
  ],
  authors: [{ name: "POWERNET Technology Team" }],
  creator: "POWERNET",
  publisher: "POWERNET Technology",
  metadataBase: new URL("https://powernet.co.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "POWERNET - Operational Technology & Custom Software Solutions",
    description:
      "POWERNET builds operational technology designed around how your organization actually works, reducing manual load and strengthening infrastructure.",
    url: "https://powernet.co.id",
    siteName: "POWERNET",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/C02026/FFFFFF?text=POWERNET+Operational+Technology",
        width: 1200,
        height: 630,
        alt: "POWERNET Operational Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POWERNET - Operational Technology & Custom Software Solutions",
    description:
      "POWERNET builds operational technology designed around how your organization actually works.",
    images: ["https://placehold.co/1200x630/C02026/FFFFFF?text=POWERNET"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data Schema for Google Search Engine Optimization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "POWERNET",
  url: "https://powernet.co.id",
  logo: "https://placehold.co/181x44?text=POWERNET",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-812-9819-2099",
    contactType: "customer service",
    email: "marketing@powernet.co.id",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Menara Kadin Indonesia Jl. H.R. Rasuna Said Blok X-5 KAV. 2-3",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com",
    "https://www.linkedin.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${interTight.variable} ${archivo.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#262626] font-inter-tight font-sans">
        {children}
      </body>
    </html>
  );
}
