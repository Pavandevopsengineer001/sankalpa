"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle, ArrowRight } from "lucide-react"

interface FooterLinkItem {
  label: string;
  href: string;
}

interface SocialLinkItem {
  href: string;
  icon: React.ReactNode;
  aria: string;
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationalLinks: FooterLinkItem[] = [
    { label: "Home Base", href: "#home" },
    { label: "Project Highlights", href: "#highlights" },
    { label: "Resort Amenities", href: "#amenities" },
    { label: "Geographic Location", href: "#location" },
    { label: "Media Gallery", href: "#gallery" },
    { label: "Connect Content", href: "#contact" },
  ]

  const corporateLinks: FooterLinkItem[] = [
    { label: "About Sankalpa Farms & Resorts", href: "#about" },
    { label: "Site Geography Portal", href: "#location" },
    { label: "Corporate Intake Forms", href: "#contact" },
  ]

  const socialChannels: SocialLinkItem[] = [
    { href: "https://facebook.com", icon: <Facebook size={18} />, aria: "Follow Sankalpa Farms on Facebook" },
    { href: "https://instagram.com", icon: <Instagram size={18} />, aria: "Follow Sankalpa Farms on Instagram" },
    { href: "https://youtu.be", icon: <Youtube size={18} />, aria: "Watch project overview on YouTube" },
  ]

  // ⚡ Universal URL Route matching your pre-defined message configuration precisely
  const whatsappUrl = "https://whatsapp.com"

  return (
    <footer className="bg-emerald-950 border-t border-emerald-900/60 text-white relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* TOP CTA ANCHOR BAR */}
        <div className="mb-16 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-900/80 to-emerald-950 border border-emerald-800/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl shadow-black/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1.5">
              <span>🔥</span> Pre-Launch Verification Pricing Active
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-black tracking-tight text-white leading-tight">
              Secure Your Plot Allocation This Weekend
            </h3>
            <p className="text-sm text-emerald-100/70 font-medium mt-1">
              Configure 121 Sq. Yds at <strong className="text-white">₹4.5L</strong> or 242 Sq. Yds at <strong className="text-white">₹8.0L</strong> with immediate resort amenities active.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap w-full lg:w-auto">
            <a 
              href="tel:6309123731" 
              className="flex-1 lg:flex-none px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/20"
            >
              <Phone size={14} /> Call Booking Desk
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 lg:flex-none px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/20"
            >
              <MessageCircle size={14} /> WhatsApp Info
            </a>
          </div>
        </div>

        {/* Informational Column Framework Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Maximized Branding Identity Frame */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group focus-visible:outline-amber-400 rounded-xl">
              <div className="relative w-52 h-20 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image 
                  src="/sankalpa_logo.png" 
                  alt="Sankalpa Farms Logo Layout" 
                  fill 
                  sizes="208px" 
                  className="object-contain object-left filter brightness-110 drop-shadow-md" 
                  priority 
                />
              </div>
            </Link>
            <p className="text-xs md:text-sm text-emerald-100/70 font-medium leading-relaxed max-w-xs">
              Sankalpa Farms transforms managed land into premium resort communities near Kolanupaka. Experience completed twin swimming pools and fully functional cottages today.
            </p>
            <div className="flex gap-2.5 pt-2">
              {socialChannels.map((chan, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.08, y: -2 }}
                  href={chan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 border border-white/5 text-emerald-300 rounded-xl hover:bg-white/10 hover:text-white transition-all shadow-inner"
                  aria-label={chan.aria}
                >
                  {chan.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links Block */}
          <div>
            <h4 className="font-serif font-black mb-6 text-sm tracking-wide text-amber-400 uppercase">
              Corporate Site Map
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              {navigationalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-emerald-100/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group">
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Profile Direct Links */}
          <div>
            <h4 className="font-serif font-black mb-6 text-sm tracking-wide text-amber-400 uppercase">
              Developer Pipeline
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              {corporateLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-emerald-100/80 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group">
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Operational Intake Lines */}
          <div>
            <h4 className="font-serif font-black mb-6 text-sm tracking-wide text-amber-400 uppercase">
              Direct Contact Lines
            </h4>
            <div className="space-y-4 text-sm font-semibold">
              <motion.a 
                whileHover={{ x: 3 }} 
                href="tel:6309123731" 
                className="flex items-center gap-3 text-emerald-100/80 hover:text-amber-400 transition-colors"
              >
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <span>+91 6309123731</span>
              </motion.a>
              <motion.a 
                whileHover={{ x: 3 }} 
                href="mailto:info@sankalpafarmsandresorts.com" 
                className="flex items-center gap-3 text-emerald-100/80 hover:text-amber-400 transition-colors truncate"
              >
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <span className="truncate">info@sankalpafarmsandresorts.com</span>
              </motion.a>
              <div className="flex items-start gap-3 text-emerald-100/70">
                <MapPin size={16} className="mt-0.5 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100/80 leading-relaxed">
                  <strong>Corporate Office:</strong><br />
                  Ishwarya Nilayam, 3rd Floor,<br />
                  Dwarakapuri Colony, Road No. 1,<br />
                  Banjara Hills, Hyderabad - 500082
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRIC LAYER */}
        <div className="border-t border-emerald-900/60 pt-6 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-semibold text-emerald-100/60 gap-4 text-center sm:text-left">
            <p className="text-emerald-100/60">
              © {currentYear} Sankalpa Farms & Resorts. Developed & Managed Corporate Ecosystem. All Rights Reserved.
            </p>
            <p className="max-w-xs leading-normal text-emerald-100/50 font-medium">
              Experience nature with thoughtfully planned farm plots and resort living. All project information is indicative and subject to applicable approvals and availability.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
