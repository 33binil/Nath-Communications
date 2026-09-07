import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
  initialProgress?: number;
  autoPlay?: boolean;
  standalone?: boolean;
}

export function LoadingScreen({
  onComplete,
  initialProgress = 0,
  autoPlay = true,
  standalone = false,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(initialProgress);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [speed, setSpeed] = useState<'normal' | 'fast' | 'slow'>('normal');
  const [exact68Mode, setExact68Mode] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Loading a Smarter Experience...');
  const [showControls, setShowControls] = useState(false);

  // Status message based on progress
  useEffect(() => {
    if (progress < 25) {
      setStatusMessage('Initializing Smart Tech Catalog...');
    } else if (progress < 55) {
      setStatusMessage('Loading High-Performance Devices...');
    } else if (progress < 85) {
      setStatusMessage('Loading a Smarter Experience...');
    } else if (progress < 100) {
      setStatusMessage('Finalizing Genuine Showroom Experience...');
    } else {
      setStatusMessage('Ready! Welcome to Nath Digital Hub.');
    }
  }, [progress]);

  // Simulation timer
  useEffect(() => {
    if (!isPlaying || exact68Mode) return;

    const intervalTime = speed === 'fast' ? 25 : speed === 'slow' ? 70 : 40;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsPlaying(false);
          if (onComplete && !standalone) {
            setTimeout(() => {
              onComplete();
            }, 600);
          }
          return 100;
        }
        // Organic realistic increments
        const step = prev > 60 && prev < 75 ? 0.6 : prev > 85 ? 0.9 : 1.2;
        return Math.min(100, Math.round((prev + step) * 10) / 10);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, exact68Mode, speed, onComplete, standalone]);

  const handleSetExact68 = () => {
    setExact68Mode(true);
    setIsPlaying(false);
    setProgress(68);
    setStatusMessage('Loading a Smarter Experience...');
  };

  const handleReplay = () => {
    setExact68Mode(false);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSkip = () => {
    setProgress(100);
    if (onComplete) {
      onComplete();
    }
  };

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

      {/* ================= 3D PERIMETER HARDWARE VISUALS ================= */}
      
      {/* 1. TOP-LEFT: Open Laptop in Isometric Perspective */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute -top-6 -left-10 sm:-top-8 sm:-left-6 md:top-2 md:left-2 lg:top-4 lg:left-4 z-10 pointer-events-none w-48 sm:w-64 md:w-80 lg:w-[400px] max-w-none"
      >
        <div className="relative">
          <img
            src="/src/assets/images/laptop_isometric_topleft_1788810820061.jpg"
            alt="Laptop"
            className="w-full h-auto object-contain mix-blend-multiply opacity-95 transform -rotate-12 hover:rotate-0 transition-transform duration-700 drop-shadow-2xl"
          />
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* 2. RIGHT: Giant Flagship Smartphone with Neon Red Rim-light */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-12 md:-right-16 lg:right-0 z-10 pointer-events-none w-64 sm:w-80 md:w-96 lg:w-[480px] xl:w-[540px]"
      >
        <div className="relative flex items-center justify-end">
          {/* Circular gradient backdrop disc behind phone */}
          <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-rose-200/70 via-red-100/40 to-white/10 shadow-[inset_0_0_40px_rgba(239,68,68,0.15)] -z-10" />

          {/* Smartphone with camera bump & red edge light */}
          <img
            src="/src/assets/images/iphone_rim_light_right_1788810838261.jpg"
            alt="Smartphone"
            className="w-full h-auto object-contain mix-blend-multiply transform rotate-6 drop-shadow-2xl"
          />
          
          {/* Crimson glow line accent simulation */}
          <div className="absolute left-[28%] top-[25%] bottom-[20%] w-[3px] bg-red-500/80 filter blur-[2px] rounded-full transform rotate-6 opacity-75 animate-pulse-subtle" />
        </div>
      </motion.div>

      {/* 3. BOTTOM-LEFT: Sleek Earbuds with Red Glow */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-4 md:bottom-2 md:left-6 lg:bottom-4 lg:left-10 z-10 pointer-events-none w-36 sm:w-48 md:w-60 lg:w-72"
      >
        <div className="relative">
          <img
            src="/src/assets/images/airpods_red_glow_bottomleft_1788810852579.jpg"
            alt="Earbuds"
            className="w-full h-auto object-contain mix-blend-multiply opacity-90 drop-shadow-xl"
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

      {/* ================= CENTER BRANDING & INTERACTIVE LOADER ================= */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 my-auto max-w-4xl mx-auto w-full">
        {/* 3D Ribbon 'N' Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-4 sm:mb-6"
        >
          {/* Subtle back illumination glow */}
          <div className="absolute inset-0 bg-red-500/20 rounded-full filter blur-xl scale-125 pointer-events-none" />

          {/* 3D Folded Ribbon N Logo Image / Vector Composite */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
            <img
              src="/src/assets/images/nath_3d_ribbon_n_1788810803444.jpg"
              alt="Nath Digital Hub Logo"
              className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_12px_24px_rgba(220,38,38,0.25)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center space-y-2 mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif]">
            Nath Digital Hub
          </h1>
          <p className="text-[11px] sm:text-[13px] md:text-sm font-semibold tracking-[0.32em] text-slate-500 uppercase">
            Tech for a Better Tomorrow
          </p>
        </motion.div>

        {/* Progress Bar & Percentage Readout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full max-w-md sm:max-w-lg px-4 flex flex-col items-center"
        >
          <div className="w-full flex items-center gap-4">
            {/* The Pill Track */}
            <div className="relative flex-1 h-3 sm:h-3.5 bg-slate-200/80 rounded-full overflow-visible shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]">
              {/* The Active Filled Bar */}
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-rose-600 relative"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              >
                {/* Glowing bead / thumb indicator at the active edge */}
                {progress > 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-red-500 shadow-[0_0_14px_rgba(239,68,68,0.9),0_0_28px_rgba(239,68,68,0.6)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Percentage Number Text (e.g., 68%) */}
            <span className="text-sm sm:text-base font-bold text-slate-600 tracking-tight min-w-[42px] text-left">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Loading Subtitle text */}
          <p className="mt-4 text-xs sm:text-sm font-medium tracking-[0.22em] text-slate-500 uppercase text-center transition-all duration-300">
            {statusMessage}
          </p>
        </motion.div>

        {/* Interactive Testing Controls (Discreetly expandible / toggled) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setShowControls(!showControls)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer border border-slate-200/60 shadow-xs"
            title="Toggle interactive controls to test loading states"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>{showControls ? 'Hide Controls' : 'Interactive Controls'}</span>
          </button>

          {onComplete && !standalone && (
            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-slate-900 hover:bg-black text-white transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Enter Showroom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Expandable Control Panel */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 p-3 sm:p-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs"
            >
              {/* Exact 68% button (Matches the screenshot) */}
              <button
                onClick={handleSetExact68}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  exact68Mode
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                }`}
              >
                Exact UI (68%)
              </button>

              {/* Play / Pause */}
              <button
                onClick={() => {
                  setExact68Mode(false);
                  setIsPlaying(!isPlaying);
                }}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Resume'}</span>
              </button>

              {/* Replay 0% -> 100% */}
              <button
                onClick={handleReplay}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay (0%)</span>
              </button>

              {/* Speed Toggles */}
              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                <button
                  onClick={() => setSpeed('slow')}
                  className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                    speed === 'slow' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Slow
                </button>
                <button
                  onClick={() => setSpeed('normal')}
                  className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                    speed === 'normal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setSpeed('fast')}
                  className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                    speed === 'fast' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Fast
                </button>
              </div>

              {/* Scrub Slider */}
              <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0 px-2">
                <span className="text-[11px] text-slate-500 font-medium">Scrub:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => {
                    setExact68Mode(false);
                    setIsPlaying(false);
                    setProgress(Number(e.target.value));
                  }}
                  className="w-24 sm:w-32 accent-red-600 cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              {/* Dual-tone shield with check icon */}
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
              {/* Delivery truck with speed streaks */}
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                {/* Red speed lines */}
                <path d="M4 11H8M2 15H6M3 19H7" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
                {/* Truck body */}
                <path
                  d="M9 9H20V21H9V9Z"
                  stroke="#ef4444"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Cabin */}
                <path
                  d="M20 13H24.5L28 17V21H20V13Z"
                  stroke="#0f172a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Wheels */}
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
              {/* 3 Users group icon */}
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                {/* Left person */}
                <circle cx="8" cy="13" r="3" stroke="#0f172a" strokeWidth="2" />
                <path d="M4 22C4 19 6 17 9 17" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                {/* Right person */}
                <circle cx="24" cy="13" r="3" stroke="#0f172a" strokeWidth="2" />
                <path d="M28 22C28 19 26 17 23 17" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                {/* Center VIP red person */}
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
              {/* Gear with center tech star */}
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                {/* Gear cog */}
                <path
                  d="M16 5V8M16 24V27M5 16H8M24 16H27M8.2 8.2L10.4 10.4M21.6 21.6L23.8 23.8M8.2 23.8L10.4 21.6M21.6 10.4L23.8 8.2"
                  stroke="#0f172a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="16" r="7" stroke="#0f172a" strokeWidth="2" />
                {/* Red star center */}
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
