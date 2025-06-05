// pages/services.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';

interface ServiceItem {
  service: string;
  price?: string;
  unit?: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
  annotation?: string;
}

interface PackageItem {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const serviceItems: ServiceData[] = [
  {
    id: "web-development",
    title: "Web Development & Hosting",
    description: "Complete web solutions from development to hosting and maintenance",
    services: [
      { service: "Custom website development (HTML, JS, PHP)", price: "20€", unit: "per hour" },
      { service: "Domain registration and setup", price: "from 10€", unit: "per domain" },
      { service: "Domain administration & maintenance", price: "50€", unit: "per domain/year" },
      { service: "Website maintenance (our projects)", price: "25€", unit: "per hour" },
      { service: "Website maintenance (external projects)", price: "35€", unit: "per hour" },
      { service: "WordPress maintenance (basic)", price: "20€", unit: "per hour" },
      { service: "WordPress maintenance (advanced)", price: "45€", unit: "per hour" },
    ],
    annotation: "Prices may vary based on project complexity. Domain prices depend on extension."
  },
  {
    id: "email-services",
    title: "Professional Email Solutions",
    description: "Secure, reliable email hosting for individuals and businesses",
    services: [
      { service: "Personal mailbox (2GB storage)", price: "4€", unit: "per mailbox/month" },
      { service: "Family plan (10GB storage)", price: "from 3€", unit: "per user/month" },
      { service: "Business mailbox (10GB, GDPR compliant)", price: "12€", unit: "per user/year" },
      { service: "Small business (up to 20 mailboxes, 100GB)", price: "90€", unit: "per 20 mailboxes/month" },
      { service: "Enterprise solution (up to 500 mailboxes, 1TB)", price: "Contact us", unit: "custom pricing" },
      { service: "Setup fee (includes MX, DKIM, DMARC, SPF)", price: "10€", unit: "one-time" },
    ],
    annotation: "Family plan 3€ pricing applies for 4+ users. Enterprise solutions require consultation."
  },
  {
    id: "vps-hosting",
    title: "Virtual Private Servers",
    description: "Scalable VPS solutions for your applications and services",
    services: [
      { service: "Nano: 1vCPU, 1GB RAM, 15GB Storage", price: "3€ or 30€", unit: "per month/year" },
      { service: "Micro: 1vCPU, 2GB RAM, 25GB Storage", price: "4€", unit: "per month" },
      { service: "Small: 2vCPU, 4GB RAM, 40GB Storage", price: "6€", unit: "per month" },
      { service: "Medium: 4vCPU, 6GB RAM, 60GB SSD", price: "9€", unit: "per month" },
      { service: "Large: 8vCPU, 12GB RAM, 120GB SSD", price: "18€", unit: "per month" },
      { service: "Custom configuration", price: "Contact us", unit: "custom pricing" },
      { service: "Additional IPv4 address", price: "2€", unit: "per month" },
      { service: "Setup fee", price: "10€", unit: "one-time" },
    ],
    annotation: "All VPS include unlimited bandwidth with fair-use policy. IPv6 included by default."
  },
];

const packageItems: PackageItem[] = [
  {
    id: "starter",
    name: "Starter Package",
    description: "Perfect for small businesses starting their online presence",
    price: "299€/year",
    features: [
      "Domain registration (.com, .net, .pl, .eu)",
      "Web hosting (5GB storage, 50Mbit bandwidth)",
      "Basic website (up to 5 pages)",
      "SSL/TLS certificate included",
      "1 email account (1GB storage)"
    ]
  },
  {
    id: "professional",
    name: "Professional Package",
    description: "Ideal for growing businesses with advanced needs",
    price: "499€/year",
    popular: true,
    features: [
      "Domain registration with premium discount (up to 35€ off)",
      "Enhanced web hosting (10GB storage, 100Mbit)",
      "Advanced website (up to 20 pages)",
      "SSL/TLS certificate included",
      "5 email accounts (5GB total storage)",
      "Priority support"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    description: "Comprehensive solution for large organizations",
    price: "999€/year",
    features: [
      "Premium domain with 50% discount (up to 100€ off)",
      "High-performance hosting (50GB storage, 500Mbit)",
      "Enterprise website (up to 200 pages)",
      "SSL/TLS certificate included",
      "Dedicated email server with DKIM authentication",
      "24/7 priority support",
      "Custom integrations available"
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional web development, hosting, and infrastructure services 
            tailored to your business needs.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            All prices exclude 23% VAT
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Service Categories</h2>
            <div className="space-y-8">
              {serviceItems.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveService(activeService === category.id ? null : category.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                      <div className="text-blue-600">
                        {activeService === category.id ? '−' : '+'}
                      </div>
                    </div>
                  </div>
                  
                  {activeService === category.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {category.services.map((service, index) => (
                          <div key={index} className="flex justify-between items-center py-2">
                            <span className="text-gray-700 text-sm">{service.service}</span>
                            <div className="text-right">
                              <span className="font-semibold text-blue-600">{service.price}</span>
                              {service.unit && (
                                <span className="text-gray-500 text-xs ml-1">
                                  {service.unit}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {category.annotation && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">{category.annotation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Service Packages</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Complete solutions combining multiple services at discounted rates
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packageItems.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`bg-white rounded-xl shadow-sm border-2 p-8 relative ${
                    pkg.popular ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    pkg.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <a 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}