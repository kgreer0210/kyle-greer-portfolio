import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
