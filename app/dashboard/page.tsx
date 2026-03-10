'use client';

import Link from "next/link";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { User, Mail, MapPin, GraduationCap, Building2, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
      const tdate = new Date
      const { user } = useUser()
      const [pRate] =useState<string>("10%")
    return(
        <div className="md:mr-2 min-h-screen bg-gray-50">

             {/* Welcome Banner */}
             <div className='rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white p-6 md:p-8 shadow-lg'
             style={{"backgroundImage":"linear-gradient(rgba(220, 38, 38, 0.95), rgba(185, 28, 28, 0.95)), url('images/banner.png')", "backgroundSize":"cover", "backgroundPosition":"center"}}>
             <div className='md:flex justify-between items-center'>
              <div>
                  <p className='text-2xl md:text-3xl font-bold mb-2'>Welcome back, {user?.talent_tribe_id}!</p>
                  <p className='text-sm md:text-base text-red-100'>Check out what we have for you today!</p>
                </div>
                <div className='text-sm mt-4 md:mt-0 text-red-100 bg-red-800/30 px-4 py-2 rounded-lg backdrop-blur-sm'>
                  {tdate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
             </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                
                {/* Profile Card */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 border-b border-red-200">
                      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <User className="w-5 h-5 text-red-600" />
                        Profile Information
                      </h2>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        {/* Profile Picture */}
                        <div className="relative group">
                          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-red-100 shadow-lg">
                            {user?.profile_picture ? (
                              <img 
                                src={user.profile_picture} 
                                alt="Profile" 
                                className="w-full h-full object-cover" 
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                                <User className="w-16 h-16 text-red-600" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Profile Details */}
                        <div className="flex-1 space-y-4 w-full">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</p>
                              <p className="text-base font-medium text-gray-800">{user?.full_name || 'Not provided'}</p>
                            </div>
                            
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                              <p className="text-base font-medium text-gray-800 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-red-600" />
                                {user?.email || 'Not provided'}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Institution</p>
                              <p className="text-base font-medium text-gray-800 flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-red-600" />
                                {user?.institution_name || 'Not provided'}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Department</p>
                              <p className="text-base font-medium text-gray-800 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-red-600" />
                                {user?.department || 'Not provided'}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
                              <p className="text-base font-medium text-gray-800 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-600" />
                                {user?.city || 'Ibadan'}, Oyo State
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Member ID</p>
                              <p className="text-base font-medium text-gray-800">{user?.talent_tribe_id}</p>
                            </div>
                          </div>

                          {/* Update Button */}
                          <Link href={"/dashboard/profile"}>
                            <button className="mt-4 w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                              Update Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats & Progress Card */}
                <div className="space-y-6">
                  {/* Quick Stats */}
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                      Quick Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                        <p className="text-sm text-gray-600 mb-1">Profile Completion</p>
                        <p className="text-2xl font-bold text-blue-700">{pRate}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                        <p className="text-sm text-gray-600 mb-1">Applications</p>
                        <p className="text-2xl font-bold text-green-700">0</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl">
                        <p className="text-sm text-gray-600 mb-1">Events Attended</p>
                        <p className="text-2xl font-bold text-purple-700">0</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Profile Progress</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">Completion Rate</span>
                        <span className="text-red-600 font-bold">{pRate}</span>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500 shadow-md"
                          style={{width: pRate}}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Complete your profile to unlock more features and opportunities!
                      </p>
                    </div>
                  </div>
                </div>

            </div>

        </div>
    );
}