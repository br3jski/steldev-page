// pages/services.tsx
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import { Link as ScrollLink } from 'react-scroll';
import PackageItem from '../components/PackageItem';

interface ServiceItem {
  service: string;
  price?: string;
  unit?: string; // Dodajemy opcjonalne pole dla jednostki
}

interface ServiceData {
  id: string;
  title: string;
  services: ServiceItem[];
  annotation?: string; // Dodajemy opcjonalne pole dla adnotacji
}
import Accordion from '../components/Accordion';

interface PackageItem {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
}

const serviceItems: ServiceData[] = [
  {
    id: "web-host",
    title: "Web Hosting & Development",
    services: [
      { service: "Create new website using standard stack (HTML, JS, PHP)", price: "20€", unit: "per hour" },
      { service: "Domain ordering", price: "starts with 10€*", unit: "per domain" },
      { service: "Domain administration & maintenance", price: "50€", unit: "per domain per year" },
      { service: "Created by us website maintenance", price: "25€", unit: "per hour" },
      { service: "Brought by you website maintenance", price: "35€", unit: "per hour" },
      { service: "Wordpress maintenance (no code edits)", price: "20€", unit: "per hour" },
      { service: "Wordpress maintenance (incl. code edits)", price: "45€", unit: "per hour" },
    ],
    annotation: "- Price depends on domain extension.\nGiven prices are estimated and may vary depending on the complexity of the project. Please note, this is not an offer within the meaning of the Civil Code."
  },
  {
    id: "mailservers",
    title: "Personal & Company Mailbox*",
    services: [
      { service: "Personal mailbox with your domain (2GB storage)", price: "4€", unit: "per mailbox per month" },
      { service: "Family mailbox with your domain (single domain, 10GB storage)", price: "from 3€*", unit: "per user per month" },
      { service: "Business mailbox for sole proprietorship (10GB storage, GPDR compliant aliases allowed)", price: "12€", unit: "per user per year" },
      { service: "Business mailbox for small enterprises (up to 20 mailboxes, 100GB storage, aliases allowed) ", price: "90€", unit: "per 20 mailboxes month" },
      { service: "Business mailbox for medium enterprises (up to 500 mailboxes, 1TB storage, aliases allowed)", price: "n/a***", unit: "n/a" },
      { service: "Setup Fee (for first 3 positions)", price: "10€", unit: "once**" },
    ],
    annotation: "- 3€ price only when 4+ users. For less than 4 users, standard 4€ price applies.\n** - Setup fee covers providing necessary data like IP adresses, MX records, DKIM, DMARC, SPF data.\nGiven prices are estimated and may vary depending on the complexity of the project. Please note, this is not an offer within the meaning of the Civil Code."
  },
  {
    id: "compute",
    title: "Virtual Private Servers",
    services: [
      { service: "Nano: 1vCPU, 1GB RAM, 15GB Storage, 100Mbit bandwidth*", price: "3€ or 30€", unit: "per month / per year" },
      { service: "Micro: 1vCPU, 2GB RAM, 25GB Storage, 100Mbit bandwidth*", price: "4€", unit: "per month" },
      { service: "Small: 2vCPU, 4GB RAM, 40GB Storage, 200Mbit bandwidth*", price: "6€", unit: "per month" },
      { service: "Medium: 4vCPU, 6GB RAM, 60GB SSD Storage, 400Mbit bandwidth*", price: "9€", unit: "per  month" },
      { service: "Big: 8vCPU, 12GB RAM, 120GB SSD Storage, 600Mbit bandwidth*", price: "18€", unit: "per month" },
      { service: "Custom solution", price: "-", unit: "Contact Us" },
      { service: "IPv4 Address (single)", price: "2€", unit: "per month" },
      { service: "Setup Fee", price: "10€", unit: "once**" },
    ],
    annotation: "- bandwidth is considered as unlimited, but please not that fair-use principle may be applied. VPS are provisioned without public IPv4 address.\n** - Setup fee covers time necessary to set up resources that have been ordered.\nGiven prices are estimated and may vary depending on the complexity of the project. Please note, this is not an offer within the meaning of the Civil Code."
  },

  // Dodaj więcej elementów ServiceData według potrzeb
];

const packageItems: PackageItem[] = [
  {
    id: "starter-package",
    name: "Starter Package",
    description: "Perfect for small businesses just starting their online journey",
    price: "299€ / year",
    features: [
      "Domain registration (.com, .net, .pl, or .eu)",
      "Web hosting (5GB storage, 50Mbit bandwidth)",
      "Basic website (up to 5 pages) - bring your project",
      "SSL/TLS certificate",
      "Email account (1GB storage) with out MX records"
    ]
  },
  {
    id: "medium-package",
    name: "Medium Package",
    description: "Ideal for growing businesses with more advanced needs",
    price: "499€ / year",
    features: [
      "Domain registration (.com, .net, .pl, or .eu)",
      "Up to 20% discount for premium domains like .dev or .ai (up to 35€ discount)",
      "Web hosting (10GB storage, 100Mbit bandwidth)",
      "Semi-advanced website (up to 20 pages) - bring your project",
      "SSL/TLS certificate",
      "5 Email accounts (5GB storage) with our MX records"
    ]
  },
  {
    id: "enterprise-package",
    name: "Enterprise Package",
    description: "Comprehensive solution for large businesses and corporations",
    price: "999€ / year",
    features: [
      "Domain registration (.com, .net, .pl, or .eu)",
      "up to 50% discount for premium domains like .dev or .ai (up to 100€ discount)",
      "Web hosting (50GB storage, 500Mbit unlimited bandwidth)",
      "Advanced website (up to 200 pages) - bring your project",
      "SSL/TLS certificate",
      "Dedicated e-mail server with your MX records",
      "Enterprise-grade delivery with DKIM authentication"
    ]
  }
];

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <Layout>
      <div className="flex">
        {/* Menu nawigacyjne */}
        <div className="w-64 fixed left-0 top-0 h-full bg-gray-900 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-green-500">Our Services</h2>
          <ul className="space-y-2 text-sm">
            {serviceItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="text-green-400 hover:text-green-300 cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

          {/* Główna zawartość */}
          <div className="flex-1 ml-64">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-green-500">
            </h1>
            <p className="text-xl text-center text-gray-300 mb-8">
              Prices do not include 23% VAT
            </p>
            <div className="space-y-12">
            {serviceItems.map((item) => (
                  <div key={item.id} id={item.id} className="mb-4">
                  <Accordion
                    title={item.title}                    
                    annotation={item.annotation ? item.annotation : ""}>
                         <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {item.services.map((serviceItem, index) => (
                        <li key={index} className="flex items-center justify-between">
                          <span className="flex-1">{serviceItem.service}</span>
                          {serviceItem.price && <span className="ml-4">{serviceItem.price}</span>}
                          {serviceItem.unit && <span className="ml-2">{serviceItem.unit}</span>}
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                  
                  
                  </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-green-500 mt-16">Our Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packageItems.map((item) => (
                <PackageItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  features={item.features}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}