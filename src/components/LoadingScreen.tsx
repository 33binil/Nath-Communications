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
  // Automatically finish loading after specified duration (defaults to 2s)
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
      className="relative w-full h-[100dvh] max-h-[100dvh] bg-[#fcfcfd] text-slate-900 flex flex-col justify-between overflow-hidden select-none font-sans p-2.5 sm:p-4 md:p-6 lg:p-8"
    >
      {/* Subtle Studio Lighting and Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft diagonal studio soft shadow */}
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-gradient-to-br from-slate-100/80 via-white to-transparent rounded-full filter blur-3xl opacity-70" />
        
        {/* Soft red/coral ambient backlight behind the right-hand phone */}
        <div className="absolute top-[10%] -right-[5%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-bl from-rose-200/50 via-red-100/35 to-transparent filter blur-2xl opacity-90" />
        
        {/* Soft bottom-left red glow for earbuds */}
        <div className="absolute bottom-[5%] left-[5%] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-to-tr from-red-100/40 via-rose-50/20 to-transparent filter blur-xl opacity-80" />
      </div>

      {/* ================= 3D PERIMETER HARDWARE VISUALS (CORNER BLEED / OVERFLOW-SAFE) ================= */}
      
      {/* 1. TOP-LEFT CORNER: Laptop flowing outside the top-left boundary */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -30, rotate: -12 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute -top-8 -left-10 sm:-top-16 sm:-left-18 md:-top-24 md:-left-28 lg:-top-32 lg:-left-36 xl:-top-36 xl:-left-40 z-10 pointer-events-none w-48 sm:w-68 md:w-96 lg:w-[540px] xl:w-[620px] max-w-none select-none opacity-45 sm:opacity-90 lg:opacity-100"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-slate-300/30 rounded-full filter blur-2xl -z-10 scale-90" />
          <img
            src="/loading_laptop.png"
            alt="Laptop"
            className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* 2. RIGHT CORNER: Smartphone flowing outside the right boundary */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95, rotate: 10 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 6 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-1/2 -translate-y-1/2 -right-14 sm:-right-20 md:-right-28 lg:-right-36 xl:-right-44 z-10 pointer-events-none w-48 sm:w-72 md:w-96 lg:w-[520px] xl:w-[600px] max-w-none select-none opacity-45 sm:opacity-90 lg:opacity-100"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-48 h-48 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-br from-rose-200/50 via-red-100/30 to-transparent filter blur-3xl -z-10" />
          <img
            src="/loading_mobile.png"
            alt="Smartphone"
            className="w-full h-auto object-contain drop-shadow-[0_20px_48px_rgba(0,0,0,0.18)]"
          />
        </div>
      </motion.div>

      {/* 3. BOTTOM-LEFT CORNER: Earbuds flowing outside the bottom-left boundary */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -4 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        className="absolute -bottom-8 -left-8 sm:-bottom-14 sm:-left-14 md:-bottom-20 md:-left-20 lg:-bottom-28 lg:-left-28 z-10 pointer-events-none w-36 sm:w-52 md:w-72 lg:w-88 xl:w-[420px] max-w-none select-none opacity-45 sm:opacity-90 lg:opacity-100"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-red-400/20 rounded-full filter blur-xl -z-10 scale-90" />
          <img
            src="/loading_airpod.png"
            alt="Earbuds"
            className="w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.14)]"
          />
        </div>
      </motion.div>

      {/* ================= TOP HEADER STRIP ================= */}
      <header className="relative z-20 w-full px-2 sm:px-6 md:px-8 pt-1 sm:pt-2 flex items-start justify-between shrink-0">
        {/* Top-Left: Genuine Products */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <span className="w-3.5 sm:w-5 md:w-6 h-[2.5px] sm:h-[3px] bg-red-600 rounded-full inline-block shrink-0 shadow-sm shadow-red-500/40" />
          <span className="text-[9px] sm:text-[11px] md:text-xs font-bold tracking-[0.18em] sm:tracking-[0.22em] text-slate-800 uppercase">
            Genuine Products
          </span>
        </motion.div>

        {/* Top-Right: A Brighter Tomorrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex items-center gap-2 sm:gap-3 text-right"
        >
          <div className="flex flex-col text-right">
            <span className="text-[9px] sm:text-[11px] md:text-xs font-bold tracking-[0.18em] sm:tracking-[0.22em] text-slate-800 uppercase">
              A Brighter Tomorrow
            </span>
          </div>
          <span className="w-3.5 sm:w-5 md:w-6 h-[2.5px] sm:h-[3px] bg-red-600 rounded-full inline-block shrink-0 shadow-sm shadow-red-500/40" />
        </motion.div>
      </header>

      {/* ================= CENTER BRANDING & ROUNDING SPINNER LOADER ================= */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-2 py-1 sm:py-3 my-auto max-w-4xl mx-auto w-full min-h-0">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mb-2 sm:mb-3 md:mb-4 flex flex-col items-center justify-center shrink-0"
        >
          {/* Back illumination glow */}
          <div className="absolute inset-0 bg-red-500/15 rounded-full filter blur-xl scale-125 pointer-events-none" />

          {/* Nath Logo Image */}
          <div className="relative flex items-center justify-center px-2">
            <img
              src="/nath_logo.png"
              alt="Nath Digital Hub Logo"
              className="h-10 sm:h-14 md:h-18 lg:h-20 w-auto max-w-[200px] sm:max-w-xs md:max-w-sm object-contain drop-shadow-[0_6px_16px_rgba(220,38,38,0.20)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-center space-y-1 mb-4 sm:mb-6 md:mb-8 shrink-0"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif]">
            Nath Digital Hub
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.24em] sm:tracking-[0.32em] text-slate-500 uppercase">
            Tech for a Better Tomorrow
          </p>
        </motion.div>

        {/* Modern Rounding / Circular Spinner Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 shrink-0"
        >
          {/* Circular Rounding Spinner */}
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
            {/* Ambient subtle background glow */}
            <div className="absolute inset-0 rounded-full bg-red-500/15 filter blur-md animate-pulse" />

            {/* Static background track ring */}
            <div className="absolute inset-0 rounded-full border-2 sm:border-3 border-slate-200/80" />

            {/* Rotating smooth glowing accent spinner ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 sm:border-3 border-transparent border-t-red-600 border-r-rose-500"
            />

            {/* Inner secondary counter-rotating subtle orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
              className="absolute inset-1 sm:inset-1.5 rounded-full border-[1.5px] sm:border-2 border-transparent border-b-red-400/70 border-l-rose-300/40"
            />

            {/* Center glowing core dot */}
            <motion.div
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            />
          </div>

          {/* Clean Loading Subtitle with animated pulsing dots */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.24em] text-slate-600 uppercase">
              Loading a Smarter Experience
            </span>
            <span className="flex gap-0.5 sm:gap-1 items-center pb-0.5">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-600 animate-bounce" />
            </span>
          </div>
        </motion.div>

        {/* Quick Skip button if user wants to enter immediately */}
        {onComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 sm:mt-5 shrink-0"
          >
            <button
              onClick={onComplete}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold bg-slate-900/90 hover:bg-black text-white transition-all shadow-xs hover:shadow-md cursor-pointer hover:scale-105"
            >
              <span>Enter Showroom</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* ================= 4 PILLARS & BOTTOM FOOTER ================= */}
      <div className="relative z-20 w-full px-2 sm:px-6 md:px-8 pb-1 sm:pb-3 flex flex-col gap-2 sm:gap-4 shrink-0">
        {/* 4 Feature Columns in a single responsive horizontal grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-3xl mx-auto w-full grid grid-cols-4 divide-x divide-slate-200 border-t border-b border-slate-200/60 py-2 sm:py-2.5"
        >
          {/* Pillar 1: Trusted Products */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 mb-1 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor">
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
            <span className="text-[9px] sm:text-[11px] md:text-xs font-bold text-slate-800 leading-tight">
              Trusted<br className="sm:hidden" /> Products
            </span>
          </div>

          {/* Pillar 2: Fast & Reliable Support */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 mb-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
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
            <span className="text-[9px] sm:text-[11px] md:text-xs font-bold text-slate-800 leading-tight">
              Fast<br className="sm:hidden" /> Support
            </span>
          </div>

          {/* Pillar 3: Customer Focused */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 mb-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
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
            <span className="text-[9px] sm:text-[11px] md:text-xs font-bold text-slate-800 leading-tight">
              Customer<br className="sm:hidden" /> Focused
            </span>
          </div>

          {/* Pillar 4: Smarter Solutions */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2 group">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 mb-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
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
            <span className="text-[9px] sm:text-[11px] md:text-xs font-bold text-slate-800 leading-tight">
              Smarter<br className="sm:hidden" /> Solutions
            </span>
          </div>
        </motion.div>

        {/* Bottom Corner Anchors */}
        <div className="w-full flex items-end justify-between pt-1 shrink-0">
          {/* Bottom-Left: Devices People Possibilities */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <div className="flex flex-col space-y-0.5 text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-slate-800 uppercase leading-tight">
              <span>Devices • People • Possibilities</span>
            </div>
            <span className="w-4 sm:w-6 h-[2px] sm:h-[3px] bg-red-600 rounded-full inline-block mt-1 shadow-sm shadow-red-500/40" />
          </motion.div>

          {/* Bottom-Right: Nath Digital Hub */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-end text-right"
          >
            <span className="text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-slate-800 uppercase">
              Nath Digital Hub
            </span>
            <span className="w-4 sm:w-6 h-[2px] sm:h-[3px] bg-red-600 rounded-full inline-block mt-1 shadow-sm shadow-red-500/40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
