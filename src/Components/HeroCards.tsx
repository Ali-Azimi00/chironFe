import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";
import './component.css'


function HeroCards() {

    const [catState, setCatState] = useState('')
    const [showCats, setShowCats] = useState(true)
    const [fadeStat, setFadeStat] = useState("")
    const [fadeInStat, setFadeInStat] = useState("")

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
                <div className='delay-100 mx-auto ' key={task.icon} onClick={() => { categoryFork(task) }} >
                    <Card fade={true} taskName={task.name} icon={task.icon}></Card>
                </div>
            ))
        )
    }

    const categoryFork = (task: any) => {
        setTimeout(() => { setShowCats(false) }, 2500)
        setCatState(task.name)
    }

    const fadeAnimation = () => {
        setFadeStat("cardFadeOut");
        setFadeInStat('cardFadeIn')
    }

    return (
        <React.Fragment>
            <div className='mx-auto flex' 
            style={{justifyContent:"center"}}
            >
                <div 
                    className={fadeInStat + 
                        ' grid ' +
                        'xsm:grid-cols-2 ' +
                        'sm:grid-cols-3 ' +
                        'md:grid-cols-4 ' +
                        'lg:grid-cols-5 ' +
                        'xl:grid-cols-6 ' +
                        'gap-6'}
                        style={{ opacity: "0%"}}
                >

                    {showCats ? null : loadStatCards()}

                </div>

                <div onClick={() => { fadeAnimation() }}
                    className={'grid grid-cols-3 xsm:grid-cols-1 gap-6  '
                        + fadeStat}
                >
                    {showCats ? loadCatCards() : null}

                </div>

            </div>

        </React.Fragment>
    )
}

export default HeroCards;
