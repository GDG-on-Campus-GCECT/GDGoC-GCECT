import React, { useState, useEffect } from 'react';
import useScramble from '../../hooks/useScramble';
import './ColorfulTitle.css';

function ColorfulTitle({ mainText = "GDG ON CAMPUS", subText = "GCECT" }) {
  const [boldIndex, setBoldIndex] = useState(0);
  const scrambledSubText = useScramble(subText, 50, 5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoldIndex((prevIndex) => (prevIndex + 1) % mainText.length);
    }, 300);

    return () => clearInterval(interval);
  }, [mainText]);

  return (
    <div className="text-center">
      {/* 👇 Changed "display-2" to "display-1" */}
      <h1 className="display-1 fw-bold text-shadow colorful-main-title">
        "
        {mainText.split('').map((char, index) => {
          const currentWord = mainText.split(' ').find(w => mainText.indexOf(w) <= index && mainText.indexOf(w) + w.length > index) || '';

          let colorClass = '';
          if (currentWord === 'GDG') colorClass = 'text-google-green';
          else if (currentWord === 'ON') colorClass = 'text-google-yellow';
          else if (currentWord === 'CAMPUS') colorClass = 'text-google-blue';

          return (
            <span
              key={index}
              className={`${colorClass} ${index === boldIndex ? 'char-bold' : 'char-normal'}`}
            >
              {char}
            </span>
          );
        })}
        "
      </h1>
      
      {/* 👇 Changed "display-4" to "display-2" */}
      <h2 className="display-1 fw-bold text-shadow colorful-sub-title">
        {scrambledSubText}
      </h2>
    </div>
  );
}

export default ColorfulTitle;