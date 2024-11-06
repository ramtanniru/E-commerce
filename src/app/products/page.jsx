'use client'
import React from 'react'
import Card from '@/components/Card';
import Breadcrumbs from '@/utils/Breadcrumbs';
import useFetch from '@/hooks/useFetch';

function Products() {
  const { data: products } = useFetch('https://fakestoreapi.com/products');
  return (
    <div className='px-32 flex flex-col justify-center items-start py-20 gap-16'>
      <Breadcrumbs/>
      <div className="flex flex-wrap justify-start gap-16 items-center">
        {products.map((product,id) => (
          <Card key={id} product={product} />
        ))}
      </div>
    </div>
  )
}
export default Products;