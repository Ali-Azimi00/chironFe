import React from 'react'
import './component.css'

function Bubble(props: any) {

    const color = props.color;
    console.log("color: " + color)



    return (
        <React.Fragment>
            <span className='p-1 '>
                {/* <span className={`bg-red-700 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-green-700 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-blue-700 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-orange-700 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-purple-700 rounded-[100px] bubble`} ></span> */}

                <span className={`bg-${props.color}-700 rounded-[100px] bubble`} ></span>
            </span>
        </React.Fragment>
    )

}

export default Bubble;