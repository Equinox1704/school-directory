import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-8 p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight">School Directory</h1>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/addSchool"
          className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/50 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Add School
        </Link>

        <Link
          href="/showSchools"
          className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/50 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Show Schools
        </Link>
      </div>

      <p className="mt-12 max-w-md text-center text-gray-400">
        Easily manage and browse schools with images, addresses, and contacts.
      </p>
    </main>
  );
}
