import React from 'react';

interface SEOSchemaProps {
  city?: string;
  type: 'Organization' | 'LocalBusiness' | 'Service';
}

const SEOSchema: React.FC<SEOSchemaProps> = ({ city, type }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Swift Airport Limousines",
    "url": "https://swiftairportlimousines.com",
    "logo": "https://swiftairportlimousines.com/images/logo.png",
    "telephone": "+16473895380",
    "email": "info@swiftairportlimousines.com",
    "description": "Premium airport limousine and luxury transportation services in Southern Ontario.",
    "areaServed": [
      "Greater Toronto Area",
      "Kitchener-Waterloo",
      "Cambridge",
      "Midland Region"
    ],
    "priceRange": "$$",
    "paymentAccepted": [
      "Credit Card",
      "Debit Card",
      "Cash"
    ],
    "openingHours": "Mo-Su 00:00-23:59"
  };

  const localBusinessSchema = {
    ...baseSchema,
    "@type": "LocalBusiness",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "ON"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    }
  };

  const serviceSchema = {
    ...baseSchema,
    "@type": "Service",
    "serviceType": "Limousine Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Swift Airport Limousines"
    }
  };

  const schema = type === 'LocalBusiness' ? localBusinessSchema : 
                 type === 'Service' ? serviceSchema : baseSchema;

  if (city) {
    schema.areaServed = city;
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SEOSchema;