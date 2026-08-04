"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ImageIcon } from "lucide-react"

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  placeholder: boolean;
}

export function GalleryTile({ img, idx, onSelect }: { img: GalleryItem; idx: number; onSelect: (image: GalleryItem) => void }) {
  const isFeatured = idx === 0
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: Math.min(idx * 0.03, 0.3) }}
      viewport={{ once: true }}
      className={`group rounded-3xl overflow-hidden cursor-pointer bg-gray-50 border border-gray-100 hover:border-emerald-500 transition-all duration-300 ${isFeatured ? "sm:col-span-2 sm:row-span-2" : ""}`}
      onClick={() => onSelect(img)}
    >
      <div className={`relative overflow-hidden ${isFeatured ? "h-64 sm:h-full min-h-[260px]" : "h-40 sm:h-48"}`}>
        <div className="absolute inset-0 bg-emerald-50/50 flex flex-col items-center justify-center p-4">
          <ImageIcon size={isFeatured ? 40 : 26} className="text-emerald-700/40 mb-2" />
          <p className="text-xs sm:text-sm font-bold text-gray-900 text-center tracking-tight leading-tight">{img.title}</p>
          <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mt-1">{img.category}</p>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md mt-2.5">Live Preview Soon</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 to-emerald-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5 text-center">
          <div>
            <p className="text-white font-serif font-black text-base md:text-lg tracking-wide">{img.title}</p>
            <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mt-1">{img.category}</p>
            <p className="text-white/60 text-[11px] font-medium mt-3 border-t border-white/10 pt-2">Click to expand overview</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function LightboxModal({ activeImg, onClose }: { activeImg: GalleryItem | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {activeImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xs z-50 flex items-center justify-center p-4 select-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-emerald-700 transition-colors z-10 bg-gray-50 rounded-xl p-2.5 border border-gray-200">
              <X size={18} />
            </button>
            <div className="aspect-video bg-emerald-50/50 rounded-2xl border border-emerald-100/40 flex flex-col items-center justify-center p-6 text-center">
              <ImageIcon size={48} className="text-emerald-700/40 mb-3" />
              <p className="text-xl md:text-2xl font-serif font-black text-gray-900 tracking-tight">{activeImg.title}</p>
              <p className="text-xs text-gray-400 font-extrabold uppercase tracking-widest mt-1">{activeImg.category}</p>
              <p className="text-emerald-800 text-xs font-bold mt-4 bg-emerald-100 px-3 py-1 rounded-full">High Resolution Rendering In Progress</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
