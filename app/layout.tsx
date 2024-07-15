import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { navConfig } from '@/config/nav';
import FixedContactButtons from "@/components/home/FixedContactButtons";
// import MainNav from "@/components/common/MainNav";

// const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
const fontRoboto = Roboto({ subsets: ["latin"], weight: ["400"] });
export const metadata: Metadata = {
  title: "大濠パーククリニック",
  description: "福岡市中央区の総合クリニック",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          fontRoboto.className
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Header items={navConfig.mainNav}/>
          {/* <MainNav items={navConfig.mainNav} /> */}
          <main className="flex-grow">{children}</main>
        
          <Footer items={navConfig.mainNav} />
        </div>
      </body>
    </html>
  );
}