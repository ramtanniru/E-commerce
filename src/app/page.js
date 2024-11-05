'use client'
import React,{ useState, useEffect, useCallback } from "react";
import { categoryData, tempCategory } from "@/utils/data";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import Card from "@/components/Card";
import Link from "next/link";
import { services } from "@/utils/data";
import ServiceCard from "./about/ServiceCard";
import Featured from "@/utils/Featured";

export default function Home() {
  const [flashSales,setFlashSales] = useState([]);
  const [bestSelling,setBestSelling] = useState([]);
  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    useFetch(setFlashSales, 'https://fakestoreapi.com/products?limit=5');
    useFetch(setBestSelling, 'https://fakestoreapi.com/products?limit=5');
    useFetch(setProducts, 'https://fakestoreapi.com/products?limit=10');
    useFetch(setCategories, 'https://fakestoreapi.com/products/categories');
  },[]);

  return (
    <div className="flex flex-col gap-32 px-32 py-20">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start gap-5">
          {categoryData.map((cat,id)=>(
            <p key={id} className="text-lg">{cat.category}</p>
          ))}
        </div>
        <Image src='/home/banner.png' alt="banner" height={1000} width={1200}/>
      </div>

      {/* Flash sales */}
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="h-10 w-5 bg-red-500 rounded-md"></div>
            <p className="text-red-500">Today's</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-2xl font-bold">Flash Sales</p>
            <div className="flex flex-row justify-center items-center gap-5">
              <div className="bg-[#f5f5f5] flex justify-center items-center rounded-full p-3">
                <Image src='/assets/leftArrow.svg' height={20} width={20} alt="left"/>
              </div>
              <div className="bg-[#f5f5f5] flex justify-center items-center rounded-full p-3">
                <Image src='/assets/rightArrow.svg' height={20} width={20} alt="right"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-16">
          {flashSales.map((product)=>(<Card product={product}/>))}
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          <Link className="px-8 py-3 bg-red-500 text-white text-base rounded-md" href="/products">View All Products</Link>
        </div>
      </div>

      <hr/>

      {/* Category */}
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="h-10 w-5 bg-red-500 rounded-md"></div>
            <p className="text-red-500">Categories</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-2xl font-bold">Browse By Category</p>
            <div className="flex flex-row justify-center items-center gap-5">
              <div className="bg-[#f5f5f5] flex justify-center items-center rounded-full p-3">
                <Image src='/assets/leftArrow.svg' height={20} width={20} alt="left"/>
              </div>
              <div className="bg-[#f5f5f5] flex justify-center items-center rounded-full p-3">
                <Image src='/assets/rightArrow.svg' height={20} width={20} alt="right"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-16 w-full">
          {tempCategory.map((category)=>(
            <div className="w-1/6 border px-0 py-10 flex flex-col gap-3 justify-center items-center">
              <Image src={category.src} height={30} width={30} alt="logo"/>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      <hr/>

      {/* Best Selling Products */}
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="h-10 w-5 bg-red-500 rounded-md"></div>
            <p className="text-red-500">This Month</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-2xl font-bold">Best Selling Products</p>
            <Link className="px-8 py-3 bg-red-500 text-white text-base rounded-md" href="/products">View All Products</Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-16">
          {bestSelling.map((product)=>(<Card product={product}/>))}
        </div>
      </div>

      <Image src='/home/ad.png' width={1800} height={1000} alt="ad"/>

      {/* Explore our products */}
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="h-10 w-5 bg-red-500 rounded-md"></div>
            <p className="text-red-500">Our Products</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-2xl font-bold">Explore Our Products</p>
            <div className="flex flex-row justify-center items-center gap-5">
              <div className="bg-[#f5f5f5] flex justify-center items-center rounded-full p-3">
                <Image src='/assets/leftArrow.svg' height={20} width={20} alt="left"/>
              </div>
              <div className="bg-[#f5f5f5] flex justify-center items-center rounded-full p-3">
                <Image src='/assets/rightArrow.svg' height={20} width={20} alt="right"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-16">
          {products.map((product)=>(<Card product={product}/>))}
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          <Link className="px-8 py-3 bg-red-500 text-white text-base rounded-md" href="/products">View All Products</Link>
        </div>
      </div>

      {/* New Arrival */}
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="h-10 w-5 bg-red-500 rounded-md"></div>
            <p className="text-red-500">Featured</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-2xl font-bold">New Arrival</p>
          </div>
        </div>
        <Featured/>
      </div>

      {/* Services */}
      <div className="flex flex-row justify-between">
        {services.map((service,id) => (
          <ServiceCard service={service} key={id}/>
        ))}
      </div>

    </div>
  );
}
