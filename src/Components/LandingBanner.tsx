import React, { useState } from 'react'
import Bubble from './../components/Bubble.tsx'
import './../components/component.css'

function LandingBanner() {

    const [colorList] = useState(['red', 'blue', 'green'])
    const rowSeparation = '-m-3';
    const rowTotal = 2;


    const loadBubbles = (amt: number) => {
        var list: any = [];
        for (let i = 0; i < amt; i++) {
            colorList.forEach((bc: string) => {
                list.push(<Bubble color={bc} />)
            })
        }
        return (
            list
        )
    }

    const loadRows = () => {
        var list: any = [];
        for (let i = 0; i < rowTotal; i++) {
            list.push(
                <div className={'bubbleRow ' + rowSeparation}>
                    {loadBubbles(26)}
                </div>)
            list.push(
                <div className={'bubbleRow ' + rowSeparation}>
                    {loadBubbles(25)}
                </div>
            )
        }
        return (
            list
        )

    }
    return (

        <React.Fragment>
            <div className='bg-black w-screen overflow-hidden 
                            py-4 overflow-hidden bubbleContainer'>

                <div className={'bubbleRow mt-1 rowAnimate ' + rowSeparation} >
                    {loadBubbles(25)}
                </div>
                <div>
                    {loadRows()}
                </div>
                <div className={'bubbleRow mb-1' + rowSeparation}>
                    {loadBubbles(26)}
                </div>

            </div>
        </React.Fragment>
    )

}

export default LandingBanner;