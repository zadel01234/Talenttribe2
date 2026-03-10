'use client'

import Image from 'next/image'

interface Program {
  name: string
  tag: string
  img: string
  color: string
  desc: string
  badge: string
  href: string
}

const PROGRAMS: Program[] = [
  {
    name: 'SheInnovates',
    tag: 'Women in Tech',
    img: '/images/she-innovate.jpg',
    color: '#e0005a',
    desc: 'A dedicated initiative designed to empower women and bridge the gender gap in the technology sector.',
    badge: 'Initiative',
    href: '/sheinnovates',
  },
  {
    name: 'BuildWithOyo',
    tag: 'Flagship Annual',
    img: '/images/flagship.jpg',
    color: '#c47f00',
    desc: 'Our flagship annual program focused on discovering, developing, and nurturing tech talent across Oyo State.',
    badge: 'Annual Program',
    href: '/buildwithoyo',
  },
  {
    name: 'Technical Series',
    tag: 'Monthly Sessions',
    img: '/images/Technical-series.jpg',
    color: '#a07800',
    desc: 'A dedicated monthly program featuring live, hands-on sessions providing the practical experience needed to build, innovate, and grow.',
    badge: 'Monthly',
    href: '/technical-series',
  },
]

export default function Programs() {
  return (
    <section id="ecosystem" className="py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="section-line" />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#c47f00', textTransform: 'uppercase' }}>
                Programs & Events
              </span>
            </div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: '#1a0000', letterSpacing: '-0.01em' }}>
              Where Talent<br /><span style={{ color: '#c47f00' }}>Gets Activated</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.75', color: '#5a4a4a' }}>
            From hackathons to mentorship sessions, our programs are designed to unlock potential at every stage of your tech journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, i) => (
            <a
              key={i}
              href={prog.href}
              className="rounded-xl overflow-hidden cursor-pointer block"
              style={{ textDecoration: 'none', background: '#fff', border: '1px solid #ede0d0', boxShadow: '0 4px 24px rgba(61,0,0,0.07)', transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(61,0,0,0.14)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(61,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <Image src={prog.img} alt={prog.name} fill className="object-cover transition-transform duration-400" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45) 100%)' }} />
                <span
                  className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full"
                  style={{ color: prog.color, fontFamily: 'Space Grotesk', fontWeight: 600, letterSpacing: '0.08em', border: `1px solid ${prog.color}60`, backgroundColor: 'rgba(255,255,255,0.9)' }}
                >
                  {prog.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: prog.color, textTransform: 'uppercase', marginBottom: '8px' }}>
                  {prog.tag}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '26px', color: '#1a0000', lineHeight: '1.2' }}>
                  {prog.name}
                </h3>
                <p className="mt-4 leading-relaxed" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '1.7', color: '#5a4a4a' }}>
                  {prog.desc}
                </p>
                <div className="mt-8 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px', color: prog.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  <span>Learn More</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
