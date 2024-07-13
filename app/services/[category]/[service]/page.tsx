import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { servicesConfig } from '@/config/services';
import { SectionTitle } from '@/components/mdx-components';

interface ServicePageProps {
  params: {
    category: string;
    service: string;
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { category, service } = params;
  const categoryConfig = servicesConfig.find(c => c.slug === category);
  const serviceConfig = categoryConfig?.services.find(s => s.slug === service);

  if (!serviceConfig) {
    return <div>サービスが見つかりません</div>;
  }

  let content;
  try {
    const filePath = path.join(process.cwd(), 'content', 'services', `${service}.md`);
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return <div>コンテンツの読み込みに失敗しました</div>;
  }

  return (
    <div className="service-page">
      <h1 className="text-3xl font-bold mb-6">{serviceConfig.name}</h1>
      <MDXRemote 
        source={content} 
        components={{
          SectionTitle,
          Callout,
          SymptomList,
          TreatmentMethod,
          ImageWithCaption
        }} 
      />
    </div>
  );
}