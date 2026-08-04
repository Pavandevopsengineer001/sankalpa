"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Calendar } from "lucide-react"

interface NavItem {
  label: string;
  href: string;
}

// Global Static Dataset to prevent re-instantiation cycles
const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  // { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
]

function MobileMenu({
  isOpen,
  setIsOpen,
  active,
  handleNavClick,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  active: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="font-bold text-emerald-800">Sankalpa Portal</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl font-bold transition-all ${
                    active === item.href ? "bg-emerald-50 text-emerald-700" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:6309123731"
              className="mt-auto flex items-center justify-center gap-2 py-4 bg-emerald-600 text-white rounded-xl font-bold"
            >
              <Phone size={18} /> Call Sales Team
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>("#home")
  const [scrolled, setScrolled] = useState<boolean>(false)
  const isScrollingRef = useRef<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (isScrollingRef.current) return
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      const scrollPos = currentScrollY + 140
      for (const item of NAVIGATION_ITEMS) {
        const section = document.querySelector(item.href) as HTMLElement | null
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(item.href)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    setIsOpen(false)
    setActive(href)
    const section = document.querySelector(href) as HTMLElement | null
    if (section) {
      isScrollingRef.current = true
      window.scrollTo({ top: section.offsetTop - 76, behavior: "smooth" })
      setTimeout(() => {
        isScrollingRef.current = false
      }, 800)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b select-none ${
          scrolled ? "bg-white/95 border-emerald-100/60 shadow-md h-20" : "bg-white border-transparent h-28"
        }`}
      >
        <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Wrapper Row - Optimized sizing prevents distortion or clipping */}
            <Link href="/" className="flex items-center h-full group focus-visible:outline-emerald-600 rounded-xl">
              <div
                className={`relative flex items-center justify-start transition-all duration-300 ${
                  scrolled 
                    ? "w-[150px] h-[50px] md:w-[180px] md:h-[58px]" 
                    : "w-[170px] h-[60px] md:w-[220px] md:h-[76px]"
                }`}
              >
                <Image
                  src="/sankalpa-logo.png"
                  alt="Sankalpa Farms Logo"
                  fill
                  sizes="(max-width: 768px) 270px, 320px"
                  priority
                  className="object-contain object-left filter brightness-100 drop-shadow-xs transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </Link>

            {/* Nav Menu Array Block */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isCurrent = active === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-sm font-bold px-4 py-2 rounded-full transition-colors ${
                      isCurrent ? "text-emerald-800" : "text-gray-600 hover:text-emerald-700"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isCurrent && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-emerald-50 rounded-full border border-emerald-100"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA Desktop Controls */}
            <div className="flex items-center gap-4">
              <a
                href="tel:6309123731"
                className="hidden md:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-emerald-600/10 transition-all hover:-translate-y-0.5"
              >
                <Calendar size={15} /> Book Visit
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2.5 bg-gray-50 rounded-xl border border-gray-200 text-emerald-700 hover:bg-gray-100"
                aria-label="Open global nav items menu"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} active={active} handleNavClick={handleNavClick} />
    </>
  )
}
