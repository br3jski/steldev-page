// pages/index.tsx
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import PortfolioItem from '../components/PortfolioItem';
import { useTypewriter } from '../hooks/useTypewriter';

const portfolioItems = [
  {
    title: "Infrastructure Management (Landing Zone)",
    description: "As a sole specialist, I manage the entire Landing Zone in my company, utilizing Terraform within the Azure DevOps environment. My role encompasses code maintenance, creation of new projects and resources, as well as overall administration of Google Cloud Platform (GCP). "
  },
  {
    title: "Website Development",
    description: "My web development skills include TypeScript, JavaScript (including large projects in vanilla JS), and React. I have experience in creating responsive websites for clients. My latest project is this portfolio site, which showcases my technical skills through an interactive terminal in the 'About' section. I encourage you to try this feature to get to know me better and see my skills in action."
  },
  {
    title: "Linux Administration",
    description: "I have extensive experience in Linux and UNIX system administration. My expertise covers distributions such as RHEL (including CentOS, Fedora, Rocky Linux), Debian and its derivatives (e.g., Ubuntu), and Arch variants. Additionally, I have experience with UNIX systems, particularly IBM AIX on IBM Power machines, including LPAR and VIOs. For administrative task automation, I utilize tools like Cron, enhancing system efficiency and reliability."
  },
  {
    title: "DevOps",
    description: "In my DevOps work, I use a variety of tools and platforms, including GitHub (in a homelab environment), Google Cloud Source Repositories, Azure DevOps, and BitBucket. I'm currently leading a migration project from Azure DevOps to BitBucket, demonstrating my skills in change management and DevOps process optimization. My experience includes creating and managing CI/CD pipelines, contributing to increased efficiency and reliability in software development processes."
  },
  {
    title: "Education Courses",
    description: "In addition to my technical expertise, I have contributed to the field of IT education by creating and recording two comprehensive courses for Videopoint, a part of the respected Helion Group. These courses demonstrate my ability to communicate complex technical concepts effectively: VPN Networks (OpenVPN and Wireguard) and Virtualization basics (Proxmox)"
  },
  {
    title: "Homelab & Personal Infrastructure",
    description: "My homelab demonstrates my passion for technology, featuring a custom-built server, a cluster of four Raspberry Pis (3x Pi 4b, 1x Pi 5) for diverse tasks, and a remote bare-metal server in Germany, all interconnected via a MikroTik routerboard, enabling experimentation with distributed systems, containerization, and innovative solutions while honing skills in network optimization and remote server management."
  },
];

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentItemIndex, setCurrentItemIndex] = useState(-2); // -2: name, -1: portfolio, 0-3: portfolio items
  
    const { displayedText: name, isComplete: nameComplete, startTyping: startName } = useTypewriter("Bruno Stelmaszyk", 100);
    const { displayedText: portfolio, isComplete: portfolioComplete, startTyping: startPortfolio } = useTypewriter("Portfolio", 100);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        startName();
      }, 3000);
      return () => clearTimeout(timer);
    }, [startName]);
  
    useEffect(() => {
      if (nameComplete && currentItemIndex === -2) {
        setCurrentItemIndex(-1);
        startPortfolio();
      }
      if (portfolioComplete && currentItemIndex === -1) {
        setCurrentItemIndex(0);
      }
    }, [nameComplete, portfolioComplete, currentItemIndex, startPortfolio]);
  
    useEffect(() => {
      console.log('Current item index:', currentItemIndex);
    }, [currentItemIndex]);
  
    const handleItemComplete = () => {
      setCurrentItemIndex(prev => prev + 1);
    };
  
    if (isLoading) return <LoadingScreen />;
  
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-500">
            {name}{currentItemIndex === -2 && <span className="animate-pulse">_</span>}
          </h1>
          <h2 className="text-2xl mb-8 text-center text-green-400">
            {portfolio}{currentItemIndex === -1 && <span className="animate-pulse">_</span>}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                description={item.description}
                isActive={currentItemIndex === index}
                onComplete={handleItemComplete}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }