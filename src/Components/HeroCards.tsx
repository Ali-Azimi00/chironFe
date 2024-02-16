import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";


function HeroCards() {

    const [catState, setCatState] = useState('mind')
    const [showCats, setShowCats] = useState(true)

    useEffect(() => {
        loadStatCards();
        loadCatCards();
    }, [showCats])


    const loadStatCards = () => {
        return (
            tasks.filter((task) => task.category === catState).map((task) => (
                <Card fade={false} key={task.icon} taskName={task.name} icon={task.icon}></Card>
            ))
        )
    }

    const loadCatCards = () => {
        return (
            tasks.filter((task) => task.category === 'category').map((task) => (
                <div className='delay-100' key={task.icon} onClick={() => { categoryFork(task) }} >
                    <Card fade={true} taskName={task.name} icon={task.icon}></Card>
                </div>
            ))
        )
    }

    const categoryFork = (task: any) => {
        setTimeout(()=>{setShowCats(false);}, 2800)
        setCatState(task.name)
    }

    return (
        <React.Fragment>
            <div className=''>
                <button onClick={() => { setShowCats(true) }}> physical </button>
                <div className=' 
                    grid 
                    xsm:grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-5
                    gap-6'
                >

                    {showCats ? null : loadStatCards()}

                </div>

                <div className=' 
                    grid 
                    grid-cols-3
                    gap-6'
                >
                    {showCats ? loadCatCards() : null}

                </div>

            </div>

        </React.Fragment>
    )
}

export default HeroCards;
