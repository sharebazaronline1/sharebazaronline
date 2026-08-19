// src/components/BreadcrumbSchema.jsx
import React from 'react';
import SEO from './SEO';

/**
 * Generates Google BreadcrumbList JSON-LD Structured Data
 * @param {Array} items - Array of objects with { name, url }
 */
const BreadcrumbSchema = ({ items = [] }) => {
  const baseUrl = "https://sharebazaronline.com"; // Replace with your production domain

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return <SEO schema={schemaData} />;
};

export default BreadcrumbSchema;