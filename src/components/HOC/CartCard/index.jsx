'use client';
import Card from '@/components/Card';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import React from 'react';

export default function CartCard({ product }) {
    const { removeFromCart } = useCart();
    return (
        <div className="w-full shadow-lg p-4 flex justify-between items-center bg-white rounded-lg mb-4"
        style={{
            boxShadow : '0px 2px 8px rgba(0, 0, 0, 0.075)'
        }}
        >
            <div className="flex items-center gap-4">
                <img src={product.image} height={50} width={50} alt={product.title} className="rounded" />
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">{product.title}</p>
                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(product)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
