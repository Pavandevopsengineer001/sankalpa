"use client"

import { motion } from "framer-motion"
import {
  Leaf,
  Sun,
  TrendingUp,
  Shield,
  MapPin,
  Home,
  Trees,
  Sparkles,
  Gift,
  CreditCard,
} from "lucide-react"

const highlights = [
  {
    icon: Leaf,
    title: "Natural Green Environment",
    description:
      "Surrounded by lush greenery with mahogany and fruit plantations that create a refreshing eco-friendly lifestyle.",
  },
  {
    icon: Sun,
    title: "Perfect Weekend Getaway",
    description:
      "Enjoy cottages, glam pods, swimming pool and beach-view gazebo for a peaceful escape from city life.",
  },
  {
    icon: TrendingUp,
    title: "High Growth Investment",
    description:
      "Strategically located near the proposed KYKK Road with strong appreciation potential.",
  },
  {
    icon: Shield,
    title: "Clear Legal Documentation",
    description:
      "100% verified legal documentation ensuring secure and transparent property ownership.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Close to Yadadri Temple, Komuravelli Temple, AIIMS, RRR, and major highway connectivity.",
  },
  {
    icon: Home,
    title: "Premium Amenities",
    description:
      "Clubhouse, swimming pool, OAT with campfire, party lawn, sports courts and more.",
  },
  {
    icon: Trees,
    title: "Plantation Benefits",
    description:
      "Mahogany and fruit plantations included with each plot along with boundary curbing stones.",
  },
  {
    icon: Sparkles,
    title: "1 Acres Amenities",
    description:
      "Enjoy world-class lifestyle amenities spread across 1.5 acres inside the gated community.",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="highlights"
      className="py-20 sm:py-28 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
            <Sparkles size={16} />
            Why Pay More?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Project Highlights
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Own the same resort lifestyle for significantly less with premium plots near Kolanupaka.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                <highlight.icon size={26} className="text-primary" />
              </div>

              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                {highlight.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing / Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground text-center relative overflow-hidden shadow-2xl"
        >
          {/* background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">

            <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-6">
              <Gift size={18} />
              Limited Time Launch Offer
            </span>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Attractive Pricing with Easy EMI Options
            </h3>

            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Invest in premium farmland at competitive prices. Every buyer gets
              <strong> FREE Resort Membership</strong> along with flexible EMI
              payment options.
            </p>

            {/* Offer Points */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <CreditCard size={20} className="text-accent" />
                <span>EMI Available</span>
              </div>

              <div className="flex items-center gap-2">
                <Gift size={20} className="text-accent" />
                <span>Free Resort Membership</span>
              </div>

              <div className="flex items-center gap-2">
                <Shield size={20} className="text-accent" />
                <span>Clear Title Plots</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <motion.a
                href="tel:6309123731"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl shadow-lg text-lg"
              >
                Call For Price Details
              </motion.a>

              <motion.a
                href="https://wa.me/916309123731?text=Hi!%20I'm%20interested%20in%20Sankalpa%20Farms%20%26%20Resorts.%20Please%20share%20pricing%20details."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/15 backdrop-blur-md text-primary-foreground font-bold rounded-xl border border-white/30 text-lg"
              >
                WhatsApp Us
              </motion.a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}