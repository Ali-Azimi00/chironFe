import React from 'react'
import './component.css'

function Card() {

    ////TODO: Fix responsiveness for card-content

    return (
        <React.Fragment>
            <div className=''>
                <div className='py-2 px-220 border-none rounded-3xl xsm:px-24
                             shadow-card'>
                    <h2 className='font-bold m-2'>
                        Text here
                    </h2>

                    <div className='m-2 flex items-center justify-center'>
                        <img className='animate-spin' alt="tempImage" src="src\assets\react.svg"></img>
                    </div>

                    <p className='font-bold'>
                        description
                    </p>

                    <div className='p-0 m-0'>
                        <div>
                            <div>
                                <button className=' p-2 my-1 bg-red-100 bg-opacity-0'>Click here</button>

                            </div>
                            <div>
                                <button className=' p-2 my-1 bg-red-100 bg-opacity-0'>Click here</button>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;