import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

const infoSectionVariants = cva(
  'grid grid-cols-1 gap-4 mb-8 md:mb-0',
  {
    variants: {
      position: {
        left: 'md:grid-cols-2 md:relative',
        right: 'md:grid-cols-2 md:relative md:mt-40',
      }
    }
  }
)

const imageVariants = cva(
  'relative w-full md:w-1/2 aspect-video md:h-[50vh]',
  {
    variants: {
      position: {
        left: 'md:col-span-2',
        right: 'md:col-span-2 md:ml-auto md:col-start-1',
      }
    }
  }
)

const contentVariants = cva(
  "bg-white bg-opacity-80 w-full aspect-video flex md:w-2/5 flex-col md:h-[calc(60vh-10rem)] border border-gray-300 p-4 shadow-md",
  {
    variants: {
      position: {
        left: "md:absolute md:top-16 md:left-[calc(50%-50px)]",
        right: "md:absolute md:top-16 md:right-[calc(50%-50px)]",
      },
    },
  }
);

interface InfoSectionProps extends VariantProps<typeof infoSectionVariants> {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  bgColor: string;
  position: 'left' | 'right';
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageUrl,
  imageAlt,
  position,
  title,
  description,
  linkHref,
  linkText,
  bgColor,
}) => (
  <div className={infoSectionVariants({ position })}>
    <div className={imageVariants({ position })}>
      <Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover" className="rounded-sm" />
    </div>
    <div className={contentVariants({ position })}>
      <div className={cn(bgColor, "pb-4 text-white rounded-b-[50%] relative -mx-4 -mt-4")}>
        <h1 className="text-3xl font-bold text-center p-6">{title}</h1>
        <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
      </div>
      <p className="text-sm text-center p-6">{description}</p>
      <div className="flex justify-center items-center mt-auto mb-4">
        <Link href={linkHref} className={cn(bgColor, "text-white px-10 text-center p-2")}>{linkText}</Link>
      </div>
    </div>
  </div>
);

export default function Test() {
  return (
    <div className="container mx-auto px-4">
      <InfoSection
        imageUrl="/top.jpg"
        imageAlt="test"
        position="left"
        title="胃カメラ検査（上部内視鏡）"
        description="当院の胃カメラ検査は、静脈麻酔を使用し楽に検査を受けていただくことができます。検査は全て内視鏡専門医が行っており安心して検査を受けていただけます。胃がんの原因となるピロリ菌検査にも対応しております。"
        linkHref="/"
        linkText="詳しくはこちら"
        bgColor="bg-green-900"
      />
      <InfoSection
        imageUrl="/top.jpg"
        imageAlt="another test"
        position="right"
        title="人間ドック"
        description="当院の人間ドックは、最新の医療機器を使用し、詳細な健康チェックを行います。経験豊富な医師による丁寧な診断と、分かりやすい結果説明を提供しています。早期発見・早期治療のために、定期的な健康診断をおすすめします。"
        linkHref="/human-dock"
        linkText="詳しくはこちら"
        bgColor="bg-blue-900"
      />
    </div>
  );
}