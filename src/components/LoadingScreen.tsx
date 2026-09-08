import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
  autoPlay?: boolean;
  duration?: number; // duration in milliseconds, defaults to 2000ms (2 seconds)
}

export function LoadingScreen({
  onComplete,
  autoPlay = true,
  duration = 2000,
}: LoadingScreenProps) {
  // Automatically finish loading after 2 seconds
  useEffect(() => {
    if (!autoPlay || !onComplete) return;

    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [autoPlay, duration, onComplete]);

  return (
    <div
      id="loading-screen-container"
      className="relative w-full min-h-screen bg-[#fcfcfd] text-slate-900 flex flex-col justify-between overflow-hidden select-none font-sans"
    >
      {/* Subtle Studio Lighting and Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft diagonal studio soft shadow */}
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-gradient-to-br from-slate-100/80 via-white to-transparent rounded-full filter blur-3xl opacity-70" />
        
        {/* Soft red/coral ambient backlight behind the right-hand phone */}
        <div className="absolute top-[10%] -right-[5%] w-[480px] h-[480px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-bl from-rose-200/50 via-red-100/35 to-transparent filter blur-2xl opacity-90" />
        
        {/* Soft bottom-left red glow for earbuds */}
        <div className="absolute bottom-[5%] left-[5%] w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-red-100/40 via-rose-50/20 to-transparent filter blur-xl opacity-80" />
      </div>

      {/* ================= 3D PERIMETER HARDWARE VISUALS (CORNER BLEED / FLOW OUTSIDE SCREEN) ================= */}
      
      {/* 1. TOP-LEFT CORNER: Open Laptop flowing outside the top-left boundary */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: -40, rotate: -15 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute -top-10 -left-12 sm:-top-16 sm:-left-18 md:-top-20 md:-left-24 lg:-top-28 lg:-left-32 xl:-top-32 xl:-left-36 z-10 pointer-events-none w-56 sm:w-72 md:w-96 lg:w-[480px] xl:w-[560px] max-w-none select-none"
      >
        <div className="relative">
          {/* Subtle studio under-glow */}
          <div className="absolute inset-0 bg-slate-300/30 rounded-full filter blur-2xl -z-10 scale-90" />
          <img
            src="/loading_laptop.png"
            alt="Laptop"
            className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* 2. RIGHT / TOP-RIGHT CORNER: Flagship Smartphone flowing outside the right boundary */}
      <motion.div
        initial={{ opacity: 0, x: 70, scale: 0.95, rotate: 10 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 6 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-1/2 -translate-y-1/2 -right-14 sm:-right-20 md:-right-28 lg:-right-36 xl:-right-44 z-10 pointer-events-none w-56 sm:w-80 md:w-96 lg:w-[500px] xl:w-[580px] max-w-none select-none"
      >
        <div className="relative flex items-center justify-center">
          {/* Centered circular ambient backdrop glow disc */}
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-rose-200/50 via-red-100/30 to-transparent filter blur-3xl -z-10" />

          {/* Smartphone device */}
          <img
            src="/loading_mobile.png"
            alt="Smartphone"
            className="w-full h-auto object-contain drop-shadow-[0_28px_56px_rgba(0,0,0,0.20)]"
          />
        </div>
      </motion.div>

      {/* 3. BOTTOM-LEFT CORNER: Sleek Earbuds flowing outside the bottom-left boundary */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -4 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        className="absolute -bottom-10 -left-10 sm:-bottom-14 sm:-left-14 md:-bottom-18 md:-left-18 lg:-bottom-24 lg:-left-24 z-10 pointer-events-none w-40 sm:w-56 md:w-72 lg:w-84 xl:w-96 max-w-none select-none"
      >
        <div className="relative">
          {/* Subtle crimson under-glow */}
          <div className="absolute inset-0 bg-red-400/20 rounded-full filter blur-xl -z-10 scale-90" />
          <img
            src="/loading_airpod.png"
            alt="Earbuds"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
          />
        </div>
      </motion.div>

      {/* ================= TOP HEADER STRIP ================= */}
      <header className="relative z-20 w-full px-6 sm:px-12 md:px-16 pt-8 sm:pt-10 flex items-start justify-between">
        {/* Top-Left: Genuine Products */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="w-5 sm:w-6 h-[3px] bg-red-600 rounded-full inline-block shrink-0 shadow-sm shadow-red-500/40" />
          <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.22em] text-slate-800 uppercase">
            Genuine Products
          </span>
        </motion.div>

        {/* Top-Right: A Brighter Tomorrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 text-right"
        >
          <div className="flex flex-col text-right">
            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.22em] text-slate-800 uppercase">
              A Brighter
            </span>
            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.22em] text-slate-800 uppercase -mt-0.5">
              Tomorrow
            </span>
          </div>
          <span className="w-5 sm:w-6 h-[3px] bg-red-600 rounded-full inline-block shrink-0 shadow-sm shadow-red-500/40" />
        </motion.div>
      </header>

      {/* ================= CENTER BRANDING & ROUNDING SPINNER LOADER ================= */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 my-auto max-w-4xl mx-auto w-full">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-3 sm:mb-5 flex flex-col items-center justify-center"
        >
          {/* Subtle back illumination glow */}
          <div className="absolute inset-0 bg-red-500/15 rounded-full filter blur-xl scale-125 pointer-events-none" />

          {/* Nath Logo Image */}
          <div className="relative flex items-center justify-center px-2">
            <img
              src="/nath_logo.png"
              alt="Nath Digital Hub Logo"
              className="h-14 sm:h-18 md:h-20 w-auto max-w-[260px] sm:max-w-xs md:max-w-sm object-contain drop-shadow-[0_8px_20px_rgba(220,38,38,0.20)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center space-y-2 mb-8 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif]">
            Nath Digital Hub
          </h1>
          <p className="text-[11px] sm:text-[13px] md:text-sm font-semibold tracking-[0.32em] text-slate-500 uppercase">
            Tech for a Better Tomorrow
          </p>
        </motion.div>

        {/* Modern Rounding / Circular Spinner Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center justify-center gap-5"
        >
          {/* Circular Rounding Spinner */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            {/* Ambient subtle background glow */}
            <div className="absolute inset-0 rounded-full bg-red-500/15 filter blur-md animate-pulse" />

            {/* Static subtle background track ring */}
            <div className="absolute inset-0 rounded-full border-3 border-slate-200/80" />

            {/* Rotating smooth glowing accent spinner ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-3 border-transparent border-t-red-600 border-r-rose-500"
            />

            {/* Inner secondary counter-rotating subtle orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
              className="absolute inset-1.5 rounded-full border-2 border-transparent border-b-red-400/70 border-l-rose-300/40"
            />

            {/* Center glowing core dot */}
            <motion.div
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            />
          </div>

          {/* Clean Loading Subtitle with animated pulsing dots */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-slate-600 uppercase">
              Loading a Smarter Experience
            </span>
            <span className="flex gap-1 items-center pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-bounce" />
            </span>
          </div>
        </motion.div>

        {/* Quick Skip button if user wants to enter immediately */}
        {onComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <button
              onClick={onComplete}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-900/90 hover:bg-black text-white transition-all shadow-xs hover:shadow-md cursor-pointer hover:scale-105"
            >
              <span>Enter Showroom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* ================= 4 PILLARS & BOTTOM FOOTER ================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 pb-8 sm:pb-10 flex flex-col gap-8">
        {/* 4 Feature Columns with subtle vertical dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-3xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-t border-b sm:border-b-0 border-slate-200/60 py-4 sm:py-2"
        >
          {/* Pillar 1: Trusted Products */}
          <div className="flex flex-col items-center text-center p-3 sm:p-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path
                  d="M16 3L6 7.5V14.5C6 21 10.3 27 16 29C21.7 27 26 21 26 14.5V7.5L16 3Z"
                  stroke="#ef4444"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 15.5L14.5 18.5L20.5 12.5"
                  stroke="#0f172a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
              Trusted<br />Products
            </span>
          </div>

          {/* Pillar 2: Fast & Reliable Support */}
          <div className="flex flex-col items-center text-center p-3 sm:p-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M4 11H8M2 15H6M3 19H7" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
                <path
                  d="M9 9H20V21H9V9Z"
                  stroke="#ef4444"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 13H24.5L28 17V21H20V13Z"
                  stroke="#0f172a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="13" cy="22" r="2.5" fill="white" stroke="#0f172a" strokeWidth="2" />
                <circle cx="24" cy="22" r="2.5" fill="white" stroke="#ef4444" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
              Fast & Reliable<br />Support
            </span>
          </div>

          {/* Pillar 3: Customer Focused */}
          <div className="flex flex-col items-center text-center p-3 sm:p-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="13" r="3" stroke="#0f172a" strokeWidth="2" />
                <path d="M4 22C4 19 6 17 9 17" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="13" r="3" stroke="#0f172a" strokeWidth="2" />
                <path d="M28 22C28 19 26 17 23 17" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="11" r="3.5" stroke="#ef4444" strokeWidth="2.2" />
                <path
                  d="M10 22C10 18.5 12.5 16 16 16C19.5 16 22 18.5 22 22"
                  stroke="#ef4444"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
              Customer<br />Focused
            </span>
          </div>

          {/* Pillar 4: Smarter Solutions */}
          <div className="flex flex-col items-center text-center p-3 sm:p-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 5V8M16 24V27M5 16H8M24 16H27M8.2 8.2L10.4 10.4M21.6 21.6L23.8 23.8M8.2 23.8L10.4 21.6M21.6 10.4L23.8 8.2"
                  stroke="#0f172a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="16" r="7" stroke="#0f172a" strokeWidth="2" />
                <path
                  d="M16 12L17.2 14.8L20 16L17.2 17.2L16 20L14.8 17.2L12 16L14.8 14.8L16 12Z"
                  fill="#ef4444"
                />
              </svg>
            </div>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
              Smarter<br />Solutions
            </span>
          </div>
        </motion.div>

        {/* Bottom Corner Anchors */}
        <div className="w-full flex items-end justify-between pt-2">
          {/* Bottom-Left: Devices People Possibilities */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-start"
          >
            <div className="flex flex-col space-y-0.5 text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-slate-800 uppercase leading-snug">
              <span>Devices</span>
              <span>People</span>
              <span>Possibilities</span>
            </div>
            <span className="w-5 sm:w-6 h-[3px] bg-red-600 rounded-full inline-block mt-2 shadow-sm shadow-red-500/40" />
          </motion.div>

          {/* Bottom-Right: Nath Digital Hub */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-end text-right"
          >
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-slate-800 uppercase">
              Nath Digital Hub
            </span>
            <span className="w-5 sm:w-6 h-[3px] bg-red-600 rounded-full inline-block mt-2 shadow-sm shadow-red-500/40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
