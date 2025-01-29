// components/ServicesItem.tsx
import React from 'react';

interface ServiceItem {
  service: string;
  price?: string;
  unit?: string;
}

interface ServicesItemProps {
  title: string;
  services: ServiceItem[];
  annotation?: string;
}

const ServicesItem: React.FC<ServicesItemProps> = ({ title, services, annotation }) => {
  // Funkcja do renderowania adnotacji z obsługą nowych linii
  const renderAnnotation = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
      <h3 className="text-2xl font-semibold mb-4 text-green-500">{title}</h3>
      <table className="w-full text-left mb-4">
        <thead>
          <tr>
            <th className="pb-2 text-green-400 w-1/2">Service</th>
            <th className="pb-2 text-green-400 w-1/4 text-right">Price</th>
            <th className="pb-2 text-green-400 w-1/4 text-right">Unit</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2 text-gray-300">{item.service}</td>
              <td className="py-2 text-gray-300 text-right">
                {item.price || 'Contact us'}
              </td>
              <td className="py-2 text-gray-300 text-right">
                {item.unit || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {annotation && (
        <p className="text-sm text-gray-400 mt-4">
          * {renderAnnotation(annotation)}
        </p>
      )}
    </div>
  );
};

export default ServicesItem;