import Image from "next/image";
import Link from "next/link";

export default function Test() {
    return (
        <div className="relative">
          <div className="w-1/2 h-[400px] relative">
            <Image 
              src="/top.jpg" 
              alt="test" 
              layout="fill" 
              objectFit="cover"
              className="rounded-sm"
            />
            <div className="absolute top-16 left-[calc(100%-50px)] h-[400px] w-[500px] bg-white bg-opacity-80 flex flex-col border border-gray-300 p-4 shadow-md">
          <div className="bg-green-900 pb-4 text-white rounded-b-[50%] relative -mx-4 -mt-4">
    <h1 className="text-3xl font-bold text-center p-6">胃カメラ検査（上部内視鏡）</h1>
    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
  </div>
  <p className="text-sm text-center p-6">
    当院の胃カメラ検査は、静脈麻酔を使用し楽に検査を受けていただくことができます。<br/>
    検査は全て内視鏡専門医が行っており安心して検査を受けていただけます。<br/>
    胃がんの原因となるピロリ菌検査にも対応しております。
  </p>
  <div className="flex justify-center items-center mt-10">
    <Link href="/" className="bg-green-900 text-white px-10 text-center p-2 ">詳しくはこちら</Link>
  </div>
  </div>
  </div>
        <div className="relative mt-40 mb-20">
        <div className="w-1/2 h-[400px] relative ml-auto">
            <Image 
              src="/top.jpg" 
              alt="another test" 
              layout="fill" 
              objectFit="cover"
              className="rounded-sm"
            />
            <div className="absolute top-16 right-[calc(100%-50px)] h-[400px] w-[500px] bg-white bg-opacity-80 flex flex-col border border-gray-300 p-4 shadow-md">
          <div className="bg-blue-900 pb-4 text-white rounded-b-[50%] relative -mx-4 -mt-4">
            <h1 className="text-3xl font-bold text-center p-6">人間ドック</h1>
            <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
          </div>
          <p className="text-sm text-center p-6">
            当院の人間ドックは、最新の医療機器を使用し、詳細な健康チェックを行います。<br/>
            経験豊富な医師による丁寧な診断と、分かりやすい結果説明を提供しています。<br/>
            早期発見・早期治療のために、定期的な健康診断をおすすめします。
          </p>
          <div className="flex justify-center items-center mt-10">
            <Link href="/human-dock" className="bg-blue-900 text-white px-10 text-center p-2 ">詳しくはこちら</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
      );
    }

