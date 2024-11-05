'use client'
import { SessionProvider } from 'next-auth/react'
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";

export default function AuthProvider({ children }) {
    return (
        <SessionProvider>
            <UserProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </UserProvider>
        </SessionProvider>
    )
}