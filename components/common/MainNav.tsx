// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { MenuItem } from '@/types';
// import MobileMenu from './MobileMenu';

// interface MainNavProps {
//   items: MenuItem[];
// }

// const MainNav: React.FC<MainNavProps> = ({ items }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="md:bg-gray-100 md:p-4">
//       <div className="max-w-5xl mx-auto">
//         <ul className="hidden md:flex md:justify-between items-center">
//           {items.map((item) => (
//             <li key={item.href} className="relative group">
//               <Link href={item.href} className="hover:underline">
//                 {item.label}
//               </Link>
//               {item.children && (
//                 <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block">
//                   {item.children.map((subItem) => (
//                     <li key={subItem.href}>
//                       <Link
//                         href={subItem.href}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         {subItem.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//         <MobileMenu items={items} isOpen={isMenuOpen} onToggle={toggleMenu} />
//       </div>
//     </nav>
//   );
// };

// export default MainNav;