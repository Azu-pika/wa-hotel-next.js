'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/login');
  }, [session, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null; // Render nothing while redirecting
  }

  // Render the protected content
  return (
    <div>
      <h1>Welcome to the Protected Page</h1>
      <p>This content is only accessible by logged-in users.</p>
    </div>
  );
}
