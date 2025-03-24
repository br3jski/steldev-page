import React from 'react';
import Accordion from '../../components/Accordion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Consulting',
      content:
        'Placeholder text for Consulting. We will provide details about our consulting services here.',
    },
    {
      title: 'IT Administration',
      content:
        'Placeholder text for IT Administration. Details about our IT administration services will go here.',
    },
    {
      title: 'DevOps',
      content:
        'Placeholder text for DevOps. We will describe our DevOps offerings here.',
    },
    {
      title: 'Website for you',
      content:
        'Placeholder text for Website for you. Information about our website creation services will be placed here.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1>Our Services</h1>
      <div className="mt-4">
        {services.map((service, index) => (
          <Accordion key={index} title={service.title}>
            {service.content}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Services;