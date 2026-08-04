"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, ShieldCheck, Waves, Trees, Church, Compass } from "lucide-react"

interface HighlightCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface StatCardProps {
  value: string;
  label: string;
  detail: string;
}

// Sub-Component 1: Interactive Micro-Feature Grid Element
function HighlightItem({ title, subtitle, icon }: HighlightCardProps) {
  return (
    <div className="group aspect-square rounded-2xl overflow-hidden relative shadow-lg border border-emerald-100/40">
      <div className="absolute inset-0 z-0">
        {/* Next.js Static Asset Rule: public folder items are served directly from the root path forward */}
        <Image 
          src="/highlight.png" 
          alt={title} 
          fill 
          sizes="(max-width: 1024px) 50vw, 25vw" 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/80 to-emerald-950/40 z-10 flex flex-col items-center justify-center text-center p-5" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-5">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white mb-3 shadow-inner group-hover:bg-emerald-600/30 transition-colors duration-300">
          {icon}
        </div>
        <p className="text-white font-serif font-black text-lg tracking-wide">
          {title}
        </p>
        <p className="text-emerald-100/90 text-xs mt-1.5 font-medium tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

// Sub-Component 2: Trust-Metric Column Architecture
function StatBlock({ value, label, detail }: StatCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 text-center hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-950/[0.02] transition-all duration-300 flex flex-col justify-between">
      <div>
        <p className="text-2xl md:text-3xl font-serif font-black text-emerald-700 tracking-tight mb-2">
          {value}
        </p>
        <p className="font-bold text-gray-900 text-sm md:text-base tracking-tight">
          {label}
        </p>
      </div>
      <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs font-semibold mt-4 pt-3 border-t border-gray-50">
        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
        <span className="truncate">{detail}</span>
      </div>
    </div>
  )
}

// Main Production Component Hook
export function TrustHighlights() {
  const quickFeatures: HighlightCardProps[] = [
    { title: "Luxury Cottages", subtitle: "Fully Built & Ready", icon: <Trees size={20} /> },
    { title: "Twin Swimming Pools", subtitle: "Premium Recreational Layout", icon: <Waves size={20} /> },
    { title: "Kids Play Areas", subtitle: "Active Family Safe Hubs", icon: <Sparkles size={20} /> },
    { title: "1-Acre Amenity Center", subtitle: "Social Infrastructure Live", icon: <ShieldCheck size={20} /> },
  ]

  const metrics: StatCardProps[] = [
    { value: "₹4.5 Lakhs", label: "121 Sq. Yards Plot", detail: "Lowest Market Price" },
    { value: "₹8.0 Lakhs", label: "242 Sq. Yards Plot", detail: "Save ₹1 Lakh Instantly" },
    { value: "100% Ready", label: "Resort Infrastructure", detail: "Cottages & Pools Operational" },
    { value: "Clear Title", label: "Spot Registration", detail: "Secure Investment Layout" },
  ]

  const proximityBadges = [
    { label: "Kolanupaka Jain Temple", time: "5 Mins", icon: <Church size={14} /> },
    { label: "Yadadri Divine Temple", time: "15 Mins", icon: <Church size={14} /> },
    { label: "Komuravelli Temple Hub", time: "15 Mins", icon: <Church size={14} /> },
  ]

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-gray-50/50 relative overflow-hidden select-none">
      {/* Structural Radial Background Blurs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Component Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={13} className="text-emerald-600" /> Instant Holiday Lifestyle
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Don't Buy Future Promises.<br />Step Into a Ready Resort.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Sankalpa Farms near historic Kolanupaka introduces fully-operational luxury cottages and twin swimming pools. Own land with absolute lifestyle utility on day one.
          </p>
        </div>

        {/* Media Frame Hub Array */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
          
          {/* HIGH-CONVERSION SPIRITUAL & TOURISM INFRASTRUCTURE INFOGRAPHIC BANNER */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-emerald-950 aspect-video lg:h-full lg:min-h-[380px] group"
          >
            {/* Core Background Asset Layer */}
            <Image 
              src="/highlight.png"  
              alt="Sankalpa Farms & Resorts spiritual corridor proximity map backdrop" 
              fill 
              priority 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
            />
            
            {/* Dark Luxury Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-black/30 z-10" />

            {/* Strategic Content Grid Overlays */}
            <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between">
              
              {/* Top Banner Tag */}
              <div className="self-start px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg flex items-center gap-1.5 text-[10px] md:text-xs font-black uppercase tracking-wider text-emerald-300">
                <Compass size={14} className="text-amber-400" />
                <span>Spiritual & Resort Corridor Hub</span>
              </div>

              {/* Bottom Proximity HUD Metrics Panel */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-white tracking-tight leading-tight">
                    Nestled in Telangana's Prime Spiritual Belt
                  </h3>
                  <p className="text-emerald-100/80 text-xs md:text-sm font-medium mt-1 leading-normal max-w-md">
                    Sankalpa Farms is strategically enclosed inside a rapidly growing tourism zone, ensuring immediate vacation utility and soaring asset valuation runs.
                  </p>
                </div>

                {/* Micro Pill Row Arrays */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  {proximityBadges.map((badge, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between sm:justify-start gap-3 px-3 py-2 bg-emerald-900/90 border border-emerald-800 backdrop-blur-xs rounded-xl text-white shadow-md shadow-black/10 transition-all hover:border-amber-400 duration-300"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-100/90 tracking-tight">
                        <span className="text-amber-400">{badge.icon}</span>
                        <span>{badge.label}</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-gray-950 px-2 py-0.5 rounded-md">
                        {badge.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Grid Layout Sub-Blocks */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {quickFeatures.map((item, index) => (
              <HighlightItem key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />
            ))}
          </div>

        </div>

        {/* Pricing Matrix & Trust Layer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((stat, index) => (
            <StatBlock key={index} value={stat.value} label={stat.label} detail={stat.detail} />
          ))}
        </div>

      </div>
    </section>
  )
}
