'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type School = {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string;
};

export default function ShowSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/schools')
      .then(res => res.json())
      .then(data => {
        setSchools(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-12 text-white">Loading schools...</p>;

  return (
    <div className="container mx-auto p-6 bg-gray-900 min-h-screen rounded-lg shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-6">Schools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {schools.map(({ id, name, address, city, image }) => (
          <div key={id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/schoolImages/${image}`}
              alt={name}
              width={400}
              height={160}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{name}</h2>
              <p className="text-gray-300">{address}</p>
              <p className="text-gray-400">{city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
