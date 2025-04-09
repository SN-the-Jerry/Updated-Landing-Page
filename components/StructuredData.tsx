import React from 'react'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'FAQPage' | 'Service'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {};

  switch (type) {
    case 'Organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name,
        url: data.url,
        logo: data.logo,
        sameAs: data.sameAs,
        contactPoint: data.contactPoint
      };
      break;
    case 'WebSite':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name,
        url: data.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${data.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;
    case 'FAQPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        }))
      };
      break;
    case 'Service':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: data.providerName,
          url: data.providerUrl
        },
        serviceType: data.serviceType,
        areaServed: data.areaServed
      };
      break;
    default:
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}