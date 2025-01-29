// components/PackageItem.tsx
import React from 'react';

interface PackageItemProps {
  name: string;
  description: string;
  price: string;
  features: string[];
}

const PackageItem: React.FC<PackageItemProps> = ({ name, description, price, features }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-green-500">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-xl font-bold text-green-400 mb-4">{price}</p>
      <ul className="text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            ✓ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageItem;