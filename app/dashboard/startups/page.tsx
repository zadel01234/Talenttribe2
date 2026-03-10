'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Rocket, Globe, ExternalLink } from 'lucide-react'

interface Startup {
  id: number
  name: string
  description: string
  logo?: string
  logo_url?: string
  website?: string
}

export default function DashboardStartups() {
  const [startups, setStartups] = useState<Startup[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 md:p-8 mb-6 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Rocket className="w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold">Startups in Ibadan</h1>
        </div>
        <p className="text-purple-100 md:text-lg max-w-3xl">
          Discover innovative startups building solutions and creating opportunities in Ibadan's growing tech ecosystem.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : startups.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center">
          <Rocket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No startups available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {startup.website ? (
                <a
                  href={startup.website.startsWith('http') ? startup.website : `https://${startup.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-5">
                    <div className="flex gap-4 mb-4">
                      {startup.logo_url && (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={startup.logo_url}
                            alt={startup.name}
                            fill
                            className="object-contain p-2"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-1 truncate">
                          {startup.name}
                        </h3>
                        {startup.website && (
                          <div className="flex items-center gap-1 text-xs text-blue-600 group-hover:text-blue-700">
                            <Globe className="w-3 h-3" />
                            <span className="truncate">{startup.website}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {startup.description && (
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {startup.description}
                      </p>
                    )}

                    <div className="flex items-center justify-end text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="p-5">
                  <div className="flex gap-4 mb-4">
                    {startup.logo_url && (
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={startup.logo_url}
                          alt={startup.name}
                          fill
                          className="object-contain p-2"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
                        {startup.name}
                      </h3>
                    </div>
                  </div>
                  
                  {startup.description && (
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {startup.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
