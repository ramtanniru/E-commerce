'use client'
import React from 'react'
import { useCart } from '@/context/CartContext';
import WishListCard from '@/components/HOC/WishListCard';
import useFetch from '@/hooks/useFetch';
import Link from 'next/link';
import Card from '@/components/Card';

function Products() {
  const {wishList,addToCart,removeFromWishList} = useCart();
  const { data: products } = useFetch('https://fakestoreapi.com/products');

  const moveAllToBag = () => {
    wishList.forEach((product) => {
      addToCart(product);
      removeFromWishList(product);
    });
  }

  return (
    <div className='flex flex-col justify-center items-center px-32 py-20 gap-20'>
      <div className='flex flex-row justify-between items-center w-full'>
        <p>WishList {`(${wishList.length})`}</p>
        <button className='border-black border px-10 py-3' onClick={()=>moveAllToBag()}>Move All To Bag</button>
      </div>
      <div className='flex flex-wrap items-start gap-16'>
        {wishList.map((product,id)=>(
          <WishListCard product={product} key={id}/>
        ))}
      </div>

      {/* Just for you */}
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="h-10 w-5 bg-red-500 rounded-md"></div>
            <p className="text-red-500">Just For You</p>
          </div>
          <Link className="border-black border px-10 py-3" href="/products">See All</Link>
        </div>
        <div className="flex flex-wrap items-center gap-16">
          {products.map((product,id)=>(<Card product={product} key={id}/>))}
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          
        </div>
      </div>
    </div>
  )
}
export default Products;