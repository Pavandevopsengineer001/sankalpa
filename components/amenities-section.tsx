"use client"

import { motion } from "framer-motion"
import { Building2, Home, Tent, Waves, Umbrella, CircleDot, Baby, Trees, Flame, PartyPopper, Volleyball, Camera, Car, Sparkles, CheckCircle2, ChevronRight } from "lucide-react"

interface AmenityItem {
  name: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  description: string;
}

// Sub-Component 1: Isolated Grid Card Element
function AmenityCard({ item, index }: { item: AmenityItem; index: number }) {
  const IconComponent = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4), ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group p-5 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-950/[0.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-inner">
          <IconComponent size={22} />
        </div>
        <h3 className="text-sm md:text-base font-bold text-gray-900 tracking-tight mb-1 group-hover:text-emerald-800 transition-colors">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 font-medium leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

// Main Production Component Hook
export function AmenitiesSection() {
  const dataset: AmenityItem[] = [
  
    { name: "Ready Farm Cottages", icon: Home, description: "Fully operational, beautifully constructed cottages for absolute comfort" },
    { name: "Twin Swimming Pools", icon: Waves, description: "Two sparkling blue, active swimming pools built for ultimate relaxation" },
    // { name: "Glamping Pods", icon: Tent, description: "Modern luxury glam pods offering a premium outdoor nature stay" },
    // { name: "Beach View Gazebos", icon: Umbrella, description: "Scenic sand-framed seating zones for peaceful weekend lounging" },
    // { name: "Box Cricket Ground", icon: CircleDot, description: "Dedicated, high-fenced box netting layout for active sports lovers" },
    { name: "Kids Play Zone", icon: Baby, description: "Securely cushioned playground curated carefully for toddler entertainment" },
    { name: "Mahogany Plantation", icon: Trees, description: "High-yield premium Mahogany timber trees planted across your acreage" },
    { name: "Fruit Plantations", icon: Sparkles, description: "Multiple organic fruit-bearing plants pre-installed on every single plot" },
    // { name: "OAT & Campfire Pit", icon: Flame, description: "Open Air Theatre projection space coupled with cozy stone campfire nodes" },
    { name: "Grand Party Lawn", icon: PartyPopper, description: "Spacious manicured green meadow ready for milestone family celebrations" },
    // { name: "Beach Volleyball", icon: Volleyball, description: "Fine sand volleyball court optimized for outdoor fitness and friendly matches" },
    // { name: "Scenic Photo Lawns", icon: Camera, description: "Artistically landscaped backdrops perfect for cinematic photography sessions" },
    { name: "30 Ft Wide Roads", icon: Car, description: "Expansive internal blacktop road infrastructure ensuring smooth vehicular access" },
  ]

  const featureChecklist = [
    "High-yield Mahogany plantation on every plot",
    "Organic fruit-bearing trees included & maintained",
    "Precision structural curbing stones for boundaries",
    "Avenue plantations with  30 feet wide internal roads",
  ]

  const launchOffers = [
    "FREE Immediate Resort Membership active for buyers",
    "Flexible payment schedules tailored to your portfolio",
    "100% Transparent business footprint with clear titles",
    "Spot registration",
  ]

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-gray-50/50 relative overflow-hidden">
      {/* Structural Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Component Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={13} className="text-emerald-600" /> Completed 1-Acre Infrastructure Hub
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6 tracking-tight leading-tight">
            World-Class Resort Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Sankalpa Farms eliminates the wait. Our twin swimming pools, premium clubhouse, and luxury cottages are fully constructed and completely operational today.
          </p>
        </motion.div>

        {/* Dynamic Responsive Matrix Loop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {dataset.map((amenity, index) => (
            <AmenityCard key={index} item={amenity} index={index} />
          ))}
        </div>

        {/* Dynamic Split Value Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Column A: Plot Features */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white shadow-xl shadow-emerald-950/10 border border-emerald-950 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight mb-6">
                Premium Plot Configurations
              </h3>
              <ul className="space-y-4">
                {featureChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base font-medium text-emerald-100/90 leading-snug">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-emerald-400">
              <span className="text-xs font-bold uppercase tracking-widest">Entry Level Size</span>
              <span className="text-lg font-serif font-black text-white">121 Sq. Yds. — ₹4.5L</span>
            </div>
          </div>

          {/* Column B: Promotional Launch Banners */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/40 text-gray-900 shadow-lg border border-amber-100/60 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-800 mb-2">
                <span>🔥</span> Phase 1 Launch Incentives
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight mb-6 text-amber-950">
                Exclusive Strategic Offers
              </h3>
              <ul className="space-y-4">
                {launchOffers.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700 leading-snug">
                    <ChevronRight size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-amber-200/60 flex items-center justify-between text-amber-800">
              <span className="text-xs font-black uppercase tracking-widest">Double Value Special</span>
              <span className="text-lg font-serif font-black text-amber-950">242 Sq. Yds. — ₹8.0L</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
