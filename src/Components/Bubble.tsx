import React from 'react'
import './component.css'

function Bubble(props: any) {

    



    return (
        <React.Fragment>
            <span className='p-1 '>
                <span className={`bg-${props.color}-500 rounded-[100px] bubble`} ></span>
            </span>
        </React.Fragment>
    )

}

export default Bubble;