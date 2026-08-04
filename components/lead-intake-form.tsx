"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

export function LeadIntakeForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.phone.replace(/\D/g, "").length !== 10) {
      setError("Please enter a valid 10-digit mobile number.")
      return
    }
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: "Lead captured from inline landing page pricing block.",
        }),
      })
      if (!response.ok) {
        const data = await response.json()
        setError(data.error || "Submission failed. Please check fields.")
        return
      }
      setSubmitted(true)
    } catch {
      setError("Submission failed. Call our sales desk directly at 6309123731.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-10">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mb-1">
          <Sparkles size={10} /> Live Inventory
        </span>
        <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
          Unlock Complete Project Brochure
        </h3>
        <p className="text-gray-500 text-xs font-semibold mt-1">
          Submit details to receive surveyor coordinates and transparent price quote maps.
        </p>
      </div>

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="py-12 text-center bg-emerald-50/50 rounded-2xl border border-emerald-100"
        >
          <div className="inline-block p-3 bg-emerald-100 rounded-full mb-3 text-emerald-600">
            <CheckCircle size={40} />
          </div>
          <h4 className="text-lg font-black text-gray-900 tracking-tight">Verification Profile Received</h4>
          <p className="text-xs text-gray-500 font-semibold max-w-xs mx-auto mt-1">
            An active Kolanupaka infrastructure coordinator will connect to your line shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-700 text-xs font-semibold">
              <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}
          
          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase tracking-wider text-gray-500 pl-1">Full Name</label>
            <input 
              type="text" 
              required 
              disabled={loading} 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              placeholder="Enter your full name" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase tracking-wider text-gray-500 pl-1">Phone Number</label>
            <input 
              type="tel" 
              required 
              disabled={loading} 
              value={formData.phone} 
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              placeholder="10 digit mobile phone layout" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold uppercase tracking-wider text-gray-500 pl-1">Email Address</label>
            <input 
              type="email" 
              required 
              disabled={loading} 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              placeholder="yourname@domain.com" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:bg-gray-100 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-xl"
          >
            <Send size={15} />
            {loading ? "Transmitting Fields..." : "Get Price Details"}
          </button>
          
          <p className="text-center text-[10px] text-gray-400 font-semibold tracking-wide">
            🔒 Protected Platform Pipeline • Encrypted Data Routing
          </p>
        </form>
      )}
    </div>
  )
}
