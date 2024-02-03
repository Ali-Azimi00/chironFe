import React from 'react'
import './component.css'

function Card(props:any) {





    return (
        <React.Fragment>
            <div className='hover:animate-pulse ease-linear transform hover:scale-110 transition duration-500 inline'>
                <div className='py-2 px-220 border-none rounded-3xl xsm:px-24
                             shadow-card'>
                    <h2 className='font-bold mt-4 '>
                        {props.taskName}
                    </h2>

                    

                    <div className='m-12 xsm:m-8 flex items-center justify-center'>
                        <img className='animate' style={{filter:"invert(.7)"}}  alt="tempImage" src={props.icon}></img>
                    </div>

                    <p className=''>
                        description
                    </p>

                    <div className='p-0 mb-8'>
                        <div>
                        </div>
                    </div>



                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;