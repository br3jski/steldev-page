// components/CompanyItem.tsx
import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface CompanyItemProps {
  title: string;
  description: string;
  details: string;
  isActive: boolean;
  onComplete: () => void;
}

const CompanyItem: React.FC<CompanyItemProps> = ({ title, description, details, isActive, onComplete }) => {
  const [itemStage, setItemStage] = useState(0);
  const { displayedText: displayedTitle, isComplete: titleComplete, startTyping: startTitle } = useTypewriter(title, 50);
  const { displayedText: displayedDescription, isComplete: descriptionComplete, startTyping: startDescription } = useTypewriter(description, 20);
  const { displayedText: displayedDetails, isComplete: detailsComplete, startTyping: startDetails } = useTypewriter(details, 10);

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
      startDetails();
      setItemStage(3);
    }
  }, [descriptionComplete, startDetails, itemStage]);

  useEffect(() => {
    if (detailsComplete && itemStage === 3) {
      setTimeout(() => {
        onComplete();
        setItemStage(4);
      }, 500);
    }
  }, [detailsComplete, onComplete, itemStage]);

  if (!isActive && itemStage === 0) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2 text-green-500">
        {displayedTitle}{itemStage === 1 && <span className="animate-pulse">_</span>}
      </h3>
      {itemStage >= 2 && (
        <p className="text-gray-300 mb-4">
          {displayedDescription}{itemStage === 2 && <span className="animate-pulse">_</span>}
        </p>
      )}
      {itemStage >= 3 && (
        <p className="text-gray-400 text-sm">
          {displayedDetails}{itemStage === 3 && <span className="animate-pulse">_</span>}
        </p>
      )}
    </div>
  );
};

export default CompanyItem;