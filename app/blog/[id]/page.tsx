'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface BlogPost {
  id: number
  title: string
  content: string
  image?: string
  featured_image_url?: string
  author: {
    id: number
    email: string
    full_name: string
    profile_picture?: string
    profile_picture_url?: string
  }
  created_at: string
  updated_at: string
  published: boolean
}

export default function BlogDetailPage() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBlogPost = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts/${params.id}/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Blog post not found')
        }
        throw new Error('Failed to fetch blog post')
      }

      const data = await response.json()
      setBlog(data)
    } catch (error: any) {
      console.error('Error fetching blog post:', error)
      setError(error.message || 'Failed to load blog post')
    } finally {
      setLoading(false)
    }
  }, [params.id])

  useEffect(() => {
    if (params.id) {
      fetchBlogPost()
    }
  }, [params.id, fetchBlogPost])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Nav lightBackground={true} />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen">
        <Nav lightBackground={true} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {error || 'Blog Post Not Found'}
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-red-900 hover:text-red-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav lightBackground={true} />

      {/* Hero Section with Image */}
      <div className="relative h-[50vh] overflow-hidden bg-gray-200">
        {blog.featured_image_url ? (
          <Image
            src={blog.featured_image_url}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700" />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-32 relative z-10">
        <article className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-red-900 hover:text-red-700 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b">
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{blog.author.full_name || blog.author.email}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
          </div>

          {/* Featured Image in Content */}
          {blog.featured_image_url && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={blog.featured_image_url}
                alt={blog.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Updated Date */}
          {blog.updated_at !== blog.created_at && (
            <div className="mt-8 pt-8 border-t text-sm text-gray-500">
              Last updated: {formatDate(blog.updated_at)}
            </div>
          )}
        </article>

        {/* Related/Back Section */}
        <div className="max-w-4xl mx-auto mt-12 mb-12 text-center">
          <Link
            href="/blog"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
