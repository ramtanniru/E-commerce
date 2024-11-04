
import Link from 'next/link';

export default function Card({ product }) {
  return (
    <div className="card">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
      </Link>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
}
