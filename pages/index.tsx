// pages/index.tsx
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import PortfolioItem from '../components/PortfolioItem';
import { useTypewriter } from '../hooks/useTypewriter';

const portfolioItems = [
  {
    title: "Landing Zone",
    description: "Projektowanie i implementacja bezpiecznych, skalowalnych środowisk chmurowych dla organizacji."
  },
  {
    title: "Website Development",
    description: "Tworzenie nowoczesnych, responsywnych stron internetowych z wykorzystaniem najnowszych technologii."
  },
  {
    title: "Linux Administration",
    description: "Zarządzanie i optymalizacja systemów Linux dla wysokiej wydajności i bezpieczeństwa."
  },
  {
    title: "DevOps",
    description: "Wdrażanie praktyk CI/CD i automatyzacja procesów dla zwiększenia efektywności rozwoju oprogramowania."
  }
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