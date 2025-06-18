'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromToken } from '../../../lib/jwt';

export default function DonorDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const decoded = getUserFromToken();

    if (!decoded) {
      router.push('/login');
    } else if (decoded.role !== 'donor') {
      router.push('/unauthorized'); // Optional: Create this page
    } else {
      setUser(decoded);
    }
  }, [router]);

  if (!user) return <div className="text-center mt-10">Loading Donor Dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome, Donor</h1>
      <p className="text-gray-700 mb-2">Email: {user.email}</p>
      <p className="text-gray-700 mb-2">Organization: {user.organizationId}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Your Contributions</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Total Donations: ₹15,000</li>
          <li>Last Donation: ₹2,000 on May 1, 2025</li>
          <li>Preferred Category: Food Distribution</li>
        </ul>
      </div>

      <button
        className="mt-8 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={() => {
          localStorage.removeItem('token');
          router.push('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}
