import React, { useState, ReactNode } from 'react';

interface Service {
  service: string;
  price?: string;
  unit?: string;
}

interface AccordionProps {
  title: string;
  annotation?: string;
  children?: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, annotation, children }) => {

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
      {isOpen && (
        <div className="p-4">
            {children}
            {annotation && <p className="mt-2 text-sm text-gray-400">{annotation}</p>}
        </div>
      )}
    </div>
  );
};

export default Accordion;