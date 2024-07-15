import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneIcon, CalendarIcon, MapPinIcon, TrainIcon, BusIcon } from 'lucide-react';

const ReservationAndAccess: React.FC = () => (
  <section className="bg-[#f9f7f2] py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-serif mb-2">Reservation</h2>
          <p className="text-xl mb-6">ご予約について</p>
          <p className="mb-4 leading-10">
            外来診察・・・・・・ラインから順番予約を取ることが可能です。<br />
            美容診療・・・・・・ラインから24時間予約が可能です。<br />
            健康診断・・・・・・電話もしくは当院公式ラインアカウントへ予約のご連絡をお願いします。
          </p>
          <div className="flex items-center mb-4">
            <PhoneIcon className="mr-2 text-brown-600" />
            <span className="text-2xl font-bold text-brown-600">045-901-2232</span>
          </div>
          <Button className="w-1/4 mb-4 bg-green-500 hover:bg-green-600 text-white">
            <CalendarIcon className="mr-2" />
            LINEから予約
          </Button>
          <a href="#" className="text-blue-500 hover:underline flex items-center">
            初めて診療を受ける方へ
            <span className="ml-2">→</span>
          </a>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-4">診療時間</h3>
          <table className="w-full mb-6">
            <thead>
              <tr>
                <th className="px-2 py-1"></th>
                <th className="px-2 py-1">月</th>
                <th className="px-2 py-1">火</th>
                <th className="px-2 py-1">水</th>
                <th className="px-2 py-1">木</th>
                <th className="px-2 py-1">金</th>
                <th className="px-2 py-1">土</th>
                <th className="px-2 py-1">日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-1">10:00 - 13:00</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">/</td>
              </tr>
              <tr>
                <td className="px-2 py-1">14:00 - 19:00</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">●</td>
                <td className="px-2 py-1 text-center">/</td>
                <td className="px-2 py-1 text-center">/</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mb-4">● ... 診療/休診日 ... 日曜(月２回日曜も診療しております)、祝日</p>
          <p className="text-sm mb-4">※午後の最終受付時間は18:30となります。</p>
          <div className="mb-4">
            <p className="font-bold mb-2">大濠パーククリニック</p>
            <p>福岡県福岡市中央区大濠公園2-35 THE APARTMENT2B</p>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <TrainIcon className="mr-2" />
              <span>地下鉄：大濠公園駅から徒歩5分</span>
            </div>
            <div className="flex items-center">
              <BusIcon className="mr-2" />
              <span>西鉄バス：大濠公園バス停から徒歩3分</span>
            </div>
          </div>
          <Button className="bg-brown-600 hover:bg-brown-700 text-white">
            <MapPinIcon className="mr-2" />
            Google マップで見る
          </Button>
          <a href="#" className="text-blue-500 hover:underline flex items-center mt-4">
            アクセス
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ReservationAndAccess;