// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';

interface CompanySection {
  title: string;
  description: string;
  details: string;
  icon: string;
}

const companySections: CompanySection[] = [
  {
    title: "About Cloudvance",
    description: "Our mission and vision",
    details: "Cloudvance was established in 2022 with a clear goal: to provide custom, secure, and reliable IT infrastructure solutions. We specialize in modern cloud technologies, automation, and infrastructure management, helping businesses scale efficiently and securely.",
    icon: "🏢"
  },
  {
    title: "Infrastructure as Code",
    description: "GCP expertise and automation",
    details: "We provide comprehensive Infrastructure as Code (IaC) solutions on Google Cloud Platform. Our expertise includes creating and managing GCP projects, IAM roles, service accounts, and ensuring your cloud infrastructure is secure, scalable, and optimized for your organization's specific needs.",
    icon: "☁️"
  },
  {
    title: "Linux & UNIX Administration",
    description: "System management and security",
    details: "With extensive experience across multiple Linux and UNIX distributions, we provide comprehensive system administration services including user management, security hardening, package management, system monitoring, and automation to ensure your systems run optimally.",
    icon: "🐧"
  },
  {
    title: "CloudvanceMail",
    description: "Secure email hosting solution",
    details: "Our flagship CloudvanceMail service offers secure, privacy-focused email hosting with full compliance to security standards including DKIM, DMARC, and SPF. With 99.9% deliverability and 10/10 testing scores, our EU-based servers ensure GDPR compliance.",
    icon: "📧"
  },
  {
    title: "Custom Solutions",
    description: "Tailored IT services",
    details: "From WordPress maintenance to domain registration, DNS management, SSL/TLS certificates, and beyond - we provide custom solutions tailored to your specific requirements. No challenge is too unique for our team.",
    icon: "🔧"
  },
  {
    title: "Training & Education",
    description: "Knowledge transfer and skill development",
    details: "We offer comprehensive training programs in Linux administration, cloud computing, and VPN networking (OpenVPN & WireGuard). Our courses are designed to empower your team with practical skills and can be delivered both in-person and online.",
    icon: "🎓"
  },
];

const values = [
  {
    title: "Security First",
    description: "Every solution we implement prioritizes security and compliance with industry standards."
  },
  {
    title: "Reliability",
    description: "We build robust, scalable infrastructure that you can depend on 24/7."
  },
  {
    title: "Innovation",
    description: "Staying ahead with the latest technologies and best practices in cloud computing."
  },
  {
    title: "Transparency",
    description: "Clear communication, honest pricing, and no hidden surprises."
  }
];

export default function Company() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Cloudvance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your trusted partner for modern IT infrastructure, cloud solutions, and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              Our Services
            </a>
            <a 
              href="/about" 
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg transition-colors font-medium"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2022, Cloudvance emerged from a passion for solving complex infrastructure challenges. 
              We believe that every business, regardless of size, deserves access to enterprise-grade IT solutions 
              that are both secure and scalable. Our journey began with a simple mission: to bridge the gap between 
              cutting-edge technology and practical business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companySections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{section.title}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{section.description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{section.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">By the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2022</div>
                <div className="text-blue-100">Founded</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Email Deliverability</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Transform Your Infrastructure?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss how Cloudvance can help your business achieve its technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/services" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg inline-block"
              >
                View Our Services
              </a>
              <a 
                href="/about" 
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg transition-colors font-medium text-lg inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}