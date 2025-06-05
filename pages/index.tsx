// pages/index.tsx
import Layout from '../components/Layout';
import { useState } from 'react';

const portfolioItems = [
  {
    title: "Infrastructure Management",
    description: "Managing entire Landing Zone using Terraform within Azure DevOps environment. Expertise in Google Cloud Platform (GCP) administration and resource management.",
    skills: ["Terraform", "Azure DevOps", "GCP", "Infrastructure as Code"]
  },
  {
    title: "Web Development",
    description: "Full-stack development with modern technologies. Building responsive, accessible web applications with focus on performance and user experience.",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Linux Administration",
    description: "Extensive experience in Linux and UNIX system administration across multiple distributions. Automation and optimization of system processes.",
    skills: ["RHEL", "Ubuntu", "Debian", "IBM AIX", "System Automation"]
  },
  {
    title: "DevOps & CI/CD",
    description: "Building and managing CI/CD pipelines across multiple platforms. Leading migration projects and optimizing development workflows.",
    skills: ["GitHub", "Azure DevOps", "BitBucket", "CI/CD", "Pipeline Management"]
  },
  {
    title: "Technical Education",
    description: "Created comprehensive IT courses for Videopoint (Helion Group), focusing on networking and virtualization technologies.",
    skills: ["OpenVPN", "WireGuard", "Proxmox", "Technical Writing"]
  },
  {
    title: "Homelab & R&D",
    description: "Custom infrastructure for continuous learning and experimentation. Distributed systems with Raspberry Pi cluster and remote servers.",
    skills: ["Containerization", "Networking", "Distributed Systems", "Hardware"]
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory 
    ? portfolioItems.filter(item => 
        item.skills.some(skill => 
          skill.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      )
    : portfolioItems;

  const allSkills = Array.from(new Set(portfolioItems.flatMap(item => item.skills)));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bruno Stelmaszyk
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Infrastructure Engineer & Full-Stack Developer specializing in cloud platforms, 
            automation, and modern web technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#portfolio" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              View My Work
            </a>
            <a 
              href="/about" 
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg transition-colors font-medium"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* Skills Filter */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies & Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedCategory(skill)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === skill
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here's a showcase of my expertise across different domains of technology and infrastructure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Interested in collaborating or learning more about my work? I'd love to hear from you.
          </p>
          <a 
            href="/about" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}