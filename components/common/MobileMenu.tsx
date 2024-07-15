// import React from 'react';
// import Link from 'next/link';
// import { MenuItem } from '@/types';
// import { Menu, X } from 'lucide-react'; // lucide-reactからアイコンをインポート

// interface MobileMenuProps {
//   items: MenuItem[];
//   isOpen: boolean;
//   onToggle: () => void;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, onToggle }) => {
//   return (
//     <div className="md:hidden">
//       <button
//         className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md"
//         onClick={onToggle}
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
//           <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto">
//             <ul className="py-4">
//               {items.map((item) => (
//                 <li key={item.href} className="px-4 py-2">
//                   <Link href={item.href} className="block text-lg font-medium" onClick={onToggle}>
//                     {item.label}
//                   </Link>
//                   {item.children && (
//                     <ul className="pl-4 mt-2">
//                       {item.children.map((subItem) => (
//                         <li key={subItem.href}>
//                           <Link
//                             href={subItem.href}
//                             className="block py-2 text-sm text-gray-600"
//                             onClick={onToggle}
//                           >
//                             {subItem.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileMenu;

import React from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, onToggle }) => {
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  const toggleSubmenu = (href: string) => {
    setOpenSubmenu(openSubmenu === href ? null : href);
  };

  return (
    <div className="md:hidden">
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-md"
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-800 bg-opacity-95 z-40">
          <nav className="h-full overflow-y-auto pt-16 pb-8 px-6">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.href} className="py-2">
                  {item.children ? (
                    <div>
                      <button 
                        onClick={() => toggleSubmenu(item.href)}
                        className="flex items-center justify-between w-full text-white text-lg font-medium"
                      >
                        {item.label}
                        {openSubmenu === item.href ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      {openSubmenu === item.href && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {item.children.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className="block text-blue-200 hover:text-white"
                                onClick={onToggle}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white text-lg font-medium"
                      onClick={onToggle}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;