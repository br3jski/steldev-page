// pages/about.tsx
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const skills = [
    {
      category: "Cloud & Infrastructure",
      items: ["Google Cloud Platform", "Terraform", "Azure DevOps", "Infrastructure as Code", "Landing Zone Management"]
    },
    {
      category: "Development",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Full-stack Development"]
    },
    {
      category: "Systems Administration",
      items: ["Linux (RHEL, Ubuntu, Debian)", "IBM AIX", "UNIX Systems", "System Automation", "Cron Jobs"]
    },
    {
      category: "DevOps & CI/CD",
      items: ["GitHub", "Azure DevOps", "BitBucket", "Pipeline Management", "Migration Projects"]
    },
    {
      category: "Networking & Security",
      items: ["OpenVPN", "WireGuard", "Network Configuration", "MikroTik", "VPN Networks"]
    },
    {
      category: "Virtualization",
      items: ["Proxmox", "Containerization", "Raspberry Pi Clusters", "Distributed Systems"]
    }
  ];

  const experience = [
    {
      role: "Infrastructure Specialist",
      description: "Managing complete Landing Zone infrastructure using Terraform within Azure DevOps environment. Responsible for code maintenance, resource creation, and Google Cloud Platform administration."
    },
    {
      role: "DevOps Engineer",
      description: "Leading migration projects from Azure DevOps to BitBucket. Creating and managing CI/CD pipelines to improve development efficiency and reliability."
    },
    {
      role: "Technical Educator",
      description: "Created comprehensive IT courses for Videopoint (Helion Group) covering VPN Networks and Virtualization basics, demonstrating ability to communicate complex technical concepts."
    },
    {
      role: "Systems Administrator",
      description: "Extensive experience with Linux/UNIX systems across multiple distributions. Specializing in automation, optimization, and IBM Power systems management."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Bruno Stelmaszyk",
    "description": "Learn about Bruno Stelmaszyk's professional experience, technical skills, and expertise in infrastructure engineering and web development.",
    "mainEntity": {
      "@type": "Person",
      "name": "Bruno Stelmaszyk",
      "jobTitle": "Infrastructure Engineer & Full-Stack Developer"
    }
  };

  return (
    <>
      <SEO 
        title="About"
        description="Learn about Bruno Stelmaszyk's professional experience in infrastructure engineering, cloud platforms, web development, and technical expertise across multiple domains."
        canonical="/about"
        schema={aboutSchema}
      />
      <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I'm a passionate Infrastructure Engineer and Full-Stack Developer with a strong focus on 
              cloud platforms, automation, and modern web technologies. I enjoy solving complex technical 
              challenges and building efficient, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Professional Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">{exp.role}</h3>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Beyond Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Homelab Enthusiast</h3>
                  <p className="text-gray-600 leading-relaxed">
                    My homelab showcases my passion for technology, featuring a custom-built server, 
                    a cluster of Raspberry Pis, and remote infrastructure in Germany. This setup 
                    allows me to experiment with distributed systems and innovative solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Continuous Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe in staying current with technology trends and continuously expanding 
                    my knowledge. This drive has led me to create educational content and contribute 
                    to the tech community through courses and knowledge sharing.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="mb-6 leading-relaxed">
                  I'm always interested in discussing technology, sharing knowledge, 
                  and exploring new opportunities for collaboration.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">🌐</span>
                    </div>
                    <span>Open to remote opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">🚀</span>
                    </div>
                    <span>Passionate about innovation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">🎯</span>
                    </div>
                    <span>Results-driven approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default AboutPage;