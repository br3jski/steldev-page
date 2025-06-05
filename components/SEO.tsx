import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  schema?: object;
  noindex?: boolean;
}

const defaultMeta = {
  title: 'Bruno Stelmaszyk - Infrastructure Engineer & Full-Stack Developer',
  description: 'Professional infrastructure engineer and full-stack developer specializing in cloud platforms, automation, and modern web technologies. Expert in GCP, Terraform, React, and Linux administration.',
  image: '/og-image.jpg',
  url: 'https://brunos.dev', // Update with your actual domain
  siteName: 'Bruno Stelmaszyk - Cloudvance'
};

export default function SEO({
  title,
  description = defaultMeta.description,
  canonical,
  ogImage = defaultMeta.image,
  ogType = 'website',
  schema,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${defaultMeta.siteName}` : defaultMeta.title;
  const pageUrl = canonical ? `${defaultMeta.url}${canonical}` : defaultMeta.url;

  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bruno Stelmaszyk",
    "jobTitle": "Infrastructure Engineer & Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Cloudvance"
    },
    "url": defaultMeta.url,
    "sameAs": [
      // Add your social media profiles here
      // "https://linkedin.com/in/yourprofile",
      // "https://github.com/yourprofile"
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
      "Web Development"
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
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:image" content={`${defaultMeta.url}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${defaultMeta.url}${ogImage}`} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Bruno Stelmaszyk" />
      <meta name="keywords" content="Infrastructure Engineer, Full-Stack Developer, GCP, Google Cloud Platform, Terraform, React, TypeScript, Linux Administration, DevOps, CI/CD, Web Development, Cloud Architecture, Automation" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
} 