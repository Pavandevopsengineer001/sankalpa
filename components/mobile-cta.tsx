"use client"

import { motion } from "framer-motion"
import { Phone, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/>
    </svg>
  )
}

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: isVisible ? 0 : 120 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 md:hidden z-50"
    >

      <div className="grid grid-cols-3 shadow-2xl">

        {/* Call */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="tel:6309123731"
          className="flex flex-col items-center justify-center py-3 bg-primary text-white font-semibold"
        >
          <Phone size={20} />
          <span className="text-xs mt-1">Call</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/916309123731?text=Hi! I'm interested in Sankalpa Farms & Resorts."
          target="_blank"
          className="flex flex-col items-center justify-center py-3 bg-green-600 text-white font-semibold"
        >
          <WhatsAppIcon />
          <span className="text-xs mt-1">WhatsApp</span>
        </motion.a>

        {/* Site Visit */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="flex flex-col items-center justify-center py-3 bg-accent text-accent-foreground font-semibold"
        >
          <Calendar size={20} />
          <span className="text-xs mt-1">Site Visit</span>
        </motion.a>

      </div>

    </motion.div>
  )
}