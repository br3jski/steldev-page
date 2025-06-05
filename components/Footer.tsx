// components/Footer.tsx
const Footer: React.FC = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Bruno Stelmaszyk. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a 
            href="/about" 
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            About
          </a>
          <a 
            href="/services" 
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            Services
          </a>
          <a 
            href="/company" 
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            Company
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;