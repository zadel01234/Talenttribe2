export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 tribal-pattern-orange" style={{ background: '#f5a000' }}>
      <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(135deg, #ffd700 0%, #f5a000 100%)' }} />
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
          {[...Array(5)].map((_, i) => (
            <circle key={i} cx="400" cy="200" r={60 + i * 60} fill="none" stroke="#3d0000" strokeWidth="1.5" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: 'clamp(40px,6vw,80px)', lineHeight: 1, color: '#3d0000', letterSpacing: '-0.01em' }}>
          Ready to Join<br />the Tribe?
        </h2>
        <p className="mt-6 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '18px', color: 'rgba(61,0,0,0.7)', lineHeight: '1.7' }}>
          A community for both newbies and professionals. No gatekeepers — just people passionate about Oyo's tech future.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_COMMUNITY_URL}
            style={{ background: '#3d0000', color: '#f5a000', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', padding: '18px 48px', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s' }}
          >
            Join Community Now →
          </a>
          <a
            href="https://atcafrica.com/donate"
            style={{ background: 'transparent', color: '#3d0000', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', padding: '18px 48px', borderRadius: '4px', border: '2px solid rgba(61,0,0,0.3)', textDecoration: 'none', transition: 'all 0.2s' }}
          >
            Donate For a Talent
          </a>
        </div>

        <div className="mt-10" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#3d0000', letterSpacing: '0.15em' }}>
          LEARN · GROW · CONNECT
        </div>
      </div>
    </section>
  )
}
