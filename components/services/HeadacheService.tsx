import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StructuredData from '@/components/StructuredData';

export default function HeadacheService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": "頭痛専門外来",
    "description": "大濠パーククリニックの頭痛専門外来では、最新の診断技術と治療法を用いて、患者様一人一人に適したケアを提供しています。",
    "medicalSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "頭痛内科"
    },
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "頭痛の診断",
        "description": "詳細な問診と適切な検査による正確な診断"
      },
      {
        "@type": "MedicalTherapy",
        "name": "薬物療法",
        "description": "予防薬と頓用薬の適切な使用"
      },
      {
        "@type": "MedicalTherapy",
        "name": "生活習慣改善指導",
        "description": "頭痛を軽減するための生活習慣の改善指導"
      }
    ]
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">頭痛専門外来</h1>
        
        <section aria-labelledby="overview">
          <h2 id="overview" className="sr-only">概要</h2>
          <Card className="mb-8">
            <CardContent>
              <p className="text-lg">
                当院の頭痛専門外来では、最新の診断技術と治療法を用いて、
                患者様一人一人に<strong className="text-red-500">適したケア</strong>を提供しています。
                片頭痛、緊張型頭痛、群発頭痛など、様々な種類の頭痛に対応し、
                的確な診断と効果的な治療を行います。
              </p>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="clinic-image" className="mb-8">
          <h2 id="clinic-image" className="sr-only">診療所の様子</h2>
          <div className="relative h-64">
            <Image
              src="/images/headache-clinic.jpg"
              alt="頭痛専門外来の診察室。最新の医療機器と快適な環境が整っています。"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section aria-labelledby="headache-types">
          <h2 id="headache-types" className="text-2xl font-semibold mb-4 text-green-600">頭痛の主な種類</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>種類</TableHead>
                <TableHead>特徴</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>片頭痛</TableCell>
                <TableCell>拍動性の痛み、吐き気、光過敏を伴うことが多い。日常生活に支障をきたすことも。</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>緊張型頭痛</TableCell>
                <TableCell>頭を締め付けられるような痛み、首や肩のこりを伴う。ストレスや姿勢が原因になることも。</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>群発頭痛</TableCell>
                <TableCell>激しい痛みが片側に起こり、短時間で繰り返す。「自殺頭痛」とも呼ばれる重度の痛み。</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section aria-labelledby="treatment-approach">
          <h2 id="treatment-approach" className="text-2xl font-semibold mb-4 mt-8 text-purple-600">当院の治療アプローチ</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>詳細な問診と適切な検査による正確な診断：やCTスキャンなどの最新機器を使用</li>
            <li>薬物療法（予防薬と頓用薬の適切な使用）：個々の患者様の症状に合わせた処方</li>
            <li>生活習慣の改善指導：食事、睡眠、運動などの指導を通じて頭痛の予防をサポート</li>
            <li>ストレス管理技術の指導：リラクゼーション法や認知行動療法の導入</li>
            <li>必要に応じた他科との連携治療：精神科や整形外科など、関連する科と密接に連携</li>
          </ul>
        </section>

        <section aria-labelledby="contact" className="mt-8">
          <h2 id="contact" className="text-2xl font-semibold mb-4 text-blue-600">お問い合わせ</h2>
          <p>
            頭痛でお悩みの方は、お気軽に当院の頭痛専門外来にご相談ください。
            予約や詳細な情報については、<a href="tel:0927075345" className="text-blue-500 hover:underline">092-707-5345</a>までお電話いただくか、
            <a href="/contact" className="text-blue-500 hover:underline">お問い合わせフォーム</a>をご利用ください。
          </p>
        </section>
      </article>
    </>
  );
}