"use client"

import { motion } from "framer-motion"

export function InteractiveMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center w-full"
    >
      <h3 className="text-xl md:text-2xl font-serif font-black text-gray-900 mb-6 tracking-tight uppercase">
        Explore Sankalpa Geography
      </h3>
      
      <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl h-80 sm:h-[420px] relative bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.502726016319!2d79.03261787436399!3d17.69924544374786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb5fc95d8b9add%3A0x6ebe3eb2914204c2!2sKolanupaka%20Swetamber%20Jain%20Tirth%20Mandir.!5e1!3m2!1sen!2sin!4v1785877072635!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Sankalpa Farms & Resorts Interactive Geographic Map Locator"
          allowFullScreen={true} // Fixed: CamelCase parameter syntax
        />
      </div>
      
      <p className="text-gray-500 font-semibold text-xs mt-4">
        *Exact satellite survey boundary coordinates are unlocked immediately during your weekend site visit booking.
      </p>
    </motion.div>
  )
}
