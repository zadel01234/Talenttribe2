'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from '@/app/components/ui/button'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Overlay from '../components/ui/overlay'

interface Workspace {
  id: number
  name: string
  description: string
  address: string
  logo?: string
  image_url?: string
  contact_email?: string
  contact_phone?: string
}

export default function Workspaces() {
  const [bgImage, setBgImage] = useState('')
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setBgImage("url(/images/techcommunities.png)")
    fetchWorkspaces()
  }, [])

  const fetchWorkspaces = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workspaces/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) throw new Error("Failed to fetch workspaces")

      const data = await response.json()
      setWorkspaces(data)
    } catch (error) {
      console.error("Error fetching workspaces:", error)
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
          <h1 className="text-white text-4xl md:text-5xl font-bold font-balooThambi mb-4">WorkSpaces in Ibadan</h1>
          <p className="text-white/90 text-lg md:text-lg max-w-2xl mx-auto">
          Communities are the cornerstone of a thriving ecosystem, empowering talent and driving innovation.
          </p>
        </div>
        <Overlay />
      </div>
      <main className="flex-1 container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : workspaces.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No workspaces available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {workspaces.map((workspace) => (
              <div key={workspace.id} className="group relative overflow-hidden">
                {workspace.contact_email || workspace.contact_phone ? (
                  <a
                    href={workspace.contact_email ? `mailto:${workspace.contact_email}` : `tel:${workspace.contact_phone}`}
                    className="block p-4 border rounded-lg hover:border-red-900 transition-colors bg-white hover:bg-red-50"
                  >
                    <div className="flex gap-4">
                      {workspace.image_url && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={workspace.image_url}
                            alt={workspace.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-gray-800 font-semibold group-hover:text-red-900 transition-colors">{workspace.name}</h3>
                        {workspace.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{workspace.description}</p>
                        )}
                        {workspace.address && (
                          <p className="text-xs text-gray-500">{workspace.address}</p>
                        )}
                        <p className="text-xs text-blue-600">Click to contact</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="block p-4 border rounded-lg bg-white">
                    <div className="flex gap-4">
                      {workspace.image_url && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={workspace.image_url}
                            alt={workspace.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-gray-800 font-semibold">{workspace.name}</h3>
                        {workspace.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{workspace.description}</p>
                        )}
                        {workspace.address && (
                          <p className="text-xs text-gray-500">{workspace.address}</p>
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
