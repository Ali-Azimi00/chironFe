import React from 'react';
import Card from '../components/Card';
import { tasks } from "../constants";


function HeroCards() {

    return (
        <React.Fragment>
            <div className=' '>
                <div className=' 
                grid 
                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-5
                  xl:grid-cols-6
                  gap-6'>
                    <Card taskName={tasks[0].name} icon={tasks[0].icon}></Card>
                    <Card taskName={tasks[1].name} icon={tasks[1].icon}></Card>
                    <Card taskName={tasks[2].name} icon={tasks[2].icon}></Card>
                    <Card taskName={tasks[0].name} icon={tasks[0].icon}></Card>
                    <Card taskName={tasks[1].name} icon={tasks[1].icon}></Card>
                    <Card taskName={tasks[2].name} icon={tasks[2].icon}></Card>
                    <Card taskName={tasks[0].name} icon={tasks[0].icon}></Card>
                    <Card taskName={tasks[1].name} icon={tasks[1].icon}></Card>
                    <Card taskName={tasks[2].name} icon={tasks[2].icon}></Card>
                </div>
            </div>

        </React.Fragment>
    )

}

export default HeroCards;
