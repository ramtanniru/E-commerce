'use client'
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import React,{ useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

function ProductDetail() {
  const { addToCart, addToWishList } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState('');
  useEffect(()=>{
    const fetchData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
    }
    fetchData();
  },[id])

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishList(product)}>Add to Wish List</button>
    </div>
  );
}

export default ProductDetail;