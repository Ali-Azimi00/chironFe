import React from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";


function HeroCards() {

    function loadCards() {
        return (
            tasks.map((task) => (
                <Card taskName={task.name} icon={task.icon}></Card>
            ))
        )
    }

    return (
        <React.Fragment>
            <div className=''>
                <div className=' 
                    grid 
                    xsm:grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-6
                    gap-6'>
                    {loadCards()}
                  
                </div>
            </div>

        </React.Fragment>
    )
}

export default HeroCards;
