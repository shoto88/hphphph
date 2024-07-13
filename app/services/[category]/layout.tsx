import React from 'react';
import { servicesConfig } from '@/config/services';

export default function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const category = servicesConfig.find(c => c.slug === params.category);

  if (!category) {
    return <div>カテゴリーが見つかりません</div>;
  }

  return (
    <div className="category-layout">
      <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
      {children}
    </div>
  );
}