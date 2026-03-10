'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Users, Globe, ExternalLink } from 'lucide-react'

interface Community {
  id: number
  name: string
  description: string
  logo?: string
  logo_url?: string
  website?: string
}

export default function DashboardTechCommunities() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCommunities()
  }, [])

  const fetchCommunities = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/communities/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) throw new Error("Failed to fetch communities")

      const data = await response.json()
      setCommunities(data)
    } catch (error) {
      console.error("Error fetching communities:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 mb-6 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Users className="w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold">Tech Communities</h1>
        </div>
        <p className="text-red-100 md:text-lg max-w-3xl">
          Connect with vibrant tech communities in Ibadan. Join, learn, and grow together.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : communities.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No tech communities available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {communities.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {community.website ? (
                <a
                  href={community.website.startsWith('http') ? community.website : `https://${community.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-5">
                    <div className="flex gap-4 mb-4">
                      {community.logo_url && (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={community.logo_url}
                            alt={community.name}
                            fill
                            className="object-contain p-2"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors mb-1 truncate">
                          {community.name}
                        </h3>
                        {community.website && (
                          <div className="flex items-center gap-1 text-xs text-blue-600 group-hover:text-blue-700">
                            <Globe className="w-3 h-3" />
                            <span className="truncate">{community.website}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {community.description && (
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {community.description}
                      </p>
                    )}

                    <div className="flex items-center justify-end text-red-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="p-5">
                  <div className="flex gap-4 mb-4">
                    {community.logo_url && (
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={community.logo_url}
                          alt={community.name}
                          fill
                          className="object-contain p-2"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
                        {community.name}
                      </h3>
                    </div>
                  </div>
                  
                  {community.description && (
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {community.description}
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
