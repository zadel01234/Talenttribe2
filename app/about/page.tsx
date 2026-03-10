'use client'

import { useEffect } from 'react'
import Image from "next/image"
import Nav from '@/components/Nav'
import Overlay from '../components/ui/overlay'
import Footer from '@/components/Footer'

export default function WhoWeAre() {

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

  return (
    <div className="min-h-screen bg-white">
       <Nav />
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/ttheroimage.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <Overlay />
       
        {/* Hero Content */}
        <div className="px-2 my-28 flex justify-center items-center h-80 text-center">
          <div>
          <div className='relative'>
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Connecting Ecosystem Builder's
          </h1> <br />
          </div>
          <div className="relative">
          <h6 className="text-white font-balooThambi">A community of creative minds driving the Oyo ecosystem through Innovation.</h6>
          </div>
          </div>
        </div>
        
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Who We Are Section */}
        <section className="mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl text-black text-center font-bold mb-4 animate-bounce duration-500">Who We Are</h2>
            <p className="text-black gap-8 text-justify mb-4 text-[25px]">
            Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity.
            </p>
            <p className="text-black gap-8 text-justify text-[25px]">
            A platform for Oyo students to connect, create, and cultivate a culture of innovation and growth.
            </p>
          </div>
        </section>
       {/* Mission Section */}
<section className="grid md:grid-cols-2 gap-12 mb-20 items-center ">
  {/* Image on the Left */}
  <div className="relative h-[350px]  md:order-1">
    <Image 
      src="/images/mission.png" 
      alt="Our mission" 
      fill
      className="object-cover rounded-lg animate-in duration-1000"
    />
  </div>

  {/* Text on the Right */}
  <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-center animate-bounce duration-500 text-black">Mission</h2>
    <p className="text-black text-justify text-2xl mb-6">
      Our Mission is to create opportunities for Oyo's tech-savvy students to innovate, collaborate, and shape the future. 
    </p>
    <p className="text-black text-justify text-2xl">
      Create opportunities for Oyo's tech-savvy students to develop essential skills, collaborate with like-minded peers, 
      and launch successful careers in technology.
    </p>
  </div>
</section>
{/* Vision Section */}
<section className="grid md:grid-cols-2 gap-12 mb-20 items-center animate-on-scroll fade-in">
          <div>
            <h2 className="text-3xl text-black font-bold text-center mb-6 animate-bounce duration-500">Vision</h2>
            <p className="text-black text-justify text-2xl animate-in">
              Driving innovation and opportunity for Oyo's students through collaboration and community. 
              We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image 
              src="/images/vision.png" 
              alt="Our Vision" 
              fill 
              className="object-cover rounded-lg animate-in duration-1000"
            />
          </div>
        </section>

        {/* Our Community Section */}
        <section className="grid md:grid-cols-2 text-black gap-12 mb-20 items-center p-8 rounded-lg">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-center mb-6 animate-bounce duration-700">Our Community</h2>
            <p className="text-black text-justify text-xl mb-4">
            Our community is a safe enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.
            </p>
            <p className="text-black text-justify text-xl mb-4">
            Currently we have smaller communities of people in a particular city called chapters in Oyo.
            </p>
          </div>
          <div className="relative h-[300px] md:order-1">
            <Image 
              src="/images/community.png" 
              alt="Our Community" 
              fill 
              className="object-cover rounded-lg animate-in duration-1000"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

