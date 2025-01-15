import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ThirdSection() {
    const sectionRef = useIntersectionObserver();

    return (
        <section className="flex flex-col md:grid md:grid-cols-5 gap-8 items-center px-5 md:px-20">
            <div
                className="col-span-2 flex flex-col justify-center"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-5 md:leading-[52px]">
                    Bien plus que des exos, de vraies programmes.
                </h2>
                <p className="text-xl leading-6">
                    Trouve des programmes uniques, utilisé par des milliers de joueurs
                    pour tous types de jeux, pour enfin dominer tes bêtes noir à la table.
                </p>
            </div>
            <div
                ref={sectionRef}
                className="col-span-3 relative transform scale-75 opacity-0 transition-all duration-700 ease-in-out"
            >
                <img src="/imageProgram.png" alt="" className="w-3/5 md:w-[33%] h-auto mx-auto" />
                <img src="/softCard.png" alt="" className="absolute top-1/4 left-[11%] w-[27%]" />
                <img src="/softCardBlack.png" alt="" className="absolute top-[60%] left-[60%] w-[27%]" />
            </div>
        </section>
    );
}
