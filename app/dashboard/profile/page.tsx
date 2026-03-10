// "use client";
// import { useUser } from "@/app/context/UserContext";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion, AnimatePresence } from "framer-motion";

// interface Institution {
//   id: number;
//   name: string;
//   abbrevation: string;
//   location: string;
// }

// export default function MultiStepForm() {
//   const [step, setStep] = useState(1);
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const [institutions, setInstitutions] = useState<Institution[]>([]);
 
//   const [formData, setFormData] = useState({
//     full_name: user?.full_name || "",
//     phone: user?.phone || "",
//     lga: user?.lga || "",
//     city: user?.city || "",
//     date_of_birth: user?.date_of_birth,
//     skills: user?.skills || "",
//     bio: user?.bio || "",
//     gender: user?.gender || "",
//     education_level: user?.education_level || "",
//     department: user?.department || "",
//     institution: user?.institution || "",
//     // profile_picture: user?.profile_picture || "",
//   });

  
//   const router = useRouter();

//   // Fetch institutions on component mount
//   useEffect(() => {
//     const fetchInstitutions = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/institutions/`);
//         if (response.ok) {
//           const data = await response.json();
//           setInstitutions(data);
//         }
//       } catch (error) {
//         console.error("Error fetching institutions:", error);
//       }
//     };

