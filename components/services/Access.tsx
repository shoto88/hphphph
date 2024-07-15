import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Access: React.FC = () => (
  <section id="access" className="py-20 container mx-auto px-4 max-w-5xl bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">アクセス</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-bold mb-4">大濠パーククリニック</h3>
          <p className="flex items-center mb-4">
            <MapPin className="mr-2 text-orange-500" />
            福岡県福岡市中央区大濠公園2-35 THE APARTMENT2B
          </p>
          <div className="space-y-2 mb-4">
            <Badge variant="secondary" className="bg-orange-500 text-white mr-2">
              地下鉄
            </Badge>
            <span>大濠公園駅から徒歩5分</span>
          </div>
          <div className="space-y-2 mb-4">
            <Badge variant="secondary" className="bg-orange-500 text-white mr-2">
              西鉄バス
            </Badge>
            <span>大濠公園バス停から徒歩3分</span>
          </div>
          <Button className="bg-orange-500 text-white hover:bg-orange-400">
            Google マップで見る
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image src="/map.jpg" alt="クリニックの地図" width={500} height={300} layout="responsive" className="rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default Access;