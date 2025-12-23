import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "../../../components/ui/Button.jsx";

// 1. Define what a User looks like (TypeScript)
type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string;
  joinedDate: string;
};

// 2. Mock Database Call (Simulating a server delay)
async function getUserProfile(): Promise<UserProfile> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, this would be: db.user.findUnique(...)
  return {
    id: "usr_123",
    name: "Alex Developer",
    email: "alex@example.com",
    role: "Pro Member",
    bio: "Full-stack enthusiast building scalable apps with Next.js 16. Love coffee and code.",
    joinedDate: "December 2025",
  };
}

export default async function ProfilePage() {
  // 3. Fetch data directly in the component (Server Component)
  const user = await getUserProfile();

  if (!user) {
    notFound(); // Triggers the 404 page if user doesn't exist
  }

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      
      {/* --- Header Section --- */}
      <div className="flex items-center gap-6 mb-10 border-b pb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2 font-semibold">
            {user.role}
          </span>
        </div>

        <div className="ml-auto">
          <Button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition">
            Edit Profile
          </Button>
        </div>
      </div>

      {/* --- Details Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Stats/Info */}
        <div className="col-span-1 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Joined</h3>
            <p className="font-medium">{user.joinedDate}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Member ID</h3>
            <p className="font-mono text-sm text-gray-600">{user.id}</p>
          </div>
        </div>

        {/* Right Column: Bio & Activity */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            {user.bio}
          </p>

          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {/* Hardcoded activity for demo */}
            <li className="flex items-center gap-3 p-3 border rounded hover:shadow-sm transition">
              <span className="text-2xl"></span>
              <div>
                <p className="font-medium">Published a new article</p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 border rounded hover:shadow-sm transition">
              <span className="text-2xl"></span>
              <div>
                <p className="font-medium">Reached a 7-day streak</p>
                <p className="text-xs text-gray-400">Yesterday</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}