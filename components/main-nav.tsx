import React from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types';



interface MainNavProps {
  items: MenuItem[];
}

const MainNav: React.FC<MainNavProps> = ({ items }) => (
  <nav className="bg-gray-100 p-4">
    <ul className="flex justify-center space-x-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainNav;