import Link from "next/link";
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
  return (
    <aside className="h-[calc(100vh-32px)] w-64 m-4 bg-white rounded-xl flex flex-col transition-transform duration-300 shadow-xl border border-gray-100/50 relative z-50">
      
      {/* Logo Area */}
      <div className="flex items-center justify-center h-20 border-b border-gray-100 mb-4 mx-4">
        <div className="flex items-center gap-3 text-gray-800 font-bold tracking-wide text-sm">
          <div className="p-1.5 bg-teal-400 text-white rounded-lg shadow-md">
             <Rocket size={14} fill="currentColor" />
          </div>
          MAIN DASHBOARD
        </div>
      </div>

      {/* Navigation Links */}
      <div className="px-4 flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-1 space-y-1">
          
          {/* Active Item (Dashboard) */}
        
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 bg-white shadow-md rounded-xl text-gray-800 font-bold text-xs"
            >
              <NavItem icon={<Home size={16} />} label="Dashboard" />

            </Link>
          
          <NavItem icon={<BarChart2 size={16} />} label="Tables" />
          <NavItem icon={<CreditCard size={16} />} label="billing" />
          <NavItem icon={<Wrench size={16} />} label="RTL" />

          {/* Section Header  Account Pages */}
          <li className="mt-6 mb-2 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Account Pages
          </li>
          
          <NavItem icon={<User size={16} />} label="Profile" />
          <NavItem icon={<FileText size={16} />} label="Sign In" />
          <NavItem icon={<Rocket size={16} />} label="Sign Up" />
        </ul>
      </div>
    </aside>
  );
}

// Helper component
function NavItem({ icon, label }) {
  return (
    <li>
      <Link
        href="#"
        className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-xl transition-all text-xs font-semibold group"
      >
        <div className="p-1.5 bg-white rounded-lg text-teal-400 shadow-sm border border-gray-100 group-hover:border-teal-200 transition-colors">
            {icon}
        </div>
        {label}
      </Link>
    </li>
  );
}