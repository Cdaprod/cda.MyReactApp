// TypingAnimation.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const TypingAnimation = ({ typingSpeed, deletingSpeed }) => {
  const [text, setText] = useState('');
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const typingSequence = [
    { action: 'add', value: 'C' },
    { action: 'add', value: 'D' },
    { action: 'add', value: 'A' },
    { action: 'add', value: '.' },
    { action: 'add', value: '.' },
    { action: 'add', value: '.' },
    { action: 'add', value: 'prod' },
    { action: 'delete', value: 4 },
    { action: 'add', value: 'smkt' },
    { action: 'delete', value: 4 },
    { action: 'add', value: 'Photography' },
    { action: 'delete', value: 11 },
    { action: 'add', value: 'David Cannan' },
  ];

  useEffect(() => {
    if (sequenceIndex < typingSequence.length) {
      const currentStep = typingSequence[sequenceIndex];
      let timer;

      if (currentStep.action === 'add') {
        timer = setInterval(() => {
          setText((prevText) => prevText + currentStep.value.charAt(charIndex));
          setCharIndex((prevIndex) => prevIndex + 1);

          if (charIndex + 1 === currentStep.value.length) {
            clearInterval(timer);
            setSequenceIndex((prevIndex) => prevIndex + 1);
            setCharIndex(0);
          }
        }, typingSpeed);
      } else {
        timer = setInterval(() => {
          setText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex + 1);

          if (charIndex + 1 === currentStep.value) {
            clearInterval(timer);
            setSequenceIndex((prevIndex) => prevIndex + 1);
            setCharIndex(0);
          }
        }, deletingSpeed);
      }

      return () => clearInterval(timer);
    } else {
      setIsFinished(true);
    }
  }, [sequenceIndex, charIndex, typingSpeed, deletingSpeed]);

  return (
    <span className={`typewriter${isFinished ? '-no-cursor' : ''}`}>
      {text}
    </span>
  );
};

export default TypingAnimation;
