import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function HeadacheService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">頭痛専門外来</h1>
      
      <Card className="mb-8">
        <CardContent>
          <p className="text-lg">
            当院の頭痛専門外来では、最新の診断技術と治療法を用いて、
            患者様一人一人に<span className="text-red-500 font-semibold">適したケア</span>を提供しています。
          </p>
        </CardContent>
      </Card>

      <div className="mb-8 relative h-64">
        <Image
          src="/images/headache-clinic.jpg"
          alt="頭痛専門外来の様子"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">頭痛の主な種類</h2>
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
              <TableCell>拍動性の痛み、吐き気、光過敏を伴うことが多い</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>緊張型頭痛</TableCell>
              <TableCell>頭を締め付けられるような痛み、首や肩のこりを伴う</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>群発頭痛</TableCell>
              <TableCell>激しい痛みが片側に起こり、短時間で繰り返す</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">当院の治療アプローチ</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>詳細な問診と適切な検査による正確な診断</li>
          <li>薬物療法（予防薬と頓用薬の適切な使用）</li>
          <li>生活習慣の改善指導</li>
          <li>ストレス管理技術の指導</li>
          <li>必要に応じた他科との連携治療</li>
        </ul>
      </div>
    </div>
  );
}