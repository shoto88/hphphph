import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';


interface MainNavProps {
  items: NavItem[];
}

const MainNav: React.FC<MainNavProps> = ({ items }) => (
  <nav className="bg-gray-100 p-4">
    <ul className="flex justify-center space-x-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:underline">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainNav;