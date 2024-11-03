// components/PortfolioItem.tsx
import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface PortfolioItemProps {
  title: string;
  description: string;
  isActive: boolean;
  onComplete: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, isActive, onComplete }) => {
  const [itemStage, setItemStage] = useState(0);
  const { displayedText: displayedTitle, isComplete: titleComplete, startTyping: startTitle } = useTypewriter(title, 50);
  const { displayedText: displayedDescription, isComplete: descriptionComplete, startTyping: startDescription } = useTypewriter(description, 20);

  useEffect(() => {
    if (isActive && itemStage === 0) {
      startTitle();
      setItemStage(1);
    }
  }, [isActive, startTitle, itemStage]);

  useEffect(() => {
    if (titleComplete && itemStage === 1) {
      startDescription();
      setItemStage(2);
    }
  }, [titleComplete, startDescription, itemStage]);

  useEffect(() => {
    if (descriptionComplete && itemStage === 2) {
      setTimeout(() => {
        onComplete();
        setItemStage(3);
      }, 500);
    }
  }, [descriptionComplete, onComplete, itemStage]);

  if (!isActive && itemStage === 0) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2 text-green-500">
        {displayedTitle}{itemStage === 1 && <span className="animate-pulse">_</span>}
      </h3>
      {itemStage >= 2 && (
        <p className="text-gray-300">
          {displayedDescription}{itemStage === 2 && <span className="animate-pulse">_</span>}
        </p>
      )}
    </div>
  );
};

export default PortfolioItem;