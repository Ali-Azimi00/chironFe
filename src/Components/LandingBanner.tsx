import React, { useState } from 'react'
import Bubble from './../components/Bubble.tsx'
import './../components/component.css'

function LandingBanner() {

    const [colorList] = useState(['red', 'blue', 'green'])
    const rowSeparation = '-m-3';


    let rowTotal = 3;

  
  


    const loadBubbles = (amt: number, row: string) => {
        var list: any = [];
        let count=0;
        for (let i = 0; i < amt; i++) {
            let bb= "b"+(count+1);

            colorList.forEach((bc: string) => {
                list.push(<Bubble color={bc} key={"Key: row-" + row  + "BB-" + bb+ "Color-"+ bc } />)
                console.log("Key: row-" + row + "BB-" + bb+ "Color-"+ bc )
            })
            count++
        }
        return (
            list
        )
    }

    const loadRows = () => {
        var list: any = [];
        let count=0;
        for (let i = 0; i < rowTotal; i++) {
            let rA = "rowA:"+(count+i+1)
            let rB = "rowB:"+(count+i+1)

            list.push(
                <div key="ra" className={'bubbleRow ' + rowSeparation}>
                    {loadBubbles(26,rA)}
                </div>)
            list.push(
                <div  key="rb" className={'bubbleRow ' + rowSeparation}>
                    {loadBubbles(25,rB)}
                </div>
            )
            count++;
        }
        return (
            list
        )

    }
    return (

        <React.Fragment>
            <div className='bg-black w-screen overflow-hidden 
                            py-4 overflow-hidden bubbleContainer'>

                {/* <div className={'bubbleRow mt-1 rowAnimate ' + rowSeparation} >
                    {loadBubbles(25, "rAlpha")}
                </div> */}
                <div>
                    {loadRows()}
                </div>
                {/* <div className={'bubbleRow mb-1' + rowSeparation}>
                    {loadBubbles(26, "rOmega")}
                </div> */}

            </div>
        </React.Fragment>
    )

}

export default LandingBanner;