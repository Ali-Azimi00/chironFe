import React from 'react'
import Bubble from './../components/Bubble.tsx'
import './../components/component.css'

function Landing() {


    const loadBubbles = (amt: number) => {
        var list: any = [];
        const colorList = ['red', 'blue', 'green']

        for (let i = 0; i < amt; i++) {
            colorList.forEach((bg: string) => {
                list.push(<Bubble color={'red'} />)
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
                {/* <Bubble color={'red'} />
                <Bubble color={'red'} />
                <Bubble color={'red'} />
                <Bubble color={'red'} />
                <Bubble color={'red'} /> */}

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