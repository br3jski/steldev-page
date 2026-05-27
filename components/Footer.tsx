interface FooterProps {
  locale?: 'pl' | 'en';
}

const footerText = {
  pl: '© 2026 Cloudvance - Bruno Stelmaszyk. SYS. READY.',
  en: '© 2026 Cloudvance - Bruno Stelmaszyk. SYS. READY.',
};

const Footer: React.FC<FooterProps> = ({ locale = 'pl' }) => (
  <footer className="border-t border-dashed border-emerald-500/20 px-5 py-10 text-center text-sm text-emerald-500/70 md:px-8">
    <p>{footerText[locale]}</p>
  </footer>
);

export default Footer;
