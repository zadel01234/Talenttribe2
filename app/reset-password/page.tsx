'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ResetPassword() {
  const [confirmCode, setConfirmCode] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const reset= async () => {
         console.log(password)
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/reset-password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          confirmation_code: confirmCode,
          new_password: password
        }),
      });
  
      const responseData = await response.json();
      setLoading(false)
      if (!response.ok) throw new Error(responseData.message || "Failed to post data");
      toast.success("proceesing...")
      
      console.log("Success:", responseData);
    } catch (error:any) {
      setLoading(false)
      console.error("Error posting data:", error);
      toast.error(error.message || "Something went wrong")
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

       

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-bold font-balooThambi animate-on-scroll slide-in-from-left duration-700">
            Reset Your Password code
          </h1>
        </div>     
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
           <div className='sm:w-3/5 md:w-6/12 lg:w-4/12 mx-auto'>
           
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Confirmation Code
        </label>
        <div className="mt-1 mb-1">
            <div className="flex items-center bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-900" style={{borderRadius:'5px'}}>
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
            <img width={20} src="https://img.icons8.com/?size=100&id=12623&format=png&color=AFAFAF" alt="" />
            
            </div>
            
            <input 
            id='code'
            name="code" 
            type="text"
            placeholder='Confirmation Code'
                onChange={(e)=> setConfirmCode(e.target.value)}
            className="block min-w-0 grow mx-2 py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"/>
            </div>
      </div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            New Password
        </label>

      <div className="mt-1 mb-1">
            <div className="flex items-center bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-900" style={{borderRadius:'5px'}}>
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
            <img width={20} src="https://img.icons8.com/?size=100&id=12623&format=png&color=AFAFAF" alt="" />
            
            </div>
            
            <input 
            id='password'
            name="password" 
            type="password"
            placeholder='New Password'
                onChange={(e)=> setPassword(e.target.value)}
            className="block min-w-0 grow mx-2 py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"/>
            </div>
      </div>

      <br />
    
      {loading ? 
      <button disabled className='bg-gray-600 border py-2 w-full text-white' style={{borderRadius:'5px'}}>
      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      </button> : 
      <button className='hover:bg-red-800 bg-red-900 py-2 w-full text-white' style={{borderRadius:'5px'}} onClick={reset}>
      Proceed
      </button>
      }
    </div>
        </section>
      </main>

     <Footer />

    </div>
  );
}


