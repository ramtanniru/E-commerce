'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathName = usePathname();  
  const pathSegments = pathName.split('/').filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { href, label };
  });

  return (
    <nav className="text-gray-600 text-sm flex flex-row">
      <Link href="/" className="text-gray-800">
        Home
      </Link>
      <div>
        {breadcrumbs.map((item, idx) => (
          <div key={idx} className='flex flex-row'>
            <span className="mx-2"> / </span>
            <Link href={item.href}>
              <div className="text-gray-800 hover:underline">{item.label}</div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
