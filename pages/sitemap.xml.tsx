import { GetServerSideProps } from 'next';

const SITE_URL = 'https://stelmaszyk.dev';
const LAST_MOD = '2026-05-27';

const alternates = [
  { hreflang: 'pl', href: `${SITE_URL}/` },
  { hreflang: 'en', href: `${SITE_URL}/en` },
  { hreflang: 'x-default', href: `${SITE_URL}/` },
];

const pages = [
  { route: '/', priority: '1.0' },
  { route: '/en', priority: '0.8' },
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((page) => {
    const loc = `${SITE_URL}${page.route}`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
${alternates
  .map(
    (alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`
  )
  .join('\n')}
  </url>`;
  })
  .join('\n')}
</urlset>
`;
}

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(generateSiteMap());
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
