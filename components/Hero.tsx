'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ShieldLogo from './ShieldLogo'

interface Slide {
  title: string
  accent: string
  sub: string
}

const SLIDES: Slide[] = [
  { title: 'Community of Talent', accent: 'Shaping the', sub: 'Oyo Ecosystem' },
  { title: 'Learn. Grow.', accent: 'Connect.', sub: 'With Your Tribe' },
  { title: 'Building', accent: "Tomorrow's", sub: 'Tech Leaders' },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image src="/images/hero1.jpg" alt="Hero background" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,0,0,0.92) 0%, rgba(13,0,0,0.85) 40%, rgba(13,0,0,0.3) 70%, rgba(13,0,0,0.1) 100%)' }} />
      </div>

      {/* Geometric background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 600 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="600,0 600,700 100,700" fill="#f5a000" opacity="0.08" />
          <polygon points="600,0 600,400 250,0" fill="#ffd700" opacity="0.06" />
          {[...Array(8)].map((_, i) => (
            <polygon
              key={i}
              points={`${300 + i * 30},${100 + i * 50} ${500 + i * 10},${200 + i * 50} ${400 + i * 20},${350 + i * 40}`}
              fill="none"
              stroke="#f5a000"
              strokeWidth="0.8"
              opacity={0.3 - i * 0.03}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 items-center">
          <div>
            <div className="anim-fade-up flex items-center gap-3 mb-8">
              <div className="section-line" />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
                Oyo State · Nigeria · 2024
              </span>
            </div>

            {/* Slideshow headline */}
            <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className={`hero-slide ${i === slide ? 'active' : ''}`}
                  style={{ position: i === 0 ? 'relative' : 'absolute', top: 0 }}
                >
                  <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(44px,6vw,78px)', lineHeight: 1, color: '#fff', letterSpacing: '-0.01em' }}>
                    {s.title}
                    <br />
                    <span style={{ color: '#f5a000' }}>{s.accent}</span>
                    <br />
                    {s.sub}
                  </h1>
                </div>
              ))}
            </div>

            <p className="anim-fade-up delay-2 mt-8 mb-10 text-gray-300 leading-relaxed max-w-lg" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 400 }}>
              A platform for Oyo Tech Talents to connect, create, and cultivate a culture of innovation and growth. For both newbies and professionals in the ecosystem.
            </p>

            <div className="anim-fade-up delay-3 flex flex-col gap-3 mb-12">
              {/* Row 1: Join Community + Donate */}
              <div className="flex flex-wrap gap-4">
                <a href={process.env.NEXT_PUBLIC_COMMUNITY_URL} className="btn-orange px-8 py-4 rounded text-sm flex items-center gap-2">
                  Join Community
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/donate"
                  style={{ background: 'rgba(245,160,0,0.08)', border: '1px solid rgba(245,160,0,0.2)', color: '#f5a000', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '13px', padding: '16px 28px', borderRadius: '4px', letterSpacing: '0.04em', transition: 'all 0.2s', textDecoration: 'none' }}
                >
                  Donate For a Talent ♥
                </a>
              </div>

              {/* Row 2: Become a Member */}
              <div>
                <a href="/register" className="btn-orange px-8 py-4 rounded text-sm flex items-center gap-2 w-fit">
                  Become A Community Member
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Slide dots */}
            <div className="anim-fade-up delay-4 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === slide ? '28px' : '8px', height: '8px', background: i === slide ? '#f5a000' : 'rgba(245,160,0,0.3)' }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 60 Z" fill="#0d0000" />
        </svg>
      </div>
    </section>
  )
}