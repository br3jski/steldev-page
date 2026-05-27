import Link from 'next/link';

interface HeaderProps {
  locale?: 'pl' | 'en';
}

const labels = {
  pl: {
    brand: '[ Cloudvance / Bruno Stelmaszyk ]',
    nav: [
      { href: '#about', label: 'o mnie' },
      { href: '#services', label: 'co robię' },
      { href: '#portfolio', label: 'portfolio' },
      { href: '#contact', label: 'kontakt' },
    ],
    otherLocale: { href: '/en', label: '[ EN ]' },
    currentLocale: '[ PL ]',
  },
  en: {
    brand: '[ Cloudvance / Bruno Stelmaszyk ]',
    nav: [
      { href: '#about', label: 'about' },
      { href: '#services', label: 'work' },
      { href: '#portfolio', label: 'portfolio' },
      { href: '#contact', label: 'contact' },
    ],
    otherLocale: { href: '/', label: '[ PL ]' },
    currentLocale: '[ EN ]',
  },
};

const Header: React.FC<HeaderProps> = ({ locale = 'pl' }) => {
  const copy = labels[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-500/20 bg-[#070907]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href={locale === 'pl' ? '/' : '/en'} className="text-sm text-emerald-500/85 no-underline transition hover:text-emerald-200">
          {copy.brand}
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:gap-8">
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-emerald-500/80">
              {copy.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="no-underline transition hover:text-cyan-200">
                    ./ {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3 text-sm font-semibold">
            <span className="text-emerald-200 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">{copy.currentLocale}</span>
            <Link href={copy.otherLocale.href} className="text-emerald-500/75 no-underline transition hover:text-cyan-200">
              {copy.otherLocale.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