//     fetchInstitutions();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
    
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "date" ? value : value,
//     }));
//   }; 
//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const updateUser = async () => {
//     setLoading(true);
//     const accessToken = sessionStorage.getItem("accessToken");
//     if (!accessToken) {
//       router.push("/login");
//       return;
//     }

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/profile`, {
//         method: "PUT",
//         headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData }),
//       });
//       const responseData = await response.json();
//       console.log("API Response:", responseData);

//       if (!response.ok) throw new Error("Failed to fetch user data");

//       setLoading(false);
//       toast.success("Profile Updated Successfully");
//       window.location.href = "/dashboard";
//     } catch (error) {
//       console.error("Error updating user:", error);
//       toast.error("Error updating user");
//       router.push("/dashboard");
//     }
//   };
  
  

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 1,
//     }),
//     center: { x: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
//     exit: (direction: number) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     }),
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* Progress Indicator */}
//       <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
//           <span className="text-sm font-medium text-gray-500">Step {step} of 3</span>
//         </div>
//         <div className="flex gap-2">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className={`h-2 flex-1 rounded-full transition-all duration-300 ${
//                 i <= step ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gray-200'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Form Card */}
//       <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
//         <AnimatePresence mode="wait" custom={step}>
//           {step === 1 && (
//             // Personal Info 
//             <motion.div
//               key="step1"
//               custom={1}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               variants={slideVariants}
//               className="w-full"
//             >
//               <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
//                 Personal Information
//               </h3>
              
//               <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="full_name"
//                     placeholder="Enter your full name"
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
//                     onChange={handleChange}
//                     value={formData.full_name}
//                     disabled={!!user?.full_name}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
//                   <input 
//                     type="text" 
//                     name="phone" 
//                     placeholder="Enter your phone number" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
//                     onChange={handleChange} 
//                     value={formData.phone} 
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
//                   <input 
//                     type="date" 
//                     name="date_of_birth" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
//                     onChange={handleChange}  
//                     value={formData.date_of_birth} 
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
//                   <div className="flex gap-4 p-4 border-2 border-gray-200 rounded-lg">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={formData.gender === "male"}
//                         onChange={handleChange}
//                         className="w-4 h-4 text-red-600 focus:ring-red-500"
//                       />
//                       <span className="text-gray-700 font-medium">Male</span>
//                     </label>
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={formData.gender === "female"}
//                         onChange={handleChange}
//                         className="w-4 h-4 text-red-600 focus:ring-red-500"
//                       />
//                       <span className="text-gray-700 font-medium">Female</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Skills (comma separated)</label>
//                   <input 
//                     type="text" 
//                     name="skills" 
//                     placeholder="e.g., React, Node.js, Python" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
//                     onChange={handleChange} 
//                     value={formData.skills} 
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
//                   <textarea 
//                     name="bio"  
//                     placeholder="Tell us about yourself" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none" 
//                     onChange={handleChange} 
//                     value={formData.bio}
//                     rows={4}
//                   ></textarea>
//                 </div>
//               </div>
              
//               <button 
//                 onClick={nextStep} 
//                 className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//               >
//                 Next Step →
//               </button>
//             </motion.div>
//           )}

//           {step === 2 && (
//             // School/Institution 
//             <motion.div
//               key="step2"
//               custom={1}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               variants={slideVariants}
//               className="w-full"
//             >
//               <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
//                 School/Institution
//               </h3>
              
//               <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Institution</label>
//                   <select 
//                     name="institution" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white" 
//                     value={formData.institution} 
//                     onChange={handleChange}
//                   >
//                     <option value="" className="text-gray-400">Select Institution</option>
//                     {institutions.map((institution) => (
//                       <option key={institution.id} value={institution.id}>
//                         {institution.name} ({institution.abbrevation})
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
//                   <input 
//                     type="text" 
//                     name="department" 
//                     placeholder="Enter your department" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
//                     onChange={handleChange} 
//                     value={formData.department}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Education Level</label>
//                   <select 
//                     name="education_level" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white" 
//                     value={formData.education_level} 
//                     onChange={handleChange}
//                   >
//                     <option value="" className="text-gray-400">Select Level</option>
//                     <option value="100">100 Level</option>
//                     <option value="200">200 Level</option>
//                     <option value="300">300 Level</option>
//                     <option value="400">400 Level</option>
//                     <option value="500">500 Level</option>
//                     <option value="600">600 Level</option>
//                     <option value="700">700 Level</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="flex gap-4 mt-6">
//                 <button 
//                   onClick={prevStep} 
//                   className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
//                 >
//                   ← Back
//                 </button>
//                 <button 
//                   onClick={nextStep} 
//                   className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
//                 >
//                   Next Step →
//                 </button>
//               </div>
//             </motion.div>
//           )}

//           {step === 3 && (
//             // Address 
//             <motion.div
//               key="step3"
//               custom={1}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               variants={slideVariants}
//               className="w-full"
//             >
//               <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
//                 Address Information
//               </h3>
              
//               <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Local Government Area (LGA)</label>
//                   <select 
//                     name="lga" 
//                     value={formData.lga} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
//                   >
//                     <option value="" className="text-gray-400">Select LGA</option>
//                     <option value="Afijio">Afijio</option>
//                     <option value="Akinyele">Akinyele</option>
//                     <option value="Atiba">Atiba</option>
//                     <option value="Atisbo">Atisbo</option>
//                     <option value="Egbeda">Egbeda</option>
//                     <option value="Ibadan Central">Ibadan Central</option>
//                     <option value="Ibadan North">Ibadan North</option>
//                     <option value="Ibadan North West">Ibadan North West</option>
//                     <option value="Ibadan South East">Ibadan South East</option>
//                     <option value="Ibadan South West">Ibadan South West</option>
//                     <option value="Ibarapa Central">Ibarapa Central</option>
//                     <option value="Ibarapa East">Ibarapa East</option>
//                     <option value="Ibarapa North">Ibarapa North</option>
//                     <option value="Ido">Ido</option>
//                     <option value="Irepo">Irepo</option>
//                     <option value="Iseyin">Iseyin</option>
//                     <option value="Itesiwaju">Itesiwaju</option>
//                     <option value="Iwajowa">Iwajowa</option>
//                     <option value="Kajola">Kajola</option>
//                     <option value="Ogbomosho North">Ogbomosho North</option>
//                     <option value="Ogbomosho South">Ogbomosho South</option>
//                     <option value="Ogo Oluwa">Ogo Oluwa</option>
//                     <option value="Olorunsogo">Olorunsogo</option>
//                     <option value="Oluyole">Oluyole</option>
//                     <option value="Ona-Ara">Ona-Ara</option>
//                     <option value="Orelope">Orelope</option>
//                     <option value="Ori Ire">Ori Ire</option>
//                     <option value="Oyo East">Oyo East</option>
//                     <option value="Oyo West">Oyo West</option>
//                     <option value="Saki East">Saki East</option>
//                     <option value="Saki West">Saki West</option>
//                     <option value="Surulere">Surulere</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
//                   <input 
//                     type="text" 
//                     name="city" 
//                     placeholder="Enter your city" 
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
//                     onChange={handleChange} 
//                     value={formData.city} 
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-4 mt-6">
//                 <button 
//                   onClick={prevStep} 
//                   className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
//                 >
//                   ← Back
//                 </button>
//                 <button 
//                   className={`flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`} 
//                   onClick={updateUser} 
//                   disabled={loading}
//                 >
//                   {loading ? "Updating..." : "Update Profile"}
//                   {loading && <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>}
//                 </button>
//               </div>
//             </motion.div>
//           )}

//           {/* {step === 4 && (
//             // School/Institution 
//             <motion.div
//               key="step4"
//               custom={1}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               variants={slideVariants}
//               className="absolute w-full h-full flex flex-col justify-center"
//             >
//               <h2 className="text-xl font-bold mb-4">Add Profile Picture</h2>

//             profile picture 
              
//               <input type="file" name="profile_picture" placeholder="Select profile picture" value={formData.profile_picture} onChange={handleChange} />
//               <button className="border my-2 py-2 bg-red-700 text-white">Upload</button>

//             profile picture 
//               <div className="flex justify-between mt-4">
//                 <button onClick={prevStep} className="bg-gray-400 text-white p-2 rounded">
//                   Back
//                 </button>
               
//                 <button className={`bg-red-800 text-white p-2 rounded flex ${loading ? "bg-red-500" : "bg-red-600"}`} onClick={updateUser} disabled={loading}>
//                   Update
//                   {loading && <div className="ml-1 w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>}
//                 </button>
//               </div>
//             </motion.div>
//           )} */}

//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


"use client";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

interface Institution {
  id: number;
  name: string;
  abbrevation: string;
  location: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [institutions, setInstitutions] = useState<Institution[]>([]);
 
  const [formData, setFormData] = useState({
    full_name: user?.full_name || "",
    phone: user?.phone || "",
    lga: user?.lga || "",
    city: user?.city || "",
    date_of_birth: user?.date_of_birth,
    skills: user?.skills || "",
    bio: user?.bio || "",
    gender: user?.gender || "",
    education_level: user?.education_level || "",
    department: user?.department || "",
    institution: user?.institution || "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/institutions/`);
        if (response.ok) {
          const data = await response.json();
          setInstitutions(data);
        }
      } catch (error) {
        console.error("Error fetching institutions:", error);
      }
    };

    fetchInstitutions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "date" ? value : value,
    }));
  }; 

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateUser = async () => {
    setLoading(true);
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/profile`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });
      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (!response.ok) throw new Error("Failed to fetch user data");

      setLoading(false);
      toast.success("Profile Updated Successfully");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
      router.push("/dashboard");
    }
  };

  // ✅ Fixed: typed as Variants and ease values cast with "as const"
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
          <span className="text-sm font-medium text-gray-500">Step {step} of 3</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
        <AnimatePresence mode="wait" custom={step}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              className="w-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Personal Information
              </h3>
              
              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    onChange={handleChange}
                    value={formData.full_name}
                    disabled={!!user?.full_name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                    onChange={handleChange} 
                    value={formData.phone} 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    name="date_of_birth" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                    onChange={handleChange}  
                    value={formData.date_of_birth} 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                  <div className="flex gap-4 p-4 border-2 border-gray-200 rounded-lg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="w-4 h-4 text-red-600 focus:ring-red-500"
                      />
                      <span className="text-gray-700 font-medium">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="w-4 h-4 text-red-600 focus:ring-red-500"
                      />
                      <span className="text-gray-700 font-medium">Female</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Skills (comma separated)</label>
                  <input 
                    type="text" 
                    name="skills" 
                    placeholder="e.g., React, Node.js, Python" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                    onChange={handleChange} 
                    value={formData.skills} 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                  <textarea 
                    name="bio"  
                    placeholder="Tell us about yourself" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none" 
                    onChange={handleChange} 
                    value={formData.bio}
                    rows={4}
                  ></textarea>
                </div>
              </div>
              
              <button 
                onClick={nextStep} 
                className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Next Step →
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              className="w-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                School/Institution
              </h3>
              
              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Institution</label>
                  <select 
                    name="institution" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white" 
                    value={formData.institution} 
                    onChange={handleChange}
                  >
                    <option value="" className="text-gray-400">Select Institution</option>
                    {institutions.map((institution) => (
                      <option key={institution.id} value={institution.id}>
                        {institution.name} ({institution.abbrevation})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                  <input 
                    type="text" 
                    name="department" 
                    placeholder="Enter your department" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                    onChange={handleChange} 
                    value={formData.department}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Education Level</label>
                  <select 
                    name="education_level" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white" 
                    value={formData.education_level} 
                    onChange={handleChange}
                  >
                    <option value="" className="text-gray-400">Select Level</option>
                    <option value="100">100 Level</option>
                    <option value="200">200 Level</option>
                    <option value="300">300 Level</option>
                    <option value="400">400 Level</option>
                    <option value="500">500 Level</option>
                    <option value="600">600 Level</option>
                    <option value="700">700 Level</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button 
                  onClick={prevStep} 
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  ← Back
                </button>
                <button 
                  onClick={nextStep} 
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Next Step →
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              className="w-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Address Information
              </h3>
              
              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Local Government Area (LGA)</label>
                  <select 
                    name="lga" 
                    value={formData.lga} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                  >
                    <option value="" className="text-gray-400">Select LGA</option>
                    <option value="Afijio">Afijio</option>
                    <option value="Akinyele">Akinyele</option>
                    <option value="Atiba">Atiba</option>
                    <option value="Atisbo">Atisbo</option>
                    <option value="Egbeda">Egbeda</option>
                    <option value="Ibadan Central">Ibadan Central</option>
                    <option value="Ibadan North">Ibadan North</option>
                    <option value="Ibadan North West">Ibadan North West</option>
                    <option value="Ibadan South East">Ibadan South East</option>
                    <option value="Ibadan South West">Ibadan South West</option>
                    <option value="Ibarapa Central">Ibarapa Central</option>
                    <option value="Ibarapa East">Ibarapa East</option>
                    <option value="Ibarapa North">Ibarapa North</option>
                    <option value="Ido">Ido</option>
                    <option value="Irepo">Irepo</option>
                    <option value="Iseyin">Iseyin</option>
                    <option value="Itesiwaju">Itesiwaju</option>
                    <option value="Iwajowa">Iwajowa</option>
                    <option value="Kajola">Kajola</option>
                    <option value="Ogbomosho North">Ogbomosho North</option>
                    <option value="Ogbomosho South">Ogbomosho South</option>
                    <option value="Ogo Oluwa">Ogo Oluwa</option>
                    <option value="Olorunsogo">Olorunsogo</option>
                    <option value="Oluyole">Oluyole</option>
                    <option value="Ona-Ara">Ona-Ara</option>
                    <option value="Orelope">Orelope</option>
                    <option value="Ori Ire">Ori Ire</option>
                    <option value="Oyo East">Oyo East</option>
                    <option value="Oyo West">Oyo West</option>
                    <option value="Saki East">Saki East</option>
                    <option value="Saki West">Saki West</option>
                    <option value="Surulere">Surulere</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input 
                    type="text" 
                    name="city" 
                    placeholder="Enter your city" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                    onChange={handleChange} 
                    value={formData.city} 
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button 
                  onClick={prevStep} 
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  ← Back
                </button>
                <button 
                  className={`flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`} 
                  onClick={updateUser} 
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Profile"}
                  {loading && <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}