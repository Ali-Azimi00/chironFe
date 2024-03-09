import React from 'react'
import './../components/component.css'
import LandingBanner from '../components/LandingBanner.tsx'

function Landing() {





    return (
        <React.Fragment>

            <div className='w-screen h-12 absolute'></div>
            <div className='welcome h-0 cursor-none mt-[5rem]' onClick={() => { console.log('hello') }}>
                <a className='cursor-none' href='/Today'> LVLUP</a>
            </div>

            <LandingBanner />
        </React.Fragment>
    )
}

export default Landing;