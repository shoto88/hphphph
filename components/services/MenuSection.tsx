import React from 'react';
import Link from 'next/link';
import { servicesConfig } from '@/config/services';

const MenuSection: React.FC = () => (
  <section className="text-center space-y-8">
    <h2 className="text-3xl font-bold text-blue-500">MENU</h2>
    {servicesConfig.map((category) => (
      <div key={category.slug}>
        <h3 className="text-xl font-bold mt-4">{category.name}</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-blue-200 rounded-md">
          {category.services.map((service) => (
            <Link 
              href={`/services/${category.slug}/${service.slug}`} 
              key={service.slug} 
              className="block p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default MenuSection;