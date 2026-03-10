'use client'

import Image from 'next/image'
import { useRef } from 'react'

interface Photo {
  src: string
  label: string
}

const PHOTOS: Photo[] = [
  { src: '/images/comm3.jpg', label: 'Community Event' },
  { src: '/images/hackathon.jpg', label: 'Hackathon' },
  { src: '/images/workshop.jpg', label: 'Workshop' },
  { src: '/images/she-innovate.jpg', label: 'She Innovates' },
  { src: '/images/buildwithoyo.jpg', label: 'BuildWithOyo' },
  { src: '/images/series.jpg', label: 'Tech Series' },
]

export default function Gallery() {
  return (
    <section className="py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="section-line" />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#c47f00', textTransform: 'uppercase' }}>
                Gallery
              </span>
            </div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1, color: '#1a0000' }}>
              In <span style={{ color: '#c47f00' }}>Pictures</span>
            </h2>
          </div>
          <a
            href="https://talenttribe.atcafrica.com/gallery"
            style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '13px', color: '#c47f00', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            View All
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PHOTOS.map((p, i) => (
            <GalleryItem key={i} photo={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ photo }: { photo: Photo }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{ minHeight: '220px', cursor: 'pointer', boxShadow: '0 2px 12px rgba(61,0,0,0.08)' }}
      onMouseOver={() => {
        if (imgRef.current) imgRef.current.style.transform = 'scale(1.06)'
        if (overlayRef.current) overlayRef.current.style.opacity = '1'
      }}
      onMouseOut={() => {
        if (imgRef.current) imgRef.current.style.transform = 'scale(1)'
        if (overlayRef.current) overlayRef.current.style.opacity = '0'
      }}
    >
      <Image
        ref={imgRef as React.Ref<HTMLImageElement>}
        src={photo.src}
        alt={photo.label}
        fill
        className="object-cover absolute inset-0"
        style={{ transition: 'transform 0.4s ease' }}
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-end p-5"
        style={{ background: 'linear-gradient(to top, rgba(26,0,0,0.7) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.3s ease' }}
      >
        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {photo.label}
        </span>
      </div>
    </div>
  )
}
