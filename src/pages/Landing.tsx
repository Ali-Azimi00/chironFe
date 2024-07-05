import React from 'react'
import './../components/component.css'
import LandingBanner from '../components/LandingBanner.tsx'

function Landing() {





    return (
        <React.Fragment>

            <div className=' absolute'></div>
            <div className=' cursor-none 
            content-center justify-content-center absolute z-50 inset-0  
            m-auto w-full max-w-[600px] h-[3px]
            xsm:text-9xl mt-[10%]
            welcome 
            '
                onClick={() => { console.log('hello') }}>
                <a className='cursor-none m-0' href='/Today'> LVLUP</a>
            </div>

            <LandingBanner />
        </React.Fragment>
    )
}

export default Landing;