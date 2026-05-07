import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDelay?: number;
  loop?: boolean;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDelay = 2000,
  loop = true,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(typeSpeed);

        if (currentText === fullWord) {
          // Finished typing word, start pause
          setTimeout(() => setIsDeleting(true), pauseDelay);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(deleteSpeed);

        if (currentText === "") {
          setIsDeleting(false);
          // Move to next word if not looping or not at end
          if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
          } else if (loop) {
            setCurrentWordIndex(0);
          } else {
            // Stop if no loop and at end
            return;
          }
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, pauseDelay, loop, speed]);

  return (
    <span className={className}>
      {currentText}
      <span className="ml-1 border-r-4 border-[#FF5722] animate-pulse"></span>
    </span>
  );
};

export default TypingAnimation;
