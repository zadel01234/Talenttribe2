'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

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

export default function DashboardWorkspaces() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 md:p-8 mb-6 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Building2 className="w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold">Workspaces in Ibadan</h1>
        </div>
        <p className="text-green-100 md:text-lg max-w-3xl">
          Find the perfect workspace to collaborate, innovate, and bring your ideas to life.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : workspaces.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center">
          <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No workspaces available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex gap-4 mb-4">
                  {workspace.image_url && (
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={workspace.image_url}
                        alt={workspace.name}
                        fill
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
                      {workspace.name}
                    </h3>
                    {workspace.address && (
                      <div className="flex items-start gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{workspace.address}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {workspace.description && (
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {workspace.description}
                  </p>
                )}

                {/* Contact Info */}
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  {workspace.contact_email && (
                    <a
                      href={`mailto:${workspace.contact_email}`}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors group"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate group-hover:underline">{workspace.contact_email}</span>
                    </a>
                  )}
                  {workspace.contact_phone && (
                    <a
                      href={`tel:${workspace.contact_phone}`}
                      className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors group"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="group-hover:underline">{workspace.contact_phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
