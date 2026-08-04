"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Gift, CheckCircle, AlertCircle, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function PopupLeadForm() {

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {

    if (!mounted) return

    const seen = sessionStorage.getItem("sankalpa_popup_seen")

    if (seen) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 50000)

    return () => clearTimeout(timer)

  }, [mounted])


  useEffect(() => {

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }

    window.addEventListener("keydown", esc)

    return () => window.removeEventListener("keydown", esc)

  }, [])


  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("sankalpa_popup_seen", "true")
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    if (error) setError("")
  }


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setLoading(true)
    setError("")

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: "Lead from popup form",
        }),
      })

      if (!res.ok) {
        throw new Error("Submission failed")
      }

      setSubmitted(true)

      sessionStorage.setItem("sankalpa_popup_seen", "true")

      setTimeout(() => {
        setIsOpen(false)
        setSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
        })
      }, 2500)

    } catch {
      setError("Submission failed. Please call 6309123731")
    } finally {
      setLoading(false)
    }

  }


  if (!mounted) return null


  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleClose}
        >

          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}

            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white relative">

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:opacity-70"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-accent-foreground text-sm font-semibold mb-2 uppercase tracking-[0.2em]">
                <Sparkles size={18} />
                Exclusive Invitation
              </div>

              <h3 className="text-3xl font-bold tracking-tight">
                Launch pricing for premium resort plots
              </h3>

              <p className="text-white/90 text-sm mt-2 leading-relaxed">
                Secure your Sankalpa Farms & Resorts plot with priority pricing and exclusive member benefits.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold shadow-lg">
                <Gift size={16} className="text-accent-foreground" />
                Free Resort Membership
              </div>

            </div>


            {/* FORM */}

            <div className="p-6">

              {submitted ? (

                <div className="text-center py-8">

                  <CheckCircle size={40} className="mx-auto text-green-600 mb-3" />

                  <h4 className="text-lg font-bold">
                    Thank You!
                  </h4>

                  <p className="text-sm text-gray-600">
                    Our team will contact you shortly.
                  </p>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    required
                    className="w-full px-4 py-3 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />

                  <button
                    disabled={loading}
                    className="w-full py-3 bg-accent text-accent-foreground rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition"
                  >
                    <Send size={16} />
                    {loading ? "Submitting..." : "Reserve Launch Offer"}
                  </button>

                </form>

              )}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}