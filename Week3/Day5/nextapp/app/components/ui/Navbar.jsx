"use client";

import { usePathname } from "next/navigation";
import { Search, User, Settings, Bell } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  
  // 1. Split pathname into an array of segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // 2. Helper to capitalize first letter (No type annotation needed here)
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // 3. Get the specific name of the current page
  const currentPageTitle = pathSegments.length > 0 
    ? capitalize(pathSegments[pathSegments.length - 1]) 
    : "Dashboard";

  return (
    <nav className="sticky top-4 z-40 flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-3 mb-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-white/20 transition-all mx-4 mt-4">
      
      {/* Breadcrumbs & Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          
          {/* Static Root "Pages" */}
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
            Pages
          </span>

          {/* Dynamic Segments Loop */}
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            return (
              <div key={index} className="flex items-center gap-1">
                <span className="opacity-70 mx-1">/</span>
                <span className={`${isLast ? "text-gray-800 font-semibold" : "opacity-70 hover:opacity-100 cursor-pointer"}`}>
                  {capitalize(segment)}
                </span>
              </div>
            );
          })}
        </div>

        {/* The Bold Page Title */}
        <h1 className="text-sm font-bold mt-0.5 text-gray-800">
            {currentPageTitle}
        </h1>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-200 rounded-2xl px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-teal-400 transition-all shadow-sm">
           <Search size={14} className="text-gray-500 mr-2"/>
           <input 
             type="text" 
             placeholder="Type here..." 
             className="bg-transparent text-xs outline-none w-32 placeholder-gray-400 text-gray-700" 
           />
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <button className="flex items-center gap-1 hover:text-teal-500 transition font-bold text-xs">
            <User size={16} /> 
             <Link href='/dashboard/signin' className="hidden md:block">Sign In</Link> 
          </button>
          <button className="hover:text-teal-500 transition"><Settings size={16} /></button>
          <button className="hover:text-teal-500 transition"><Bell size={16} /></button>
        </div>
      </div>
    </nav>
  );
}

