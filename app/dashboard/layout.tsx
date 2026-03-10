'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { UserProvider } from '../context/UserContext';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });
  
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);


   
  //   const fetchUser = async () => {
  //     const accessToken = sessionStorage.getItem('accessToken');
  //   if (!accessToken) {
  //     router.push('/login');
  //     return;
  //   }

  //     try {
  //       const response = await fetch('https://api-talenttribe.onrender.com/api/dashboard/', {
  //         method: 'GET',
  //         headers: { Authorization: `Bearer ${accessToken}` },
  //       });
  
  //       if (response.status === 401) {
  //         const newToken = await refreshAccessToken();
  //         if (newToken) return fetchUser();
  //         router.push('/login');
  //         return;
  //       }
  
  //       if (!response.ok) throw new Error('Failed to fetch user data');
  
  //       const data = await response.json();
  //       setUser(data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //       router.push('/login');
  //     } finally {
  //       setLoading(false);
      
  //     }
  //     console.log(user)
  //   };

  //   const refreshAccessToken = async () => {
  //     try {
  //       const refreshToken = sessionStorage.getItem('refreshToken');
  //       if (!refreshToken) {
  //         router.push('/login');
  //         return null;
  //       }
    
  //       const response = await fetch('https://api-talenttribe.onrender.com/api/account/login/refresh/', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ refresh: refreshToken }),
  //       });
    
  //       if (!response.ok) throw new Error('Failed to refresh token');
    
  //       const data = await response.json();
  //       sessionStorage.setItem('accessToken', data.access);
  //       return data.access;
  //     } catch (error) {
  //       console.error('Error refreshing token:', error);
  //       router.push('/login');
  //       return null;
  //     }
  //   };
    
  

  //   useEffect(() => {
  //     fetchUser();
  //   }, [router]);
  

  // if (loading) {
  //   return  <div className="fixed inset-0 flex items-center justify-center z-50">
  //                 <Image 
  //                   src="/images/Talent Tibe Color Logo 1.png" 
  //                   alt="Loading..." 
  //                   width={100} 
  //                   height={100} 
  //                   className="animate-pulse"
  //                   priority
  //                 />
  //               </div>; // Show a loading indicator
  // }

  // if (!user) {
  //   return null; // Prevent rendering until user is authenticated
  // }

  
  

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    
    // Redirect to login page
    router.push('/login');
  };

  const menuItems = [
    { label: "Dashboard", href:["dashboard"], subItems: [] },
    { label: "Pofile", href:["viewprofile", "profile"], subItems: ["View Profile", "Update Profile"] },
    { label: "Resources", href:["techcommunities", "startups", "workspaces"], subItems: ["Tech Communities", "Startups", "Workspaces"] },
    // { label: "Apply for learning", href:["apply", "go"], subItems: ["Apply", "Name of unknown"] },
    // { label: "Siwes Placement", href: "", subItems: ["Internships", "Projects"] },
    // { label: "Nearest Workspace", href: "", subItems: ["Coworking Spaces", "Networking Events"] },
    // { label: "Bootcamps", href: "", subItems: ["Web Development", "Data Science"] },
    // { label: "Startups", href: "", subItems: ["Funding", "Mentorship"] },
    // { label: "Institutions", href: "", subItems: ["Universities", "Colleges"] },
    // { label: "Update your Profile", href: "", subItems: ["Settings", "Privacy"] },
    { label: "Account", href: ["change-password", "/"], subItems: ["Change Password", "Sign Out"] }
  ];

  


  return (
    <UserProvider>
    <div className=''>
      {/* <div>{tdate.toDateString()}</div> */}
      {/* <div className="h-1/3 bg-[url('/images/firstbgr.png')] w-3/3"> */}

      <nav className="md:bg-white bg-gradient-to-r from-red-700 to-red-800 shadow-md fixed w-full">
            {/* <div>Performance Dasboard</div> */}
        <div className=" mx-auto pr-4 h-full">
          <div className="flex items-center justify-between h-16 flex-row-reverse">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Talent Tibe Color Logo 1.png"
                alt="Talent Tribe Logo"
                width={80}
                height={80}
                className="h-11 w-auto hidden md:block"
              />
              <Image
                src="/images/Talent Tibe Official white logo 1.png"
                alt="Talent Tribe Logo"
                width={80}
                height={80}
                className="h-11 w-auto md:hidden"
              />
            </Link>
            <div className='text-start text-xl font-bold p-3 md:hidden text-white tracking-wide'>DASHBOARD</div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-md p-2 text-white  focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            


          
          </div>
        </div>

        {/* Mobile Navigation */}
       
        {
         <div
        className={`md:hidden fixed left-0 h-full bg-gradient-to-b from-red-900 to-red-950 w-7/12 shadow-2xl md:w-3/12 pt-3 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="mt-1">
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            className="px-6 py-3.5 hover:bg-red-800 text-red-100 hover:text-white cursor-pointer flex items-center transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
            onClick={() => toggleDropdown(index)}
          >
            <Link href={item.label == "Dashboard" ? "/"+item.label.toLowerCase() : "#"} className=" flex-1 font-medium" onClick={() => setOpenDropdown(null)}>
              {item.label}
            </Link>
            {item.subItems.length > 0 && 
             (
              <ChevronDown 
              className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""}`}
            />
              
            )}
          </div>
          {openDropdown === index && item.subItems.length > 0 && (
            <div className="border-l-4 border-red-700 bg-red-800/80 backdrop-blur-sm">
              {item.subItems.map((subItem, subIndex) => (
                subItem === "Sign Out" ? (
                  <button
                    key={subIndex}
                    onClick={() => {
                      handleLogout();
                      setOpenDropdown(null);
                    }}
                    className="block pl-10 px-4 py-2.5 hover:bg-red-100 text-red-200 hover:text-red-900 w-full text-left transition-all duration-200 font-medium"
                  >
                    {subItem}
                  </button>
                ) : (
                  <Link
                    key={subIndex}
                    href={"/dashboard/"+ item.href[subIndex]}
                    className="block pl-10 px-4 py-2.5 hover:bg-red-100 text-red-200 hover:text-red-900 transition-all duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {subItem}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
         

          </div>
        }
      </nav>

      <div>
        
      </div>
        {/* DESKTOP NAV */}
      <div className="flex">
      <div className="hidden md:block bg-gradient-to-b from-red-900 to-red-950 h-full w-5/12 md:w-4/12 lg:w-[calc(100%/6+50px)] shadow-2xl fixed top-0 "
        style={{'zIndex': 50}}>
      <div className='text-white text-3xl font-bold p-6 border-b border-red-800 tracking-wide'>DASHBOARD</div>
      <div className="mt-1">
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            className="px-6 py-3.5 hover:bg-red-800 text-red-100 hover:text-white cursor-pointer flex items-center transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
            onClick={() => toggleDropdown(index) }
          >
            <Link href={item.label == "Dashboard" ? "/"+item.label.toLowerCase() : "#"} className=" flex-1 font-medium" onClick={() => setOpenDropdown(null)}>
              {item.label}
            </Link>
            {item.subItems.length > 0 && 
             (
              <ChevronDown 
              className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""}`}
            />
            )}
          </div>
          {openDropdown === index && item.subItems.length > 0 && (
            <div className="border-l-4 border-red-700 bg-red-800/80 backdrop-blur-sm" >
              {item.subItems.map((subItem, subIndex) => (
                subItem === "Sign Out" ? (
                  <button
                    key={subIndex}
                    onClick={() => {
                      handleLogout();
                      setOpenDropdown(null);
                    }}
                    className="block pl-10 px-4 py-2.5 hover:bg-red-100 text-red-200 hover:text-red-900 w-full text-left transition-all duration-200 font-medium"
                  >
                    {subItem}
                  </button>
                ) : (
                  <Link
                    key={subIndex}
                    href={"/dashboard/"+ item.href[subIndex]}
                    className="block pl-10 px-4 py-2.5 hover:bg-red-100 text-red-200 hover:text-red-900 transition-all duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {subItem}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
           
            
            <div>
          </div>
          </div>

          <div className='absolute md:w-8/12 lg:w-[calc(149%/2+50px)] right-0 w-full p-4 md:p-6 top-16 block z-50 bg-gray-50 min-h-screen' style={{'zIndex': isMenuOpen ? -1 : -1}}>
          {/* content start */}
            {children}
         {/* content end/ */}
          </div>
      </div>


          
      </div>
      </UserProvider>
  );
}
