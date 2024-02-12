import React, { useState } from 'react';
import '../App.css'


function HeroBanner() {

    const [stats] = useState([
        { title: "Strength", percent: 65, color: 'purple' },
        { title: "Endurance", percent: 45, color: 'red' },
        { title: "Intelligence", percent: 15, color: 'green' },
        { title: "Spirit", percent: 85, color:'blue' },

    ]);


    const loadStatTitle = () => {
        return (
            stats.map((stat) => (
                <div>
                    {stat.title}
                </div>
            ))
        )
    }


    const loadStatBar = () => {
        return (
            stats.map((stat) => (
                <div className='w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3'>
                    <div className= {`bg-${stat.color}-600 h-3 rounded-full` }style={{ width: stat.percent.toString() + "%" }}></div>
                </div>
            ))

        )
    }

    return (
        <React.Fragment>

            <div className='-mb-48 '>
                <div className='fade-img '>
                    <div className='statBox pt-8'>
                        <div className='border p-4  w-1/2  xsm:w-full   rounded-2xl shadow-2xl flex'>

                            <div>
                                {loadStatTitle()}
                            </div>

                            <div className='w-full ml-2 mt-2 '>
                                {loadStatBar()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}


export default HeroBanner;