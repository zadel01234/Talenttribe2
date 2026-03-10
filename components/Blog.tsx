'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Post {
  id: number
  category: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  featured: boolean
}

const POSTS: Post[] = [
  {
    id: 1,
    category: 'Team Spotlight',
    title: 'Elevating the Oyo Tech Narrative',
    excerpt: "For too long, world-class products have been built in Ibadan without the recognition they deserve. We are changing that — bridging the gap between 'building in silence' and global discovery.",
    image: '/images/blog.jpg',
    author: 'Talent Tribe',
    date: 'Dec 11, 2025',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'Innovation',
    title: "How Oyo's Students Are Redefining Africa's Tech Future",
    excerpt: "Inside the chapters, classrooms and co-working spaces where the next wave of African tech talent is being forged — one build at a time.",
    image: '/images/series.jpg',
    author: 'Talent Tribe',
    date: 'Nov 28, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'Community',
    title: 'From Telegram to Real Impact: The Chapter Story',
    excerpt: "What started as a Telegram group has grown into a movement with chapters across Oyo State. Here's how local communities are driving global-level outcomes.",
    image: '/images/hackathon.jpg',
    author: 'Talent Tribe',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'Events',
    title: 'Build With Oyo: A Recap of Our Biggest Hackathon Yet',
    excerpt: 'Over 200 students, 48 hours, and countless breakthroughs. Here\'s everything that happened at Build With Oyo 2025.',
    image: '/images/workshop.jpg',
    author: 'Talent Tribe',
    date: 'Oct 30, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'Skills',
    title: 'The Tech Stack Every Oyo Developer Should Know in 2026',
    excerpt: 'Our mentors break down the tools, frameworks, and mindsets that will separate good developers from great ones in the coming year.',
    image: '/images/she-innovate.jpg',
    author: 'Talent Tribe',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
    featured: false,
  },
]

const CATEGORIES = ['All', 'Team Spotlight', 'Innovation', 'Community', 'Events', 'Skills']

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span style={{ display: 'inline-block', fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f5a000', background: 'rgba(245,160,0,0.1)', border: '1px solid rgba(245,160,0,0.35)', padding: '3px 10px', borderRadius: '4px' }}>
      {label}
    </span>
  )
}

