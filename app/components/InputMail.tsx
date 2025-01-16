import React from 'react'

export default function InputMail() {
  return (
    <>
      <form className="flex mt-6 items-center px-2 md:px-4 py-2 space-x-2 bg-black text-white rounded-[18px] md:w-[54%] md:mx-auto">
        <img src="./glass.svg" alt="Mail Icon" className="w-4 h-4" />
        <input
          type="email"
          placeholder="Ajoute ici ton plus beau email"
          className="flex-1 bg-black text-white placeholder:text-[13px] placeholder:font-medium outline-none"
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold rounded-xl px-4 py-1 outline-none"
        >
          Envoyer
        </button>
      </form>
      <div className='flex items-center relative mt-2 ml-auto'>
        <img src="./orangeArrow.png" alt="" className='absolute animate-bounceReverse bottom-[-24px] right-5 rotate-90 md:rotate-0 md:right-32'/>
        <div className='bg-orange animate-bounceReverse p-2 rounded-xl font-semibold border-2 border-white -rotate-6 absolute right-[3.75rem] bottom-[-56px] md:right-6 md:bottom-[-43px]'>Obtiens -20%</div>
      </div>
    </>
  )
}
