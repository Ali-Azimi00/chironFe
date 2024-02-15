import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";


function HeroCards() {

    const [catState] = useState('run')

    useEffect(() => {
        loadCards();
    })


    const loadCards = () => {
        
        return (
            tasks.filter((task) => task.category === 'mind').map((task) => (
                <Card key={task.icon} taskName={task.name} icon={task.icon}></Card>
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
                    xl:grid-cols-5
                    gap-6'
                >

                    {loadCards()}

                </div>
            </div>

        </React.Fragment>
    )
}

export default HeroCards;
