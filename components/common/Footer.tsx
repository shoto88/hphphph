import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-[#FFD1DC] text-white py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-8">
        <Image src="/logo-white.svg" alt="大濠パーククリニック" width={64} height={64} className="mb-4" />
        <h3 className="text-2xl font-bold mb-2">大濠パーククリニック</h3>
        <p>福岡県福岡市中央区大濠公園2-35 THE APARTMENT2B</p>
      </div>
      <nav className="mb-8">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          {['当院について', '診療内容', '診療時間', 'アクセス', 'お知らせ', 'よくある質問', 'プライバシーポリシー'].map((item) => (
            <li key={item}>
              <Link href="#" className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="border-t border-white opacity-30 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">診療科目</h4>
          <ul className="space-y-2">
            {['内科', '婦人科', '美容皮膚科', '漢方内科'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">診療時間</h4>
          <p>月曜日〜金曜日: 10:00 - 18:30</p>
          <p>土曜日: 10:00 - 14:30</p>
          <p>日曜日: 休診</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">アクセス</h4>
          <p>地下鉄: 大濠公園駅から徒歩5分</p>
          <p>西鉄バス: 大濠公園バス停から徒歩3分</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">お問い合わせ</h4>
          <p>電話: 092-XXX-XXXX</p>
          <p>メール: info@ohorikoen-clinic.com</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 大濠パーククリニック. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;