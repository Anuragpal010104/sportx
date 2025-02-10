import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}