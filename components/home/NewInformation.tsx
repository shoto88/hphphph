import React from 'react';
import { Badge } from "@/components/ui/badge";
import { newInfoConfig } from '@/config/newinfo';

const NewInformation: React.FC = () => (
  <section className="space-y-8 p-4">
    <h2 className="text-2xl font-bold text-center">新着情報</h2>
    <div className="mt-4 bg-gray-200 p-4 rounded-md space-y-4">
      {newInfoConfig.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">{item.date}</div>
          <Badge variant="secondary" className="bg-pink-300">
            {item.type}
          </Badge>
          <div className="text-sm">{item.content}</div>
        </div>
      ))}
    </div>
  </section>
);

export default NewInformation;