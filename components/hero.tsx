"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, MapPin, Sparkles, Gift, Flame } from "lucide-react"

interface PillProps {
  label: string;
}

// Sub-Component 1: Isolated Bullet Accessory preventing compilation truncations
function FeaturePill({ label }: PillProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all cursor-default select-none"
    >
      {label}
    </motion.span>
  )
}

// Main Production Component Hook
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  const floatAnimation = {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  }

  const activePills: string[] = [
    "Mahogany Timber Plantation",
    "Organic Fruit Trees",
    "30 Ft Wide Roads",
    "Spot Registration",
    "Clear Title Verified",
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950 select-none">
      
      {/* Background Media Stage Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.08 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.8, ease: "easeOut" }} 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/divine-farms-hero.jpg')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-gray-900/50 to-emerald-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-950/40" />
      </div>

      {/* Atmospheric Ambient Accent Orbs */}
      <motion.div animate={floatAnimation} className="absolute top-24 right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl hidden lg:block pointer-events-none" />
      <motion.div animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1.2 } }} className="absolute bottom-36 left-12 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl hidden lg:block pointer-events-none" />

      {/* Main Content Layout Container */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32 flex flex-col items-center"
      >
        
        {/* Core Incentive Badge Banner */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500 rounded-full text-gray-950 text-xs md:text-sm font-black uppercase tracking-wider shadow-xl shadow-amber-500/20 border border-amber-400/30">
            <Gift size={16} className="animate-bounce" /> Free Active Resort Membership Included!
          </span>
        </motion.div>

        {/* Corporate Slogan Deck */}
        <motion.div variants={itemVariants}>
          <p className="text-amber-400 font-bold tracking-[0.25em] uppercase text-[11px] md:text-xs mb-3">
            Sankalpa Farms & Resorts  Proudly Introduces
          </p>
        </motion.div>

        {/* Primary Project Branding Title */}
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-white mb-4 tracking-tight leading-none text-balance filter drop-shadow-xl"
        >
          సుందరవనం
        </motion.h1>

        {/* Secondary Title Sub-Deck */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={18} className="text-amber-400 flex-shrink-0" />
          <p className="text-lg sm:text-xl text-emerald-300 font-serif font-semibold tracking-wide">
            Ready Resort Communities • Managed Farmlands
          </p>
          <Sparkles size={18} className="text-amber-400 flex-shrink-0" />
        </motion.div>

        {/* Headline Price Disruption Callout Array */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-2xl w-full divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          <div className="pt-2 sm:pt-0">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Starter Configuration</p>
            <p className="text-2xl font-serif font-black text-white mt-1">121 Sq. Yds — ₹4.5L</p>
          </div>
          <div className="pt-3 sm:pt-0">
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">Double Size Special Value</p>
            <p className="text-2xl font-serif font-black text-white mt-1">242 Sq. Yds — ₹8.0L</p>
          </div>
        </motion.div>

        {/* Functional Copy Summary Block */}
        <motion.p 
          variants={itemVariants} 
          className="text-sm sm:text-base md:text-lg text-emerald-100/90 mb-8 max-w-3xl leading-relaxed font-medium text-balance"
        >
          Skip the developmental waiting period. Step into a completed, fully-operational 1-acre social club framework featuring premium built cottages, twin sparkling swimming pools, glamping pods, and dedicated active play spaces.
        </motion.p>

        {/* Geography Pin Deck */}
        <motion.div 
          variants={itemVariants} 
          className="flex items-center justify-center gap-2 text-white/90 font-bold text-sm sm:text-base mb-10 bg-emerald-900/40 border border-emerald-800/40 px-4 py-1.5 rounded-full"
        >
          <MapPin size={16} className="text-amber-400 animate-pulse" />
          <span>Located Near Historic Kolanupaka, Aler Corridor, Telangana</span>
        </motion.div>

        {/* Interactive Responsive Badges Grid Loop */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2.5 max-w-3xl mb-12">
          {activePills.map((item, index) => (
            <FeaturePill key={index} label={item} />
          ))}
        </motion.div>

        {/* Conversion Action Button Architecture */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-14">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link 
              href="tel:6309123731" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-serif font-black rounded-xl transition-all duration-300 text-base tracking-wide shadow-lg shadow-emerald-950/20"
            >
              Call Booking Desk: 6309123731
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link 
              href="#highlights" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-md text-white font-serif font-black rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/25 text-base tracking-wide"
            >
              Explore Project Infrastructure
            </Link>
          </motion.div>
        </motion.div>

        {/* Urgency Trigger Alert Indicator */}
        <motion.div variants={itemVariants} className="mb-4">
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }} 
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} 
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl border border-amber-400/20 shadow-lg text-gray-950"
          >
            <Flame size={18} className="animate-pulse" />
            <span className="font-serif font-black text-sm uppercase tracking-wide">
              Phase 1 Allotment active — Book Site Tour
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Axis Down-Pointer */}
        <motion.div 
          variants={itemVariants} 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} 
          className="pt-4"
        >
          <ChevronDown size={28} className="text-emerald-300/80" />
        </motion.div>

      </motion.div>
    </section>
  )
}
