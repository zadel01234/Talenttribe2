'use client'

import { useEffect } from 'react'
import Image from "next/image"
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Community() {

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


    // const fetchCommunities = async () => {
    //   try {
    //     const response = await fetch("https://talenttribe-api-production.up.railway.app/api/blog-posts/", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    
    //     // console.log(response);
    
    //     if (!response.ok) throw new Error("Failed to fetch blog posts");
    
    //     const data = await response.json();
    //     // setBlogArray(data);
    //     console.log(data);
    //     // console.log(blogArray)
  
    //     // return data;
    //   } catch (error) {
    //     console.error("Error fetching blog:", error);
    //   }
    // };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
       <Nav />
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('/images/mission.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* <div 
          className="absolute inset-0 bg-red-900/80"
          aria-hidden="true"
        /> */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold font-balooThambi">
            Our Community
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community1.png" 
      alt="Community Image 1"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Image 2 */}
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community2.png" // Replace with the second image file name
      alt="Community Image 2"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Image 3 */}
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community3.png" // Replace with the third image file name
      alt="Community Image 3"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Image 4 */}
  <div className="relative overflow-hidden border rounded-2xl shadow-lg">
    <Image 
      src="/images/community4.png" // Replace with the fourth image file name
      alt="Community Image 4"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
</div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        
        <div className="max-w-3xl mx-auto space-y-8 text-[#000]">
          <p className="text-lg leading-relaxed">
            <strong>Talent Tribe</strong> is committed to empowering individuals across Oyo to build successful careers in technology and innovation.
          </p>

          <p className="text-lg leading-relaxed">
            We believe that fostering innovation and growth requires strong leadership and mentorship, which is why we invest heavily in community-building skills.
          </p>

          <p className="text-lg leading-relaxed">
            That's why we're working towards leads to establish chapters in their respective regions. If you have the skills and capability to lead a community-focused initiative, we encourage you to apply.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Local Engagement:</strong> Real success looks virtual and in-person events, workshops, and training sessions that help build skills and foster connections within our community.
          </p>

          <p className="text-lg leading-relaxed">
            We encourage knowledge-sharing and innovation within these chapters in our designated regions.
          </p>
        </div>
      </main>

      {/* Footer */}
     <Footer />
    </div>
  )
}

