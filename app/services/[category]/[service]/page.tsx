import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesConfig } from '@/config/services';
import dynamic from 'next/dynamic';

interface ServicePageProps {
  params: {
    category: string;
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { category, service } = params;
  const categoryConfig = servicesConfig.find(c => c.slug === category);
  const serviceConfig = categoryConfig?.services.find(s => s.slug === service);
  
  if (!serviceConfig) return {};
  
  return {
    title: `${serviceConfig.name} | 大濠パーククリニック`,
    description: serviceConfig.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { category, service } = params;
  const categoryConfig = servicesConfig.find(c => c.slug === category);
  const serviceConfig = categoryConfig?.services.find(s => s.slug === service);

  if (!serviceConfig) {
    notFound();
  }

  const ServiceComponent = dynamic(
    () => import(`@/components/services/${serviceConfig.slug.charAt(0).toUpperCase() + serviceConfig.slug.slice(1)}Service`),
    {
      loading: () => <p>Loading...</p>,
      ssr: true,
    }
  );

  return <ServiceComponent />;
}