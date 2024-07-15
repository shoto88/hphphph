// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { MessageCircle, Phone } from 'lucide-react';

// const Header: React.FC = () => (
//   <header className="flex items-center justify-between p-4 border-b">
//     <div className="flex items-center space-x-2">
//       <div className="w-4 h-4 bg-red-500 rounded-full" />
//       <div>
//         <div className="font-bold">（医）清涼会</div>
//         <div className="text-sm">大濠パーククリニック</div>
//       </div>
//     </div>
//     <div className="flex space-x-2 mr-12 sm:mr-0">
//       <Button className="bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
//         <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//         <span className="hidden sm:inline ml-1">Lineで予約</span>
//       </Button>
//       <Button className="bg-red-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
//         <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
//         <span className="hidden sm:inline ml-1">お電話</span>
//       </Button>
//       <Button className="hidden sm:inline-flex bg-black text-white">Instagram</Button>
//       <Button className="hidden sm:inline-flex bg-black text-white">Facebook</Button>
//       <Button className="hidden sm:inline-flex bg-black text-white">YouTube</Button>
//     </div>
//   </header>
// );

// export default Header;

// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { MessageCircle, Phone } from 'lucide-react';

// const Header: React.FC = () => (
//   <header className="bg-white shadow-sm">
//     <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//       <div className="flex items-center space-x-2">
//         <div className="w-4 h-4 bg-red-500 rounded-full" />
//         <div>
//           <div className="font-bold">（医）清涼会</div>
//           <div className="text-sm">大濠パーククリニック</div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <Button className="bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
//           <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//           <span className="hidden sm:inline ml-1">Lineで予約</span>
//         </Button>
//         <Button className="bg-red-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
//           <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
//           <span className="hidden sm:inline ml-1">お電話</span>
//         </Button>
//       </div>
//     </div>
//   </header>
// );

// export default Header;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Menu } from 'lucide-react';
import { MenuItem } from '@/types';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  items: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4"> {/* Increased vertical padding */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3"> {/* Increased spacing */}
            <div className="w-5 h-5 bg-red-500 rounded-full" /> {/* Slightly larger logo */}
            <div>
              <div className="text-2xl">（医）清涼会</div> {/* Larger text */}
              <div className="text-2xl ml-2">大濠パーククリニック</div> {/* Larger text */}
            </div>
          </div>
          <div className="flex items-center space-x-4"> {/* Adjusted spacing */}
            <nav className="hidden md:flex space-x-6 mr-4"> {/* Added margin-right */}
              {items.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href} className="text-sm hover:text-gray-700">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block">
                    {item.children.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            </nav>
          <div className="flex flex-col items-end space-y-2">
            <Button className="bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 w-32 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Lineで予約</span>
            </Button>
            <Button className="bg-red-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 w-32 flex items-center justify-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">お電話</span>
            </Button>
            <Button className="md:hidden w-full sm:w-40 flex items-center justify-center" onClick={toggleMenu}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      </div>
      <MobileMenu items={items} isOpen={isMenuOpen} onToggle={toggleMenu} />
    </header>
    
    
  );
};

export default Header;
