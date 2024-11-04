'use client'
import React,{useState,useEffect} from 'react'
import { useCart } from '@/context/CartContext';
import WishListCard from '@/components/HOC/WishListCard';

function Products() {
  const {wishList} = useCart();
  return (
    <div className="product-grid">
      {wishList.map((product) => (
        <WishListCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default Products;