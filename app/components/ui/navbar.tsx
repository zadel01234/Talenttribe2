'use client'
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsCommunityOpen(false);
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleClickOutside);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleClickOutside);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Talent Tibe Color Logo 1.png"
              alt="Talent Tribe Logo"
              width={80}
              height={80}
              className="h-11 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="md:hidden rounded-md p-2 text-red-900 hover:bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-red-900 hover:text-black transition-colors">
              About us
            </Link>
            <Link href="/team" className="text-red-900 hover:text-black transition-colors">
              Team
            </Link>
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCommunityOpen(!isCommunityOpen);
                }}
                className="text-red-900 hover:text-black transition-colors flex items-center focus:outline-none"
              >
                Communities
                <ChevronDown 
                  className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isCommunityOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded-xl py-2 transition-all duration-300 transform ${isCommunityOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
              >
                <Link href="/community" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                 Our Community
                </Link>
                <Link href="/techcommunities" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                 Tech Communities In Ibadan
                </Link>
                <Link href="/startups" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                  Startups in Ibadan
                </Link>
                <Link href="/workspaces" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                 WorkSpaces in Ibadan
                </Link>
              </div>
            </div>
            <Link href="/blog" className="text-red-900 hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/chapters" className="text-red-900 hover:text-black transition-colors">
              Our Chapters
            </Link>
            <Link href="/register" className="text-red-900 hover:text-black transition-colors">
              Register
            </Link>
            <Link href="/login" className="text-red-900 hover:text-black transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/about" className="block text-red-900 hover:text-black transition-colors">
              About us
            </Link>
            <Link href="/team" className="block text-red-900 hover:text-black transition-colors" >
              Team
            </Link>
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCommunityOpen(!isCommunityOpen);
                }}
                className="block text-red-900 hover:text-black transition-colors flex items-center w-full text-left"
              >
                Communities 
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isCommunityOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {isCommunityOpen && (
                <div className={`mt-2 bg-white border-l border-r rounded-md py-2 transition-all duration-300 transform ${isCommunityOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                >
                   <Link href="/community" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                 Our Community
                </Link>
                <Link href="/techcommunities" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                 Tech Communities In Ibadan
                </Link>
                <Link href="/startups" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                  Startups in Ibadan
                </Link>
                <Link href="/workspaces" className="block px-4 py-2 text-red-900 hover:bg-gray-100">
                 WorkSpaces in Ibadan
                </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="block text-red-900 hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/chapters" className="block text-red-900 hover:text-black transition-colors">
              Our Chapters
            </Link>
            <Link href="/register" className="block text-red-900 hover:text-black transition-colors">
              Register
            </Link>
            <Link href="/login" className="block text-red-900 hover:text-black transition-colors">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
