import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Satellite, Drone, GraduationCap, Leaf, Cpu, Shield, Quote } from 'lucide-react'

const Section = ({ id, title, subtitle, children, icon: Icon }) => (
  <section id={id} className="relative py-24 md:py-32 bg-[#07080C]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.08),transparent_60%)]" />
    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 text-cyan-300" />}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      </motion.div>
      {subtitle && (
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 max-w-2xl text-slate-300/90">
          {subtitle}
        </motion.p>
      )}
      <div className="mt-12">
        {children}
      </div>
    </div>
  </section>
)

const GlassCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_8px_60px_-15px_rgba(56,189,248,0.18)] hover:shadow-[0_20px_80px_-20px_rgba(232,121,249,0.25)]"
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative">
      {children}
    </div>
  </motion.div>
)

export default function Sections() {
  return (
    <div className="bg-[#06070A] text-slate-200">
      {/* About Nuerika */}
      <Section id="about" title="About Nuerika" subtitle="We engineer intelligent systems at the frontier of robotics, drones, education, agriculture, defense and space.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Neural Robotics', desc: 'Robot heads, arms, and vision stacks built for real-world autonomy.' },
            { title: 'Aerial Intelligence', desc: 'Drones that scan, map, and respond with precision.' },
            { title: 'Systems Design', desc: 'Edge compute, AI chips, and resilient pipelines for scale.' },
          ].map((card, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                  <Cpu className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-slate-300/90">{card.desc}</p>
                </div>
              </div>
              <div className="mt-6 h-24 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 shadow-inner" />
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section id="products" title="Products" subtitle="Premium AI native hardware and software experiences.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Nuerika OS</h3>
                <p className="mt-2 text-slate-300/90">A unified AI operating layer across phone, drone, and rover devices.</p>
              </div>
              <div className="h-40 w-40 rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_-10px_rgba(56,189,248,0.35)]" />
            </div>
            <div className="mt-6 h-10 w-full rounded-full bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30" />
          </GlassCard>
          <GlassCard delay={0.1}>
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Aerial Scout</h3>
                <p className="mt-2 text-slate-300/90">Autonomous drone scans with live segmentation and 3D reconstruction.</p>
              </div>
              <div className="h-40 w-40 rounded-full border border-white/10 bg-white/5 shadow-[0_0_60px_-10px_rgba(232,121,249,0.35)]" />
            </div>
            <div className="mt-6 h-10 w-full rounded-full bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30" />
          </GlassCard>
        </div>
      </Section>

      {/* AI in Education */}
      <Section id="education" title="AI in Education" subtitle="Interactive AI tutors and holographic curricula for learning that thinks with you." icon={GraduationCap}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <GlassCard key={i} delay={i*0.1}>
              <div className="h-44 rounded-xl border border-white/10 bg-gradient-to-b from-cyan-400/10 to-fuchsia-400/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]" />
              <p className="mt-3 text-sm text-slate-300/90">Holographic lessons, live feedback, and explainability built-in.</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Agriculture AI */}
      <Section id="agriculture" title="Agriculture AI" subtitle="Vision-guided crop health, yield analytics, and drone-assisted precision." icon={Leaf}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <GlassCard key={i} delay={i*0.1}>
              <div className="h-44 rounded-xl border border-white/10 bg-gradient-to-b from-emerald-400/10 to-cyan-400/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]" />
              <p className="mt-3 text-sm text-slate-300/90">Drone scanning and plant disease detection with spectral AI.</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Defence & Space Robotics */}
      <Section id="defence" title="Defence & Space Robotics" subtitle="Rovers, satellites, and off-world autonomy for extreme environments." icon={Shield}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <GlassCard key={i} delay={i*0.1}>
              <div className="h-44 rounded-xl border border-white/10 bg-gradient-to-b from-violet-400/10 to-cyan-400/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]" />
              <p className="mt-3 text-sm text-slate-300/90">Rover navigation, satellite orchestration, and robust comms.</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Why Nuerika */}
      <Section id="why" title="Why Nuerika" subtitle="Built with safety, performance, and beauty at its core.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Precision', desc: 'Pixel-perfect pipelines and latency-obsessed design.' },
            { title: 'Trust', desc: 'Privacy-first with verifiable safeguards.' },
            { title: 'Velocity', desc: 'Ship faster with adaptive AI tooling.' },
          ].map((item, i) => (
            <GlassCard key={i} delay={i*0.1}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{item.desc}</p>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Loved by innovators" subtitle="What pioneers say about building with Nuerika.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <GlassCard key={i} delay={i*0.1}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/40 to-fuchsia-400/40 border border-white/10" />
                <div>
                  <div className="h-3 w-28 rounded bg-white/10" />
                  <div className="mt-1 h-2 w-16 rounded bg-white/10" />
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-300/90">“Feels like stepping into the future. Beautiful and powerful.”</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#06070A] py-10">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Nuerika. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-cyan-300 transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-300 transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-cyan-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
