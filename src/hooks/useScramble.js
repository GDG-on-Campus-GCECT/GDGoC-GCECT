import { useState, useEffect, useRef } from "react";

const useScramble = (text, speed = 50, revealDelay = 1000) => {
  const [scrambledText, setScrambledText] = useState(text);
  const intervalRef = useRef();
  const chars = "!<>-_\\/[]{}—=+*^?#";

  useEffect(() => {
    let iteration = 0;

    const startScramble = () => {
      iteration = 0; // 👈 Add this line to reset the animation
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        const newText = text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setScrambledText(newText);

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          // Wait for revealDelay then restart the animation
          setTimeout(startScramble, revealDelay);
        }

        iteration += 1 / 3;
      }, speed);
    };

    startScramble();

    // Cleanup function to clear interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, [text, speed, revealDelay]);

  return scrambledText;
};

export default useScramble;
