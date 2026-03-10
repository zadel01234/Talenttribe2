'use client'

interface Chapter {
  city: string
  tag: string
  count: string
  color: string
}

const CHAPTERS: Chapter[] = [
  { city: 'Ibadan', tag: 'Main Chapter', count: '1500+', color: '#c47f00' },
  { city: 'Ogbomoso', tag: 'Growth Chapter', count: '1000+', color: '#a07800' },
  { city: 'Oyo Town', tag: 'Emerging Chapter', count: '500+', color: '#c47f00' },
  { city: 'Iseyin', tag: 'New Chapter', count: '500+', color: '#a07800' },
  { city: 'Saki', tag: 'Upcoming', count: 'Coming', color: '#c47f00' },
  { city: 'Eruwa', tag: 'Upcoming', count: 'Coming', color: '#a07800' },
]

export default function Chapters() {
  return (
    <section id="chapters" className="py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line" />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#c47f00', textTransform: 'uppercase' }}>
              Our Chapters
            </span>
            <div className="section-line" />
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: '#1a0000' }}>
            Present <span style={{ color: '#c47f00' }}>Everywhere</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '16px', color: '#5a4a4a' }}>
            Talent Tribe chapters spreading across Oyo State — creating local hubs where builders connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHAPTERS.map((ch, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden p-8"
              style={{ background: '#fff8f0', border: '1px solid #ede0d0', boxShadow: '0 2px 12px rgba(61,0,0,0.05)', minHeight: '160px', transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'default' }}
              onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(61,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(61,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Subtle left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ background: ch.color }} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', color: ch.color, textTransform: 'uppercase' }}>
                    {ch.tag}
                  </span>
                  <svg className="w-4 h-4" style={{ color: ch.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '36px', color: '#1a0000', lineHeight: 1 }}>
                  {ch.city}
                </h3>
                <div className="mt-3" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: ch.color }}>
                  {ch.count} {ch.count !== 'Coming' ? 'members' : 'soon'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
