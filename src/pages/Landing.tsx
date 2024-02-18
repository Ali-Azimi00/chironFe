import React, { useState } from 'react'
import Bubble from './../components/Bubble.tsx'
import './../components/component.css'

function Landing() {

    const [colorList] = useState(['red', 'blue', 'green','purple'])


    const loadBubbles = (amt: number) => {
        var list: any = [];
        // const colorList = ['red', 'blue', 'green']

        for (let i = 0; i < amt; i++) {
            colorList.forEach((bc:string) => {
                list.push(<Bubble color={bc} />)
            })
        }
        return (
            list
        )
    }



    return (
        <React.Fragment>
            <div className='bg-black w-screen overflow-hidden 
            py-4 overflow-hidden bubbleContainer'>
                <div className='bubbleRow' >
                    {loadBubbles(25)}
                </div>
                <div className='bubbleRow' >
                    {loadBubbles(26)}
                </div>
                <div className='bubbleRow' >
                    {loadBubbles(25)}
                </div>
                <div className='bubbleRow' >
                    {loadBubbles(26)}
                </div>

            </div>
        </React.Fragment>
    )
}

export default Landing;