"use client"

import { motion } from "framer-motion"
import { Award, Target, Eye, CheckCircle2, Building2, Users, Handshake, Phone } from "lucide-react"

interface SectionHeaderProps {
  developerName: string;
}

interface RightGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
  borderClass: string;
  iconTextClass: string;
}

// Sub-Component 1: Reusable Core Metric Block Layout
function CompetencyBlock({ title, description, icon, bgClass, borderClass, iconTextClass }: RightGridItemProps) {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${bgClass} ${borderClass}`}>
      <div className="flex gap-4 items-start">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconTextClass}`}>
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-serif font-black text-gray-900 mb-1.5 leading-snug">
            {title}
          </h4>
          <p className="text-sm text-gray-600 font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

// Sub-Component 2: Section Header Structure
function SectionHeader({ developerName }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="text-center mb-16 sm:mb-20"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wider mb-6">
        <Building2 size={13} className="text-emerald-600" /> Corporate Developer Profile
      </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6 tracking-tight">
        {developerName}
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
        Pioneering ultra-affordable, luxury lifestyle destinations across Telangana where legal transparency, rapid land appreciation, and immediate resort utilities converge.
      </p>
    </motion.div>
  )
}

// Main Production Component Hook
export function AboutSection() {
  const corporateTrustPoints = [
    "100% Transparent business practices",
    "Clear legal documentation & spot registration ready",
    "Unbeatable pricing metrics (Plots from ₹4.5L to ₹8L)",
    "Fully-completed, functional resort infrastructure active",
    "Customer-first post-sale management structures",
    "Continuous site security & plantation preservation guarantees",
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Radial Backdrop Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Render Section Header */}
        <SectionHeader developerName="Sankalpa Farms & Resorts" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE LAYER: Corporate Core Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 p-8 md:p-10 text-white shadow-xl shadow-emerald-950/10 border border-emerald-950">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10 text-emerald-400">
                  <Building2 size={26} />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-black mb-4 tracking-tight">
                  Sankalpa Farms & Resorts proudly introduces <span className="text-emerald-100">సుందరవనం</span>
                </h3>
                
                <p className="text-emerald-100/90 text-sm md:text-base font-medium leading-relaxed mb-8">
                  Sankalpa Farms & Resorts stands as a trusted hallmark in Telangana's land development landscape. Driven by an uncompromised commitment to legal integrity and premium amenities, we transform raw acres into managed farmland resort ecosystems. We design destinations where families can enjoy immediate vacation utilities while their wealth appreciates safely.
                </p>

                {/* Counter Metric Row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
                  <div className="space-y-1">
                    <Users size={22} className="mx-auto text-emerald-400" />
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">100+ Happy Families</p>
                  </div>
                  <div className="space-y-1">
                    <Handshake size={22} className="mx-auto text-emerald-400" />
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">Spot Registration</p>
                  </div>
                  <div className="space-y-1">
                    <Award size={22} className="mx-auto text-emerald-400" />
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Context Callout Block */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-200 transition-colors duration-300">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Direct Inquiry Lines to Sankalpa Farms & Resorts Corporate Office
              </p>
              <a 
                href="tel:6309123731" 
                className="inline-flex items-center gap-2.5 text-xl md:text-2xl font-serif font-black text-emerald-800 hover:text-emerald-700 transition-colors"
              >
                <Phone size={22} className="text-emerald-600" /> +91 6309123731
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE LAYER: Vision Matrix Stack & Bullet Compliance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <CompetencyBlock 
              title="Our Mission"
              description="To deliver highly secure, clearly titled farmland resort assets packed with premium, active recreational facilities that democratize vacation home ownership for Hyderabad professionals."
              icon={<Target size={22} />}
              bgClass="bg-emerald-50/40"
              borderClass="border-emerald-100/50"
              iconTextClass="bg-emerald-100/60 text-emerald-800"
            />

            <CompetencyBlock 
              title="Our Vision"
              description="To set the golden standard for structural transparency and rapid asset delivery in managed eco-farmland spaces across Southern India."
              icon={<Eye size={22} />}
              bgClass="bg-amber-50/40"
              borderClass="border-amber-100/50"
              iconTextClass="bg-amber-100/60 text-amber-800"
            />

            <CompetencyBlock 
              title="Our Values"
              description="Legal absolute transparency , unwavering building excellence, post-sale community integration, and delivery of infrastructure that honors your hard-earned investments."
              icon={<Award size={22} />}
              bgClass="bg-gray-50/80"
              borderClass="border-gray-100"
              iconTextClass="bg-gray-200/70 text-gray-700"
            />

            {/* Checklist Matrix Area */}
            <div className="pt-4">
              <h4 className="text-lg font-serif font-black text-gray-900 mb-4 tracking-tight">
                Why Choose Sankalpa Farms & Resorts?
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {corporateTrustPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-gray-700 font-semibold leading-snug">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
