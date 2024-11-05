'use client'
import { useCart } from '@/context/CartContext';
import Stars from '@/utils/Stars';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
import '../../app/globals.css';

export default function Card({ product }) {
  const {addToCart,addToWishList} = useCart();
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className=" w-1/6">
      <div className='relative flex justify-center z-0 pt-10 box-shadow rounded-lg'
      onMouseEnter={()=>setIsOpen(true)}
      onMouseLeave={()=>setIsOpen(false)}
      style={{
        boxShadow : '0px 2px 8px rgba(0, 0, 0, 0.075)'
      }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-48 object-contain py-3"
        />

        <div className='absolute z-10 top-0 right-0 flex flex-col justify-center items-center gap-5 p-3'>
          <button className='rounded-2xl p-2 bg-[#f5f5f5]' onClick={()=>addToWishList(product)}>
            <Image src='/assets/like.svg' height={20} width={20} alt='like'/>
          </button>
          <button className='rounded-2xl p-2 bg-[#f5f5f5]'>
            <Image src='/assets/eye.svg' height={20} width={20} alt='eye'/>
          </button>
        </div>
        {
          isOpen && 
          <div className="absolute z-10 bottom-0 w-full bg-black opacity-80 flex items-center justify-center transition-opacity duration-300">
            <button className="text-white px-4 py-2 rounded-lg font-normal text-base" onClick={()=>addToCart(product)}>
              <div className='flex flex-row gap-2 justify-center items-center'>
                <Image src='/assets/cartWhite.svg' height={25} width={25} alt='cart'/>
                <p>Add to Cart</p>
              </div>
            </button>
          </div>
        }
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

