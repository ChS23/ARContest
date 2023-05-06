import React from 'react';
import Header from '../components/Header';
import RunningLine from '../components/RunningLine'


function Home()
{
    return (
        <div className='Home'>
            <div className='flex flex-col h-screen w-screen overflow-hidden scrollbar-none bg-stone-950 border-2 border-stone-100'>
                <Header />
                <RunningLine string="Djnfdf dflfj hj"/>
            </div>
        </div>
    )
}

export default Home