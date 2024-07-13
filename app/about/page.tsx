import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="text-3xl font-bold mb-6">当院について</h1>
      <p className="mb-4">
        大濠パーククリニックは、患者様の健康と幸せを第一に考える医療機関です。
        最新の医療技術と、経験豊富な医師陣が、皆様の健康をサポートいたします。
      </p>
      <h2 className="text-2xl font-semibold mb-4">診療理念</h2>
      <ul className="list-disc list-inside mb-4">
        <li>患者様中心の医療</li>
        <li>最新の医療技術の提供</li>
        <li>地域医療への貢献</li>
      </ul>
      {/* 他の内容を追加 */}
    </div>
  );
}