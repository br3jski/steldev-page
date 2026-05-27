import Layout from './Layout';
import SEO from './SEO';
import type { ReactNode } from 'react';

type Locale = 'pl' | 'en';

interface WorkItem {
  title: string;
  description: string;
  image?: string;
  href?: string;
  tags: string[];
}

interface SiteCopy {
  locale: Locale;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  heroCommand: string;
  heroTitle: string;
  heroLead: string;
  status: string[];
  primaryCta: string;
  secondaryCta: string;
  aboutTitle: string;
  aboutBody: string[];
  servicesTitle: string;
  servicesLead: string;
  services: Array<{ title: string; description: string; code: string }>;
  companyTitle: string;
  companyLead: string;
  companyPoints: Array<{ label: string; value: string }>;
  projectsTitle: string;
  projectsLead: string;
  projects: WorkItem[];
  commercialTitle: string;
  commercialLead: string;
  commercial: WorkItem[];
  processTitle: string;
  processLead: string;
  process: Array<{ title: string; description: string }>;
  contactTitle: string;
  contactLead: string;
  emailLabel: string;
  phoneLabel: string;
  footer: string;
}

const content: Record<Locale, SiteCopy> = {
  pl: {
    locale: 'pl',
    seoTitle: 'Bruno Stelmaszyk - IT, chmura i strony dla małych firm',
    seoDescription:
      'Osobista strona Bruno Stelmaszyka i Cloudvance: IT dla małych firm, chmura, bezpieczeństwo, strony internetowe, automatyzacja i poprawki po innych.',
    canonical: '/',
    heroCommand: './start_session.sh --profile cloudvance',
    heroTitle: 'Ogarniam IT, chmurę i strony dla małych firm.',
    heroLead:
      'Ty prowadzisz biznes. Ja pilnuję, żeby sprzęt, poczta, chmura i WWW działały bez dramatu.',
    status: ['status: online', 'scope: personal + company', 'mode: bez sklepu, bez wciskania pakietów'],
    primaryCta: 'Skontaktuj się',
    secondaryCta: 'Zobacz portfolio',
    aboutTitle: 'O mnie',
    aboutBody: [
      'Działam jako niezależny kontraktor IT. W ramach Cloudvance realizuję projekty z obszaru Google Cloud Platform, Terraform i automatyzacji infrastruktury.',
      'Poza większymi kontraktami biorę też mniejsze, konkretne zlecenia dla firm, które potrzebują działającego IT, strony internetowej albo ratunku po poprzednich wykonawcach.',
      'Pracuję projektowo: ustalam zakres, dowożę rezultat i zostawiam po sobie rozwiązanie, które da się utrzymać. Bez dokładania systemów tylko po to, żeby było bardziej skomplikowanie.',
    ],
    servicesTitle: 'Co robię',
    servicesLead:
      'To nie jest sklep z pakietami. To zestaw obszarów, w których mogę realnie pomóc, po krótkiej rozmowie i sensownej wycenie.',
    services: [
      {
        code: '01',
        title: 'Cloud, bezpieczeństwo i dostęp',
        description:
          'Konfiguruję GCP, konta, uprawnienia, pocztę, DNS, podstawowe polityki bezpieczeństwa i porządek w dostępie do usług.',
      },
      {
        code: '02',
        title: 'Strony internetowe',
        description:
          'Buduję szybkie strony i landing page na czystym kodzie. Bez ciężkich kreatorów, gdy wystarczy lekka, stabilna strona.',
      },
      {
        code: '03',
        title: 'Poprawki i modernizacje',
        description:
          'Naprawiam stare strony, domeny, serwery, SSL, formularze, błędy wydajności i rzeczy zostawione w połowie.',
      },
      {
        code: '04',
        title: 'Sprzęt, sieć i biuro',
        description:
          'Dobieram sprzęt, ustawiam sieć, backupy i podstawowe środowisko pracy tak, żeby zespół nie tracił czasu.',
      },
      {
        code: '05',
        title: 'Automatyzacja i DevOps',
        description:
          'Piszę pipeline, porządkuję repozytoria, migracje CI/CD i proste automatyzacje, które zdejmują ręczną robotę.',
      },
      {
        code: '06',
        title: 'Konsultacje techniczne',
        description:
          'Pomagam podjąć decyzję: co kupić, co wyrzucić, co naprawić, a czego nie dotykać, bo jeszcze działa.',
      },
    ],
    companyTitle: 'Cloudvance bez korpościemy',
    companyLead:
      'Cloudvance to firmowa część tej strony: umowy, faktury, odpowiedzialność i jasny kontakt. Nadal rozmawiasz z człowiekiem, który potem faktycznie robi robotę.',
    companyPoints: [
      { label: 'Model', value: 'mała firma, bez warstw sprzedaży' },
      { label: 'Dostarczam', value: 'strony, IT, chmurę, poprawki, opiekę' },
      { label: 'Rozliczenie', value: 'wycena po zakresie, bez koszyka i pakietów z tabelki' },
      { label: 'Zasada', value: 'najpierw problem, potem rozwiązanie, dopiero potem narzędzia' },
    ],
    projectsTitle: 'Portfolio techniczne',
    projectsLead:
      'Nie każdy projekt jest publiczny, ale te przykłady dobrze pokazują zakres: web, infrastruktura, dane w czasie rzeczywistym i narzędzia własne.',
    projects: [
      {
        title: 'ADS-B.Pro RadarView',
        description:
          'System do wizualizacji ruchu lotniczego w czasie rzeczywistym: dane ADS-B, rendering śladów lotów, backend i warstwa prezentacji.',
        image: '/radarview.jpg',
        tags: ['ADS-B', 'real-time data', 'maps', 'backend'],
      },
      {
        title: 'VRS X',
        description:
          'Nowoczesna implementacja aplikacji do śledzenia ruchu lotniczego oparta o .NET 10 i nowszą architekturę usługową.',
        image: '/vrsx.jpg',
        tags: ['.NET', 'tracking', 'architecture', 'aviation'],
      },
    ],
    commercialTitle: 'Realizacje komercyjne',
    commercialLead:
      'Tu trafiają projekty robione dla klientów: mniej fajerwerków, więcej odpowiedzialności za czytelność, kontakt i działanie.',
    commercial: [
      {
        title: 'Maja-Dekoracje',
        description:
          'Odświeżenie strony firmy usługowej z branży budowlano-ogrodowej: czytelniejsza oferta, lepszy układ usług i przygotowanie pod klientów z Google.',
        href: 'https://maja-dekoracje.pl',
        tags: ['website refresh', 'local SEO', 'mobile', 'services'],
      },
    ],
    processTitle: 'Jak pracuję',
    processLead:
      'Krótko, bez teatru projektowego. Najpierw rozpoznanie, potem konkretna decyzja, a na końcu wdrożenie i przekazanie.',
    process: [
      {
        title: 'Diagnoza',
        description: 'Sprawdzam, co boli naprawdę, a co jest tylko objawem. Bez tego łatwo przepalić budżet.',
      },
      {
        title: 'Zakres',
        description: 'Ustalamy, co robimy teraz, czego nie robimy i jak wygląda definicja “działa”.',
      },
      {
        title: 'Wdrożenie',
        description: 'Dowożę konkretną zmianę: stronę, konfigurację, migrację, poprawkę albo plan naprawczy.',
      },
      {
        title: 'Przekazanie',
        description: 'Zostawiam dostęp, krótką instrukcję i porządek, żeby temat nie był zależny od pamięci jednej osoby.',
      },
    ],
    contactTitle: 'Kontakt',
    contactLead:
      'Najprościej napisać maila z krótkim opisem problemu. Jeśli temat jest pilny, zadzwoń.',
    emailLabel: 'Email',
    phoneLabel: 'Telefon',
    footer: '© 2026 Cloudvance - Bruno Stelmaszyk. SYS. READY.',
  },
  en: {
    locale: 'en',
    seoTitle: 'Bruno Stelmaszyk - IT, cloud and websites for small businesses',
    seoDescription:
      'Personal website of Bruno Stelmaszyk and Cloudvance: IT support, cloud, security, websites, automation and fixes for small businesses.',
    canonical: '/en',
    heroCommand: './start_session.sh --profile cloudvance',
    heroTitle: 'I handle IT, cloud and websites for small businesses.',
    heroLead:
      'You run the business. I make sure hardware, email, cloud and the web do their job without drama.',
    status: ['status: online', 'scope: personal + company', 'mode: no shop, no package pushing'],
    primaryCta: 'Contact me',
    secondaryCta: 'View portfolio',
    aboutTitle: 'About me',
    aboutBody: [
      'I operate as an independent IT contractor. Through Cloudvance I deliver projects around Google Cloud Platform, Terraform and infrastructure automation.',
      'Alongside larger contracts, I also take on focused work for companies that need reliable IT, a website, or a rescue job after a previous vendor.',
      'I work project by project: define the scope, deliver the result and leave behind something maintainable. No extra systems just to make things look more complicated.',
    ],
    servicesTitle: 'What I do',
    servicesLead:
      'This is not a package shop. These are the areas where I can actually help after a short conversation and a sane scope.',
    services: [
      {
        code: '01',
        title: 'Cloud, security and access',
        description:
          'I configure GCP, accounts, permissions, email, DNS, basic security policies and access hygiene.',
      },
      {
        code: '02',
        title: 'Websites',
        description:
          'I build fast websites and landing pages on clean code. No heavy builders when a light, stable site is enough.',
      },
      {
        code: '03',
        title: 'Fixes and modernization',
        description:
          'I fix old websites, domains, servers, SSL, forms, performance problems and half-finished work.',
      },
      {
        code: '04',
        title: 'Hardware, network and office IT',
        description:
          'I select hardware, set up networks, backups and basic work environments so the team does not lose time.',
      },
      {
        code: '05',
        title: 'Automation and DevOps',
        description:
          'I write pipelines, organize repositories, CI/CD migrations and small automations that remove manual work.',
      },
      {
        code: '06',
        title: 'Technical consulting',
        description:
          'I help decide what to buy, remove, fix, or leave alone because it still works.',
      },
    ],
    companyTitle: 'Cloudvance without corporate theatre',
    companyLead:
      'Cloudvance is the business layer of this site: contracts, invoices, responsibility and a clear point of contact. You still talk to the person who does the work.',
    companyPoints: [
      { label: 'Model', value: 'small business, no sales layers' },
      { label: 'I deliver', value: 'websites, IT, cloud, fixes and care' },
      { label: 'Pricing', value: 'scoped quote, no cart and no package table' },
      { label: 'Rule', value: 'problem first, solution second, tools last' },
    ],
    projectsTitle: 'Technical portfolio',
    projectsLead:
      'Not every project is public, but these examples show the range: web, infrastructure, real-time data and internal tools.',
    projects: [
      {
        title: 'ADS-B.Pro RadarView',
        description:
          'Real-time air traffic visualization system: ADS-B data, flight track rendering, backend and presentation layer.',
        image: '/radarview.jpg',
        tags: ['ADS-B', 'real-time data', 'maps', 'backend'],
      },
      {
        title: 'VRS X',
        description:
          'Modern implementation of an air traffic tracking application based on .NET 10 and a newer service architecture.',
        image: '/vrsx.jpg',
        tags: ['.NET', 'tracking', 'architecture', 'aviation'],
      },
    ],
    commercialTitle: 'Commercial work',
    commercialLead:
      'Client work is less about fireworks and more about readability, contact, reliability and search visibility.',
    commercial: [
      {
        title: 'Maja-Dekoracje',
        description:
          'Website refresh for a construction and garden services company: clearer offer, better service layout and preparation for clients coming from Google.',
        href: 'https://maja-dekoracje.pl',
        tags: ['website refresh', 'local SEO', 'mobile', 'services'],
      },
    ],
    processTitle: 'How I work',
    processLead:
      'Short and practical. First diagnosis, then a concrete decision, then implementation and handover.',
    process: [
      {
        title: 'Diagnosis',
        description: 'I check what actually hurts and what is only a symptom. Without that, budget burns fast.',
      },
      {
        title: 'Scope',
        description: 'We decide what gets done now, what does not, and what “working” means.',
      },
      {
        title: 'Delivery',
        description: 'I ship a concrete change: website, configuration, migration, fix or recovery plan.',
      },
      {
        title: 'Handover',
        description: 'I leave access, short notes and order behind, so the topic is not trapped in one person’s memory.',
      },
    ],
    contactTitle: 'Contact',
    contactLead:
      'The easiest way is to send a short email with the problem. If it is urgent, call.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    footer: '© 2026 Cloudvance - Bruno Stelmaszyk. SYS. READY.',
  },
};

