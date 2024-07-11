import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navConfig } from '@/config/nav';
import MainNav from '@/components/ui/main-nav';

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <MainNav items={navConfig.mainNav} />
      <MainContent />
      <NewInformation />
      <MenuSection />
      <Access />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-red-500 rounded-full" />
      <div>
        <div className="font-bold">（医）清涼会</div>
        <div className="text-sm">大濠パーククリニック</div>
      </div>
    </div>
    <div className="flex space-x-2">
      <Button className="bg-green-500 text-white">Lineで予約</Button>
      <Button className="bg-red-500 text-white">お電話</Button>
      <Button className="bg-black text-white">Instagram</Button>
      <Button className="bg-black text-white">Facebook</Button>
      <Button className="bg-black text-white">YouTube</Button>
    </div>
  </header>
);



const MainContent = () => (
  <main className="p-8">
    <div className="flex justify-center items-center h-64">
      <div className="w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center text-center p-4">
        WEB問診票 事前に記入頂くことでことで、スムーズに診察にご案内できます
      </div>
    </div>
    <div className="text-center mt-8">
      <div className="w-24 h-24 bg-orange-400 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
        About
      </div>
      <h2 className="text-xl font-bold mt-4">当院について</h2>
      <p className="mt-4">
        長年頭痛でお悩みの方、その原因から治療、生活指導まで、皆様が満足して頂ける診療をいたします。
        また、頭痛に隠れたフィジカル・メンタルの問題を小児、妊婦から授乳中まで、さら妊婦女性特有の病気、
        お肌の悩みまで幅広く専門的に対応いたします。
        また、当院では最新の医療機器（マルチスライス16列CT、キャンデラ社製レーザー機器等）を導入して
        おります。待合室ではTV、無料ドリンクサーバー、各種雑誌を利用いただけます。
        付属のバルコニーから大濠公園が一望できる環境下で、リラックスし診察が受けられます。
      </p>
    </div>
  </main>
);

const NewInformation = () => (
  <section className="space-y-8 p-4">
    <h2 className="text-2xl font-bold text-center">新着情報</h2>
    <div className="mt-4 bg-gray-200 p-4 rounded-md space-y-4">
      {[
        { date: '2024.05.09', type: 'お知らせ', content: '5月からLINEで予約できるようになりました。診察を行う時間に合わせて来院し、スムーズに診察ができます。' },
        { date: '2024.05.09', type: '新着情報', content: '5月は脱毛がお得。' },
        { date: '2024.05.09', type: 'ブログ', content: 'アフターピルについて。' },
      ].map((item, index) => (
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

const MenuSection = () => (
  <section className="text-center space-y-8">
    <h2 className="text-3xl font-bold text-blue-500">MENU</h2>
    <div>
      <h3 className="text-xl font-bold mt-4">保険診療</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-blue-200 rounded-md">
        {['頭痛', '婦人科', '内科', '漢方内科', '交通事故リハビリ科', '睡眠時無呼吸症候群(SAS) CPAP療法', 'ざ瘡（ニキビ）', '禁煙'].map((item) => (
          <Button key={item} variant="outline" className="rounded-full">
            {item}
          </Button>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mt-4">自由診療</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-blue-200 rounded-md">
        {['美容皮膚科', '人間ドック健康診断', '薄毛・男・女', '肥満（ダイエット）', '点滴 注射', 'ED'].map((item) => (
          <Button key={item} variant="outline" className="rounded-full">
            {item}
          </Button>
        ))}
      </div>
    </div>
  </section>
);

const Access = () => (
  <section id="access" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-[#FFD1DC] mb-12">アクセス</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-bold mb-4">大濠パーククリニック</h3>
          <p className="flex items-center mb-4">
            <MapPin className="mr-2 text-[#FFD1DC]" />
            福岡県福岡市中央区大濠公園2-35 THE APARTMENT2B
          </p>
          <div className="space-y-2 mb-4">
            <Badge variant="secondary" className="bg-[#FFD1DC] text-white mr-2">
              地下鉄
            </Badge>
            <span>大濠公園駅から徒歩5分</span>
          </div>
          <div className="space-y-2 mb-4">
            <Badge variant="secondary" className="bg-[#FFD1DC] text-white mr-2">
              西鉄バス
            </Badge>
            <span>大濠公園バス停から徒歩3分</span>
          </div>
          <Button className="bg-[#FFD1DC] text-white hover:bg-[#FFA5B5]">
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

const Footer = () => (
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

export default HomePage;