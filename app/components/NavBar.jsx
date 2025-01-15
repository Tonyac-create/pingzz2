import { useState } from 'react'
import LinksNavbar from './LinksNavbar';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full font-roboto top-0 z-50">
            <nav className="bg-black text-white flex justify-between items-center px-6 w-[300px] h-[63px] md:w-[450px] rounded-[16px] mx-auto mt-8 animate-slideUpFadeIn">
                <h1 className="font-medium text-xl">Pingzz</h1>
                <LinksNavbar className="hidden md:flex gap-4 " />
                <div className="md:hidden flex justify-end">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-6 h-6"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <img src="/xmark.svg" alt="" className='transition-transform duration-400 rotate-90 hover:rotate-180' />
                        ) : (
                            <img src="/bars.svg" alt="" className='transition-transform duration-400 hover:scale-110' />
                        )}
                    </button>
                </div>
                <div
                    className={`absolute top-full right-0 bg-black text-white p-4 w-full rounded-[16px] transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <LinksNavbar className='flex flex-col my-auto gap-5 text-lg transition-all duration-700 transform' />
                </div>
            </nav>
        </header>
    )
}