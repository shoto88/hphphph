import { servicesConfig } from '@/config/services';
import React from 'react';

export default function ServicePage({ params }: { params: { category: string; service: string } }) {
  const category = servicesConfig.find(c => c.slug === params.category);
  const service = category?.services.find(s => s.slug === params.service);

  if (!service) {
    return <div>サービスが見つかりません</div>;
  }

  return (
    <div className="service-page">
      <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
      <p className="mb-4">{service.description}</p>
      {service.content && (
        <div dangerouslySetInnerHTML={{ __html: service.content }} />
      )}
    </div>
  );
}