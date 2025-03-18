import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
  //const { data: session, status } = useSession();
  const { status } = useSession();
  const router = useRouter();

  // Show a loading state while checking authentication
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  // Redirect unauthenticated users to the login page
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  // Render the protected content for authenticated users
  return (
    <div>
      <h1>Welcome to the Protected Page</h1>
      <p>This content is only accessible by logged-in users.</p>
    </div>
  );
}
