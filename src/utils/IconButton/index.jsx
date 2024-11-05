'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function IconButton({ icon, src }) {
  const [count, setCount] = useState(0);
  const { cart, wishList } = useCart();

  useEffect(() => {
    switch (icon) {
      case 'cart':
        setCount(cart.length);
        break;
      case 'like':
        setCount(wishList.length);
        break;
      default:
        setCount(0);
    }
  }, [icon, cart, wishList]);

  return (
    <Link href={src}>
      <div className="relative inline-block">
        {/* Conditionally render the badge only if count is greater than 0 */}
        {count > 0 && (
          <div className="absolute -top-2 -right-2 flex items-center justify-center p-1 px-2 text-xs font-bold text-white bg-red-500 rounded-full">
            {count}
          </div>
        )}
        <Image src={`/assets/${icon}.svg`} width={30} height={30} alt={icon} />
      </div>
    </Link>
  );
}
