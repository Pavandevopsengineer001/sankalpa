"use client"

import { useState } from "react"
import { Camera, Gift } from "lucide-react"
import { GalleryTile, LightboxModal, type GalleryItem } from "./gallery-tile"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const collection: GalleryItem[] = [
    { id: 1, title: "Grand Entrance Architectural Arch", category: "Infrastructure", image: "/g-1.jpg", placeholder: true },
    { id: 2, title: "Twin Swimming Pools Infrastructure", category: "Amenities", image: "/g-2.jpg", placeholder: true },
    { id: 3, title: "30 Feet Wide Blacktop Roads", category: "Infrastructure", image: "/g-3.jpg", placeholder: true },
    { id: 4, title: "Scenic Countryside Sunset Vistas", category: "Views", image: "/g-4.jpg", placeholder: true },
    { id: 5, title: "1-Acre Premium Social Clubhouse", category: "Amenities", image: "/g-5.jpg", placeholder: true },
    { id: 6, title: "Pristine Green Space Nature Trails", category: "Environment", image: "/g-6.jpg", placeholder: true },
    { id: 7, title: "Pre-Marked Demarcated Farm Plots", category: "Infrastructure", image: "/g-7.jpg", placeholder: true },
    { id: 8, title: "Historic Surrounding Tourism Hubs", category: "Surroundings", image: "/g-8.jpg", placeholder: true },
  ]

  const segmentCategories = ["All", "Infrastructure", "Amenities", "Environment", "Views"]
  const filteredDataset = filter === "All" ? collection : collection.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wider mb-6">
            <Camera size={13} /> Curated Project Visuals
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6 tracking-tight">
            Sankalpa Project Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Take a spatial walkthrough across our 15-acre managed resort footprint near historic Kolanupaka. Discover your upcoming weekend holiday destination.
          </p>
        </div>

        {/* High-Intent "Curated Alert" Card */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 border border-emerald-950 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-emerald-400 mt-0.5">
              <Camera size={22} />
            </div>
            <div>
              <p className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                Actual Site Visuals System Initializing
                <span className="text-[10px] bg-amber-500 text-gray-950 font-black px-2 py-0.5 rounded-sm uppercase tracking-wide">Plots from ₹4.5L</span>
              </p>
              <p className="text-xs md:text-sm text-emerald-100/70 font-medium leading-relaxed mt-1 max-w-2xl">
                Our premium photographic portfolio is running final rendering checks. Secure your spot on our complimentary luxury transit shuttle to view the operational pools and completed cottages this Sunday in person!
              </p>
            </div>
          </div>
          <a href="tel:6309123731" className="w-full md:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all shadow-lg flex-shrink-0">
            <Gift size={14} /> Book Free Sunday Tour
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {segmentCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 border ${
                filter === cat
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-emerald-500 hover:text-emerald-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredDataset.map((image, idx) => (
            <GalleryTile key={image.id} img={image} idx={idx} onSelect={setSelectedImage} />
          ))}
        </div>

      </div>

      <LightboxModal activeImg={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}
