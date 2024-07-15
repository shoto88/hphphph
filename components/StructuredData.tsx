import React from 'react';
import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
  <Script id="structured-data" type="application/ld+json">
    {JSON.stringify(data)}
  </Script>
);

export default StructuredData;