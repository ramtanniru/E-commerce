'use client'
import React,{useState,useEffect} from 'react'
import Card from '@/components/Card';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  })
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
export default Products;