export function getSiteCopy(locale: Locale) {
  return content[locale];
}

function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.18em] text-cyan-300/75">&gt; section.load</p>
      <h2 className="inline-block border-b border-emerald-400 pb-2 text-3xl font-semibold text-emerald-300 md:text-4xl">
        _{title}
      </h2>
      {lead && <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">{lead}</p>}
    </div>
  );
}

function TerminalLine({ children }: { children: ReactNode }) {
  return <span className="block text-emerald-500/80">&gt; {children}</span>;
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-emerald-500/25 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-200">
      {children}
    </span>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const body = (
    <article className="group h-full overflow-hidden border border-emerald-500/20 bg-[#101510] transition duration-200 hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      {item.image ? (
        <div className="border-b border-emerald-500/20 bg-black">
          <img
            src={item.image}
            alt=""
            className="h-56 w-full object-cover opacity-75 contrast-125 saturate-75 transition duration-300 group-hover:opacity-100 group-hover:saturate-100"
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center border-b border-dashed border-emerald-500/20 bg-black/50 text-sm text-emerald-500/70">
          [ internal_tool.preview ]
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-emerald-200">{item.title}</h3>
        <p className="mb-5 leading-7 text-slate-300">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );

  if (!item.href) return body;

  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
      {body}
    </a>
  );
}

