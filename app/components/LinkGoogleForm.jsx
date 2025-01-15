import React from 'react'

export default function LinkGoogleForm() {
    return (
        <>
            <div className='flex items-center relative mt-6 ml-auto'>
                <img src="./orangeArrow.png" alt="" className='absolute animate-bounceReverse bottom-[-77px] right-5 rotate-90 md:rotate-0 md:right-64' />
                <div className='bg-orange animate-bounceReverse p-2 rounded-xl font-semibold border-2 border-white -rotate-6 absolute right-[3.75rem] bottom-[-56px] md:right-[9.6rem] md:bottom-[-100px]'>Obtiens -20%</div>
            </div>
            <a href="https://app.youform.com/forms/necvp16w" target='_blank' className='bg-black px-4 py-3 text-white text-xl font-semibold rounded-xl'>Rejoindre la waitlist</a>
        </>
    )
}
