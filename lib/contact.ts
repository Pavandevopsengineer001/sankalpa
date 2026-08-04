// lib/contact.ts

/**
 * Global Contact Constants for Sankalpa Farms & Resorts
 * Centralizing these prevents mismatch strings and breaking changes.
 */

// Production Phone Specifications
export const CONTACT_PHONE_RAW = "916309123731"; // Strict format: No spaces, plus symbols, or brackets
export const CONTACT_PHONE_DISPLAY = "+91 63091 23731"; // Formatted presentation value for UI text blocks

// Pre-packaged transactional outreach payload
export const WHATSAPP_MESSAGE_RAW = 
  "Hi Sankalpa Farms & Resorts 👋\n\nI'm interested in your farm plots. Please share complete details.";

// Pre-compiled Dynamic Navigation URLs
export const CALL_HREF = `tel:+${CONTACT_PHONE_RAW}`;
export const WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MESSAGE_RAW)}`;

// Project Geolocation Anchors
export const PROJECT_LOCATION_DISPLAY = "Near Historic Kolanupaka, Telangana";
