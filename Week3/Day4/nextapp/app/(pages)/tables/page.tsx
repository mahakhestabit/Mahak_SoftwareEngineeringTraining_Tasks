"use client";

import { User } from "lucide-react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function TablesPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="p-0 overflow-hidden pb-4">
        <div className="p-6 pb-4">
          <h3 className="font-bold text-gray-700 text-lg">Authors Table</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Author</th>
                <th className="text-left py-3 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Function</th>
                <th className="text-left py-3 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Employed</th>
                <th className="text-left py-3 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              <AuthorRow 
                name="Esthera Jackson" 
                email="esthera@simmmple.com" 
                role="Manager" 
                dept="Organization" 
                status="Online" 
                date="14/06/21" 
              />
              <AuthorRow 
                name="Alexa Liras" 
                email="alexa@simmmple.com" 
                role="Programmer" 
                dept="Developer" 
                status="Offline" 
                date="14/06/21" 
              />
              <AuthorRow 
                name="Laurent Michael" 
                email="laurent@simmmple.com" 
                role="Executive" 
                dept="Projects" 
                status="Online" 
                date="14/06/21" 
              />
              <AuthorRow 
                name="Freduardo Hill" 
                email="freduardo@simmmple.com" 
                role="Manager" 
                dept="Organization" 
                status="Online" 
                date="14/06/21" 
              />
              <AuthorRow 
                name="Daniel Thomas" 
                email="daniel@simmmple.com" 
                role="Programmer" 
                dept="Developer" 
                status="Offline" 
                date="14/06/21" 
              />
              <AuthorRow 
                name="Mark Wilson" 
                email="mark@simmmple.com" 
                role="Designer" 
                dept="UI/UX Design" 
                status="Offline" 
                date="14/06/21" 
              />
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// --- Component: Author Row (With Types) ---
function AuthorRow({ 
  name, 
  email, 
  role, 
  dept, 
  status, 
  date 
}: { 
  name: string; 
  email: string; 
  role: string; 
  dept: string; 
  status: string; 
  date: string; 
}) {
  return (
    <tr className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
      {/* Author Column */}
      <td className="py-3 px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-400 text-white flex items-center justify-center shadow-sm text-xs font-bold">
             {name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <h5 className="text-sm font-bold text-gray-700">{name}</h5>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>
      </td>

      {/* Function Column */}
      <td className="py-3 px-6">
        <div className="flex flex-col">
          <h5 className="text-sm font-bold text-gray-700">{role}</h5>
          <p className="text-xs text-gray-500">{dept}</p>
        </div>
      </td>

      {/* Status Column */}
      <td className="py-3 px-6">
        <Badge variant={status === "Online" ? "teal" : "gray"}>{status}</Badge>
      </td>

      {/* Date Column */}
      <td className="py-3 px-6">
        <span className="text-xs font-bold text-gray-700">{date}</span>
      </td>

      {/* Action Column */}
      <td className="py-3 px-6">
        <button className="text-gray-500 font-bold text-xs hover:text-teal-400 cursor-pointer">
          Edit
        </button>
      </td>
    </tr>
  );
}