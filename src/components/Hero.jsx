import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#06070A]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,119,255,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(183,33,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06070A]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md text-xs sm:text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
          Neural Robotics • Drones • AgriTech • EdTech
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_6px_30px_rgba(56,189,248,0.25)]"
        >
          Engineering Intelligence. Shaping the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          className="mt-4 max-w-2xl text-balance text-base sm:text-lg text-slate-300/90"
        >
          Nuerika builds premium AI systems across robotics, drones, education, agriculture, and advanced research.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative font-semibold">Explore AI App</span>
          </a>

          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-cyan-200 backdrop-blur-md transition-all hover:border-cyan-300/60 hover:text-cyan-100"
          >
            <span className="relative font-semibold">Join Early Access</span>
          </a>
        </motion.div>

        {/* Floating holographic chips */}
        <motion.div variants={floating} initial="initial" animate="animate" className="pointer-events-none absolute left-6 top-24 hidden sm:block">
          <div className="h-14 w-20 rounded-2xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_-8px_rgba(34,211,238,0.6)]" />
        </motion.div>
        <motion.div variants={floating} initial="initial" animate="animate" className="pointer-events-none absolute right-10 bottom-28 hidden lg:block" transition={{ delay: 1 }}>
          <div className="h-16 w-16 rounded-full border border-fuchsia-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_-8px_rgba(232,121,249,0.6)]" />
        </motion.div>
      </div>

      {/* subtle particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300/60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 12px rgba(34,211,238,0.7)',
              animation: `float ${6 + Math.random() * 6}s ease-in-out ${Math.random()}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
      `}</style>
    </section>
  )
}
