import React from 'react'

export default function SecondSection() {
    return (
        <section className='bg-black text-white flex flex-col md:flex-row justify-center mx-auto py-14 w-3/4 rounded-[24px] my-36'>
            <div className='bg-black px-4 flex flex-col justify-center items-center gap-2 md:border-b-0 md:border-r md:border-white'>
                <p className='font-semibold text-xl lg:text-2xl text-center'>+4 programmes complets</p>
                <p className='text-slate-400 font-semibold'>Pour tous types de jeux</p>
            </div>
            <div className='border border-white w-1/2 mx-auto flex my-2 md:hidden'></div>
            <div className='bg-black px-4 flex flex-col justify-center items-center gap-2 md:border-b-0 md:border-r md:border-white'>
                <p className='font-semibold text-xl lg:text-2xl text-center'>+27 exercices de pros</p>
                <p className='text-slate-400 font-semibold'>Pour tous les niveaux</p>
            </div>
            <div className='border border-white w-1/2 mx-auto flex my-2 md:hidden'></div>
            <div className='bg-black px-4 flex flex-col justify-center items-center gap-2'>
                <p className='font-semibold text-xl lg:text-2xl text-center'>+350 points en saison</p>
                <p  className='text-slate-400 font-semibold'>En moyenne grâce à Pingzz</p>
            </div>
        </section>
    )
}
