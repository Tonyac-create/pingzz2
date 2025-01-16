"use client";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  const [isVisible, ref] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`flex justify-center items-center text-xl md:text-3xl md:leading-10 py-24 rounded-[16px] text-center ${className} transition-all duration-1000 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default TextReveal;
