'use client'

import Image from 'next/image'

interface Partner {
  name: string
  image: string
}

const PARTNERS: Partner[] = [
  { name: '3MTT', image: '/images/logos/3MTT.jpg' },
  { name: 'Cirvee', image: '/images/logos/cirvee wordmark for white bg.png' },
  { name: 'CMX Ibadan', image: '/images/logos/cmx Ibadan.jpg' },
  { name: 'Cortouch Media', image: '/images/logos/Cortouch-Media-logo (1).png' },
  { name: 'Ekoss360', image: '/images/logos/Ekoss360.jpeg' },
  { name: 'GDG Ladoke', image: '/images/logos/gdg ladoke.jpg' },
  { name: 'GDG Ogbomoso', image: '/images/logos/GDG Ogbomoso logo_PqwVypB.jpg' },
  { name: 'GDG UI', image: '/images/logos/gdg ui.PNG' },
  { name: 'GDG', image: '/images/logos/GDG.jpg' },
  { name: 'GDG Ibadan', image: '/images/logos/GDGIbadanLogo-ezgif.com-webp-to-jpg-converter.jpg' },
  { name: 'Growth Hackers Africa', image: '/images/logos/growth.jpg' },
  { name: 'Ibadan Tech Expo', image: '/images/logos/ibadan tech expo.jfif' },
  { name: 'Interswitch', image: '/images/logos/Interswitch.png' },
  { name: 'Larva', image: '/images/logos/Larva.png' },
  { name: 'Looped', image: '/images/logos/looped.JPG' },
  { name: 'Microsoft', image: '/images/logos/Microsoft.png' },
  { name: 'Notzero', image: '/images/logos/Notzero.jpg' },
  { name: 'Oyo State', image: '/images/logos/Oyo.jpg' },
  { name: 'Safenet', image: '/images/logos/safenet.JPEG' },
  { name: 'SEBS', image: '/images/logos/SEBS.png' },
  { name: 'She Innovate', image: '/images/logos/she innovate.png' },
  { name: 'SkyGrid', image: '/images/logos/SkyGrid.jpg' },
  { name: 'SQI College of ICT', image: '/images/logos/SQI_logo (1).png' },
  { name: 'Talenxify', image: '/images/logos/talenxify logo.png' },
  { name: 'Tech Cabal', image: '/images/logos/Tech-Cabal.gif' },
  { name: 'The CM Guide', image: '/images/logos/cm.PNG' },
  { name: 'Varsity Scape', image: '/images/logos/varsity scape.png' },
  { name: 'Zeeh Africa', image: '/images/logos/zeeh.jpg' },
  { name: 'Techpoint Africa', image: '/images/logos/TECHPOINT.png' },
  { name: 'Oluseun Onigbinde RC', image: '/images/logos/IMG-20251211-WA0137.jpg' },
]

function splitIntoRows(arr: Partner[], numRows: number): Partner[][] {
  const itemsPerRow = Math.ceil(arr.length / numRows)
  const rows: Partner[][] = []
  for (let i = 0; i < numRows; i++) {
    rows.push(arr.slice(i * itemsPerRow, (i + 1) * itemsPerRow))
  }
  return rows
}

const desktopRows = splitIntoRows(PARTNERS, 2)
const mobileRows = splitIntoRows(PARTNERS, 3)

function MarqueeRow({ partners, reverse = false, speed = 25 }: { partners: Partner[]; reverse?: boolean; speed?: number }) {
  const marqueeList = [...partners, ...partners, ...partners]

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-6 md:gap-8 lg:p-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {marqueeList.map((partner, index) => (
          <div
            key={index}
            className="group relative w-24 h-24 md:w-36 md:h-36 flex-shrink-0 bg-white rounded-lg md:rounded-xl border border-gray-200 p-3 md:p-5 transition-all duration-300 hover:border-[#f5a000] hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative w-full h-full">
              <Image src={partner.image} alt={partner.name} fill className="object-contain transition-all duration-300 group-hover:scale-110" unoptimized />
            </div>
            {/* Tooltip */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
              <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                {partner.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="relative w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: '#f5a000' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#f5a000' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 lg:px-16 text-center">
        <span className="inline-block px-8 md:px-12 py-2 rounded-full text-xs md:text-sm mb-6 md:mb-8 font-medium text-white" style={{ background: '#f5a000', fontFamily: 'Space Grotesk', letterSpacing: '0.15em' }}>
          PARTNERS
        </span>
        <p className="text-base md:text-xl text-gray-900 mb-10 md:mb-16 font-medium" style={{ fontFamily: 'Space Grotesk' }}>
          Meet our Official Partners
        </p>

        {/* Desktop/Tablet: 2 Rows */}
        <div className="hidden md:flex flex-col gap-6">
          {desktopRows.map((row, idx) => (
            <MarqueeRow key={idx} partners={row} reverse={idx % 2 === 1} speed={25 + idx * 2} />
          ))}
        </div>

        {/* Mobile: 3 Rows */}
        <div className="flex md:hidden flex-col gap-4">
          {mobileRows.map((row, idx) => (
            <MarqueeRow key={idx} partners={row} reverse={idx % 2 === 1} speed={20 + idx * 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
