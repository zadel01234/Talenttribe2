'use client'
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-red-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/">
                <Image src="/images/Talent Tibe Official white logo 1.png" alt="logo" width={80} height={80} />
              </Link>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/blog">blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/joinus">Join Us</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/chapter">Lead a Chapter</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
  <Link href="#"target="_blank" className="hover:text-white/80 transition-colors">
    <FaTelegramPlane className="h-6 w-6" />
  </Link>

  {/* X (Twitter) */}
  <Link href="#" target="_blank" className="hover:text-white/80 transition-colors">
    <FaTwitter className="h-6 w-6" />
  </Link>

  {/* Discord */}
  <Link href="#" target="_blank" className="hover:text-white/80 transition-colors">
    <FaDiscord className="h-6 w-6" />
  </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
              
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p>&copy; Copyright 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}