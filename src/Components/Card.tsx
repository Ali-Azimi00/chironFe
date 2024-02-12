import React, { useEffect, useState } from 'react'
import './component.css'

function Card(props: any) {

    const [hoverStat, setHoverStat] = useState("");
    const [aniTog, setAniTog] = useState(false)


    useEffect(() => {
        if (aniTog == true) {
            setHoverStat("animate-bounce ease-linear")
        }
        else {
            setHoverStat("")
        }

    }, [aniTog])



    return (
        <React.Fragment>
            <div onClick={() => {
                setAniTog(!aniTog);
            }}
                className='hover:animate-pulse ease-linear transform 
                            hover:scale-110 transition duration-500 inline 
                            xl:min-w-full'
                style={{ backdropFilter: "blur(10px)" }}
            >
                <div className='py-2 px-220 border-none rounded-3xl 
                                xsm:px-16
                                shadow-card'
                >
                    <h2 className='font-bold mt-4 xsm:mt-0 '>
                        {props.taskName}
                    </h2>

                    <div className='m-12 xsm:m-2 flex items-center justify-center  icon-color2 icon-color'>
                        <img className={hoverStat}  alt="tempImage" src={props.icon}></img>
                    </div>
                    <p className=''>
                        description
                    </p>

                    <div className='p-0 mb-8 xsm:mb-2'>
                        <div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;