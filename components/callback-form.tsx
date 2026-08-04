"use client"

import type React from "react"
import { useState } from "react"
import { Send, AlertCircle, CheckCircle } from "lucide-react"

export function CallbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.phone.replace(/\D/g, "").length !== 10) {
      setError("Please input a standard 10-digit mobile number.")
      return
    }
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const payload = await res.json()
        setError(payload.error || "Form pipeline submission failure.")
        return
      }
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 4000)
    } catch {
      setError("Network timeout. Connect to our sales line directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[28px] shadow-2xl p-6 md:p-10 space-y-5 border border-gray-100">
      <div className="text-center mb-2">
        <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Request an Immediate Callback</h3>
        <p className="text-xs text-gray-500 font-semibold mt-1">Configure your plot preference: 121 Sq. Yds (₹4.5L) or 242 Sq. Yds (₹8.0L)</p>
      </div>

      {submitted ? (
        <div className="text-center py-12 bg-emerald-50/50 rounded-2xl border border-emerald-100">
          <CheckCircle size={44} className="text-emerald-600 mx-auto mb-3" />
          <p className="text-lg font-black text-gray-900 tracking-tight">Form Successfully Transmitted</p>
          <p className="text-xs text-gray-500 font-medium max-w-xs mx-auto mt-1">Our dedicated Kolanupaka site representative will initialize your request call shortly.</p>
        </div>
      ) : (
        <>
          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex gap-2 items-center text-red-700 text-xs font-semibold">
              <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}
          
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400" />
            <input type="tel" placeholder="Mobile Number (10 Digits)" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400" />
            <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400" />
            <textarea placeholder="Specify plot size requirements or preferred day for a site tour (Optional)..." rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none text-gray-900 placeholder-gray-400 resize-none" />
          </div>

          <button type="submit" disabled={loading} className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-xl transition-all">
            <Send size={15} />
            {loading ? "Transmitting Fields..." : "Confirm Request"}
          </button>
        </>
      )}
    </form>
  )
}
