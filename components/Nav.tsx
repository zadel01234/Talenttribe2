// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import ShieldLogo from './ShieldLogo'

// interface NavLink {
//   label: string
//   href: string
//   dropdown?: { label: string; href: string }[]
// }

// const NAV_LINKS: NavLink[] = [
//   { label: 'Home', href: '/' },
//   {
//     label: 'About us',
//     href: '/about',
//     dropdown: [
//       { label: 'Team', href: '/team' },
//       { label: 'Initiatives', href: '/initiatives' },
//       { label: 'Programs', href: '/programs' },
//     ],
//   },
//   { label: 'Community', href: '/community' },
//   {
//     label: 'Ecosystem',
//     href: '/startups',
//     dropdown: [
//       { label: 'Startups in Ibadan', href: '/startups' },
//       { label: 'WorkSpaces in Ibadan', href: '/workspaces' },
//       { label: 'Tech Communities in Ibadan', href: '/techcommunities' },
//     ],
//   },
//   { label: 'Blog', href: '/blog' },
//   { label: 'Chapters', href: '/chapters' },
// ]

// interface NavProps {
//   lightBackground?: boolean
// }

// export default function Nav({ lightBackground = false }: NavProps) {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const isLight = !scrolled && lightBackground

//   const linkColor = isLight ? '#1a1a1a' : 'rgba(255,255,255,0.85)'
//   const logoTextColor = isLight ? '#1a1a1a' : '#ffffff'
//   const dropdownBg = isLight ? 'rgba(255,255,255,0.98)' : 'rgba(26,0,0,0.97)'
//   const dropdownBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.2)'
//   const dropdownText = isLight ? '#333333' : 'rgba(200,200,200,0.9)'
//   const dropdownHoverBg = isLight ? 'rgba(245,160,0,0.06)' : 'rgba(255,255,255,0.05)'
//   const mobileMenuBg = isLight ? 'rgba(255,255,255,0.99)' : 'rgba(13,0,0,0.97)'
//   const mobileMenuBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.15)'
//   const mobileLinkColor = isLight ? '#222222' : 'rgba(200,200,200,0.9)'
//   const mobileDivider = isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)'
//   const hamburgerColor = isLight ? '#1a1a1a' : '#ffffff'

//   const Chevron = () => (
//     <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <polyline points="6 9 12 15 18 9" />
//     </svg>
//   )

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur py-3' : 'py-5 bg-transparent'
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <a href="https://talenttribe.atcafrica.com/" className="flex items-center gap-3 group">
//           <ShieldLogo size={36} light={isLight} />
//           <div>
//             <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', letterSpacing: '0.08em', color: logoTextColor, lineHeight: 1, transition: 'color 0.3s ease' }}>
//               TALENT
//             </div>
//             <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: '#f5a000' }}>
//               TRIBE
//             </div>
//           </div>
//         </a>

//         {/* Desktop links */}
//         <div className="hidden lg:flex items-center gap-8">
//           {NAV_LINKS.map((link) => (
//             <div key={link.label} className="nav-item relative">
//               {link.href.startsWith('/') ? (
//                 <Link
//                   href={link.href}
//                   className="flex items-center gap-1 transition-colors duration-200"
//                   style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '17px', letterSpacing: '0.04em', color: linkColor, transition: 'color 0.3s ease' }}
//                 >
//                   {link.label}
//                   {link.dropdown && <Chevron />}
//                 </Link>
//               ) : (
//                 <a
//                   href={link.href}
//                   className="flex items-center gap-1 transition-colors duration-200"
//                   style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '17px', letterSpacing: '0.04em', color: linkColor, transition: 'color 0.3s ease' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
//                 >
//                   {link.label}
//                   {link.dropdown && <Chevron />}
//                 </a>
//               )}

