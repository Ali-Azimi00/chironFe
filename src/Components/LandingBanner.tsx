import React from 'react'
import Bubble from './Bubble.tsx'
import './../components/component.css'

function LandingBanner() {

    // const [colorList] = useState(['purple', 'gray'])
    const rowSeparation = '-m-3';

    let rowTotal = 6;
    let rowCount = 18;

    const loadBubbles = (amt: number, row: string) => {
        var list: any = [];
        let count = 0;
        for (let i = 0; i < amt; i++) {
            let bb = "b" + (count + 1);

            // colorList.forEach((bc: string) => {
            let bc = 'black'
            let randmNum = Math.floor(Math.random() * 2)

            if (randmNum) {
                list.push(<Bubble color={'purple'} key={"Key: row-" + row + "BB-" + bb + "Color-" + bc} />)
            } else {
                list.push(<Bubble color={'gray'} key={"Key: row-" + row + "BB-" + bb + "Color-" + bc} />)
            }

            // })
            count++
        }
        return (
            list
        )
    }

    const loadRows = () => {
        var list: any = [];
        let count = 0;
        for (let i = 0; i < rowTotal; i++) {
            let rA = "rowA:" + (count + i)
            let rB = "rowB:" + (count + i)

            list.push(
                <div key={"ra" + rA} className={'bubbleRow ' + rowSeparation}>
                    {loadBubbles(rowCount, rA)}
                </div>)
            list.push(
                <div key={"rb" + rB} className={'bubbleRow ' + rowSeparation}>
                    {loadBubbles(rowCount, rB)}
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
                            -py-8 overflow-hidden  bubbleContainer '>
                <div>
                    {loadRows()}
                </div>
            </div>
        </React.Fragment>
    )

}

export default LandingBanner;