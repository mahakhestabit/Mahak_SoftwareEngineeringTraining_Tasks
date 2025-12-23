"use client";

import React from "react"; // Ensure React is imported
import Sidebar from "../components/ui/Sidebar"; 
import Navbar from "../components/ui/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode; // <--- This fixes the "implicitly has an 'any' type" error
}) {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      {/* Adjusted margin to match new Sidebar width */}
      <main className="flex-1 md:ml-72 transition-all duration-300">
        <Navbar />
        <div className="px-4 pb-6">
          {children}
        </div>
      </main>
    </div>
  );
}   