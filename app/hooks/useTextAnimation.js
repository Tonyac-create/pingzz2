import { useState, useEffect } from "react";

const useTextAnimation = () => {
  const text = `
        La meilleure app pongiste du marché,
         qui t’analyse enfin correctement, 
         et t’aide à réaliser tes perfs rêvés.
        `;
  const [colorIndex, setColorIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const italicWords = ["pongiste", "t’analyse", "enfin", "tes", "perfs"];

  const normalizeWord = (word) =>
    word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const words = text.split(/\b/);
  const characters = words.flatMap((word) => {
    const isItalic = italicWords.some(
      (italicWord) => normalizeWord(italicWord) === normalizeWord(word.trim())
    );
    return word.split("").map((char) => ({
      char,
      isNewLine: char === "\n",
      isItalic,
    }));
  });

  useEffect(() => {
    if (!isAnimating || colorIndex >= characters.length) return;

    const interval = setInterval(() => {
      setColorIndex((prevIndex) => prevIndex + 1);
    }, 100);

    if (colorIndex >= characters.length) {
      setIsAnimating(false);
    }

    return () => clearInterval(interval);
  }, [colorIndex, isAnimating, characters]);

  return { colorIndex, characters };
};

export default useTextAnimation;
