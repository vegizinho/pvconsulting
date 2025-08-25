import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "PV Consulting d.o.o. - Građevinski inženjering i javna nabava", 
  description = "PV Consulting d.o.o. iz Siska pruža stručne usluge građevinskog inženjeringa, javne nabave, projektiranja, zaštite na radu i knjigovodstva. Osnovano 2025. godine.",
  keywords = "građevinski inženjering, javna nabava, projektiranje, zaštita na radu, knjigovodstvo, Sisak, Hrvatska",
  canonical,
  ogImage = "/og-image.jpg",
  jsonLd
}) => {
  const baseUrl = "https://pvconsulting.hr";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : `${baseUrl}/`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PV Consulting d.o.o.",
    "description": "Poduzeće za građevinski inženjering i javnu nabavu",
    "url": "https://pvconsulting.hr",
    "logo": "https://pvconsulting.hr/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ulica Hrvatske bratske zajednice 1",
      "addressLocality": "Sisak",
      "postalCode": "44000",
      "addressCountry": "HR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+385-44-123-456",
      "contactType": "customer service",
      "email": "info@pvconsulting.hr"
    },
    "foundingDate": "2025-02",
    "sameAs": []
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:locale" content="hr_HR" />
      <meta property="og:site_name" content="PV Consulting d.o.o." />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="PV Consulting d.o.o." />
      <meta name="language" content="Croatian" />
      <meta name="geo.region" content="HR-03" />
      <meta name="geo.placename" content="Sisak" />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
      
      {/* Google Analytics Placeholder */}
      {process.env.REACT_APP_GA_MEASUREMENT_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`}></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.REACT_APP_GA_MEASUREMENT_ID}');
            `}
          </script>
        </>
      )}
    </Helmet>
  );
};

export default SEO;