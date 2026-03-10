'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from '@/app/components/ui/button'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer"

interface Chapter {
  id: number
  name: string
  description: string
  location: string
  contact_email?: string
}

export default function Chapters() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchChapters()
  }, [])

  const fetchChapters = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chapters/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) throw new Error("Failed to fetch chapters")

      const data = await response.json()
      setChapters(data)
    } catch (error) {
      console.error("Error fetching chapters:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
     <Nav />

      {/* Hero Section */}
      <div className="relative pt-16 min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('/images/chapters.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-red-900/50"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-balooThambi mb-4">
            Oyo Talent Tribe Chapter
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Join our growing community and be part of the tech revolution
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : chapters.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No chapters available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="group relative overflow-hidden"
              >
                {chapter.contact_email ? (
                  <a
                    href={`mailto:${chapter.contact_email}`}
                    className="block p-4 border rounded-lg hover:border-red-900 transition-colors bg-white hover:bg-red-50"
                  >
                    <div className="space-y-2">
                      <h3 className="text-gray-800 font-semibold group-hover:text-red-900 transition-colors">
                        {chapter.name}
                      </h3>
                      {chapter.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">{chapter.description}</p>
                      )}
                      {chapter.location && (
                        <p className="text-xs text-gray-500">{chapter.location}</p>
                      )}
                      <p className="text-xs text-blue-600">Click to contact</p>
                    </div>
                  </a>
                ) : (
                  <div className="block p-4 border rounded-lg bg-white">
                    <div className="space-y-2">
                      <h3 className="text-gray-800 font-semibold">
                        {chapter.name}
                      </h3>
                      {chapter.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">{chapter.description}</p>
                      )}
                      {chapter.location && (
                        <p className="text-xs text-gray-500">{chapter.location}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

