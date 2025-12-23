"use client"; // <--- Required to check current path

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  BarChart2, 
  CreditCard, 
  Wrench, 
  User, 
  FileText, 
  Rocket, 
  HelpCircle 
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname(); // Get current URL (e.g. "/tables")

  // Helper to check if a link is active
  const isActive = (path) => pathname === path;

  return (
    <aside className="h-[calc(100vh-32px)] w-64 m-4 bg-white rounded-xl flex flex-col transition-transform duration-300 shadow-xl border border-gray-100 relative z-50">
      
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-gray-100 mb-4 mx-4">
        <div className="flex items-center gap-3 text-gray-800 font-bold tracking-wide text-sm">
          <div className="p-1.5 bg-teal-400 text-white rounded-lg shadow-md">
             <Rocket size={14} fill="currentColor" />
          </div>
          PURITY UI DASHBOARD
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-1 space-y-1">
          
          <NavItem 
            href="/" 
            icon={<Home size={14} />} 
            label="Dashboard" 
            active={isActive("/")} 
          />
          
          <NavItem 
            href="/tables" 
            icon={<BarChart2 size={16} />} 
            label="Tables" 
            active={isActive("/tables")} 
          />
          
          <NavItem 
            href="/billing" 
            icon={<CreditCard size={16} />} 
            label="Billing" 
            active={isActive("/billing")} 
          />
          
          <NavItem 
            href="/rtl" 
            icon={<Wrench size={16} />} 
            label="RTL" 
            active={isActive("/rtl")} 
          />

          <li className="mt-6 mb-2 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Account Pages
          </li>
          
          <NavItem href="/profile" icon={<User size={16} />} label="Profile" active={isActive("/profile")} />
          <NavItem href="/signin" icon={<FileText size={16} />} label="Sign In" active={isActive("/signin")} />
          <NavItem href="/signup" icon={<Rocket size={16} />} label="Sign Up" active={isActive("/signup")} />
        </ul>
      </div>
    </aside>
  );
}

// Smart NavItem that changes style based on "active" prop
function NavItem({ href, icon, label, active }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-xs font-bold ${
          active 
            ? "bg-white shadow-md text-gray-800" 
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
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