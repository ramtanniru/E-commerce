'use client';
import Card from '@/components/Card'
import { useCart } from '@/context/CartContext'
import React from 'react'

export default function CartCard({product}) {
    const { removeFromCart } = useCart();
  return (
    <div>
        <Card product={product}/>
        <button/>
    </div>
  )
}
