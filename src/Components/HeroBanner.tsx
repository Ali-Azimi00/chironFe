import React, { useState } from 'react';
import '../App.css'


function HeroBanner() {

    const [stats] = useState([
        { title: "Physical", percent: 45, color: 'red' },
        { title: "Mind", percent: 15, color: 'green' },
        { title: "Spirit", percent: 85, color: 'blue' },

    ]);


    const [progress,setProgress] = useState(45);


    // function loadPercentage() {
    //     setStats((prevState) => {
    //         let pd = { ...prevState }

    //         pd[0].percent = 25
    //         pd[1].percent = 25
    //         pd[2].percent = 25

    //         return pd;
    //     })
    // }

    // useEffect(()=>{
    //     loadPercentage();
    // },[stats])

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
        return (
            stats.map((stat) => (
                <div key={stat.color} className='w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3'>
                    <div className={`transition-all ease-out duration-1000 h-full bg-${stat.color}-600 h-3 rounded-full`} style={{ width: stat.percent.toString() + "%" }}></div>
                </div>
            ))
        )
    }

    return (
        <React.Fragment>

            <div className='-mb-48 '>
                <div className='fade-img '>
                    <div className='w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3'>
                        <div className={`transition-all ease-out duration-1000 h-full bg-purple-600 h-3 rounded-full`} style={{ width: progress.toString() + "%" }}></div>
                    </div>
                    {/* <div className='statBox pt-8'>
                        <div className='border p-4  w-1/2  xsm:w-full   rounded-2xl shadow-2xl flex'>

                            <div>
                                {loadStatTitle()}
                            </div>

                            <div className='w-full ml-2 mt-2 '>

                                <div className={`bg-purple-600 h-3 rounded-full`} style={{ width: "60%" }}></div>
                                    <div className={`bg-red-600 h-3 rounded-full`} style={{ width: "80%" }}></div>
                                    <div className={`bg-green-600 h-3 rounded-full`} style={{ width: "20%" }}></div>
                                    <div className={`bg-blue-600 h-3 rounded-full`} style={{ width: "70%" }}></div>

                                {loadStatBar()}
                            </div>

                        </div>

                    </div> */}
                </div>
            </div>
        </React.Fragment >
    )
}


export default HeroBanner;