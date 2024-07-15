// import React from 'react';
// import { Badge } from "@/components/ui/badge";
// import { NewInfoItem } from '@/types';
// import { Button } from '../ui/button';

// interface NewInfoProps {
//   items: NewInfoItem[]
// }

// const NewInformation: React.FC<NewInfoProps> = ({ items }) => (
//   <section className="py-16 bg-gray-50">
//     <div className="container mx-auto px-4 max-w-4xl">
//       <h2 className="text-3xl font-bold text-center mb-8">お知らせ</h2>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         {items.map((item, index) => (
//           <div key={index} className="flex items-center p-4 border-b last:border-b-0">
//             <div className="text-sm text-gray-500 w-24">{item.date}</div>
//             <Badge variant="secondary" className="bg-pink-100 text-pink-800 mx-4">
//               {item.type}
//             </Badge>
//             <div className="text-sm flex-grow">{item.content}</div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <Button variant="outline">MORE</Button>
//       </div>
//     </div>
//   </section>
// );

// export default NewInformation;

// import React from 'react';
// import { Badge } from "@/components/ui/badge";
// import { NewInfoConfig, NewInfoItem } from '@/types';
// interface NewInfoProps {
//   items: NewInfoItem[]
// }
// const NewInformation: React.FC<NewInfoProps> = ({ items }) => (
//   <section className="space-y-8 container mx-auto px-4 max-w-5xl p-4">
//     <h2 className="text-2xl font-bold text-center">新着情報</h2>
//     <div className="mt-4 bg-gray-200 p-4 rounded-md space-y-4">
//       {items.map((item, index) => (
//         <div key={index} className="flex items-center space-x-4">
//           <div className="text-sm text-gray-500">{item.date}</div>
//           <Badge variant="secondary" className="bg-pink-300">
//             {item.type}
//           </Badge>
//           <div className="text-sm">{item.content}</div>
//         </div>
//       ))}
//     </div>
//   </section>
// );
// export default NewInformation;


import React from 'react';
import Image from 'next/image';
import { NewInfoItem } from '@/types';
import { Button } from '../ui/button';

interface NewInfoProps {
  items: NewInfoItem[]
}

const NewInformation: React.FC<NewInfoProps> = ({ items }) => (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto p-6 border border-green-700 border-gray-300  max-w-6xl">
      <div className="flex mb-8 items-center justify-between">
        <p className="text-left text-gray-600">お知らせ</p>
        <Button className="bg-green-700 h-6 p-2 text-white hover:bg-green-800 transition-colors">
          一覧へ＞
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col divide-y divide-gray-300 border-t border-b border-gray-300">
          {items.map((item, index) => (
            <div key={index} className="flex flex-row gap-8 py-4">
              <p className="text-gray-600 mb-2">{item.date}</p>
              <p className="">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NewInformation;