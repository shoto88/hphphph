import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold my-4 text-primary">{children}</h2>
);

export const Callout: React.FC<{ children: React.ReactNode; type: 'info' | 'warning' }> = ({ children, type }) => (
  <div className={`p-4 my-4 border-l-4 ${type === 'info' ? 'bg-blue-100 border-blue-500' : 'bg-yellow-100 border-yellow-500'}`}>
    {children}
  </div>
);

export const SymptomList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc list-inside my-4 space-y-2">
    {children}
  </ul>
);

export const TreatmentMethod: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-4 p-4 bg-gray-100 rounded">
    <h3 className="font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

export const ImageWithCaption: React.FC<{ src: string; alt: string; caption: string }> = ({ src, alt, caption }) => (
  <figure className="my-4">
    <img src={src} alt={alt} className="w-full rounded" />
    <figcaption className="text-center text-sm text-gray-600 mt-2">{caption}</figcaption>
  </figure>
);