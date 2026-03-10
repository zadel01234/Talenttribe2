'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from '@/app/components/ui/button'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Overlay from '../components/ui/overlay'

export default function Startups() {
  const [bgImage, setBgImage] = useState('')
  const [startups, setStartups] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setBgImage("url(/images/startupbg.png)")
    fetchStartups()
  }, [])

  const fetchStartups = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/startups/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) throw new Error("Failed to fetch startups")

      const data = await response.json()
      setStartups(data)
    } catch (error) {
      console.error("Error fetching startups:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
     
      <div className="relative pt-16 min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: bgImage }} aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-balooThambi mb-4">Startups in Ibadan</h1>
          <p className="text-white/90 text-lg md:text-lg max-w-2xl mx-auto">
            Our goal is to cultivate an ecosystem that encourages innovation and provides opportunities...
          </p>
        </div>
        <Overlay />
      </div>
      <main className="flex-1 container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : startups.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No startups available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {startups.map((startup) => (
              <div key={startup.id} className="group relative overflow-hidden">
                {startup.website ? (
                  <a
                    href={startup.website.startsWith('http') ? startup.website : `https://${startup.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border rounded-lg hover:border-red-900 transition-colors bg-white hover:bg-red-50"
                  >
                    <div className="flex gap-4">
                      {startup.logo_url && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={startup.logo_url}
                            alt={startup.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-gray-800 font-semibold group-hover:text-red-900 transition-colors">{startup.name}</h3>
                        {startup.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{startup.description}</p>
                        )}
                        <p className="text-xs text-blue-600 truncate">🔗 {startup.website}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="block p-4 border rounded-lg bg-white">
                    <div className="flex gap-4">
                      {startup.logo_url && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={startup.logo_url}
                            alt={startup.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-gray-800 font-semibold">{startup.name}</h3>
                        {startup.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{startup.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
