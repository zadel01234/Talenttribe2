'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)

 
  const initiatePayment = async () => {
    if (!email) {
      toast.info('Enter your Email')
      return false
    }
    setLoading(true)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/initiate-payment/`, {
          
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email:email }),
        });
        
        // if(response.status == 400){
        //   toast.error('Invalid Email')
        //   console.log(response)
        // }
        if (!response.ok) {
            const errorData = await response.json();
            setLoading(false)
            throw new Error(errorData.message || 'Failed to initiate payment');
        }

        const data = await response.json();
        setLoading(false)
        console.log('Response:', data);
        window.location.href = data.authorization_url
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Failed to fetch') {
          toast.error(
            <div>
              <h2>Failed to fetch</h2>
              <small>Check internet connection</small>
            </div>
          );
        } else {
          toast.error(error.message);
        }
        console.log(error.message);
      } else {
        console.error('Unknown error:', error);
      }
      setLoading(false);
    }
    
};


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
    <div className="min-h-screen">
      {/* Navigation */}
      <Nav lightBackground={true} />

      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/aboutfr.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* <div className="absolute inset-0 bg-red-900/90" aria-hidden="true" /> */}

       

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Register an account
          </h1>
        </div>     
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
       {/* this is the register section */}
        <section className="mb-16">
         <form action=""  onSubmit={(e) => {
                    e.preventDefault();
                    initiatePayment();
                }}>

         <div className='sm:w-3/5 md:w-6/12 lg:w-4/12 mx-auto'>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
        Email
      </label>
      <div className="mt-2">
        <div className="flex items-center bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-800" style={{borderRadius:'5px'}}>
          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
          <img width={20} src="https://img.icons8.com/?size=100&id=12623&format=png&color=AFAFAF" alt="" />
          
          </div>
         
           <input 
          
           name="email" 
           value={email}
           type="text"
           placeholder='you@gmail.com'
            onChange={(e)=> setEmail(e.target.value)}
           className="block min-w-0 grow mx-2 py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"/>
        </div>
      </div>
      <br />
      {loading ? 
      <button className='bg-gray-500 py-2 w-full text-white' style={{borderRadius:'5px'}} disabled>
         <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      </button>
      :
      <button className='hover:bg-red-800 bg-red-900 py-2 w-full text-white' style={{borderRadius:'5px'}} type='submit'>
            Register
            </button>
      
    }
    <div className='mt-2 text-center'>Already have an account? <Link href="/login" className='text-red-800'>Login</Link></div>
    
           
    </div>
         </form>
        </section>
      </main>
     
     <Footer />

    </div>
  );
}
