// import React from 'react';
// import Link from 'next/link';
// import { servicesConfig } from '@/config/services';
// import { ServiceCategory } from '@/types';

// interface ServiceProps {
//   items: ServiceCategory[]
// }

// const MenuSection: React.FC<ServiceProps> = ({ items }) => (
//   <section className="container mx-auto px-4 max-w-5xl text-center space-y-8">
//     <h2 className="text-3xl font-bold text-blue-500">MENU</h2>
//     {items.map((category) => (
//       <div key={category.slug}>
//         <h3 className="text-xl font-bold mt-4">{category.name}</h3>
//         <div className="mt-4 p-6 px-12 gap-10 grid grid-cols-2 md:grid-cols-3 bg-blue-200 rounded-md">
//           {category.services.map((service) => (
//             <Link 
//               href={`/services/${category.slug}/${service.slug}`} 
//               key={service.slug} 
//               className="block text-2xl p-0 bg-white rounded-full hover:bg-gray-100 transition-colors h-24 flex items-center justify-center"
//             >
//               {service.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     ))}
//   </section>
// );

// export default MenuSection;
// import React from 'react';
// import Link from 'next/link';
// import { ServiceCategory, ServiceConfig } from '@/types';
// import { Stethoscope, Pill, Hospital } from 'lucide-react'; // 例としてのアイコン

// interface MenuSectionProps {
//   items: ServiceCategory[]
// }

// const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
//   const getIcon = (index: number) => {
//     const icons = [Stethoscope, Pill, Hospital];
//     return icons[index % icons.length];
//   };

//   return (
//     <section className="container mx-auto px-4 max-w-5xl text-center space-y-8 py-12">
//       <h2 className="text-4xl font-bold text-gray-800">MENU</h2>

//       {items.map((category) => (
//         <div key={category.slug} className="space-y-4">
//           <h3 className="text-2xl font-semibold text-gray-700">{category.name}</h3>
//           <div className={`grid ${category.slug === 'insurance' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-3'} gap-4 bg-blue-100 rounded-lg p-6`}>
//             {category.services.map((service, index) => {
//               const Icon = getIcon(index);
//               return (
//                 <Link 
//                   href={`/services/${category.slug}/${service.slug}`} 
//                   key={service.slug} 
//                   className="flex flex-col items-center justify-center p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <Icon className="w-8 h-8 mb-2" />
//                   <span className="text-lg">{service.name}</span>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       ))}

//       <Link href="/services" className="inline-block mt-8 text-blue-600 hover:text-blue-800 transition-colors">
//         診療案内 →
//       </Link>
//     </section>
//   );
// };

// export default MenuSection;
import React from 'react';
import Link from 'next/link';
import { ServiceCategory } from '@/types';
import { Stethoscope, Heart, Pill } from 'lucide-react';

interface MenuSectionProps {
  items: ServiceCategory[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  const getIcon = (index: number) => {
    const icons = [Stethoscope, Heart, Pill];
    return icons[index % icons.length];
  };
  
  return (
    <div className="container mx-auto px-4 max-w-6xl py-16">
      <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">MENU</h2>

      {items.map((category, index) => (
        <div key={category.slug} className={`flex flex-col gap-4 md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className={`w-full p-6 space-y-4 rounded-2xl ${index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'}`}>
            <h3 className="text-3xl font-semibold text-gray-700 mb-6">{category.name}</h3>
            <Link href={`/services/${category.slug}`} className="text-blue-600 hover:text-blue-800 transition-colors">
              {category.name}の詳細へ →
            </Link>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {category.services.map((service, serviceIndex) => {
                const Icon = getIcon(serviceIndex);
                return (
                  <Link 
                    href={`/services/${category.slug}/${service.slug}`}
                    key={service.slug}
                    className="flex flex-col items-center"
                  >
                    <div className="w-32 h-32 bg-[#fffaf0] rounded-full shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
                      <Icon className="w-6 h-6 mb-1 text-blue-500" />
                      <span className="text-lg font-semibold text-center">{service.name}</span>
                      <span className="text-blue-600 text-xs">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div>
              
            </div>
          </div>
        </div>
      ))}

      <div className="text-center">
        <Link href="/services" className="inline-block mt-8 text-xl text-green-600 hover:text-green-800 transition-colors">
          診療案内 →
        </Link>
      </div>
    </div>
  );
};

export default MenuSection;