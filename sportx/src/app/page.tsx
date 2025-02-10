import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <div className="flex gap-4">
      <Link href="/auth/login" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Login
      </Link>
      <Link href="/auth/signup" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
        Sign Up
      </Link>
      </div>
    </div>
  );
}