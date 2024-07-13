import React from 'react';

const MainContent: React.FC = () => (
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

export default MainContent;