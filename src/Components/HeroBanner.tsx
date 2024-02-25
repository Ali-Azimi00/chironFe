import React, { useState } from 'react';
import '../App.css'


function HeroBanner() {

    const [stats] = useState([
        { title: "Physical", percent: 45, color: 'red' },
        { title: "Mind", percent: 15, color: 'green' },
        { title: "Spirit", percent: 85, color: 'blue' },

    ]);


    function loadStatTitle() {
        return (
            stats.map((stat) => (
                <div key={stat.title} >
                    {stat.title}
                </div>
            ))
        )
    }


    function loadStatBar() {
        console.log("UseEffect Ran")
        return (
            stats.map((stat) => (

                <div key={stat.color} className='w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3'>
                    <div className={`bg-${stat.color}-600 h-3 rounded-full`} style={{ width: stat.percent.toString() + "%" }}></div>
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

                                {/* <div className={`bg-purple-600 h-3 rounded-full`} style={{ width: "60%" }}></div>
                                    <div className={`bg-red-600 h-3 rounded-full`} style={{ width: "80%" }}></div>
                                    <div className={`bg-green-600 h-3 rounded-full`} style={{ width: "20%" }}></div>
                                    <div className={`bg-blue-600 h-3 rounded-full`} style={{ width: "70%" }}></div> */}

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