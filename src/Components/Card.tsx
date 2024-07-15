import React, { useEffect, useState } from 'react'
import './component.css'



function Card(props: any) {

    const [hoverStat, setHoverStat] = useState("");
    const [aniTog, setAniTog] = useState(false);


    useEffect(() => {
        if (aniTog == true) {
            // setHoverStat(' animate-[wiggle_1s_ease-in-out_infinite] duration-300 ')          
        }
        else {
            setHoverStat("")
        }

    }, [aniTog])

 
    return (
        <React.Fragment>
            <div onClick={() => {setAniTog(!aniTog)}}
                className={'transition ease-linear transform  hover:animate-pulse '+
                            'duration-500 inline '+ 
                            'xl:min-w-full '}
                // style={{ backdropFilter: "blur(20px)"}}
            >
                <div className='py-2 px-220 border-none rounded-3xl 
                                xsm:mx-auto
                                taskCard h-m'
                >
                    <h2 className='font-bold mt-4'>
                        {props.taskName}
                    </h2>

                    <div className='taskCardImg mx-auto mt-2 flex '>
                        <img className={' ' + hoverStat}  alt="tempImage" src={props.icon}></img>
                    </div>
                    {/* <p className=''>
                        description
                    </p> */}

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