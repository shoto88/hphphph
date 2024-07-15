// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { MenuItem } from '@/types';
// interface MainNavProps {
//   items: MenuItem[];
// }
// const Footer: React.FC<MainNavProps> = ({ items }) => (
//   <footer className="bg-orange-300 text-white py-16">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col items-center mb-8">
//         <Image src="/logo-white.svg" alt="大濠パーククリニック" width={64} height={64} className="mb-4" />
//         <h3 className="text-2xl font-bold mb-2">大濠パーククリニック</h3>
//         <p>福岡県福岡市中央区大濠公園2-35 THE APARTMENT2B</p>
//       </div>
//       <nav className="mb-8">
//         <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
//           {items.map((item) => (
//             <li key={item.href}>
//               <Link href={item.href} className="hover:underline">
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <hr className="border-t border-white opacity-30 mb-8" />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div>
//           <h4 className="text-xl font-bold mb-4">診療科目</h4>
//           <ul className="space-y-2">
//             {['内科', '婦人科', '美容皮膚科', '漢方内科'].map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-xl font-bold mb-4">診療時間</h4>
//           <p>月曜日〜金曜日: 10:00 - 18:30</p>
//           <p>土曜日: 10:00 - 14:30</p>
//           <p>日曜日: 休診</p>
//         </div>
//         <div>
//           <h4 className="text-xl font-bold mb-4">アクセス</h4>
//           <p>地下鉄: 大濠公園駅から徒歩5分</p>
//           <p>西鉄バス: 大濠公園バス停から徒歩3分</p>
//         </div>
//         <div>
//           <h4 className="text-xl font-bold mb-4">お問い合わせ</h4>
//           <p>電話: 092-XXX-XXXX</p>
//           <p>メール: info@ohorikoen-clinic.com</p>
//         </div>
//       </div>
//       <div className="mt-8 text-center">
//         <p>&copy; 2024 大濠パーククリニック. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/types';

interface FooterProps {
  items: MenuItem[];
}

const Footer: React.FC<FooterProps> = ({ items }) => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo-white.svg" alt="大濠パーククリニック" width={80} height={80} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">大濠パーククリニック</h3>
          <p className="text-sm text-gray-300 text-center md:text-left">
            福岡県福岡市中央区大濠公園2-35 THE APARTMENT2B
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">診療科目</h4>
          <ul className="space-y-2 text-sm">
            {['内科', '婦人科', '美容皮膚科', '漢方内科'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">診療時間</h4>
          <p className="text-sm mb-2">月曜日〜金曜日: 10:00 - 18:30</p>
          <p className="text-sm mb-2">土曜日: 10:00 - 14:30</p>
          <p className="text-sm">日曜日: 休診</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
          <p className="text-sm mb-2">電話: 092-XXX-XXXX</p>
          <p className="text-sm mb-2">メール: info@ohorikoen-clinic.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-blue-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-blue-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-gray-400">&copy; 2024 大濠パーククリニック. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;