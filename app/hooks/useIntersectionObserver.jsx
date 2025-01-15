// src/hooks/useIntersectionObserver.js
import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        element.classList.add('scale-100', 'opacity-100');
                        element.classList.remove('scale-75', 'opacity-0');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return ref;
}
