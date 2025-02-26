import React from "react";
import PictureReveal from "./PictureReveal";

export default function FourSection() {
  return (
    <section className="flex flex-col-reverse mt-36 md:grid md:grid-cols-5 gap-8 items-center px-5 md:px-20 md:mt-10">
      <div className="col-span-3 relative">
        <PictureReveal
          src="/imageLebrun.png"
          alt=""
          className="w-3/5 md:w-[33%] h-auto mx-auto"
        />
        <PictureReveal
          src="/beginCard.png"
          alt=""
          className="absolute top-1/4 left-[11%] w-[27%]"
        />
        <PictureReveal
          src="/EvolutionCard.png"
          alt=""
          className="absolute top-[60%] left-[60%] w-[27%]"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-5 leading-[52px]">
          Fan des lebruns ? Imites les dès aujourd’hui..
        </h2>
        <p className="text-xl leading-6">
          Pas de blablas, que des exos de joueurs pro. Atteints les plus hauts
          niveaux d’entrainements. Rêver redeviens possible.
        </p>
      </div>
    </section>
  );
}