//               {link.dropdown && (
//                 <div
//                   className="dropdown-menu absolute top-full left-0 mt-2 w-52 py-2 rounded-md shadow-lg"
//                   style={{ background: dropdownBg, border: `1px solid ${dropdownBorder}`, backdropFilter: 'blur(20px)' }}
//                 >
//                   {link.dropdown.map((item) => (
//                     <a
//                       key={item.label}
//                       href={item.href}
//                       style={{ display: 'block', padding: '8px 16px', fontSize: '13px', fontFamily: 'Montserrat', color: dropdownText, textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
//                       onMouseEnter={(e) => { e.currentTarget.style.color = '#f5a000'; e.currentTarget.style.background = dropdownHoverBg }}
//                       onMouseLeave={(e) => { e.currentTarget.style.color = dropdownText; e.currentTarget.style.background = 'transparent' }}
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           {isLight ? (
//             <>
//               <a
//                 href="/Become A Member"
//                 style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#f5a000', border: '1.5px solid #f5a000', textDecoration: 'none', transition: 'background 0.2s, color 0.2s', background: 'transparent' }}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = '#f5a000'; e.currentTarget.style.color = '#fff' }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#f5a000' }}
//               >
//                 Become A Member
//               </a>
//               <a
//                 href="/login"
//                 style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#fff', background: '#f5a000', textDecoration: 'none', border: '1.5px solid #f5a000' }}
//               >
//                 Login
//               </a>
//             </>
//           ) : (
//             <>
//               <a href="/Become A Member" className="btn-outline px-5 py-2.5 rounded text-sm">Become A Member</a>
//               <a href="/login" className="btn-orange px-5 py-2.5 rounded text-sm">Login</a>
//             </>
//           )}
//         </div>

//         {/* Mobile toggle */}
//         <button
//           className="lg:hidden p-2"
//           style={{ color: hamburgerColor, transition: 'color 0.3s ease' }}
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             {mobileOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden px-6 pb-6 pt-4"
//           style={{ background: mobileMenuBg, borderTop: `1px solid ${mobileMenuBorder}` }}
//         >
//           {NAV_LINKS.map((link) =>
//             link.href.startsWith('/') ? (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="flex items-center justify-between py-3 text-sm"
//                 style={{ color: mobileLinkColor, borderBottom: `1px solid ${mobileDivider}`, fontFamily: 'Montserrat', textDecoration: 'none' }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//                 {link.dropdown && <Chevron />}
//               </Link>
//             ) : (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="flex items-center justify-between py-3 text-sm"
//                 style={{ color: mobileLinkColor, borderBottom: `1px solid ${mobileDivider}`, fontFamily: 'Montserrat', textDecoration: 'none' }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//                 {link.dropdown && <Chevron />}
//               </a>
//             )
//           )}
//           <div className="flex gap-3 mt-4">
//             <a href="/Become A Member" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#f5a000', border: '1.5px solid #f5a000', textDecoration: 'none' }}>
//               Become A Member
//             </a>
//             <a href="/login" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#fff', background: '#f5a000', textDecoration: 'none' }}>
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import ShieldLogo from "./ShieldLogo";

// interface NavLink {
//   label: string;
//   href: string;
//   dropdown?: { label: string; href: string }[];
// }

// const NAV_LINKS: NavLink[] = [
//   { label: "Home", href: "/" },
//   {
//     label: "About us",
//     href: "/about",
//     dropdown: [
//       { label: "Team", href: "/team" },
//       { label: "Initiatives", href: "/initiatives" },
//       { label: "Programs", href: "/programs" },
//     ],
//   },
//   { label: "Community", href: "/community" },
//   {
//     label: "Ecosystem",
//     href: "/ecosystem",
//     dropdown: [
//       { label: "Startups in Ibadan", href: "/startups" },
//       { label: "WorkSpaces in Ibadan", href: "/workspaces" },
//       { label: "Tech Communities in Ibadan", href: "/techcommunities" },
//     ],
//   },
//   { label: "Blog", href: "/blog" },
//   { label: "Chapters", href: "/chapters" },
// ];

// interface NavProps {
//   lightBackground?: boolean;
// }

// export default function Nav({ lightBackground = false }: NavProps) {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   const [scrolled, setScrolled] = useState(!isHomePage);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     // Non-home pages are always in the scrolled (dark blur) state
//     if (!isHomePage) {
//       setScrolled(true);
//       return;
//     }
//     // Home page: track actual scroll position
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll(); // set correct initial value on mount
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isHomePage]);

//   const isLight = !scrolled && lightBackground;

//   const linkColor = isLight ? "#1a1a1a" : "rgba(255,255,255,0.85)";
//   const logoTextColor = isLight ? "#1a1a1a" : "#ffffff";
//   const dropdownBg = isLight ? "rgba(255,255,255,0.98)" : "rgba(26,0,0,0.97)";
//   const dropdownBorder = isLight ? "rgba(0,0,0,0.08)" : "rgba(245,160,0,0.2)";
//   const dropdownText = isLight ? "#333333" : "rgba(200,200,200,0.9)";
//   const dropdownHoverBg = isLight ? "rgba(245,160,0,0.06)" : "rgba(255,255,255,0.05)";
//   const mobileMenuBg = isLight ? "rgba(255,255,255,0.99)" : "rgba(13,0,0,0.97)";
//   const mobileMenuBorder = isLight ? "rgba(0,0,0,0.08)" : "rgba(245,160,0,0.15)";
//   const mobileLinkColor = isLight ? "#222222" : "rgba(200,200,200,0.9)";
//   const mobileDivider = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.05)";
//   const hamburgerColor = isLight ? "#1a1a1a" : "#ffffff";

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur py-3" : "py-5 bg-transparent"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-3 group">
//           <ShieldLogo size={36} light={isLight} />
//           <div>
//             <div
//               style={{
//                 fontFamily: "Space Grotesk",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 letterSpacing: "0.08em",
//                 color: logoTextColor,
//                 lineHeight: 1,
//                 transition: "color 0.3s ease",
//               }}
//             >
//               TALENT
//             </div>
//             <div
//               style={{
//                 fontFamily: "Space Grotesk",
//                 fontWeight: 500,
//                 fontSize: "11px",
//                 letterSpacing: "0.25em",
//                 color: "#f5a000",
//               }}
//             >
//               TRIBE
//             </div>
//           </div>
//         </a>

//         {/* Desktop links */}
//         <div className="hidden lg:flex items-center gap-8">
//           {NAV_LINKS.map((link) => (
//             <div key={link.label} className="nav-item relative">
//               {link.href.startsWith("/") ? (
//                 <Link
//                   href={link.href}
//                   className="flex items-center gap-1 transition-colors duration-200"
//                   style={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 500,
//                     fontSize: "13px",
//                     letterSpacing: "0.04em",
//                     color: linkColor,
//                     textDecoration: "none",
//                   }}
//                 >
//                   {link.label}
//                 </Link>
//               ) : (
//                 <a
//                   href={link.href}
//                   className="flex items-center gap-1 transition-colors duration-200"
//                   style={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 500,
//                     fontSize: "13px",
//                     letterSpacing: "0.04em",
//                     color: linkColor,
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#f5a000")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
//                 >
//                   {link.label}
//                   {link.dropdown && (
//                     <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                       <polyline points="6 9 12 15 18 9" />
//                     </svg>
//                   )}
//                 </a>
//               )}

//               {link.dropdown && (
//                 <div
//                   className="dropdown-menu absolute top-full left-0 mt-2 w-52 py-2 rounded-md shadow-lg"
//                   style={{
//                     background: dropdownBg,
//                     border: `1px solid ${dropdownBorder}`,
//                     backdropFilter: "blur(20px)",
//                   }}
//                 >
//                   {link.dropdown.map((item) => (
//                     <a
//                       key={item.label}
//                       href={item.href}
//                       style={{
//                         display: "block",
//                         padding: "8px 16px",
//                         fontSize: "13px",
//                         fontFamily: "Montserrat",
//                         color: dropdownText,
//                         textDecoration: "none",
//                         transition: "color 0.2s, background 0.2s",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.color = "#f5a000";
//                         e.currentTarget.style.background = dropdownHoverBg;
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.color = dropdownText;
//                         e.currentTarget.style.background = "transparent";
//                       }}
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           {isLight ? (
//             <>
//               <a
//                 href="https://talenttribe.atcafrica.com/Become A Member"
//                 style={{
//                   display: "inline-block",
//                   padding: "8px 20px",
//                   borderRadius: "6px",
//                   fontSize: "13px",
//                   fontFamily: "Montserrat",
//                   fontWeight: 600,
//                   color: "#f5a000",
//                   border: "1.5px solid #f5a000",
//                   textDecoration: "none",
//                   background: "transparent",
//                   transition: "background 0.2s, color 0.2s",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#f5a000";
//                   e.currentTarget.style.color = "#fff";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.color = "#f5a000";
//                 }}
//               >
//                 Become A Member
//               </a>
//               <a
//                 href="https://talenttribe.atcafrica.com/login"
//                 style={{
//                   display: "inline-block",
//                   padding: "8px 20px",
//                   borderRadius: "6px",
//                   fontSize: "13px",
//                   fontFamily: "Montserrat",
//                   fontWeight: 600,
//                   color: "#fff",
//                   background: "#f5a000",
//                   textDecoration: "none",
//                   border: "1.5px solid #f5a000",
//                 }}
//               >
//                 Login
//               </a>
//             </>
//           ) : (
//             <>
//               <a href="https://talenttribe.atcafrica.com/Become A Member" className="btn-outline px-5 py-2.5 rounded text-sm">
//                 Become A Member
//               </a>
//               <a href="https://talenttribe.atcafrica.com/login" className="btn-orange px-5 py-2.5 rounded text-sm">
//                 Login
//               </a>
//             </>
//           )}
//         </div>

//         {/* Mobile toggle */}
//         <button
//           className="lg:hidden p-2"
//           style={{ color: hamburgerColor, transition: "color 0.3s ease", background: "none", border: "none", cursor: "pointer" }}
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             {mobileOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden px-6 pb-6 pt-4"
//           style={{ background: mobileMenuBg, borderTop: `1px solid ${mobileMenuBorder}` }}
//         >
//           {NAV_LINKS.map((link) =>
//             link.href.startsWith("/") ? (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="block py-3 text-sm"
//                 style={{
//                   color: mobileLinkColor,
//                   borderBottom: `1px solid ${mobileDivider}`,
//                   fontFamily: "Montserrat",
//                   textDecoration: "none",
//                 }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ) : (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="block py-3 text-sm"
//                 style={{
//                   color: mobileLinkColor,
//                   borderBottom: `1px solid ${mobileDivider}`,
//                   fontFamily: "Montserrat",
//                   textDecoration: "none",
//                 }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//               </a>
//             )
//           )}
//           <div className="flex gap-3 mt-4">
//             <a
//               href="https://talenttribe.atcafrica.com/Become A Member"
//               style={{
//                 flex: 1,
//                 textAlign: "center",
//                 padding: "10px",
//                 borderRadius: "6px",
//                 fontSize: "13px",
//                 fontFamily: "Montserrat",
//                 fontWeight: 600,
//                 color: "#f5a000",
//                 border: "1.5px solid #f5a000",
//                 textDecoration: "none",
//               }}
//             >
//               Become A Member
//             </a>
//             <a
//               href="https://talenttribe.atcafrica.com/login"
//               style={{
//                 flex: 1,
//                 textAlign: "center",
//                 padding: "10px",
//                 borderRadius: "6px",
//                 fontSize: "13px",
//                 fontFamily: "Montserrat",
//                 fontWeight: 600,
//                 color: "#fff",
//                 background: "#f5a000",
//                 textDecoration: "none",
//               }}
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import ShieldLogo from './ShieldLogo'

// interface NavLink {
//   label: string
//   href: string
//   dropdown?: { label: string; href: string }[]
// }

// const NAV_LINKS: NavLink[] = [
//   { label: 'Home', href: '/' },
//   {
//     label: 'About us',
//     href: '/about',
//     dropdown: [
//       { label: 'Team', href: '/team' },
//       { label: 'Initiatives', href: '/initiatives' },
//       { label: 'Programs', href: '/programs' },
//     ],
//   },
//   { label: 'Community', href: '/community' },
//   {
//     label: 'Ecosystem',
//     href: '/startups',
//     dropdown: [
//       { label: 'Startups in Ibadan', href: '/startups' },
//       { label: 'WorkSpaces in Ibadan', href: '/workspaces' },
//       { label: 'Tech Communities in Ibadan', href: '/techcommunities' },
//     ],
//   },
//   { label: 'Blog', href: '/blog' },
//   { label: 'Chapters', href: '/chapters' },
// ]

// interface NavProps {
//   lightBackground?: boolean
// }

// export default function Nav({ lightBackground = false }: NavProps) {
//   const [scrolled, setScrolled] = useState(!lightBackground)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     if (!lightBackground) return
//     const onScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [lightBackground])

//   // On other pages: always dark solid. On homepage: transparent until scrolled.
//   const isLight = lightBackground && !scrolled

//   const linkColor = isLight ? '#1a1a1a' : 'rgba(255,255,255,0.85)'
//   const logoTextColor = isLight ? '#1a1a1a' : '#ffffff'
//   const dropdownBg = isLight ? 'rgba(255,255,255,0.98)' : 'rgba(26,0,0,0.97)'
//   const dropdownBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.2)'
//   const dropdownText = isLight ? '#333333' : 'rgba(200,200,200,0.9)'
//   const dropdownHoverBg = isLight ? 'rgba(245,160,0,0.06)' : 'rgba(255,255,255,0.05)'
//   const mobileMenuBg = isLight ? 'rgba(255,255,255,0.99)' : 'rgba(13,0,0,0.97)'
//   const mobileMenuBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.15)'
//   const mobileLinkColor = isLight ? '#222222' : 'rgba(200,200,200,0.9)'
//   const mobileDivider = isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)'
//   const hamburgerColor = isLight ? '#1a1a1a' : '#ffffff'

//   // Homepage: transparent at top, nav-blur after scrolling.
//   // All other pages: always nav-blur (same as scrolled state on homepage).
//   const navBg = isLight ? 'bg-transparent py-5' : 'nav-blur py-3'

//   const Chevron = () => (
//     <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <polyline points="6 9 12 15 18 9" />
//     </svg>
//   )

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <a href="https://talenttribe.atcafrica.com/" className="flex items-center gap-3 group">
//           <ShieldLogo size={36} light={isLight} />
//           <div>
//             <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', letterSpacing: '0.08em', color: logoTextColor, lineHeight: 1, transition: 'color 0.3s ease' }}>
//               TALENT
//             </div>
//             <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: '#f5a000' }}>
//               TRIBE
//             </div>
//           </div>
//         </a>

//         {/* Desktop links */}
//         <div className="hidden lg:flex items-center gap-8">
//           {NAV_LINKS.map((link) => (
//             <div key={link.label} className="nav-item relative">
//               {link.href.startsWith('/') ? (
//                 <Link
//                   href={link.href}
//                   className="flex items-center gap-1 transition-colors duration-200"
//                   style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '13px', letterSpacing: '0.04em', color: linkColor, transition: 'color 0.3s ease' }}
//                 >
//                   {link.label}
//                   {link.dropdown && <Chevron />}
//                 </Link>
//               ) : (
//                 <a
//                   href={link.href}
//                   className="flex items-center gap-1 transition-colors duration-200"
//                   style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '13px', letterSpacing: '0.04em', color: linkColor, transition: 'color 0.3s ease' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
//                 >
//                   {link.label}
//                   {link.dropdown && <Chevron />}
//                 </a>
//               )}

//               {link.dropdown && (
//                 <div
//                   className="dropdown-menu absolute top-full left-0 mt-2 w-52 py-2 rounded-md shadow-lg"
//                   style={{ background: dropdownBg, border: `1px solid ${dropdownBorder}`, backdropFilter: 'blur(20px)' }}
//                 >
//                   {link.dropdown.map((item) => (
//                     <a
//                       key={item.label}
//                       href={item.href}
//                       style={{ display: 'block', padding: '8px 16px', fontSize: '13px', fontFamily: 'Montserrat', color: dropdownText, textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
//                       onMouseEnter={(e) => { e.currentTarget.style.color = '#f5a000'; e.currentTarget.style.background = dropdownHoverBg }}
//                       onMouseLeave={(e) => { e.currentTarget.style.color = dropdownText; e.currentTarget.style.background = 'transparent' }}
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           {isLight ? (
//             <>
//               <a
//                 href="/Become A Member"
//                 style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#f5a000', border: '1.5px solid #f5a000', textDecoration: 'none', transition: 'background 0.2s, color 0.2s', background: 'transparent' }}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = '#f5a000'; e.currentTarget.style.color = '#fff' }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#f5a000' }}
//               >
//                 Become A Member
//               </a>
//               <a
//                 href="/login"
//                 style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#fff', background: '#f5a000', textDecoration: 'none', border: '1.5px solid #f5a000' }}
//               >
//                 Login
//               </a>
//             </>
//           ) : (
//             <>
//               <a href="/Become A Member" className="btn-outline px-5 py-2.5 rounded text-sm">Become A Member</a>
//               <a href="/login" className="btn-orange px-5 py-2.5 rounded text-sm">Login</a>
//             </>
//           )}
//         </div>

//         {/* Mobile toggle */}
//         <button
//           className="lg:hidden p-2"
//           style={{ color: hamburgerColor, transition: 'color 0.3s ease' }}
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             {mobileOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden px-6 pb-6 pt-4"
//           style={{ background: mobileMenuBg, borderTop: `1px solid ${mobileMenuBorder}` }}
//         >
//           {NAV_LINKS.map((link) =>
//             link.href.startsWith('/') ? (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="flex items-center justify-between py-3 text-sm"
//                 style={{ color: mobileLinkColor, borderBottom: `1px solid ${mobileDivider}`, fontFamily: 'Montserrat', textDecoration: 'none' }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//                 {link.dropdown && <Chevron />}
//               </Link>
//             ) : (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="flex items-center justify-between py-3 text-sm"
//                 style={{ color: mobileLinkColor, borderBottom: `1px solid ${mobileDivider}`, fontFamily: 'Montserrat', textDecoration: 'none' }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//                 {link.dropdown && <Chevron />}
//               </a>
//             )
//           )}
//           <div className="flex gap-3 mt-4">
//             <a href="/Become A Member" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#f5a000', border: '1.5px solid #f5a000', textDecoration: 'none' }}>
//               Become A Member
//             </a>
//             <a href="/login" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#fff', background: '#f5a000', textDecoration: 'none' }}>
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ShieldLogo from './ShieldLogo'

interface NavLink {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About us',
    href: '/about',
    dropdown: [
      { label: 'Team', href: '/team' },
      { label: 'Initiatives', href: '/initiatives' },
      { label: 'Programs', href: '/programs' },
    ],
  },
  { label: 'Community', href: '/community' },
  {
    label: 'Ecosystem',
    href: '/ecosystem',
    dropdown: [
      { label: 'Startups in Ibadan', href: '/startups' },
      { label: 'WorkSpaces in Ibadan', href: '/workspaces' },
      { label: 'Tech Communities in Ibadan', href: '/techcommunities' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Chapters', href: '/chapters' },
]

interface NavProps {
  lightBackground?: boolean
}

export default function Nav({ lightBackground = false }: NavProps) {
  const [scrolled, setScrolled] = useState(!lightBackground)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!lightBackground) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lightBackground])

  // On other pages: always dark solid. On homepage: transparent until scrolled.
  const isLight = lightBackground && !scrolled

  const linkColor = 'rgba(255,255,255,0.85)'
  const logoTextColor = '#ffffff'
  const dropdownBg = isLight ? 'rgba(255,255,255,0.98)' : 'rgba(26,0,0,0.97)'
  const dropdownBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.2)'
  const dropdownText = isLight ? '#333333' : 'rgba(200,200,200,0.9)'
  const dropdownHoverBg = isLight ? 'rgba(245,160,0,0.06)' : 'rgba(255,255,255,0.05)'
  const mobileMenuBg = isLight ? 'rgba(255,255,255,0.99)' : 'rgba(13,0,0,0.97)'
  const mobileMenuBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.15)'
  const mobileLinkColor = isLight ? '#222222' : 'rgba(200,200,200,0.9)'
  const mobileDivider = isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)'
  const hamburgerColor = isLight ? '#1a1a1a' : '#ffffff'

  // Homepage: transparent at top, nav-blur after scrolling.
  // All other pages: always nav-blur (same as scrolled state on homepage).
  const navBg = isLight ? 'bg-transparent py-5' : 'nav-blur py-3'

  const Chevron = () => (
    <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="https://talenttribe.atcafrica.com/" className="flex items-center gap-3 group">
          <ShieldLogo size={36} light={isLight} />
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', letterSpacing: '0.08em', color: logoTextColor, lineHeight: 1, transition: 'color 0.3s ease' }}>
              TALENT
            </div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: '#f5a000' }}>
              TRIBE
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="nav-item relative">
              {link.href.startsWith('/') ? (
                <Link
                  href={link.href}
                  className="flex items-center gap-1 transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '17px', letterSpacing: '0.04em', color: linkColor, transition: 'color 0.3s ease' }}
                >
                  {link.label}
                  {link.dropdown && <Chevron />}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center gap-1 transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '13px', letterSpacing: '0.04em', color: linkColor, transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                >
                  {link.label}
                  {link.dropdown && <Chevron />}
                </a>
              )}

              {link.dropdown && (
                <div
                  className="dropdown-menu absolute top-full left-0 mt-2 w-52 py-2 rounded-md shadow-lg"
                  style={{ background: dropdownBg, border: `1px solid ${dropdownBorder}`, backdropFilter: 'blur(20px)' }}
                >
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{ display: 'block', padding: '8px 16px', fontSize: '15px', fontFamily: 'Montserrat', color: dropdownText, textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#f5a000'; e.currentTarget.style.background = dropdownHoverBg }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = dropdownText; e.currentTarget.style.background = 'transparent' }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {isLight ? (
            <>
              <a
                href="/register"
                style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#f5a000', border: '1.5px solid #f5a000', textDecoration: 'none', transition: 'background 0.2s, color 0.2s', background: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f5a000'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#f5a000' }}
              >
                Become A Member
              </a>
              <a
                href="/login"
                style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#fff', background: '#f5a000', textDecoration: 'none', border: '1.5px solid #f5a000' }}
              >
                Login
              </a>
            </>
          ) : (
            <>
              <a href="/register" className="btn-outline px-5 py-2.5 rounded text-sm">Become A Member</a>
              <a href="/login" className="btn-orange px-5 py-2.5 rounded text-sm">Login</a>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: hamburgerColor, transition: 'color 0.3s ease' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-4"
          style={{ background: mobileMenuBg, borderTop: `1px solid ${mobileMenuBorder}` }}
        >
          {NAV_LINKS.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between py-3 text-sm"
                style={{ color: mobileLinkColor, borderBottom: `1px solid ${mobileDivider}`, fontFamily: 'Montserrat', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {link.dropdown && <Chevron />}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between py-3 text-sm"
                style={{ color: mobileLinkColor, borderBottom: `1px solid ${mobileDivider}`, fontFamily: 'Montserrat', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {link.dropdown && <Chevron />}
              </a>
            )
          )}
          <div className="flex gap-3 mt-4">
            <a href="/register" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#f5a000', border: '1.5px solid #f5a000', textDecoration: 'none' }}>
              Become A Member
            </a>
            <a href="/login" style={{ flex: 1, textAlign: 'center', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, color: '#fff', background: '#f5a000', textDecoration: 'none' }}>
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}