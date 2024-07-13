import React from 'react';
import Link from 'next/link';
import { servicesConfig } from '@/config/services';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = servicesConfig.find(c => c.slug === params.category);

  if (!category) {
    return <div>カテゴリーが見つかりません</div>;
  }

  return (
    <div className="category-page">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.services.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${category.slug}/${service.slug}`} className="block p-4 border rounded hover:bg-gray-100">
              <h3 className="font-medium">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}