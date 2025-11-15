import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0A0C12]/70 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-600 shadow-[0_0_30px_rgba(56,189,248,0.35)]" />
              <span className="text-white font-semibold tracking-tight">Nuerika</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              {[
                { href: '#about', label: 'About' },
                { href: '#products', label: 'Products' },
                { href: '#education', label: 'Education' },
                { href: '#agriculture', label: 'Agriculture' },
                { href: '#defence', label: 'Defence & Space' },
                { href: '#why', label: 'Why Nuerika' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="hover:text-cyan-300 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="#join" className="hidden md:inline-flex items-center rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-cyan-200 hover:text-cyan-100 hover:border-cyan-300/60 transition-all">Early Access</a>
          </div>
        </div>
      </div>
    </header>
  )
}
