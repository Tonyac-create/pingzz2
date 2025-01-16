import React from 'react'

export default function FiveSection() {
    return (
        <section className='mt-24 mx-2'>
            <div className='bg-purple flex justify-center items-center text-xl md:text-3xl py-24 rounded-[16px] text-center'>
                <p className='flex mx-auto w-[65%] md:w-[55%]'>
                    Améliore enfin tes gestes, et rends toi compte.
                    Grâce à nos statistiques détaillées, ta progression
                    deviens visible, et te garde motivé. Trouve facilement
                    tes points forts, et tes points faibles, pour en faire des
                    gestes exceptionnels digne de ton vrai potentiel.
                </p>
            </div>
            <div className='bg-yellow flex flex-col justify-center items-center text-xl md:text-3xl py-24 rounded-[16px] text-center'>
                <p className='mx-auto w-[65%] md:w-[55%]'>
                    La seul app du marché, qui géres tes
                    entrainements, et qui le fait bien.
                </p>
                <p className='mx-auto w-[65%] md:w-[55%] mt-4'>
                    Trouve un programme et.. c’est tout, en fait.
                    Nous faisons le reste, nous trouvons des exercices,
                    un objectifs détaillés, il te reste plus qu’à jouer.
                    Simple comme  bonjour.
                </p>
            </div>
            <div className='bg-black text-white flex flex-col justify-center items-center text-xl md:text-3xl py-24 rounded-[16px] text-center'>
                <p className='mx-auto w-[65%] md:w-[55%]'>
                    Oublie l'impossible, les statistiques complexes. Avec Pingzz, chaque échange compte,
                    chaque moment est une occasion de progresser. Autorise toi à rêver encore une fois de ce classement.
                    Vis pleinement ta passion du tennis de table.
                </p>
                <p className='mx-auto w-3/4 text-4xl font-semibold mt-6'>Smash your limits</p>
            </div>
        </section>
    )
}
