import React, { useEffect, useState } from 'react'
import './../components/component.css'
import LandingBanner from '../components/LandingBanner.tsx'
import LoginModal from '../components/LoginModal.tsx'
import RegisterModal from '../components/RegisterModal.tsx';


function Landing() {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    useEffect(()=>{
        setOpenRegister(openRegister);
    },[openLogin])


    return (
        <React.Fragment>

            <div className=' absolute'></div>
            <div className=' cursor-none 
             z-50 inset-0 m-auto max-w-[600px] 
            welcome 
            '
                onClick={() => { setOpenLogin(true) }}>
                <a className='cursor-none '
                // href='/Today'
                > LVLUP</a>
            </div>

            <div className={openLogin ? "" : "hidden"}>
                <LoginModal
                    setOpenLogin={setOpenLogin}
                    setOpenRegister={setOpenRegister}
                ></LoginModal>
            </div>
            <div className={openRegister ? "" : "hidden"}>
                <RegisterModal setOpenRegister={setOpenRegister}></RegisterModal>
            </div>


            <LandingBanner />
        </React.Fragment>
    )
}

export default Landing;