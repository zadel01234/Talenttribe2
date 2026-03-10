import Nav from '@/components/Nav'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <div style={{ background: '#ffffff' }}>
      <Nav />
      <div className="pt-16">
        <Blog />
      </div>
      <Footer />
    </div>
  )
}
