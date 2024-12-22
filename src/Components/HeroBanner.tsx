import React from 'react';
import '../App.css'
// import { tasks } from '../constants';
import HeroCards from '../components/HeroCards';


function HeroBanner(props:any) {

    // const physicalIcon = (category: string) => {
    //     tasks.find((task) => { task.name === category })?.icon

    //     return tasks[1].icon
    // }

    // console.log (physicalIcon())


    return (
        <React.Fragment>

            <div className='-mb-48 justify-center '>
                <div className='fade-img p-3'>
                    {/* <div className='catBubble'>


                   </div> */}

                    <div className='cardContainer mb-12'>
                        <div>
                            <HeroCards catProg={props.catProg} setXpList={props.setXpList}></HeroCards>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}


export default HeroBanner;