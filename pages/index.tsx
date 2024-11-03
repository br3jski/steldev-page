// pages/index.tsx
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import PortfolioItem from '../components/PortfolioItem';

const portfolioItems = [
  {
    title: "Landing Zone",
    description: "Projecting and implementing secure, scalable solutions in cloud environments for organizations with Terraform."
  },
  {
    title: "Website Development",
    description: "Creating modern and responsive websites for people and organizations."
  },
  {
    title: "Linux Administration",
    description: "Placeholder."
  },
  {
    title: "DevOps",
    description: "Placeholder."
  }
];

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) return <LoadingScreen />;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-500">Bruno Stelmaszyk</h1>
        <h2 className="text-2xl mb-8 text-center text-green-400">Personal&Company Webpage & Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </Layout>
  );
}