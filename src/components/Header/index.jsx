import Link from 'next/link';

export default function Header() {
  return (
    <header className="header flex flex-row justify-around">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/wishlist">Wish List</Link>
    </header>
  );
}
