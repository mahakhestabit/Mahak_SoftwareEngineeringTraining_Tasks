"use client";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button"
import { Rocket, ArrowRight, Trophy } from "lucide-react";
import Image from 'next/image'
import Image1 from '../../../public/chakra.jpeg'

export default function Dashboard() { 
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto mt-6">
      <header className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <Card className="flex w-full flex-row items-center justify-between p-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-500">Today's Money</p>
            <h3 className="text-2xl font-bold text-gray-800">
              $53,000 <span className="text-sm font-medium text-green-500">+55%</span>
            </h3>
          </div>
          <Button variant="default" className="bg-teal-300 h-12">
            <Rocket size={16} />
          </Button>
        </Card>

        {/* Card 2 */}
        <Card className="flex w-full flex-row items-center justify-between p-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-500">Today's Money</p>
            <h3 className="text-2xl font-bold text-gray-800">
              $53,000 <span className="text-sm font-medium text-red-500">-15%</span>
            </h3>
          </div>
          <Button variant="default" className="bg-teal-300 h-12">
            <Rocket size={16} />
          </Button>
        </Card>

        {/* Card 3 */}
        <Card className="flex w-full flex-row items-center justify-between p-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-500">Today's Money</p>
            <h3 className="text-2xl font-bold text-gray-800">
              $53,000 <span className="text-sm font-medium text-green-500">+55%</span>
            </h3>
          </div>
          <Button variant="default" className="bg-teal-300 h-12">
            <Rocket size={16} />
          </Button>
        </Card>
      </header>

      <Card className="relative overflow-hidden min-h-[300px] flex flex-col justify-center bg-white border-0 shadow-lg group">
        <div className="absolute right-0 top-0 bg-teal-400/10 w-64 h-64 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-all duration-700 group-hover:bg-teal-400/20" />

        <section className="flex">
          <div className="relative z-10 p-4">
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">
              Overview
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome back, <br />
              <span className="text-teal-400">Developer.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg leading-relaxed mb-8">
              This dashboard is designed for clarity. No complex charts, just simple, 
              beautiful text to keep you focused on what truly matters today.
            </p>

            <button className="flex items-center gap-2 text-gray-800 font-bold text-sm hover:gap-3 transition-all">
              Read Documentation <ArrowRight size={16} />
            </button>
          </div>

          <Image 
            src={Image1}
            alt="icon image"
            width={300}
            height={400}
            className="rounded-lg"
          />
        </section>
      </Card>

      <footer className="flex gap-10">
        <Card>
          <div className="flex gap-2">
            <Button>
              <Trophy size={16} />
            </Button>
            <p className="text-gray-400 text-md">Users</p>            
          </div>
          <p className="font-bold p-2">32,765</p>
          <div className="h-2 w-20 bg-gray-200 rounded">
            <div className="h-2 w-10 bg-teal-300 rounded" />
          </div>
        </Card>

        <Card>
          <div className="flex gap-2">
            <Button>
              <Trophy size={16} />
            </Button>
            <p className="text-gray-400 text-md">Clicks</p>            
          </div>
          <p className="font-bold p-2">23M</p>
          <div className="h-2 w-20 bg-gray-200 rounded">
            <div className="h-2 w-7 bg-teal-300 rounded" />
          </div>
        </Card>

        <Card>
          <div className="flex gap-2">
            <Button>
              <Trophy size={16} />
            </Button>
            <p className="text-gray-400 text-md">Sales</p>            
          </div>
          <p className="font-bold p-2">26,765</p>
          <div className="h-2 w-20 bg-gray-200 rounded">
            <div className="h-2 w-16 bg-teal-300 rounded" />
          </div>
        </Card>
      </footer>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-gray-600 text-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
      {text}
    </li>
  );
}
