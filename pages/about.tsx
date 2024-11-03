// pages/about.tsx
import React from 'react';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-500">About</h1>
        <Terminal />
      </div>
    </Layout>
  );
};

export default AboutPage;