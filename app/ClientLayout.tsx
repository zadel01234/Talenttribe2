'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setIsLoading(false), 1000)
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div className="transition-opacity duration-500">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
          <Image
            src="/images/TalentTibeColorLogo1.webp"
            alt="Loading..."
            width={100}
            height={100}
            className="animate-pulse"
            priority
          />
        </div>
      ) : (
        children
      )}
    </div>
  )
}
