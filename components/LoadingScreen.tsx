// components/LoadingScreen.tsx
import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Loading page';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50)); // Adjust speed here
      }
    };

    typeText();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <pre className="text-green-500 text-2xl font-sans">
        {text}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
      </pre>
    </div>
  );
};

export default LoadingScreen;