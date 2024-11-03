// components/PortfolioItem.tsx
import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2 text-green-500">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default PortfolioItem;