tsx
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  text: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <h3
        className="accordion-title cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </h3>
      {isOpen && <div className="accordion-content">{text}</div>}
    </div>
  );
};

export default AccordionItem;