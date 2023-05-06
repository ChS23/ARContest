import Marquee from 'react-double-marquee';


function RunningLine({string})
{
    return(
        <div className='text-stone-100 w-screen h-12 fixed bottom-0 border-t-2 border-stone-100'>
            <Marquee direction='left' speed="0.04" delay="3000" scrollWhen="always">{string.toString()}</Marquee>
        </div>
    )
}

export default RunningLine