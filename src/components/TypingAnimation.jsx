// TypingAnimation.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const TypingAnimation = ({ typingSpeed, deletingSpeed }) => {
  const [text, setText] = useState('');
  const [sequenceIndex, setSequenceIndex] = useState(0);

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
    const currentStep = typingSequence[sequenceIndex];
    let timer;

    if (currentStep.action === 'add') {
      timer = setInterval(() => {
        setText((prevText) => prevText + currentStep.value.charAt(prevText.length - text.length));
        if (text.length === prevText.length + currentStep.value.length) {
          clearInterval(timer);
          setSequenceIndex((prevIndex) => (prevIndex + 1) % typingSequence.length);
        }
      }, typingSpeed);
    } else {
      timer = setInterval(() => {
        setText((prevText) => prevText.slice(0, -1));
        if (text.length === prevText.length - currentStep.value) {
          clearInterval(timer);
          setSequenceIndex((prevIndex) => (prevIndex + 1) % typingSequence.length);
        }
      }, deletingSpeed);
    }

    return () => clearInterval(timer);
  }, [text, sequenceIndex, typingSpeed, deletingSpeed]);

  return (
    <span className="typewriter">
      {text}
    </span>
  );
};

export default TypingAnimation;
