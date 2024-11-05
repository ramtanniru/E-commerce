'use client';
import { useCart } from '@/context/CartContext';
import React, { useEffect, useState } from 'react';
import CartCard from '@/components/HOC/CartCard';
import Breadcrumbs from '@/utils/Breadcrumbs';

export default function Cart() {
    const { cart } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const res = cart.reduce((acc, item) => {
                const price = parseFloat(item.price);
                return acc + price;
            }, 0);
            setTotal(res);
        };

        calculateTotal();
    }, [cart]);

    return (
        <div className="flex flex-col justify-center items-start px-32 py-20 gap-12">
            <Breadcrumbs />
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
                {cart.length > 0 ? (
                    cart.map((product) => <CartCard key={product.id} product={product} />)
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                )}
                {cart.length > 0 && (
                    <div className="flex justify-between items-center pt-6 border-t mt-4">
                        <p className="text-lg font-semibold">Total:</p>
                        <p className="text-lg font-bold">${total.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
