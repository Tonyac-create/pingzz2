import useTextAnimation from "../hooks/useTextAnimation";
import { useState, useEffect } from "react";


const AnimatedText = () => {
    const { colorIndex, characters } = useTextAnimation();
   
    return (
        <h2 className="text-center">
            {characters.map((item, index) => (
                <span
                    key={index}
                    className={`text-lg md:text-[44px] md:leading-[56px] font-medium
                        ${index < colorIndex ? 'opacity-100' : 'opacity-0'}
                        ${item.isItalic ? 'italic' : ''}
                    `}
                    style={{
                        display: item.isNewLine ? 'block' : 'inline',
                    }}
                >
                    {item.char}
                </span>
            ))}
        </h2>
    );
};

export default AnimatedText;