export default function SitePage({ copy }: { copy: SiteCopy }) {
  const siteUrl = 'https://stelmaszyk.dev';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Bruno Stelmaszyk / Cloudvance',
        inLanguage: copy.locale,
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Bruno Stelmaszyk',
        jobTitle: 'Independent IT Contractor',
        url: siteUrl,
        email: 'bruno@stelmaszyk.dev',
        telephone: '+48517230580',
        sameAs: ['https://www.linkedin.com/in/bruno-stelmaszyk/'],
        worksFor: { '@id': `${siteUrl}/#organization` },
        knowsAbout: [
          'Google Cloud Platform',
          'Terraform',
          'Infrastructure as Code',
          'Web Development',
          'Linux Administration',
          'DevOps',
          'Small Business IT',
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Cloudvance',
        url: siteUrl,
        email: 'bruno@stelmaszyk.dev',
        founder: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#professional-service`,
        name: 'Cloudvance - IT, cloud and websites',
        url: siteUrl,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: ['PL', 'EU'],
        serviceType: [
          'Cloud infrastructure',
          'Small business IT support',
          'Web development',
          'DevOps automation',
          'Technical consulting',
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title={copy.seoTitle}
        description={copy.seoDescription}
        canonical={copy.canonical}
        locale={copy.locale}
        schema={schema}
      />
      <Layout locale={copy.locale}>
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-screen [background:linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,.9)_50%),linear-gradient(90deg,rgba(255,0,0,.35),rgba(0,255,90,.15),rgba(0,70,255,.35))] [background-size:100%_3px,4px_100%]" />

        <section className="relative flex min-h-[calc(100vh-72px)] items-center border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <p className="mb-5 text-emerald-500/80">&gt; {copy.heroCommand}</p>
            <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-emerald-300 drop-shadow-[0_0_18px_rgba(52,211,153,0.24)] sm:text-5xl md:text-7xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300 md:text-2xl">{copy.heroLead}</p>

            <div className="mt-8 border-l-2 border-cyan-300/60 pl-5 text-sm md:text-base">
              {copy.status.map((line, index) => (
                <TerminalLine key={line}>
                  {line}
                  {index === copy.status.length - 1 && <span className="animate-pulse text-cyan-300">_</span>}
                </TerminalLine>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="border border-emerald-400 px-6 py-3 text-center font-semibold uppercase text-emerald-200 no-underline transition hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_22px_rgba(52,211,153,0.28)]"
              >
                _{copy.primaryCta}
              </a>
              <a
                href="#portfolio"
                className="border border-cyan-300/70 px-6 py-3 text-center font-semibold uppercase text-cyan-200 no-underline transition hover:bg-cyan-300 hover:text-black"
              >
                ./ {copy.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader title={copy.aboutTitle} />
            <div className="border border-emerald-500/20 bg-[#101510] p-6 md:p-8">
              {copy.aboutBody.map((paragraph) => (
                <p key={paragraph} className="mb-5 leading-8 text-slate-300 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title={copy.servicesTitle} lead={copy.servicesLead} />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {copy.services.map((service) => (
                <article
                  key={service.code}
                  className="border border-emerald-500/20 bg-[#101510] p-6 transition hover:border-cyan-300/70"
                >
                  <div className="mb-5 text-sm text-cyan-300">[{service.code}]</div>
                  <h3 className="mb-3 text-xl font-semibold text-emerald-200">{service.title}</h3>
                  <p className="leading-7 text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cloudvance" className="border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeader title={copy.companyTitle} lead={copy.companyLead} />
            </div>
            <div className="border border-cyan-300/30 bg-cyan-300/[0.04] p-6 md:p-8">
              {copy.companyPoints.map((point) => (
                <div key={point.label} className="grid gap-2 border-b border-cyan-300/15 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[150px_1fr]">
                  <span className="text-cyan-300">{point.label}</span>
                  <span className="text-slate-300">{point.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title={copy.projectsTitle} lead={copy.projectsLead} />
            <div className="grid gap-6 md:grid-cols-2">
              {copy.projects.map((project) => (
                <WorkCard key={project.title} item={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="commercial" className="border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title={copy.commercialTitle} lead={copy.commercialLead} />
            <div className="grid gap-6 md:grid-cols-2">
              {copy.commercial.map((project) => (
                <WorkCard key={project.title} item={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-dashed border-emerald-500/20 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title={copy.processTitle} lead={copy.processLead} />
            <div className="grid gap-5 md:grid-cols-4">
              {copy.process.map((step, index) => (
                <article key={step.title} className="border-l-2 border-emerald-400 bg-[#101510] p-5">
                  <p className="mb-4 text-sm text-cyan-300">step.{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mb-3 text-lg font-semibold text-emerald-200">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader title={copy.contactTitle} lead={copy.contactLead} />
            <div className="border border-emerald-400/40 bg-[#101510] p-6 text-lg md:p-8">
              <p className="mb-6 text-emerald-200">Cloudvance Bruno Stelmaszyk</p>
              <p className="mb-3 text-slate-300">
                {copy.emailLabel}:{' '}
                <a href="mailto:bruno@stelmaszyk.dev" className="text-cyan-200 underline decoration-dashed underline-offset-4">
                  bruno@stelmaszyk.dev
                </a>
              </p>
              <p className="text-slate-300">
                {copy.phoneLabel}:{' '}
                <a href="tel:+48517230580" className="text-cyan-200 underline decoration-dashed underline-offset-4">
                  +48 517 230 580
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
