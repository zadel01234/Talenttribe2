'use client'

import { Facebook, Instagram, Linkedin, Slack, Twitter } from 'lucide-react'
import ShieldLogo from './ShieldLogo'
import TribalDivider from './TribalDivider'
import Link from 'next/link'
import type { ElementType } from 'react'

interface SocialLink {
  icon: ElementType
  href: string
}

interface FooterLink {
  label: string
  href: string
}

interface FooterCol {
  title: string
  links: FooterLink[]
}

const SOCIAL: SocialLink[] = [
  { icon: Facebook, href: 'https://facebook.com/oyotalenttribehq' },
  { icon: Instagram, href: 'https://instagram.com/oyotalenttribehq' },
  { icon: Linkedin, href: 'https://linkedin.com/company/oyotalenttribehq' },
  { icon: Slack, href: 'https://slack.com' },
  { icon: Twitter, href: 'https://x.com/oyotalenttribehq' },
]

const COLS: FooterCol[] = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Community', href: '/community' },
      { label: 'Startups', href: '/startups' },
      { label: 'Blog', href: '/blog' },
      { label: 'Chapters', href: '/chapters' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'SheInnovates', href: 'https://sit.atcafrica.com' },
      { label: 'BuildWithOyo', href: 'https://talenttribe.atcafrica.com' },
      { label: 'Technical Series', href: '/technical-series' },
      { label: 'Hackathons', href: '/hackathons' },
      { label: 'Mentorship', href: '/mentorship' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Become A Member', href: '/register' },
      { label: 'Login', href: '/login' },
      { label: 'Donate For a Talent', href: '/donate' },
      { label: 'Become A Partner', href: '/partner' },
      { label: 'Contact', href: 'contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080000', borderTop: '1px solid rgba(245,160,0,0.1)' }}>
      <TribalDivider />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ShieldLogo size={32} />
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: 'white', letterSpacing: '0.08em' }}>TALENT</div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '10px', letterSpacing: '0.25em', color: '#f5a000' }}>TRIBE</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', lineHeight: '1.75', maxWidth: '240px' }}>
              A community of creative minds driving the Oyo ecosystem through innovation and shared purpose.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s, i) => {
                const Icon = s.icon
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '36px', height: '36px', border: '1px solid rgba(245,160,0,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9a9090', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#f5a000'; e.currentTarget.style.borderColor = '#f5a000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9a9090'; e.currentTarget.style.borderColor = 'rgba(245,160,0,0.2)' }}
                    aria-label={`Social link ${i}`}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </a>
                )
              })}
            </div>
            <div className="mt-4" style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: '#f5a000', fontWeight: 500 }}>
              @oyotalenttribehq
            </div>
          </div>

          {/* Link cols */}
          {COLS.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', color: 'white', textTransform: 'uppercase', marginBottom: '20px' }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') ? (
                      <Link
                        href={l.href}
                        style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#6a6060')}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#6a6060')}
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(245,160,0,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'Montserrat', fontSize: '12px', color: '#4a4040' }}>
            © 2024 Talent Tribe. All rights reserved. Oyo State, Nigeria.
          </span>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(245,160,0,0.4)', textTransform: 'uppercase' }}>
            Learn · Grow · Connect
          </span>
        </div>
      </div>
    </footer>
  )
}
