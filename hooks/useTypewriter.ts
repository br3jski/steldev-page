// hooks/useTypewriter.ts
import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayedText('');
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const typeNextChar = () => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        setTimeout(typeNextChar, speed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
      }
    };

    typeNextChar();

    return () => {
      // No need to clear timeout as it's a recursive function
    };
  }, [text, speed, isTyping]);

  return { displayedText, isComplete, startTyping };
};