'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishList,setWishList] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishListCart = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishList(wishListCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }, [wishList]);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (removedProduct) => {
    const products = cart.filter((product) => product.id!=removedProduct.id);
    setCart(products);
  }

  const addToWishList = (product) => {
    setWishList((prevCart) => [...prevCart, product]);
  };

  const removeFromWishList = (removedProduct) => {
    const products = wishList.filter((product) => product.id!=removedProduct.id);
    setWishList(products);
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishList, addToWishList, removeFromWishList }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
