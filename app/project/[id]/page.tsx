"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { MobileCTA } from "@/components/mobile-cta"
import { Footer } from "@/components/footer"
import { ChevronLeft, Zap, Trees, AlertCircle, CheckCircle } from "lucide-react"

/* ---------------- PROJECT DATA ---------------- */

const projectsData: Record<string, any> = {
  "1": {
    name: "Sankalpa Heritage Kolanupaka",
    location: "Kolanupaka, Telangana",
    plotSize: "1000 - 2000 Sq.Ft",
    startingPrice: "25 Lakhs onwards",
    image: "/project-1-nature-cottage-farm-land.jpg",
    description: "Premium resort plots with direct access to the main highway",
    overview:
      "Located in the heart of Kolanupaka, this project offers the perfect blend of nature and accessibility.",
    amenities: [
      "24/7 Security",
      "Organic Farming Area",
      "Swimming Pool",
      "Clubhouse",
      "Walking Trails",
      "Beach-View Seating",
      "Play Area",
      "Cottages",
    ],
    benefits: [
      "High appreciation potential",
      "Easy highway access",
      "Near Jain temple",
      "Peaceful environment",
      "Investment-friendly",
      "Clear titles",
    ],
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8234123456!2d79.0!3d17.5",
  },

  "2": {
    name: "Sankalpa Greens Aler",
    location: "Aleru, Telangana",
    plotSize: "1500 - 2500 Sq.Ft",
    startingPrice: "35 Lakhs onwards",
    image: "/project-2-luxury-resort-cottages.jpg",
    description: "Resort-style cottages with premium amenities",
    overview:
      "Experience luxury living with premium cottages and resort-style amenities.",
    amenities: [
      "Luxury Cottages",
      "Resort Pool",
      "Spa Facilities",
      "Fine Dining",
      "Organic Farm",
      "Meditation Garden",
    ],
    benefits: [
      "Premium lifestyle",
      "Resort amenities",
      "Investment grade",
      "Future growth corridor",
    ],
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8234123456!2d79.1!3d17.6",
  },

  "3": {
    name: "Sankalpa Valley Retreat",
    location: "Kolanupaka Valley",
    plotSize: "2000 - 3000 Sq.Ft",
    startingPrice: "45 Lakhs onwards",
    image: "/project-3-valley-retreat-landscape.jpg",
    description: "Exclusive valley plots with panoramic views",
    overview:
      "Flagship valley project offering privacy, luxury, and breathtaking views.",
    amenities: [
      "Valley View Plots",
      "Infinity Pool",
      "Nature Trails",
      "Wellness Center",
    ],
    benefits: [
      "Panoramic views",
      "Exclusive plots",
      "High appreciation",
      "Luxury lifestyle",
    ],
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8234123456!2d79.0!3d17.4",
  },
}

/* ---------------- ENQUIRY FORM ---------------- */

function ProjectEnquiryForm({ projectName }: { projectName: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `Project Enquiry - ${projectName}`,
        }),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "" })
    } catch {
      setError("Failed to send enquiry. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-6 text-center bg-card border rounded-xl">
        <CheckCircle className="mx-auto text-green-600" size={32} />
        <p className="mt-2 font-semibold">Enquiry Sent!</p>
        <p className="text-sm text-muted-foreground">We will contact you soon</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-card border rounded-xl space-y-4">
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <input
        required
        placeholder="Your Name"
        className="w-full border p-2 rounded"
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        required
        placeholder="Phone Number"
        className="w-full border p-2 rounded"
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
      />

      <input
        required
        placeholder="Email"
        className="w-full border p-2 rounded"
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />

      <button className="w-full bg-accent text-white py-2 rounded">
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  )
}

/* ---------------- MAIN PAGE ---------------- */

export default function ProjectDetail() {
  const params = useParams()
  const id = params.id as string

  const project = projectsData[id]

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Project Not Found</p>
      </main>
    )
  }

  return (
    <>
      <Header />

      <section className="relative h-96">
        <img src={project.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-6 left-6 text-white">
          <Link href="/" className="flex items-center gap-2 mb-2">
            <ChevronLeft /> Back
          </Link>
          <h1 className="text-4xl font-bold">{project.name}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <p className="text-lg text-muted-foreground">{project.overview}</p>

          <div>
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-3">
              {project.amenities.map((a: string) => (
                <div key={a} className="flex gap-2 items-center border p-3 rounded">
                  <Zap className="text-accent" /> {a}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            {project.benefits.map((b: string) => (
              <div key={b} className="flex gap-2 items-center border p-3 rounded mb-2">
                <Trees className="text-primary" /> {b}
              </div>
            ))}
          </div>

          <iframe
            src={project.googleMapsEmbed}
            className="w-full h-96 rounded-xl"
            loading="lazy"
          />
        </div>

        <ProjectEnquiryForm projectName={project.name} />
      </section>

      <MobileCTA />
      <Footer />
    </>
  )
}
