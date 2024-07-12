import React from 'react';
import { Button } from "@/components/ui/button";
import { menuConfig } from '@/config/menu';

const MenuSection: React.FC = () => (
  <section className="text-center space-y-8">
    <h2 className="text-3xl font-bold text-blue-500">MENU</h2>
    {Object.entries(menuConfig).map(([category, items]) => (
      <div key={category}>
        <h3 className="text-xl font-bold mt-4">{category}</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-blue-200 rounded-md">
          {items.map((item) => (
            <Button key={item} variant="outline" className="rounded-full">
              {item}
            </Button>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default MenuSection;