'use client'
import React,{useState,useEffect} from 'react'
import Card from '@/components/Card';
import Breadcrumbs from '@/utils/Breadcrumbs';
import { useFetch } from '@/hooks/useFetch';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    useFetch(setProducts,"https://fakestoreapi.com/products");
  })
  return (
    <div className='px-32 flex flex-col justify-center items-start py-20 gap-16'>
      <Breadcrumbs/>
      <div className="flex flex-wrap justify-start gap-16 items-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
export default Products;