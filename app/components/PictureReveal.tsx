'use client'

import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface PictureRevealProps {
  src: string;
  alt: string;
  className?: string;
}

const PictureReveal: React.FC<PictureRevealProps> = ({ src, alt, className }) => {
  const [isVisible, ref] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default PictureReveal;
