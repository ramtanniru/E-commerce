'use client'
import { useCart } from '@/context/CartContext'
import React, { useContext } from 'react'
import Card from '@/components/Card';

export default function Cart() {
  const {cart} = useCart();
  return (
    <div>
      {cart.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
