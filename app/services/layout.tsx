import React from 'react';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="services-layout">
      <h1 className="text-3xl font-bold mb-6">診療サービス</h1>
      {children}
    </div>
  );
}