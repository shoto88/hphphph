// import React from 'react';

// const MainContent: React.FC = () => (
//   <section className="p-8">
//     <div className="flex justify-center items-center h-64">
//       <div className="w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center text-center p-4">
//         WEB問診票 事前に記入頂くことでことで、スムーズに診察にご案内できます
//       </div>
//     </div>
//     <div className="text-center mt-8">
//       <div className="w-24 h-24 bg-orange-400 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
//         About
//       </div>
//       <h2 className="text-xl font-bold mt-4">当院について</h2>
//       <p className="mt-4">
//         長年頭痛でお悩みの方、その原因から治療、生活指導まで、皆様が満足して頂ける診療をいたします。<br />
//         また、頭痛に隠れたフィジカル・メンタルの問題を小児、妊婦から授乳中まで、さら妊婦女性特有の病気、<br />
//         お肌の悩みまで幅広く専門的に対応いたします。<br />
//         また、当院では最新の医療機器（マルチスライス16列CT、キャンデラ社製レーザー機器等）を導入して
//         おります。<br />待合室ではTV、無料ドリンクサーバー、各種雑誌を利用いただけます。<br />
//         付属のバルコニーから大濠公園が一望できる環境下で、リラックスし診察が受けられます。
//       </p>
//     </div>
//   </section>
// );

// export default MainContent;

import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText, Info } from 'lucide-react';
import Link from 'next/link';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const sidebarLinkVariants = cva(
  "text-white w-60 h-20 gap-2 flex flex-col items-center justify-start px-4 py-3",
  {
    variants: {
      variant: {
        phone: "bg-gray-800/90",
        line: "bg-green-500/90",
        webConsultation: "bg-blue-500/90",
        firstVisit: "bg-orange-500/90",
      },
    },
    defaultVariants: {
      variant: "phone",
    },
  }
)

interface SidebarLinkProps extends React.ComponentPropsWithoutRef<typeof Link> , VariantProps<typeof sidebarLinkVariants> {
  icon: React.ReactNode;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({className, variant, icon, label, ...props}) => (
  <Link className={cn(sidebarLinkVariants({variant, className}))} {...props}>
    {icon}
    <span>{label}</span>
  </Link>
);

const MainVisualWithSidebar: React.FC = () => {
  return (
    <div className="relative">
      {/* メインビジュアル */}
      <div className="w-full h-full object-cover relative">
        <Image
          src="/top.jpg"
          alt="クリニックの内部"
          className="w-full h-[700px] object-cover"
          width={1920}
          height={1080}
        />
        {/* テキストオーバーレイ */}
        <div className="absolute top-3/4 left-8 max-w-lg text-white">
          <h1 className="text-3xl font-bold mb-4">
            大濠公園徒歩2分の
            <br />
            大濠パーククリニック
          </h1>
          <p className="text-lg">
            長年頭痛でお悩みの方、その原因から治療、生活指導まで、皆様が満足して頂ける診療をいたします。<br />
            また、頭痛に隠れたフィジカル・メンタルの問題を小児、妊婦から授乳中まで、さら妊婦女性特有の病気、<br />
            お肌の悩みまで幅広く専門的に対応いたします。<br />
          </p>
        </div>
      </div>

      {/* 固定サイドバー */}
      <div className="fixed flex bottom-0 left-1/2 transform -translate-x-1/2 flex-row space-x-0 z-50">
        <SidebarLink href="tel:045-901-2232" variant="phone" icon={<Phone className="w-5 h-5 mr-2" />} label="045-901-2232" />
        <SidebarLink href="https://line.me/RxqvKjq" variant="line" icon={<MessageCircle className="w-5 h-5 mr-2" />} label="LINE公式" />
        <SidebarLink href="/web-consultation" variant="webConsultation" icon={<FileText className="w-5 h-5 mr-2" />} label="WEB問診票" />
        <SidebarLink href="/first-visit" variant="firstVisit" icon={<Info className="w-5 h-5 mr-2" />} label="初診の方へ" />
      </div>

    </div>
  );
};

export default MainVisualWithSidebar;