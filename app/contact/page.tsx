import React from 'react';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <p className="mb-4">
        ご質問やご相談がございましたら、以下の連絡先までお気軽にお問い合わせください。
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">電話でのお問い合わせ</h2>
        <p>TEL: 092-XXX-XXXX</p>
        <p>受付時間: 平日 9:00〜18:00</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">メールでのお問い合わせ</h2>
        <p>Email: info@ohorikoen-clinic.com</p>
      </div>
      {/* 問い合わせフォームなどを追加することも可能 */}
    </div>
  );
}