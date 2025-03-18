'use client';

import { signIn } from 'next-auth/react';
import styles from '../page.module.css'; // Adjust if needed

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <button onClick={() => signIn('google')} className={styles.googleButton}>
        Sign in with Google
      </button>
    </div>
  );
}
