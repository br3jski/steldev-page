import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  schema?: object;
  noindex?: boolean;
  locale?: 'pl' | 'en';
}

const defaultMeta = {
  title: 'Bruno Stelmaszyk - IT, Cloud & Websites',
  description: 'IT, cloud, websites, automation and technical support for small businesses by Bruno Stelmaszyk / Cloudvance.',
  image: '/radarview.jpg',
  url: 'https://stelmaszyk.dev',
  siteName: 'Bruno Stelmaszyk / Cloudvance'
};

export default function SEO({
  title,
  description = defaultMeta.description,
  canonical,
  ogImage = defaultMeta.image,
  ogType = 'website',
  schema,
  noindex = false,
  locale = 'pl',
}: SEOProps) {
  const pageTitle = title || defaultMeta.title;
  const pageUrl = canonical ? `${defaultMeta.url}${canonical}` : defaultMeta.url;
  const ogLocale = locale === 'pl' ? 'pl_PL' : 'en_US';
  const alternateLocale = locale === 'pl' ? 'en_US' : 'pl_PL';
  const languageAlternates = [
    { hrefLang: 'pl', href: `${defaultMeta.url}/` },
    { hrefLang: 'en', href: `${defaultMeta.url}/en` },
    { hrefLang: 'x-default', href: `${defaultMeta.url}/` },
  ];

  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bruno Stelmaszyk",
    "jobTitle": "Cloud Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Cloudvance"
    },
    "url": defaultMeta.url,
    "sameAs": [
      "https://www.linkedin.com/in/bruno-stelmaszyk/"
    ],
    "knowsAbout": [
      "Google Cloud Platform",
      "Terraform",
      "Infrastructure as Code",
      "React",
      "TypeScript",
      "Linux Administration",
      "DevOps",
      "CI/CD",
      "Web Development",
      "Small Business IT"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "EU"
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={pageUrl} />}
      {languageAlternates.map((alternate) => (
        <link
          key={alternate.hrefLang}
          rel="alternate"
          hrefLang={alternate.hrefLang}
          href={alternate.href}
        />
      ))}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:image" content={`${defaultMeta.url}${ogImage}`} />
      <meta property="og:image:width" content="1977" />
      <meta property="og:image:height" content="1471" />
      <meta property="og:image:alt" content={pageTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${defaultMeta.url}${ogImage}`} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Bruno Stelmaszyk" />
      <meta name="keywords" content="Bruno Stelmaszyk, Cloudvance, IT dla małych firm, Google Cloud Platform, Terraform, strony internetowe, automatyzacja, DevOps, Linux, cloud engineer" />
      
      {/* App Metadata */}
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#070907" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
