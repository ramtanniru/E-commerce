'use client';
import Card from '@/components/Card'
import { useCart } from '@/context/CartContext'
import React from 'react'

export default function WishListCard({product}) {
    const { removeFromWishList, addToCart } = useCart();
  return (
    <div>
        <Card product={product}/>
        <button onClick={()=>addToCart(product)}>Move to Cart</button>
        <button onClick={()=>removeFromWishList(product)}>Remove from wishlist</button>
    </div>
  )
}
