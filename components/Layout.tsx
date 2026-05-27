// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  locale?: 'pl' | 'en';
}

const Layout: React.FC<LayoutProps> = ({ children, locale = 'pl' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#070907] text-emerald-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-400 text-black px-4 py-2 z-[60]">
        Skip to main content
      </a>
      <Header locale={locale} />
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
};

export default Layout;
