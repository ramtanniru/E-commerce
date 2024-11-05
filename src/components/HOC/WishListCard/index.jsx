'use client'
import { useCart } from '@/context/CartContext';
import Stars from '@/utils/Stars';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';

export default function WishListCard({ product }) {
  const {addToCart,removeFromWishList} = useCart();
  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishList(product);
  }
  return (
    <div className="overflow-hidden w-1/6">
      <div className='relative flex justify-center z-0 pt-10 shadow-md rounded-lg overflow-hidden'
      style={{
        boxShadow : '0px 2px 8px rgba(0, 0, 0, 0.075)'
      }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-48 object-contain py-3"
        />

        <div className='absolute z-10 top-0 right-0 p-3'>
          <button className='rounded-2xl p-2 bg-[#f5f5f5]' onClick={()=>removeFromWishList(product)}>
            <Image src='/assets/delete.svg' height={20} width={20} alt='delete'/>
          </button>
        </div>

        <div className="absolute z-10 bottom-0 w-full bg-black opacity-80 flex items-center justify-center transition-opacity duration-300">
          <button className="text-white px-4 py-2 rounded-lg font-normal text-base" onClick={()=>moveToCart(product)}>
            <div className='flex flex-row gap-2 justify-center items-center'>
              <Image src='/assets/cartWhite.svg' height={25} width={25} alt='cart'/>
              <p>Add to Cart</p>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-start mt-5">
        <h2 className="text-base font-semibold truncate">{product.title}</h2>
        <div className='flex flex-row gap-3 justify-start items-center'>
          <p className="text-red-500">${product.price}</p>
          <Stars count={Math.ceil(Math.random(1000,100000)*1000)}/>
        </div>
      </div>
    </div>
  );
};

