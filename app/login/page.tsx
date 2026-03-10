'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
 
  const [loading, setLoading] = useState(false)

  // toast.success("somethign")
  // function toastSomething(){
  //   toast.error( 
  //     <div>
  //       <h4 className='uppercase'>Error Occurred</h4>
  //       <p className='text-xs'>Please refresh the page and try again.</p>
  //     </div>
  // );
  // }
  const login = async () => {
    if (!id || !password ) {
      toast.info('Enter your credentials')
      return false
    }
    setLoading(true)
    // https://talenttribe-api-production.up.railway.app/
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: id, password }),
        credentials: 'include' // Ensures cookies are sent with requests
      });
      setLoading(false)

      if (!response.ok) {
        if(response.status == 401){
          setLoading(false)
          toast.error( 
            <div>
            <h4 className='uppercase'>Invalid Credentials!</h4>
            <p className='text-xs'>Try Again</p>
          </div>
      );
        }else{
      setLoading(false)
          
          toast.error( 
            <div>
            <h4 className='uppercase'>Error Occurred!</h4>
            <p className='text-xs'>Please refresh the page and try again.</p>
          </div>
      );
        }
        const errorData = await response.json();
        setLoading(false)
        throw new Error(errorData.message);

      }
      
      const data = await response.json();
      setLoading(false)

      sessionStorage.setItem('accessToken', data.access);
      sessionStorage.setItem('refreshToken', data.refresh);


      // Redirect to the dashboard
      window.location.href = '/dashboard';

    } catch (error) {
      console.error(error);
      setLoading(false)
      // toast.error('Connection Problem')
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
            Log In to your account
          </h1>
        </div>     
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
       {/* this is the email section */}
        <section className="mb-16">
           <div className='sm:w-3/5 md:w-6/12 lg:w-4/12 mx-auto'>
           
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Email/ Community ID
        </label>
        <div className="mt-1 mb-1">
            <div className="flex items-center bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-900" style={{borderRadius:'5px'}}>
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
            <img width={20} src="https://img.icons8.com/?size=100&id=12623&format=png&color=AFAFAF" alt="" />
            
            </div>
            
            <input 
            id='email'
            name="email" 
            type="text"
            placeholder='EX. TT0013'
                onChange={(e)=> setId(e.target.value)}
            className="block min-w-0 grow mx-2 py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"/>
            </div>
      </div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Password
        </label>
        <div className="mt-1">
            <div className="flex items-center bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-900" style={{borderRadius:'5px'}}>
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
            <img width={20} src="https://img.icons8.com/?size=100&id=10480&format=png&color=AFAFAF" alt="" />
            
            </div>
            
            <input 
            id='email'
            name="email" 
            type="password"
            placeholder='XXXX'
                onChange={(e)=> setPassword(e.target.value)}
            className="block min-w-0 grow mx-2 py-3 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"/>
            </div>
            <div className='text-red-900'><Link href={"/forgot-password"} >Forgot password?</Link></div>
      </div>
      <br />
    
      {loading ? 
      <button disabled className='bg-gray-600 border py-2 w-full text-white' style={{borderRadius:'5px'}}>
      {/* <img src="/images/rhombus_loader.gif" alt="" width={30} className='mx-auto'/> */}
      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      </button> : 
      <button className='hover:bg-red-800 bg-red-900 py-2 w-full text-white' style={{borderRadius:'5px'}} onClick={login}>
      Login
      </button>
      }
      {/* <button onClick={toastSomething}>toast</button> */}
           {/* <button className='hover:bg-red-800 bg-red-900 py-2 w-full text-white' style={{borderRadius:'5px'}} onClick={login}>
            Login
            </button> */}
    <div className='mt-2 text-center'>Don't have an account? <Link href="/register" className='text-red-800'>Register</Link></div>
    </div>
        </section>
      </main>

     <Footer />

    </div>
  );
}


