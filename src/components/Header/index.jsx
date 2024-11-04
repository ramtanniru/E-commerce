'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="header flex flex-row justify-around">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/wishlist">Wish List</Link>
      
      {session ? (
        <button onClick={() => signOut({ callbackUrl: '/api/auth/signin' })} className="ml-4">
          Sign Out
        </button>
      ) : (
        <>
          <Link href="/api/auth/signin" className="ml-4">Sign In</Link>
          <Link href="/api/auth/signup" className="ml-4">Sign Up</Link>
        </>
      )}
    </header>
  );
}