function FeaturedCard({ post }: { post: Post }) {
  const ref = useInView(0.1)
  return (
    <div ref={ref} className="featured-card reveal-up" style={{ ['--d' as string]: '0s' }}>
      <div className="featured-inner">
        <div className="featured-img-wrap">
          <Image src={post.image} alt={post.title} fill className="featured-img object-cover" />
          <div className="featured-img-overlay" />
        </div>
        <div className="featured-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <CategoryBadge label={post.category} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.15)' }}>
              FEATURED
            </span>
          </div>
          <h2 className="featured-title">{post.title}</h2>
          <p className="featured-excerpt">{post.excerpt}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="author-avatar">TT</div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'white', fontWeight: 600 }}>{post.author}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>{post.date} · {post.readTime}</div>
              </div>
            </div>
            <a href="#" className="read-btn">
              Read Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function PostCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const ref = useInView(0.1)
  return (
    <div ref={ref} className="post-card reveal-up" style={{ ['--d' as string]: `${delay}s` }}>
      <div className="post-img-wrap">
        <Image src={post.image} alt={post.title} fill className="post-img object-cover" />
        <div className="post-img-overlay" />
        <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
          <CategoryBadge label={post.category} />
        </div>
      </div>
      <div className="post-body">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-footer">
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#aaa', letterSpacing: '0.06em' }}>
            {post.date} · {post.readTime}
          </div>
          <a href="#" className="post-link">
            Read
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const headerRef = useInView(0.1)

  const filtered = activeCategory === 'All' ? POSTS : POSTS.filter((p) => p.category === activeCategory)
  const featured = filtered.find((p) => p.featured) || filtered[0]
  const rest = filtered.filter((p) => p.id !== featured?.id)

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Lato:wght@300;400;700&display=swap');
        .reveal-up { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease var(--d, 0s), transform 0.65s ease var(--d, 0s); }
        .reveal-up.in-view { opacity: 1; transform: translateY(0); }
        .blog-header { padding: 96px 24px 64px; text-align: center; position: relative; background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.06); }
        .blog-header::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(245,160,0,0.12) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; }
        .blog-eyebrow { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.28em; color: #f5a000; text-transform: uppercase; margin-bottom: 18px; display: flex; align-items: center; justify-content: center; gap: 14px; position: relative; z-index: 1; }
        .blog-eyebrow::before, .blog-eyebrow::after { content: ''; display: block; height: 1px; width: 40px; background: linear-gradient(to right, transparent, #f5a000); }
        .blog-eyebrow::after { background: linear-gradient(to left, transparent, #f5a000); }
        .blog-headline { font-family: 'Playfair Display', serif; font-size: clamp(40px, 6vw, 76px); font-weight: 900; color: #111111; line-height: 1.02; letter-spacing: -0.02em; margin: 0; position: relative; z-index: 1; }
        .blog-headline em { font-style: italic; color: #f5a000; }
        .blog-subhead { font-family: 'Lato', sans-serif; font-size: 16px; color: #888; margin-top: 18px; position: relative; z-index: 1; }
        .cat-bar { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; padding: 36px 24px 40px; background: #fafafa; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .cat-btn { font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; padding: 8px 18px; border-radius: 6px; border: 1px solid #e0e0e0; background: white; color: #888; cursor: pointer; transition: all 0.2s ease; }
        .cat-btn:hover { border-color: #f5a000; color: #f5a000; }
        .cat-btn.active { background: #f5a000; border-color: #f5a000; color: #fff; font-weight: 600; }
        .featured-card { max-width: 1200px; margin: 56px auto; padding: 0 24px; }
        .featured-inner { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08); min-height: 520px; display: flex; align-items: flex-end; cursor: pointer; box-shadow: 0 4px 32px rgba(0,0,0,0.08); transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .featured-inner:hover { box-shadow: 0 16px 56px rgba(0,0,0,0.14); transform: translateY(-3px); }
        .featured-inner:hover .featured-img { transform: scale(1.04); }
        .featured-img-wrap { position: absolute; inset: 0; overflow: hidden; }
        .featured-img { width: 100% !important; height: 100% !important; object-fit: cover; transition: transform 0.7s ease !important; }
        .featured-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.1) 100%); }
        .featured-content { position: relative; z-index: 2; padding: 44px 48px; width: 100%; max-width: 720px; }
        .featured-title { font-family: 'Playfair Display', serif; font-size: clamp(26px, 3.5vw, 46px); font-weight: 800; color: white; line-height: 1.15; margin: 0 0 14px; letter-spacing: -0.01em; }
        .featured-excerpt { font-family: 'Lato', sans-serif; font-size: 15px; color: rgba(255,255,255,0.68); line-height: 1.75; margin: 0; }
        .author-avatar { width: 36px; height: 36px; border-radius: 50%; background: #f5a000; display: flex; align-items: center; justify-content: center; font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 600; color: #000; flex-shrink: 0; }
        .read-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #000; background: #f5a000; padding: 10px 22px; border-radius: 8px; text-decoration: none; transition: opacity 0.2s, transform 0.2s; white-space: nowrap; }
        .read-btn:hover { opacity: 0.88; transform: translateY(-2px); }
        .section-divider { max-width: 1200px; margin: 0 auto 32px; padding: 0 24px; display: flex; align-items: center; gap: 16px; }
        .divider-label { font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #f5a000; white-space: nowrap; }
        .divider-line { flex: 1; height: 1px; background: linear-gradient(to right, rgba(245,160,0,0.4), transparent); }
        .posts-grid { max-width: 1200px; margin: 0 auto; padding: 0 24px 96px; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
        .post-card { background: #ffffff; border: 1px solid #ebebeb; border-radius: 14px; overflow: hidden; cursor: pointer; transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease; }
        .post-card:hover { border-color: rgba(245,160,0,0.4); transform: translateY(-5px); box-shadow: 0 20px 48px rgba(0,0,0,0.08); }
        .post-img-wrap { position: relative; height: 210px; overflow: hidden; }
        .post-img { width: 100% !important; height: 100% !important; object-fit: cover; transition: transform 0.5s ease !important; }
        .post-card:hover .post-img { transform: scale(1.06) !important; }
        .post-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%); }
        .post-body { padding: 24px 22px 18px; }
        .post-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 800; color: #1a1a1a; line-height: 1.3; margin: 0 0 10px; transition: color 0.2s; }
        .post-card:hover .post-title { color: #f5a000; }
        .post-excerpt { font-family: 'Lato', sans-serif; font-size: 13.5px; color: #888; line-height: 1.75; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .post-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 18px; padding-top: 14px; border-top: 1px solid #f0f0f0; }
        .post-link { display: inline-flex; align-items: center; gap: 5px; font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #f5a000; text-decoration: none; transition: gap 0.2s ease; }
        .post-card:hover .post-link { gap: 9px; }
      `}</style>

      {/* Header */}
      <div ref={headerRef} className="blog-header reveal-up" style={{ ['--d' as string]: '0s' }}>
        <div className="blog-eyebrow">Stories &amp; Spotlights</div>
        <h1 className="blog-headline">The Oyo <em>Tech</em> Narrative</h1>
        <p className="blog-subhead">Ideas, builders, and breakthroughs from the heart of Oyo State.</p>
      </div>

      {/* Category Filter */}
      <div className="cat-bar">
        {CATEGORIES.map((cat) => (
          <button key={cat} className={`cat-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featured && <FeaturedCard post={featured} />}

      {/* More Posts */}
      {rest.length > 0 && (
        <>
          <div className="section-divider">
            <span className="divider-label">More Stories</span>
            <div className="divider-line" />
          </div>
          <div className="posts-grid">
            {rest.map((post, i) => (
              <PostCard key={post.id} post={post} delay={i * 0.08} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
