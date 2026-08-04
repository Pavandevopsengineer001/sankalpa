"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Car, Plane, Building, Route, Church, Star } from "lucide-react"
import { InteractiveMap } from "./interactive-map"

interface DistanceItem {
  place: string;
  time: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

function DistanceTile({ item, index }: { item: DistanceItem; index: number }) {
  const IconComponent = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4), ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="p-5 rounded-2xl bg-white border border-gray-100 text-center hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-950/[0.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div className="w-11 h-11 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
        <IconComponent size={20} />
      </div>
      <div>
        <p className="text-xl font-serif font-black text-emerald-700 mb-0.5 tracking-tight">
          {item.time}
        </p>
        <p className="text-xs text-gray-500 font-bold tracking-tight leading-snug">
          {item.place}
        </p>
      </div>
    </motion.div>
  )
}

export function LocationSection() {
  const distanceMatrix: DistanceItem[] = [
    { place: "Warangal Highway Corridor", time: "5 Mins", icon: Route },
    { place: "Yadadri Temple Hub", time: "15 Mins", icon: Church },
    { place: "Komuravelli Temple Node", time: "15 Mins", icon: Church },
    { place: "Regional Ring Road (RRR)", time: "18 Mins", icon: Route },
    { place: "AIIMS Hospital Complex", time: "20 Mins", icon: Building },
    { place: "Warangal Textile Park / Airport", time: "60 Mins", icon: Plane },
  ]

  const highlights = [
    "Directly adjacent to the active Aler – Siddipet Transit Highway",
    "Immediate proximity to the historical Someshwara Swamy Temple grounds",
    "Minutes away from the iconic 2,000+ year-old Kolanupaka Jain Temple",
    "Adjacent to the proposed state-grade KYKK Tourism Road (Keesara–Yadadri–Kolanpaka–Komuravelli)",
    "Positioned directly in the line of rapid infrastructure expansion corridors",
    "Enclosed within a pristine countryside microclimate with clear air and clean water",
  ]

  return (
    <section id="location" className="py-20 sm:py-28 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wider mb-6">
            <MapPin size={13} className="text-emerald-600" /> Strategic Geography Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Prime Kolanupaka Connectivity
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Perfectly integrated along Telangana's fastest-growing spiritual tourism corridor. Enjoy a scenic, traffic-free weekend escape from Hyderabad.
          </p>
        </div>

        {/* Distance Grid Loop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-14 md:mb-16">
          {distanceMatrix.map((item, index) => (
            <DistanceTile key={index} item={item} index={index} />
          ))}
        </div>

        {/* Split Details Array */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 md:mb-20">
          
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-white border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6 text-emerald-800">
                <MapPin size={22} className="text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight text-gray-900">
                  Regional Spatial Highlights
                </h3>
              </div>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-600 leading-snug">
                    <Star size={15} className="text-amber-500 mt-1 flex-shrink-0 fill-amber-500" />
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-4 bg-emerald-50/60 border border-emerald-100/50 rounded-xl flex items-center justify-between text-sm font-bold text-emerald-900">
              <div className="flex items-center gap-2">
                <Navigation size={16} className="text-emerald-600 animate-pulse" />
                <span>Kolanupaka, Yadadri Corridor</span>
              </div>
              <span className="text-xs uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-md">Plots from ₹4.5L</span>
            </div>
          </motion.div>

          {/* Investment Context Layer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white shadow-xl border border-emerald-950 flex flex-col justify-between"
          >
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight mb-2">
                Why Invest In This Sector?
              </h3>
              
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-emerald-400 mt-0.5">
                  <Church size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base tracking-tight mb-1">Spiritual Tourism Infrastructure</h4>
                  <p className="text-sm text-emerald-100/80 leading-relaxed font-medium">
                    Flanked safely by institutions including Yadadri, Komuravelli, and the ancient Jain Temple, ensuring massive land appreciation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-emerald-400 mt-0.5">
                  <Route size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base tracking-tight mb-1">High-Velocity Connectivity</h4>
                  <p className="text-sm text-emerald-100/80 leading-relaxed font-medium">
                    Adjacent to the incoming KYKK corridor, linking massive tourism centers directly together while offering breakout highway access.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-emerald-400 mt-0.5">
                  <Car size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base tracking-tight mb-1">Regional Growth Metrics</h4>
                  <p className="text-sm text-emerald-100/80 leading-relaxed font-medium">
                    Positioned perfectly near the upcoming Regional Ring Road (RRR) loop, the Mega Textile Park, and AIIMS healthcare installations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-emerald-400">
              <span>Double Size Value Deal</span>
              <span className="text-white text-sm font-serif font-black">242 Sq. Yds. — ₹8.0 Lakhs</span>
            </div>
          </motion.div>
        </div>

        {/* Modularized Map Section */}
        <InteractiveMap />

      </div>
    </section>
  )
}
