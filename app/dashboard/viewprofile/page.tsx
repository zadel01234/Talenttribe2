"use client";
import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import { User, Phone, MapPin, Calendar, Briefcase, BookOpen, GraduationCap, Mail, Edit, Building2 } from "lucide-react";
import Image from "next/image";

export default function Viewprofile() {
    const { user }  = useUser();

    const InfoCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string | undefined }) => (
      <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border-2 border-gray-200 hover:shadow-md transition-all duration-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <Icon className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</p>
            <p className="text-gray-800 font-medium break-words">{value || 'Not provided'}</p>
          </div>
        </div>
      </div>
    );

    return(
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Picture */}
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    {user?.profile_picture_url ? (
                      <img 
                        src={user.profile_picture_url} 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                        <User className="w-14 h-14 text-red-600" />
                      </div>
                    )}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{user?.full_name || 'User Profile'}</h1>
                  <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start text-red-100">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{user?.email}</span>
                    </div>
                    <div className="hidden md:block">•</div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-semibold">{user?.talent_tribe_id}</span>
                    </div>
                  </div>
                </div>

                {/* Edit Button */}
                <Link href="/dashboard/profile">
                  <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Information Grid */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-red-600" />
              Personal Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <InfoCard icon={Phone} label="Phone Number" value={user?.phone} />
              <InfoCard icon={Calendar} label="Date of Birth" value={user?.date_of_birth} />
              <InfoCard icon={User} label="Gender" value={user?.gender?.charAt(0).toUpperCase() + user?.gender?.slice(1)} />
              <InfoCard icon={MapPin} label="City" value={user?.city} />
              <InfoCard icon={MapPin} label="LGA" value={user?.lga} />
              <InfoCard icon={GraduationCap} label="Education Level" value={user?.education_level ? `${user.education_level} Level` : undefined} />
              <InfoCard icon={Building2} label="Institution" value={user?.institution_name} />
              <InfoCard icon={BookOpen} label="Department" value={user?.department} />
              <InfoCard icon={Briefcase} label="Tech Role" value={user?.tech_role} />
            </div>

            {/* Skills Section */}
            {user?.skills && (
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-red-600" />
                  Skills
                </h3>
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200">
                  <div className="flex flex-wrap gap-2">
                    {user.skills.split(',').map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bio Section */}
            {user?.bio && (
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">About</h3>
                <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-200">
                  <p className="text-gray-700 leading-relaxed">{user.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>
    )
}