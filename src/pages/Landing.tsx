import React, { useState } from 'react'
import './../components/component.css'
import LandingBanner from '../components/LandingBanner.tsx'
import LoginModal from '../components/LoginModal.tsx'


function Landing() {
    const [openModal, setOpenModal] = useState(false)




    return (
        <React.Fragment>

            <div className=' absolute'></div>
            <div className=' cursor-none 
            absolute z-50 inset-0 m-auto max-w-[600px]
            xsm:text-9xl 
            welcome 
            '
                onClick={() => { setOpenModal(true)}}>
                <a className='cursor-none m-0'
                // href='/Today'
                > LVLUP</a>
            </div>

            <div className={openModal ? "" : "hidden"}>
                <LoginModal setOpenModal={setOpenModal}></LoginModal>
            </div>

            <LandingBanner />
        </React.Fragment>
    )
}

export default Landing;