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
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-4">NEWS&COLUMN</h2>
      <p className="text-center mb-8 text-gray-600">当クリニックからのお知らせ</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src={item.imagePath}
                alt={item.content}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-400 text-white px-3 py-1">
                {item.type}
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-2">{item.date}</p>
              <p className="text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button className="bg-blue-400 text-white hover:bg-blue-500 transition-colors">
          お知らせ&コラム一覧へ →
        </Button>
      </div>
    </div>
  </section>
);

export default NewInformation;