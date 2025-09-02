'use client';

import dynamic from 'next/dynamic';

const AddSchoolClient = dynamic(() => import('./AddSchoolClient'), { ssr: false });

export default function ClientWrapper() {
  return <AddSchoolClient />;
}
