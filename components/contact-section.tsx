"use client"

import { Phone, MapPin, CreditCard, Gift, Sparkles } from "lucide-react"
import { CallbackForm } from "./callback-form"

interface ContactCardProps {
  href?: string;
  target?: string;
  rel?: string;
  icon: React.ReactNode;
  title: string;
  detail: string;
}

function WhatsAppIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
  )
}

function TouchpointCard({ href, target, rel, icon, title, detail }: ContactCardProps) {
  const containerClasses = "p-6 md:p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
  
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={containerClasses}>
        <div className="text-emerald-400 mb-4">{icon}</div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
          <p className="text-emerald-100/80 text-sm mt-1 font-medium">{detail}</p>
        </div>
      </a>
    )
  }
  return (
    <div className={containerClasses}>
      <div className="text-emerald-400 mb-4">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        <p className="text-emerald-100/80 text-sm mt-1 font-medium">{detail}</p>
      </div>
    </div>
  )
}

export function ContactSection() {
  // ⚡ Universal API routing layout pre-appending country metrics with zero special string variables breakdown crashes
  const footerWhatsappUrl = "https://whatsapp.com"

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-emerald-300 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={13} className="text-emerald-400" /> Book Free Sunday Site Visit
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            Schedule Your Private Site Tour
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with our site concierge team. We provide complimentary weekend family transit, continuous pricing breakdowns, and immediate resort cottage access runs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/5 text-xs md:text-sm font-semibold text-white">
            <CreditCard size={16} className="text-emerald-400" /> Tailored Payment Options Active
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/5 text-xs md:text-sm font-semibold text-white">
            <Gift size={16} className="text-emerald-400" /> Free Immediate Resort Access Club Pass
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500 text-gray-950 text-xs md:text-sm font-black uppercase tracking-wider shadow-lg">
            🔥 121 Sq. Yds at Just ₹4.5 Lakhs
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          <TouchpointCard href="tel:6309123731" icon={<Phone size={30} />} title="Call Main Office" detail="+91 6309123731" />
          <TouchpointCard href={footerWhatsappUrl} target="_blank" rel="noopener noreferrer" icon={<WhatsAppIcon size={30} />} title="WhatsApp Connect" detail="Chat instantly with site manager" />
          <TouchpointCard icon={<MapPin size={30} />} title="Project Destination" detail="Near Historic Kolanupaka, Telangana" />
        </div>

        <div className="max-w-2xl mx-auto">
          <CallbackForm />
        </div>
      </div>
    </section>
  )
}
