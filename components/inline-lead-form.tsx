"use client"

import { motion } from "framer-motion"
import { Phone, Gift, Percent } from "lucide-react"
import { LeadIntakeForm } from "./lead-intake-form"

interface OfferBulletProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  iconBgClass: string;
}

function OfferBullet({ icon, title, subtitle, iconBgClass }: OfferBulletProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100/80 shadow-xs">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBgClass}`}>
        {icon}
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm md:text-base leading-snug">
          {title}
        </p>
        <p className="text-xs text-gray-500 font-semibold mt-0.5 leading-normal">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export function InlineLeadForm() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/50 relative overflow-hidden select-none">
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
              <Gift size={14} className="text-emerald-600" />
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Phase 1 Pre-Launch Allocations Active
              </span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Fulfill Your Vision of Managed Farmland Ownership
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed font-medium">
              Secure your legacy at <strong className="text-emerald-800">Sankalpa Farms</strong> near historic Kolanupaka. Acquire an entry level <strong className="text-gray-950">121 Sq. Yds. plot for just ₹4.5L</strong>, or choose a double-value <strong className="text-gray-950">242 Sq. Yds. plot configured at just ₹8.0L</strong>. Enjoy instant access to completed twin swimming pools and fully functional cottages.
            </p>

            <div className="space-y-4 mb-8 max-w-md">
              <OfferBullet 
                icon={<Percent size={18} />}
                title="Tailored Installment Plans Available"
                subtitle="Flexible payment milestones customized to your budget profile."
                iconBgClass="bg-amber-100 text-amber-800"
              />
              <OfferBullet 
                icon={<Gift size={18} />}
                title="Immediate Resort Membership Pass Unlocked"
                subtitle="Enjoy fully functional on-site recreational facilities from day one."
                iconBgClass="bg-emerald-100 text-emerald-800"
              />
            </div>

            <a 
              href="tel:6309123731" 
              className="inline-flex items-center gap-2.5 text-lg font-serif font-black text-emerald-800 hover:text-emerald-600 transition-colors"
            >
              <Phone size={20} className="text-emerald-600" /> Call Booking Desk: +91 6309123731
            </a>
          </motion.div>

          {/* RIGHT SIDE LOADED SUB-MODULE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <LeadIntakeForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
