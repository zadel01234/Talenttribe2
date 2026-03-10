import type { Metadata } from 'next'
import { Space_Grotesk, Baloo_Thambi_2, Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ClientLayout from './ClientLayout'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const balooThambi = Baloo_Thambi_2({ subsets: ['latin'], variable: '--font-baloo-thambi' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Talent Tribe',
  description: 'A community of creative minds driving the Oyo ecosystem through Innovation.',
  openGraph: {
    title: 'Talent Tribe',
    description: 'A community of creative minds driving the Oyo ecosystem through Innovation.',
    url: 'https://talent-tribe-frontend.vercel.app',
    siteName: 'Talent Tribe',
    images: [
      {
        url: 'https://talent-tribe-frontend.vercel.app/images/talent_tribe_logo.png',
        width: 1200,
        height: 630,
        alt: 'Talent Tribe Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Tribe',
    description: 'A community of creative minds driving the Oyo ecosystem through Innovation.',
    images: ['https://talent-tribe-frontend.vercel.app/images/talent_tribe_logo.png'],
  },
  icons: {
    icon: '/talent_tribe_logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${balooThambi.variable} ${inter.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <ToastContainer />
      </body>
    </html>
  )
}
