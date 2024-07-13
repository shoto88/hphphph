import React from 'react';
import Link from 'next/link';
import { servicesConfig } from '@/config/services';

export default function ServicesPage() {
  return (
    <div className="services-page">
      {servicesConfig.map((category) => (
        <div key={category.slug} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
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
      ))}
    </div>
  );
}