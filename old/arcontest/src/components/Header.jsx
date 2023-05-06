import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../public/logo.svg';


function Header()
{
    return (
        <div className='Header'>
            <header>
                <nav className='border-b-2 border-stone-100 w-screen sm:hiden md:h-20 lg:h-24 xl:h-28 2xl:h-32'>
                    <div className='max-w-screen-xl flex flex-nowrap items-center justify-start mx-auto w-full h-full'>
                        <Link to="/" className='flex items-center'>
                            <img src="/logo.svg" alt="Home" className='h-16'/>
                        </Link>
                        <div className='items-center justify-between pl-12'>
                            <ul className='flex flex-row p-4 text-stone-100'>
                                <li>
                                    <Link to="/" className='block text-2xl mx-8 font-medium'>главная</Link>
                                </li>
                                <li>
                                    <Link to="/novel" className='block text-2xl mx-8 font-medium'>новеллы</Link>
                                </li>
                                <li>
                                    <Link to="/findteam" className='block text-2xl mx-8 font-medium'>найти комманду</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className='bg-[#00FF00] text-2xl font-bold px-8 pt-3 pb-4 absolute lg:right-24 sm:invisible md:invisible lg:visible'>отправить новеллу</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header