// utils/Breadcrumbs.js

import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav>
      {items.map((item, idx) => (
        <span key={idx}>
          <Link href={item.href}>{item.label}</Link>
          {idx < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
}
