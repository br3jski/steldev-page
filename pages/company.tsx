// pages/index.tsx
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import CompanyItem from '../components/CompanyItem';
import { useTypewriter } from '../hooks/useTypewriter';

const companyItems  = [
  {
    title: "Whoami? ",
    description: "More words about company ",
    details: "Cloudvance has been established in 2022. Our goal is to provide custom, secure and reliable IT Infrastructure. We are offering multiple services you can find in the next tiles. Visit 'about' page to learn more about me and company... To contact me, enter 'mail company' command. "
  },
  {
    title: "IaC @ GCP",
    description: "IAM, Service Accounts, Projects..? ",
    details: "With my knowledge and experience, I can provide your organization with Infrastructure as Code (IaC) solutions on Google Cloud Platform (GCP). My expertise includes creating and managing GCP projects, IAM roles, and service accounts, ensuring that your cloud infrastructure is secure and optimized for your organization's needs."
  },
  {
    title: "Linux Administration Tasks",
    description: "Security / User Management / Patching..?",
    details: "With my knowledge and experience in wide range of Linux & UNIX systems & distributions & their derivatives, I can provide your organization with Linux administration services. My expertise includes system administration tasks, such as user management, package management, and system monitoring, ensuring that your Linux systems are secure and optimized for your organization's needs."
  },
  {
    title: "Hosting services",
    desciption: "Webhosting / Email / DNS / SSL..?",
    details: "[NEW] I am offering brand new, secure CloudvanceMail. This service is a secure, privacy-focused email that support all security standards, including DKIM, DMARC and SPF (99.9% deliverability)."
  },
  {
    title: "Custom orders",
    description: "Something else?",
    details: "Maintenance of your Wordpress page? Or just.. Domain registration, DNS management, SSL/TLS certificates, or maybe you need something else? I am here to help you with that. Just contact me and we will find a solution that fits your needs."
  },
  {
    title: "Trainings",
    description: "Linux / Cloud / VPN Networking..?",
    details: "I am offering trainings in the field of IT. My courses are designed to help you learn new skills and improve your existing ones. I offer courses in Linux administration, cloud computing, and VPN Networking (OpenVPN & Wireguard). My courses are tailored to your needs and can be delivered in person or online."
  },
];

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentItemIndex, setCurrentItemIndex] = useState(-2); // -2: name, -1: portfolio, 0-3: portfolio items
  
    const { displayedText: name, isComplete: nameComplete, startTyping: startName } = useTypewriter("Cloudvance Bruno Stelmaszyk", 100);
    const { displayedText: portfolio, isComplete: portfolioComplete, startTyping: startPortfolio } = useTypewriter("Company & Offer", 100);
  
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
            {companyTitle}{currentItemIndex === -1 && <span className="animate-pulse">_</span>}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyItems.map((item, index) => (
              <CompanyItem
                key={index}
                title={item.title}
                description={item.description}
                details={item.details}
                isActive={currentItemIndex === index}
                onComplete={handleItemComplete}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }