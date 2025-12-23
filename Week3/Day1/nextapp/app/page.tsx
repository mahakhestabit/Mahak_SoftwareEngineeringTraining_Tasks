export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* Placeholder content matching the white space in your image */}
      <div className="min-h-[600px] rounded-xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">I am Main Page of app folder I will be visible here only</h2>
        <p className="text-gray-500 mt-2">
          I am main page i designed sidebar and navbar here to see the various things.
        </p>
        <p className="text-gray-500 mt-2">These sidebar and Navbar will be same for all folder inside app.</p>
      </div>
    </div>
  );
}