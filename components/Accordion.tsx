import React, { useState, ReactNode } from 'react';

interface Service {
  service: string;
  price?: string;
  unit?: string;
}

interface AccordionProps {
  title: string;
  services?: Service[];
}

const Accordion: React.FC<AccordionProps> = ({ title, services }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-green-500">{title}</h3>
        <svg
          className={`h-5 w-5 transition-transform duration-200 text-green-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
          
          
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && services && services.length > 0 ? (        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 font-bold ">Service</th>
              <th className="py-2 px-4 font-bold ">Price</th>
              <th className="py-2 px-4 font-bold ">Unit</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">{service.service}</td>
                <td className="py-2 px-4">
                  {service.price ? (
                    <span className="font-bold">{service.price}</span>
                  ) : null}
                </td>
                <td className="py-2 px-4">{service.unit || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : isOpen && (        
        <div>
            
        </div>
      )}
    </div>
  );
};

export default Accordion;