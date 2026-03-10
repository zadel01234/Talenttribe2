'use client'

import { useState } from "react";
import { toast } from "react-toastify";
import { Lock, Eye, EyeOff, Shield, CheckCircle } from "lucide-react";

export default function ChangePassword(){
  const [loading, setLoading] = useState(false)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData]= useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:"",
  })

    const changePassword = async () => {
      console.log(formData)
      if (formData.newPassword != formData.confirmPassword) {
       toast.warn("Passwords do not match")
        return;
      }
        try {
          setLoading(true)
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/change-password/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({
              new_password: formData.newPassword,
              old_password: formData.oldPassword,
            }),
          });
      
          const responseData = await response.json();
          setLoading(false)
          if (!response.ok) throw new Error(responseData.message || "Failed to post data");
          toast.success("Password changed Successfully")
          
          console.log("Success:", responseData);
        } catch (error:any) {
          setLoading(false)
          console.error("Error posting data:", error);
          toast.error(error.message || "Something went wrong")
        }
      };
     

    return (
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">Change Password</h1>
                  <p className="text-red-100 text-sm">Keep your account secure by updating your password</p>
                </div>
              </div>
            </div>
          </div>

          {/* Password Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="space-y-6">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type={showOldPassword ? "text" : "password"} 
                    name="currentPassword" 
                    onChange={(e)=> formData.oldPassword = e.target.value} 
                    className="w-full pl-11 pr-11 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    name="newPassword" 
                    onChange={(e)=> formData.newPassword = e.target.value} 
                    className="w-full pl-11 pr-11 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
              </div>
              
              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    name="confirmPassword" 
                    onChange={(e)=> formData.confirmPassword = e.target.value} 
                    className="w-full pl-11 pr-11 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className={`w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${loading && "opacity-70 cursor-not-allowed"}`} 
                onClick={changePassword} 
                disabled={loading}
              >
                <Shield className="w-5 h-5" />
                {loading ? "Changing Password..." : "Change Password"}
                {loading && <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>}
              </button>

              {/* Security Tips */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Tips
                </h3>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Use a mix of uppercase, lowercase, numbers, and symbols</li>
                  <li>• Avoid using personal information in your password</li>
                  <li>• Don't reuse passwords from other accounts</li>
                  <li>• Change your password regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}