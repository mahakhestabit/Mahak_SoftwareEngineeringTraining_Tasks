"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, BarChart2, CreditCard, Wrench, User, FileText, Rocket, HelpCircle 
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <aside className="h-[calc(100vh-32px)] w-64 m-4 bg-white rounded-2xl flex flex-col shadow-xl border border-gray-100/50 fixed left-0 top-0 z-50">
      
      {/* 1. Logo Section */}
      <div className="flex items-center justify-center h-24 border-b border-gray-100 mx-6 mb-2">
        <div className="flex items-center gap-3 text-gray-800 font-bold text-sm tracking-wide">
          <div className="p-1.5 bg-teal-400 text-white rounded-lg shadow-md">
             <Rocket size={14} fill="currentColor" />
          </div>
          PURITY UI DASHBOARD
        </div>
      </div>

      {/* 2. Navigation Links */}
      <div className="px-4 flex-1 overflow-y-auto py-4">
        <ul className="flex flex-col gap-1 space-y-1">
          
          <NavItem 
            href="/dashboard" 
            icon={<Home size={15} />} 
            label="Dashboard" 
            active={isActive("/dashboard")} 
          />
          <NavItem 
            href="/tables" 
            icon={<BarChart2 size={15} />} 
            label="Tables" 
            active={isActive("/tables")} 
          />
          <NavItem 
            href="/billing" 
            icon={<CreditCard size={15} />} 
            label="Billing" 
            active={isActive("/billing")} 
          />
          <NavItem 
            href="/rtl" 
            icon={<Wrench size={15} />} 
            label="RTL" 
            active={isActive("/rtl")} 
          />

          {/* Section Header */}
          <li className="mt-6 mb-4 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Account Pages
          </li>
          
          <NavItem 
            href="/dashboard/profile" 
            icon={<User size={15} />} 
            label="Profile" 
            active={isActive("/dashboard/profile")} 
          />
          <NavItem 
            href="/dashboard/signin" 
            icon={<FileText size={15} />} 
            label="Sign In" 
            active={isActive("/dashboard/signin")} 
          />
          <NavItem 
            href="/dashboard/signup" 
            icon={<Rocket size={15} />} 
            label="Sign Up" 
            active={isActive("/dashboard/signup")} 
          />
        </ul>
      </div>

      {/* 3. Help Card (Bottom) */}
      <div className="p-4 mx-2 mb-2">
        <div className="relative overflow-hidden rounded-xl bg-teal-400 p-4 text-white shadow-lg">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20" />
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-teal-500 mb-3 shadow-sm">
            <HelpCircle size={18} />
          </div>
          <h4 className="mb-1 text-sm font-bold">Need help?</h4>
          <p className="mb-3 text-[10px] opacity-90">Please check our docs</p>
          <button className="w-full rounded-lg bg-white py-2 text-[10px] font-bold text-gray-800 shadow-md hover:bg-gray-50 transition uppercase tracking-wide">
            Documentation
          </button>
        </div>
      </div>
    </aside>
  );
}

// Helper Component for Links
function NavItem({ href, icon, label, active }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-xs font-bold ${
          active 
            ? "bg-white shadow-md text-gray-800" 
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`}
      >
        <div className={`p-1.5 rounded-lg shadow-sm transition-colors ${
          active 
            ? "bg-teal-400 text-white" 
            : "bg-white text-teal-400 border border-gray-100"
        }`}>
            {icon}
        </div>
        {label}
      </Link>
    </li>
  );
}