import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#C02026",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://powernet.co.id"),
  title: {
    default: "POWERNET - Operational Technology & Custom Software Solutions",
    template: "%s | POWERNET",
  },
  description:
    "POWERNET builds operational technology designed around how organizations work. Specialized in Server & Infrastructure, Drone Solutions, and Custom Software.",
  keywords: [
    "POWERNET",
    "Operational Technology Indonesia",
    "Custom Software Development Jakarta",
    "Enterprise Server Infrastructure",
    "Aerial Drone Solutions",
    "Waste Management Supply Chain",
    "Learning Management System",
    "Docker Management",
    "IT Consultant Jakarta",
    "System Integrator Indonesia",
  ],
  authors: [{ name: "POWERNET Technology Team", url: "https://powernet.co.id" }],
  creator: "POWERNET",
  publisher: "POWERNET Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "POWERNET - Operational Technology & Custom Software Solutions",
    description:
      "POWERNET builds operational technology designed around how organizations work, reducing manual load and strengthening infrastructure.",
    url: "https://powernet.co.id",
    siteName: "POWERNET",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "POWERNET - Operational Technology & Custom Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POWERNET - Operational Technology & Custom Software Solutions",
    description:
      "POWERNET builds operational technology designed around how organizations work. Server & Infrastructure, Drone Solutions, Custom Software.",
    images: ["/icon.png"],
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
  category: "technology",
};

// JSON-LD Structured Data Schema for Google Search Engine Optimization (Rich Snippets)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "POWERNET",
  alternateName: ["POWERNET Technology", "PowerNET Indonesia"],
  url: "https://powernet.co.id",
  logo: "https://powernet.co.id/icon.png",
  description:
    "POWERNET builds operational technology designed around how your organization actually works. Specialized in Server & Infrastructure, Aerial Drone Solutions, and Custom Software Development.",
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
    streetAddress: "Jl. Margonda Raya, Kota Depok, Jawa Barat / Menara Kadin Indonesia, Jakarta Selatan",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    postalCode: "12950",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com",
    "https://www.linkedin.com",
  ],
  knowsAbout: [
    "Operational Technology",
    "Server & Infrastructure Management",
    "Aerial Drone Inspection & Mapping",
    "Custom Enterprise Software Development",
    "Supply Chain Management Systems",
    "Learning Management Systems",
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
