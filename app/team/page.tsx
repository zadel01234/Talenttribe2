'use client'

import { useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Overlay from '../components/ui/overlay'

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

    const teamArray = [
      {name: "Tope James Moses", post:"Co-Founder-ATC Africa", image:"/images/james.png", section:"core"},
      {name: "Hiqmah Oyekola", post:"Community Associate Lead", image:"/images/hiqmah.png", section:"core"},
      {name: "Oladipupo Inioluwa Victor", post:"Community Associate", image:"/images/inioluwa.png", section:"core"},
      {name: "Olutoye Ifeoluwa Folake", post:"Community Associate", image:"/images/ifeoluwa.png", section:"core"},
      {name: "Eniola Adesina ", post:"Community Associate", image:"/images/eniola.png", section:"core"},
      {name: "Adeniran Aanuoluwapo ", post:"Community Associate", image:"/images/aanuoluwapo.png", section:"core"},
      {name: "Davies Richard", post:"Social Media Lead", image:"/images/richard.png", section:"lead"},
      {name: "Moyosore Elizabeth Salako ", post:"Content Team Lead", image:"/images/elizabeth.png", section:"lead"},
      {name: "Frederick Atigogo", post:"Developers Lead", image:"/images/frederick.png", section:"lead"},
    ]
    const coreTeam = teamArray.filter(team => team.section == "core")
    const leadTeam = teamArray.filter(team => team.section == "lead")
  
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
      
        <div className="absolute inset-0 bg-[url('/images/buildwithoyo.jpg')] bg-cover bg-center"
          aria-hidden="true"></div>
          <Overlay />
        {/* Hero Content */}
        <div className='px-2 my-28 flex justify-center items-center h-80 text-center'>
          <div>
            <div className="relative">
              <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
                The Team
              </h1> <br />
            </div>
            <div className="relative">
              <h4 className="text-white font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
                The brains behind the awsomeness
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 my-5 bg-white">
        <h1 className="text-4xl text-[#000] py-10 font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
          The Core
        </h1>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-28 sm:gap-x-10'>

          {coreTeam.map((person, i)=>(
          <div className='my-4 md:text-lg' key={i}>
           <div className='w-5/6 mx-auto'>
           <div style={{"overflow": "hidden", "boxShadow":"6px 6px 0 red"}} className='w-6/6 h-52 md:h-72'>
           <img src={person.image} alt="" className='w-6/6' />
           </div>
                <p className='pt-5 text-[#000]'>{person.name}</p>
                <p className='font-bold text-[#000]'>{person.post}</p>
           </div>
          </div>
          ))}

        </div>

        <h1 className="text-4xl text-[#881337] py-10 font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
          Team Lead
        </h1>
       <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-28 sm:gap-x-10'>
         
       {leadTeam.map((person, i)=>(
         <div className='my-4 md:text-lg' key={i}>
         <div className='w-5/6 mx-auto'>
         <div style={{"overflow": "hidden", "boxShadow":"6px 6px 0 red"}} className='w-6/6 h-52 md:h-72'>
         <img src={person.image} alt="" className='w-6/6'  />
         </div>
             <p className='pt-5 text-[#000]'>{person.name}</p>
             <p className='font-bold text-[#000]'>{person.post}</p>
         </div>
        </div>
          ))}
          
        </div>

      </div>

      <Footer />
    </div>
  )
}

