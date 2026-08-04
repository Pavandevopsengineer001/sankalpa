import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Synchronized Enterprise Alternative Typography Initialization Layer
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Sankalpa Farms & Resorts | Premium Farm Plots Near Kolanupaka",
  description: "Own premium farm plots with ready cottages, swimming pools, children's play area and resort amenities near Kolanupaka. Starting from ₹4.5 Lakhs. Direct company pricing with zero brokerage.",
  keywords: "Farm Plots Near Kolanupaka, Farm Plots Near Hyderabad, Affordable Farm Plots Telangana, Direct Company Farm Plots, No Brokerage Farm Plots, Managed Farmland, Premium Farm Community, Weekend Farm Plots, Resort Farm Plots, Farm Plots Starting ₹4.5 Lakhs",
  icons: {
    icon: [
      { url: "/sankalpa-favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/sankalpa-favicon.svg",
  },
  openGraph: {
    title: "Sankalpa Farms & Resorts | Premium Farm Plots Near Kolanupaka",
    description: "Own premium farm plots with ready cottages, swimming pools, children's play area and resort amenities near Kolanupaka. Starting from ₹4.5 Lakhs. Direct company pricing with zero brokerage.",
    type: "website",
    images: [
      {
        url: "/sankalpa-og.svg",
        width: 1200,
        height: 630,
        alt: "Sankalpa Farms & Resorts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalpa Farms & Resorts | Premium Farm Plots Near Kolanupaka",
    description: "Own premium farm plots with ready cottages, swimming pools, children's play area and resort amenities near Kolanupaka. Starting from ₹4.5 Lakhs.",
    images: ["/sankalpa-og.svg"],
  },
  robots: "index, follow",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Sankalpa Farms & Resorts",
      "url": "https://sankalpafarmsandresorts.com",
      "logo": "https://sankalpafarmsandresorts.com/sankalpa-og.svg",
      "sameAs": [
        "https://www.facebook.com/sankalpafarmsresorts",
        "https://www.instagram.com/sankalpafarmsresorts"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 6309123731",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": "en"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Sankalpa Farms & Resorts",
      "image": "https://sankalpafarmsandresorts.com/sankalpa-og.svg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolanupaka",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      },
      "telephone": "+91 6309123731",
      "priceRange": "₹4.5L onwards",
      "url": "https://sankalpafarmsandresorts.com",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      ]
    },
    {
      "@type": "RealEstateAgent",
      "name": "Sankalpa Farms & Resorts",
      "url": "https://sankalpafarmsandresorts.com",
      "telephone": "+91 6309123731",
      "areaServed": "Telangana"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1F5D3A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${cinzel.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
